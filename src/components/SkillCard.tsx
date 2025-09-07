
export default function Skill({skill} : SkillProp) {
    return (
        <div
            className={`flex flex-col bg-gray-900/50 backdrop-blur-sm items-center justify-center gap-1 w-[150px] h-[100px] p-2 border-1 border-alpha/40 mt-2 rounded-2xl hover:scale-110 transition-transform duration-300`}
        >
            <div 
                className="w-[50px] h-[50px] flex items-center justify-center text-alpha"
                dangerouslySetInnerHTML={{ __html: skill.svg }}
            />
            {/* <p className="text-lg">{skill.name}</p> */}
        </div>
    )
}
