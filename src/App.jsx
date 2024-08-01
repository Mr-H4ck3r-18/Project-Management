import NewProject from "./components/NewProject";
import SideBar from "./components/SideBar";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import SelectedProject from "./components/SelectedProject";


function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectID: undefined,
    projects: [],
    tasks:[]
  })
  function handleAddTask(text){
    setProjectState(prev=>{
      const randomID=Math.random()
      const newTask ={
        text:text,
        projectID:prev.selectedProjectID,
        id:randomID
      }
      return {
        ...prev,
        tasks:[...prev.tasks,newTask]
      }
    })

  }
  function handleDeleteTask(id){
    setProjectState((prev => {
      return {
        ...prev,
        tasks:prev.tasks.filter((task)=>task.id!==id)
      }
    }))
  }
  const handleNewProject = () => {
    setProjectState((prev => {
      return {
        ...prev,
        selectedProjectID: null
      }
    }))
  }
  const handleCancel = () => {
    setProjectState((prev => {
      return {
        ...prev,
        selectedProjectID: undefined
      }
    }))
  }

  const handleData=(projectData)=>{
    setProjectState(prev=>{
      const randomID=Math.random()
      const newProject ={
        ...projectData,
        id:randomID
      }
      return {
        ...prev,
        selectedProjectID: undefined,
        projects:[...prev.projects,newProject]
      }
    })
  }

  const selectedProject=projectState.projects.find(project=>project.id===projectState.selectedProjectID)

  let content = <SelectedProject project={selectedProject} onDelete={handleDelete} onAdd={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectState.tasks}/>;
  if(projectState.selectedProjectID===null){
    content=<NewProject onAdd={handleData} click={handleCancel} />
  }else if (projectState.selectedProjectID===undefined){
    content=<Dashboard click={handleNewProject} />
  }

  function handleSelectProject(id){
    setProjectState((prev => {
      return {
        ...prev,
        selectedProjectID: id
      }
    }))
  }

  function handleDelete(){
    setProjectState((prev => {
      return {
        ...prev,
        selectedProjectID: undefined,
        projects:prev.projects.filter((project)=>project.id!==projectState.selectedProjectID )
      }
    }))
  }




  return (
    <main className="my-8 h-screen flex gap-8">
      <SideBar click={handleNewProject} projects={projectState.projects} onSelectProject={handleSelectProject} selectedProjectID={projectState.selectedProjectID}/>
      {content}
    </main>
  );
}

export default App;
