import { Outlet } from "react-router-dom";
import EventNavigation from "../components/EventNavigation";

function RootLayout() {
  return (
    <>
      {" "}
      <main>
        <EventNavigation />
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
