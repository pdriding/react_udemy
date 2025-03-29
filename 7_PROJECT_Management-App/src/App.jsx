import SideBar from "./components/SideBar";
import StartScreen from "./components/StartScreen";
import UserForm from "./components/UserForm";
import CurrentProject from "./components/CurrentProject";
import { useRef, useState } from "react";

function App() {
  const userFormRef = useRef(null);
  const [projects, setProject] = useState([]);
  // ----
  const [showStart, setShowStart] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showProject, setShowProject] = useState(false);
  //----
  const [currentProject, setCurrentProject] = useState();

  return (
    <>
      <div className="grid grid-cols-4 min-h-screen bg-white">
        <div className="col-span-1">
          <SideBar
            projects={projects}
            setShowForm={setShowForm}
            setShowStart={setShowStart}
            setShowProject={setShowProject}
            setCurrentProject={setCurrentProject}
          />
        </div>
        <div className="col-span-3">
          {showStart && (
            <StartScreen
              setShowForm={setShowForm}
              setShowStart={setShowStart}
            />
          )}
          {showForm && (
            <UserForm
              userFormRef={userFormRef}
              setProject={setProject}
              setShowForm={setShowForm}
              setShowStart={setShowStart}
            />
          )}

          {showProject && (
            <CurrentProject
              currentProject={currentProject}
              setProject={setProject}
              setCurrentProject={setCurrentProject}
              projects={projects}
              setShowForm={setShowForm}
              setShowStart={setShowStart}
              setShowProject={setShowProject}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
