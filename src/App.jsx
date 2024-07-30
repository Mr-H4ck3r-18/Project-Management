import NewProject from "./components/NewProject";
import SideBar from "./components/SideBar";
import { useState } from "react";
import Dashboard from "./components/Dashboard";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectID: undefined,
    projects: []
  })
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

  let content;
  if(projectState.selectedProjectID===null){
    content=<NewProject onAdd={handleData} click={handleCancel} />
  }else if (projectState.selectedProjectID===undefined){
    content=<Dashboard click={handleNewProject} />
  }

  

  console.log(projectState)
  return (
    <main className="my-8 h-screen flex gap-8">
      <SideBar click={handleNewProject} projects={projectState.projects} />
      {content}
    </main>
  );
}

export default App;
