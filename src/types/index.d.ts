type TitleProps = {
    title: string | React.ReactNode
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
    github?: string,
    website: string,
    desc: LocalizedString;
    detailedDesc: LocalizedString;
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
