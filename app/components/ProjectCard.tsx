

export default function ProjectCard(props:any) {
    return (
        <div className="bg-slate-500 p-5 rounded-2xl sm:w-[360px] w-full mr-5">
            <div className="relative w-full h-[230px]">
                <p>{props.title}</p>
            </div>
        </div>
    )
}