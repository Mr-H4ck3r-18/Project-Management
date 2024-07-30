export default function SelectedProject({ project }) {
    const formatedDate=new Date(project.date).toLocaleDateString('en-US',{
        year:'numeric',
        month:'short',
        day:'numeric'
    })
    return (
        <div>
            <header>
                <div>
                    <h1>{project.title}</h1>
                    <button>Delete</button>
                </div>
                <p>{formatedDate}</p>
                <p>{project.description}</p>
            </header>
        </div>
    )
}