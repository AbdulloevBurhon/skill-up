import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="
        flex items-center gap-2
        group select-none
      "
    >
      {/* Image */}
      <div
        className="
          w-8 h-8
          sm:w-9 sm:h-9
          md:w-11 md:h-11
          p-1
          rounded-xl
          overflow-hidden
          shadow-md
          group-hover:shadow-lg
          transition
        "
      >
        <img
          src="/logo.png"
          alt="SkillUp Logo"
          className="
            w-full h-full object-contain
            scale-95
            transition-transform duration-300
            group-hover:scale-100
          "
        />
      </div>

      {/* Text */}
      <span
        className="
    font-bold tracking-wide
    text-base
    sm:text-lg
    md:text-xl
    transition
  "
      >
        <span
          className="
      text-blue-600 dark:text-blue-400
      group-hover:text-blue-700
      dark:group-hover:text-blue-300
      transition
    "
        >
          Skill
        </span>

        <span
          className="
      text-orange-500 dark:text-orange-400
      group-hover:text-orange-600
      dark:group-hover:text-orange-300
      transition
    "
        >
          Up
        </span>
      </span>
    </Link>
  );
}

export default Logo;
