import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

function Layout() {
  return (
    <div
      className="
        min-h-screen flex flex-col
        bg-gray-50 dark:bg-gray-950
        text-gray-900 dark:text-white
        transition-colors
      "
    >
      <Header />

      {/* Main */}
      <main
        className="
          flex-1 flex items-center justify-center
          px-4
        "
      >
        <div className="w-full max-w-7xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;
