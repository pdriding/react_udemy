export default function SideBar({
  startScreenRef,
  userFormRef,
  projects,
  setProject,
}) {
  function toggleForm() {
    startScreenRef.current.classList.toggle("hidden");
    userFormRef.current.classList.toggle("hidden");
  }

  console.log(55, projects);

  return (
    <div className="col-span-1 p-8 bg-black mt-10 rounded-tr-xl">
      <h1 className="my-8  font-bold text-light-brown">YOUR PROJECTS</h1>
      <button
        onClick={toggleForm}
        className="bg-gray-800 text-light-brown px-4 py-2 rounded-md hover:bg-gray-700"
      >
        + Add Project
      </button>
      {projects.map((project, i) => (
        <button
          key={i}
          className="bg-gray-800 text-light-brown px-4 py-2 rounded-md"
        >
          {project.title}
        </button>
      ))}
    </div>
  );
}
