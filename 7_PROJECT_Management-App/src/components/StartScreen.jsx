export default function StartScreen({
  startScreenRef,
  setShowForm,
  setShowStart,
}) {
  function showForm() {
    setShowForm(true);
    setShowStart(false);
  }

  return (
    <div
      id="start-screen"
      className="p-8 flex flex-col items-center justify-start pt-30 col-span-3 "
    >
      <img src="logo.png" alt="" className="w-16 h-auto" />
      <h1 className="my-8 text-center text-5xl font-bold text-light-brown">
        No Project Selected
      </h1>
      <h2 className="text-light-brown">
        Select a project or create a new project to get started
      </h2>
      <button
        onClick={showForm}
        className=" bg-gray-800  mt-8 text-light-brown py-2 px-5 rounded-md hover:bg-gray-700"
      >
        Create a new project
      </button>
    </div>
  );
}
