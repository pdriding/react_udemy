function App() {
  return (
    <>
      <div className="grid grid-cols-4 min-h-screen bg-gray-100">
        <div className="col-span-1 p-8 bg-black"></div>
        <div className="col-span-3 p-8 bg-white flex flex-col items-center justify-start pt-30">
          <img src="logo.png" alt="" className="w-16 h-auto" />
          <h1 className="my-8 text-center text-5xl font-bold">
            No Project Selected
          </h1>
          <h2>Select a project or create a new project to get started</h2>
        </div>
      </div>
    </>
  );
}

export default App;
