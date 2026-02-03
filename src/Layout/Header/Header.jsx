import { NavLink } from "react-router-dom";
import LanguageSwitcher from "../../components/ui/Lang/LanguageSwitcher";
import ThemeSwitcher from "../../components/ui/Theme/ThemeSwitcher";
import Logo from "./Logo";
import { ChevronDown } from "lucide-react";
import ProfileMenu from "../../Pages/Profile/ProfileMenu";
function Header() {
  return (
    <header
      className="
        sticky top-0 z-50
        backdrop-blur-md
        bg-white/80 dark:bg-gray-900/80
        border-b border-gray-200 dark:border-gray-800
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          px-4 h-16
          flex items-center justify-between
        "
      >
        {/* Logo */}
        <Logo />

        {/* Actions */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
