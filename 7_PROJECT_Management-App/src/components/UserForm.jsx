export default function UserForm({
  userFormRef,
  setProject,
  setShowForm,
  setShowStart,
}) {
  function hideForm() {
    setShowForm(false);
    setShowStart(true);
  }

  function handleSubmission(e) {
    e.preventDefault();

    const formData = new FormData(userFormRef.current);

    const formTitle = formData.get("title");
    const formDescription = formData.get("description");
    const formDate = formData.get("due-date");

    setProject((project) => [
      ...project,
      {
        title: formTitle,
        description: formDescription,
        date: formDate,
        tasks: [],
      },
    ]);

    hideForm();
  }
  return (
    <div>
      {/* <StartScreen startScreenRef={startScreenRef} toggleForm={toggleForm} /> */}
      <div id="user-form" className=" h-screen flex items-center">
        <form ref={userFormRef} className=" w-full max-w-3xl p-16 ">
          <div className="flex justify-end space-x-4 mt-4">
            <button
              onClick={hideForm}
              type="button"
              className="font-medium bg-white text-dark-brown py-2 px-5  text-light-brown hover:text-dark-brown transition"
            >
              Cancel
            </button>
            <button
              onClick={(e) => handleSubmission(e)}
              type="submit"
              className=" bg-light-brown text-white py-2 px-5 rounded-md hover:bg-dark-brown"
            >
              Save
            </button>
          </div>

          <label className=" font-medium block mb-2">TITLE</label>
          <input
            type="text"
            id="title"
            name="title"
            className=" w-full px-3 py-2 border rounded-md focus:ring  mb-4"
            placeholder="Enter title"
          />

          <label className="font-medium block mb-2 ">DESCRIPTION</label>
          <textarea
            id="description"
            name="description"
            className="w-full px-3 py-2 border rounded-md focus:ring  mb-4"
            placeholder="Enter description"
          ></textarea>

          <label className="font-medium block mb-2 ">DUE DATE</label>
          <input
            type="date"
            id="due-date"
            name="due-date"
            className="w-full px-3 py-2 border rounded-md focus:ring  mb-4"
          />
        </form>
      </div>
    </div>
  );
}
