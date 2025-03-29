import { useLayoutEffect, useState } from "react";

export default function CurrentProject({
  currentProject,
  setCurrentProject,
  setProject,
  projects,
  setShowForm,
  setShowStart,
  setShowProject,
}) {
  const [inputValue, setInputValue] = useState("");

  function addTasks(e) {
    e.preventDefault();
    setProject((prevProjects) => {
      const updatedProjects = prevProjects.map((proj) => {
        if (proj.title === currentProject.title) {
          return { ...proj, tasks: [...proj.tasks, inputValue] };
        }
        return proj;
      });
      const updatedCurrentProject = updatedProjects.find(
        (proj) => proj.title === currentProject.title
      );

      setCurrentProject(updatedCurrentProject);
      return updatedProjects;
    });

    setInputValue("");
  }

  console.log(99, currentProject, 88, projects);

  function deleteTask(i, curTask) {
    setProject((prevProjects) => {
      const updatedProjects = prevProjects.map((proj) => {
        if (proj.title === currentProject.title) {
          const updatedTasks = currentProject.tasks.filter(
            (task) => task !== curTask
          );
          return { ...proj, tasks: [...updatedTasks] };
        }
        return proj;
      });
      console.log(55, updatedProjects);
      const updatedCurrentProject = updatedProjects.find(
        (proj) => proj.title === currentProject.title
      );

      setCurrentProject(updatedCurrentProject);
      return updatedProjects;
    });
    setInputValue("");
  }

  function showStartScreen() {
    setShowForm(false);
    setShowStart(true);
    setShowProject(false);
  }

  function deleteProject() {
    setProject((projects) =>
      projects.filter((project) => project.title !== currentProject.title)
    );
    showStartScreen();
  }

  return (
    <>
      <div className="p-6 pt-25 max-w-xl">
        <div className="flex justify-between items-start">
          <h1 className="text-5xl font-bold">{currentProject.title}</h1>
          <button
            onClick={deleteProject}
            className="px-4 py-2 hover:text-light-brown"
          >
            Delete
          </button>
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
                id={i}
                className="my-1 py-1 px-2 p flex items-center justify-between rounded-sm hover:bg-gray-300 "
              >
                <li>{curTask}</li>
                <button onClick={() => deleteTask(i, curTask)}>Clear</button>
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
