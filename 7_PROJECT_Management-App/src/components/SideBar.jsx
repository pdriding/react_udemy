export default function SideBar({
  projects,
  setShowForm,
  setShowStart,
  setShowProject,
  setCurrentProject,
}) {
  function showForm() {
    setShowForm(true);
    setShowStart(false);
    setShowProject(false);
  }

  function showCurrentProject() {
    setShowForm(false);
    setShowStart(false);
    setShowProject(true);
  }

  function handleClick(curProj) {
    setCurrentProject(curProj);
    showCurrentProject();
  }

  return (
    <div className="col-span-1 p-8 bg-black mt-10 rounded-tr-xl h-full">
      <h1 className="my-8  font-bold text-light-brown">YOUR PROJECTS</h1>
      <button
        onClick={showForm}
        className="bg-gray-800 text-light-brown px-4 py-2 rounded-md hover:bg-gray-700"
      >
        + Add Project
      </button>
      <div className="flex flex-col mt-5">
        {projects.map((project, i) => (
          <button
            key={i}
            onClick={() => handleClick(project)}
            className="text-left w-full bg-black text-light-brown px-1 py-1  hover:bg-gray-800"
          >
            {project.title}
          </button>
        ))}
      </div>
    </div>
  );
}
