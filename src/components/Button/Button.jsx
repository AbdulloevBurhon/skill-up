function Button({
  children,
  onClick,
  type = "button",

  // global
  variant = "primary",
  size = "md",

  // page styles
  page = null,
  role = null,

  disabled = false,
  className = "",
  fullWidth = false,
}) {
  /* Base */
  const base = `
    inline-flex items-center justify-center
    rounded-xl font-medium
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-60 disabled:cursor-not-allowed
    active:scale-[0.98]
  `;

  /* Variants */
  const variants = {
    primary: `
      bg-blue-600 text-white
      hover:bg-blue-700
      focus:ring-blue-500
      shadow-lg shadow-blue-600/30
    `,

    outline: `
      border border-gray-300 dark:border-gray-700
      text-gray-800 dark:text-white
      hover:bg-gray-100 dark:hover:bg-gray-800
      focus:ring-gray-400
    `,

    ghost: `
      text-gray-700 dark:text-gray-300
      hover:bg-gray-100 dark:hover:bg-gray-800
    `,

    danger: `
      bg-red-600 text-white
      hover:bg-red-700
      focus:ring-red-500
      shadow-lg shadow-red-600/30
    `,
  };

  /* Sizes */
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-7 py-3 text-lg",
  };

  /* Page styles */
  const pageStyles = {
    home: {
      voyti: `
        bg-blue-600 text-white
        hover:bg-blue-700
        shadow-lg shadow-blue-600/30
      `,

      register: `
        bg-yellow-400 text-black
        hover:bg-yellow-500
        shadow-lg shadow-yellow-400/30
      `,
    },
    profile: {
      profilUser: `
    bg-blue-100 text-blue-700
    hover:bg-blue-200
    dark:bg-blue-900/30 dark:text-blue-300
  `,

      settings: `
    bg-gray-100 text-gray-700
    hover:bg-gray-200
    dark:bg-gray-800 dark:text-gray-300
  `,

      logout: `
    bg-red-100 text-red-600
    hover:bg-red-200
    dark:bg-red-900/30 dark:text-red-400
  `,
    },
    login: {
      submit: `
        bg-green-600 text-white
        hover:bg-green-700
        focus:ring-green-500
        shadow-lg shadow-green-600/30
      `,
    },
  };

  /* Page style */
  const pageClass =
    page && role && pageStyles[page]?.[role] ? pageStyles[page][role] : "";

  /* Width */
  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${base}
        ${pageClass || variants[variant]}
        ${sizes[size]}
        ${widthClass}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
