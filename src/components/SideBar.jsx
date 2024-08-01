import Button from "./Button"
export default function SideBar({ click, projects, onSelectProject, selectedProjectID }) {
    return (
        <aside className=" bg-stone-900 w-1/3 rounded-r-xl px-8 py-16 md:w-72 text-stone-50">
            <h2 className="text-stone-200 mb-8 font-bold uppercase md:text-xl">Your Project</h2>
            <div>
                <Button
                    onClick={click}
                > + Add Project</Button>
            </div>
            <ul className="mt-8">
                {projects.map(project => {
                    let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 "
                    if (selectedProjectID === project.id) {
                        cssClasses += "bg-stone-800 text-stone-200"
                    } else {
                        cssClasses += "text-stone-400"
                    }
                    return (
                        <li key={project.id}>
                            <button onClick={() => { onSelectProject(project.id) }} className={cssClasses}>{project.title}</button>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}