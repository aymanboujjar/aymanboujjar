type TitleProps = {
    title: string | React.ReactNode
    as?: "h1" | "h2"
}

type IconProps = {
    className?: string;
    size?: number;
}

type Theme = {
    backgroundColor: string,
    color: string,
}

type NavbarProps = {
    changeTheme: () => void,
}
type ProjectCardProps = {
    index: number,
    project: Project,
    type: string,
    layout?: "row" | "stack",
}

type Skill = {
    name: string,
    svg: string,
    bg: string,
}

type Tech = {
    name: string,
    color: string,
}

type LocalizedString = {
    en: string;
    fr: string;
};


type Project = {
    id: number,
    name: string,
    website: string,
    appStore?: string,
    playStore?: string,
    desc: LocalizedString;
    detailedDesc: LocalizedString;
    /** Ayman's role on this project — keep factual; prefer contributor language for team work */
    role: LocalizedString;
    /** Concrete contribution bullets supported by portfolio content */
    contributions?: LocalizedString[];
    /** Explicit team / org context when not sole work */
    teamContext?: LocalizedString;
    /**
     * Controls project JSON-LD relationship:
     * - sole: Person as author
     * - contributor: Person as contributor (no sole-author implication)
     */
    authorship?: "sole" | "contributor";
    techs: Tech[],
    client?: string,
    clientWebsite?: string,
    preview: string,
    timeline: LocalizedString;
    challenges: LocalizedString[];
    solutions: LocalizedString[];
    keyFeatures: LocalizedString[];
    lessonsLearned: LocalizedString[];
    futureImprovements: LocalizedString[];
    additionalImages?: string[],
}

type Education = {
    degree: LocalizedString;
    institution: string;
    year?: string;
    description: LocalizedString;
}

type EducationCardProps = {
    education: Education
}

type Experience = {
    role: LocalizedString;
    company: string;
    website: string;
    period: string;
    achievements: LocalizedString[];
    /** Internal links to portfolio project case pages when the relationship is clear */
    relatedProjects?: { id: number; name: string }[];
}

type ExperienceCardProps = {
    experience: Experience
}


type Interest = {
    name: LocalizedString;
    icon: string;
    description: LocalizedString
}

type InterestCardProp = {
    interest: Interest
}

type SkillProp = {
    skill: Skill
}
