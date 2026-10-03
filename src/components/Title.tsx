export default function Title({ title, as = "h2" }: TitleProps) {
    const Tag = as;
    return (
        <Tag className="text-4xl font-semibold title w-fit z-10 after:bg-alpha">{title}</Tag>
    )
}
