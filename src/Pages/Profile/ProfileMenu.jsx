import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { User, Settings, LogOut, ChevronDown, ChevronUp } from "lucide-react";

import Button from "../../components/Button/Button";

function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const navigate = useNavigate();

  /* Close when click outside */
  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const go = (path) => {
    navigate(path);
    setOpen(false);
  };

  const handleLogout = () => {
    navigate("/login");
    setOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* Toggle */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="
          flex items-center gap-1
          p-2 rounded-lg
          hover:bg-gray-100 dark:hover:bg-gray-800
          transition
        "
      >
        {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute right-0 mt-2 w-52
            bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-800
            rounded-xl shadow-xl
            p-2
            space-y-1
          "
        >
          {/* Profile */}
          <Button
            page="profile"
            role="profilUser"
            variant="ghost"
            fullWidth
            onClick={() => go("/profile")}
            className="justify-start gap-2"
          >
            <User size={16} />
            Профиль
          </Button>

          {/* Settings */}
          <Button
            page="profile"
            role="settings"
            variant="ghost"
            fullWidth
            onClick={() => go("/settings")}
            className="justify-start gap-2"
          >
            <Settings size={16} />
            Настройки
          </Button>

          <div className="border-t border-gray-200 dark:border-gray-700 my-1" />

          {/* Logout */}
          <Button
            page="profile"
            role="logout"
            variant="ghost"
            fullWidth
            onClick={handleLogout}
            className="justify-start gap-2"
          >
            <LogOut size={16} />
            Выйти
          </Button>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;
