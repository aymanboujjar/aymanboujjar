import { motion } from "framer-motion";

interface HamburgerIconProps {
    isOpen: boolean;
    className?: string;
    size?: number;
}

export default function HamburgerIcon({ isOpen, className = "", size = 24 }: HamburgerIconProps) {
    return (
        <div className={`relative ${className}`} style={{ width: size, height: size }}>
            <motion.span
                className="absolute block h-0.5 w-6 bg-current transform transition-all duration-300"
                animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 8 : 0,
                }}
                style={{ top: '6px' }}
            />
            <motion.span
                className="absolute block h-0.5 w-6 bg-current transform transition-all duration-300"
                animate={{
                    opacity: isOpen ? 0 : 1,
                }}
                style={{ top: '12px' }}
            />
            <motion.span
                className="absolute block h-0.5 w-6 bg-current transform transition-all duration-300"
                animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -8 : 0,
                }}
                style={{ top: '18px' }}
            />
        </div>
    );
}
