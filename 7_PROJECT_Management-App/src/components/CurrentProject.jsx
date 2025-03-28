import { useLayoutEffect, useState } from "react";

export default function CurrentProject({
  currentProject,
  setProject,
  projects,
}) {
  // const [currentTasks, setCurrentTasks] = useState(currentProject.tasks);
  const [inputValue, setInputValue] = useState("");

  // function addTasks(e) {
  //   e.preventDefault();
  //   setCurrentTasks((prevTasks) => {
  //     const updatedTasks = [...prevTasks, inputValue];

  //     // Update project state with new tasks
  //     setCurrentProject((prevProject) => ({
  //       ...prevProject,
  //       tasks: updatedTasks,
  //     }));

  //     return updatedTasks;
  //   });
  // }

  // function addTasks(e) {
  //   e.preventDefault();

  //   setCurrentProject((prevProject) => ({
  //     ...prevProject,
  //     tasks: updatedTasks,
  //   }));
  // }

  // function addTasks(e) {
  //   e.preventDefault();

  //   setCurrentProject((prevProjects) => {
  //     let prevProjTasks = prevProjects.tasks; // Declare the variable
  //     let curTasks = [...prevProjTasks, inputValue];
  //     return { ...prevProjects, tasks: curTasks }; // Return the updated state object
  //   });
  // }

  // function addTasks(e) {
  //   e.preventDefault();
  //   console.log(777, projects);
  //   // TODO USE A MAP INSTEAD TO MUTATE
  //   setProject((prevProjects) => {
  //     const test = Array.from(prevProjects);
  //     const thisProj = test.find(
  //       (project) => project.title === currentProject.title
  //     );

  //     thisProj.tasks.push(inputValue);
  //     console.log(thisProj);

  //     return prevProjects;
  //   });
  //   setInputValue("");
  // }

  function addTasks(e) {
    e.preventDefault();
    console.log(777, projects);
    // TODO USE A MAP INSTEAD TO MUTATE
    setProject((prevProjects) => {
      const test = prevProjects.map((proj) => {
        if (proj.title === currentProject.title) {
          return { ...proj, tasks: [...proj.tasks, inputValue] };
        }
        return proj;
      });
      return test;
    });
    console.log(77, currentProject, projects);
    setInputValue("");
  }

  return (
    <>
      <div className="p-6 pt-25 max-w-xl">
        <div className="flex justify-between items-start">
          <h1 className="text-5xl font-bold">{currentProject.title}</h1>
          <button className="px-4 py-2 hover:text-light-brown">Cancel</button>
        </div>
        <p className="text-gray-400 text-m mt-2">{currentProject.date}</p>
        <p className="mt-4 text-lg">{currentProject.description}</p>
        <hr className="mt-6 border-gray-400"></hr>
        <h2 className="mt-4 text-3xl font-bold">Tasks</h2>
        <form>
          <div className="flex mt-4 gap-4">
            <input
              type="text"
              id="title"
              name="title"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className=" w-1/2 px-2 py-1 border rounded-md focus:ring  "
              placeholder="Enter title"
            />
            <button
              onClick={(e) => addTasks(e)}
              type="submit"
              className="hover:text-light-brown"
            >
              Add Task
            </button>
          </div>
        </form>

        {currentProject.tasks.length > 0 && (
          <ul className=" bg-gray-100 mt-6 py-6 px-4">
            {currentProject.tasks.map((curTask, i) => (
              <div
                key={i}
                className="my-1 py-1 px-2 p flex items-center justify-between rounded-sm hover:bg-gray-300 "
              >
                <li>{curTask}</li>
                <button>Clear</button>
              </div>
            ))}
          </ul>
        )}
        {currentProject.tasks.length <= 0 && (
          <p className="mt-4">This project doesnt have any tasks yet.</p>
        )}
      </div>
    </>
  );
}
