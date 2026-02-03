function Label({
  children,
  htmlFor = "",
  required = false,
  error = false,
  className = "",
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={`
        block mb-1
        text-sm font-medium
        transition-colors

        ${error ? "text-red-500" : "text-gray-700 dark:text-gray-300"}

        ${className}
      `}
    >
      {children}

      {required && <span className="ml-1 text-red-500">*</span>}
    </label>
  );
}

export default Label;
