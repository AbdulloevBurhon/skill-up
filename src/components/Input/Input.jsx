import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";

function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  error = "",
  className = "",
  icon: LeftIcon = null,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [shake, setShake] = useState(false);

  const isPassword = type === "password";

  /* Shake on error */
  useEffect(() => {
    if (error) {
      setShake(true);
      const t = setTimeout(() => setShake(false), 400);
      return () => clearTimeout(t);
    }
  }, [error]);

  return (
    <div className="w-full space-y-1">
      {/* Label */}
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}

      {/* Wrapper */}
      <div
        className={`
          relative flex items-center
          transition-all duration-200
          ${shake ? "animate-shake" : ""}
          ${
            error
              ? "shadow-lg shadow-red-500/30 dark:shadow-red-500/20"
              : "shadow-sm"
          }
        `}
      >
        {/* Left Icon */}
        {LeftIcon && (
          <LeftIcon
            size={18}
            className="
              absolute left-3
              text-gray-400 dark:text-gray-500
            "
          />
        )}

        {/* Input */}
        <input
          type={isPassword && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete="off"
          className={`
  w-full px-4 py-2.5
  rounded-xl border
  bg-white dark:bg-gray-950
  border-gray-300 dark:border-gray-700
  text-gray-900 dark:text-white

  placeholder:text-gray-400
  dark:placeholder:text-gray-500
  placeholder:italic
  focus:placeholder:text-transparent

  focus:ring-2 focus:ring-blue-500
  focus:border-blue-500
  focus:outline-none
  transition

  ${LeftIcon ? "pl-10" : ""}
  ${isPassword ? "pr-10" : ""}

  ${error ? "border-red-500 focus:ring-red-500" : ""}

  ${className}
`}
        />

        {/* Password toggle */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="
              absolute right-3
              text-gray-400 dark:text-gray-500
              hover:text-gray-600 dark:hover:text-gray-300
              transition
            "
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {/* Error */}
      {error && <p className="text-sm text-red-500 animate-fade-in">{error}</p>}
    </div>
  );
}

export default Input;
