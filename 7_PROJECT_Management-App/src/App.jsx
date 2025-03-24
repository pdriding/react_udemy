import SideBar from "./components/SideBar";
import CoreScreen from "./components/CoreScreen";
import { useRef, useState } from "react";

function App() {
  const startScreenRef = useRef(null);
  const userFormRef = useRef(null);
  const [projects, setProject] = useState([]);

  function showP() {
    console.log(projects);
  }
  return (
    <>
      <div className="grid grid-cols-4 min-h-screen bg-white">
        <SideBar
          startScreenRef={startScreenRef}
          userFormRef={userFormRef}
          projects={projects}
          setProject={setProject}
        />
        <CoreScreen
          startScreenRef={startScreenRef}
          userFormRef={userFormRef}
          setProject={setProject}
          test={showP}
        />
      </div>
    </>
  );
}

export default App;
