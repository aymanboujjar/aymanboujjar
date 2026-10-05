export type ContactPayload = {
    name: string;
    email: string;
    subject: string;
    message: string;
    company?: string;
};

type SubmitResult =
    | { ok: true }
    | { ok: false; error: string };

const ERROR_MESSAGES = {
    en: {
        network: "Could not reach the server. Try again or email me directly.",
        invalid: "Please check the form fields and try again.",
        config: "The contact form is temporarily unavailable.",
        send: "Something went wrong while sending. Please try again later.",
        generic: "Something went wrong. Please try again.",
    },
    fr: {
        network: "Impossible de joindre le serveur. Réessayez ou écrivez-moi directement.",
        invalid: "Vérifiez les champs du formulaire et réessayez.",
        config: "Le formulaire est temporairement indisponible.",
        send: "Erreur lors de l'envoi. Réessayez plus tard.",
        generic: "Une erreur est survenue. Réessayez.",
    },
} as const;

function pickLocale(): keyof typeof ERROR_MESSAGES {
    if (typeof document === "undefined") return "en";
    return document.documentElement.lang.startsWith("fr") ? "fr" : "en";
}

function msg(key: keyof (typeof ERROR_MESSAGES)["en"]): string {
    return ERROR_MESSAGES[pickLocale()][key];
}

export async function submitContactForm(
    payload: ContactPayload
): Promise<SubmitResult> {
    try {
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (res.ok) {
            return { ok: true };
        }

        if (res.status === 400) {
            return { ok: false, error: msg("invalid") };
        }
        if (res.status === 503) {
            return { ok: false, error: msg("config") };
        }
        if (res.status === 502) {
            return { ok: false, error: msg("send") };
        }

        return { ok: false, error: msg("generic") };
    } catch {
        return { ok: false, error: msg("network") };
    }
}
