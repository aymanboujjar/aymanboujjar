export default function Title({ title }: TitleProps) {
    return (
        <p className="text-4xl font-semibold title w-fit z-10 after:bg-alpha">{title}</p>
    )
}
