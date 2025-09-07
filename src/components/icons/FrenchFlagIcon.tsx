export default function FrenchFlagIcon({ className = "", size = 20 }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 18"
            className={`transition-all duration-300 ${className}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="8" height="18" fill="#002395"/>
            <rect x="8" width="8" height="18" fill="#FFFFFF"/>
            <rect x="16" width="8" height="18" fill="#ED2939"/>
        </svg>
    );
}
