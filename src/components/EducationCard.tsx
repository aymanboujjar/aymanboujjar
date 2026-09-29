import { TransText } from "./TransText";
import { motion } from "framer-motion";

export default function EducationCard({
    education,
    index = 0,
}: EducationCardProps & { index?: number }) {
    const pad = String(index + 1).padStart(2, "0");

    return (
        <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="group relative overflow-hidden border border-white/10 bg-[#070b14]/80 p-6 backdrop-blur-md transition-[border-color,box-shadow] duration-500 hover:border-alpha/45 hover:shadow-[0_0_32px_rgba(0,119,190,0.12)]"
        >
            <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-3">
                    <span className="mt-1 font-mono text-[10px] text-alpha">{pad}</span>
                    <h3 className="text-xl font-bold text-white transition-colors group-hover:text-alpha sm:text-2xl">
                        <TransText {...education.degree} />
                    </h3>
                </div>
                <span className="font-mono text-sm text-white/45 md:shrink-0">
                    {education.year}
                </span>
            </div>
            <p className="mb-2 pl-7 text-lg text-white/80">{education.institution}</p>
            <p className="pl-7 text-sm leading-relaxed text-white/55 sm:text-base">
                <TransText {...education.description} />
            </p>
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-alpha to-transparent transition-all duration-500 group-hover:w-full" />
        </motion.article>
    );
}
