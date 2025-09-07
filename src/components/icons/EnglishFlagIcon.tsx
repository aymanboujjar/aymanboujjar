export default function EnglishFlagIcon({ className = "", size = 20 }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 18"
            className={`transition-all duration-300 ${className}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="24" height="18" fill="#012169"/>
            <path d="M0 0l24 18M24 0L0 18" stroke="#fff" strokeWidth="2"/>
            <path d="M0 0l24 18M24 0L0 18" stroke="#C8102E" strokeWidth="1"/>
            <path d="M12 0v18M0 9h24" stroke="#fff" strokeWidth="3"/>
            <path d="M12 0v18M0 9h24" stroke="#C8102E" strokeWidth="2"/>
        </svg>
    );
}
