import { useTranslation } from "react-i18next";

import Button from "../Button/Button";
import Input from "../Input/Input";

import { AlertCircle, Loader2 } from "lucide-react";

import { authFields } from "./authFields.js";

function AuthForm({
  namespace, // login | register

  values,
  errors,

  loading,
  formError,

  onChange,
  onSubmit,

  bottomTextKey,
  bottomLinkKey,
  bottomAction,

  showForgot = false,
}) {
  const { t } = useTranslation();

  const fields = authFields[namespace] || [];

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4">
      <div
        className="
          w-full max-w-md
          bg-white/90 dark:bg-gray-900/90
          backdrop-blur-xl
          rounded-2xl
          shadow-2xl
          p-6 sm:p-8
        "
      >
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center">
          {t(`${namespace}.title`)}
        </h1>

        {/* Subtitle */}
        <p className="mt-2 text-center text-gray-500 text-sm">
          {t(`${namespace}.subtitle`)}
        </p>

        {/* Error */}
        {formError && (
          <div
            className="
              mt-4 flex items-center gap-2
              px-4 py-2 rounded-xl
              bg-red-100 text-red-700
              text-sm
            "
          >
            <AlertCircle size={18} />
            {formError}
          </div>
        )}

        {/* Form */}
        <form noValidate onSubmit={onSubmit} className="mt-6 space-y-4">
          {/* Inputs */}
          {fields.map((field) => (
            <Input
              key={field.name}
              label={t(`${namespace}.${field.name}`)}
              type={field.type}
              value={values[field.name] || ""}
              onChange={(e) => onChange(field.name, e.target.value)}
              placeholder={t(`formInput.${field.name}`)}
              icon={field.icon}
              error={errors[field.name]}
            />
          ))}

          {/* Links */}
          <div className="flex flex-col sm:flex-row justify-between gap-2 text-sm">
            {bottomTextKey && (
              <p className="text-gray-600">
                {t(bottomTextKey)}{" "}
                <button
                  type="button"
                  onClick={bottomAction}
                  className="text-blue-600 hover:underline font-medium"
                >
                  {t(bottomLinkKey)}
                </button>
              </p>
            )}

            {showForgot && (
              <button type="button" className="text-blue-600 hover:underline">
                {t(`${namespace}.forgot`)}
              </button>
            )}
          </div>

          {/* Button */}
          <Button
            type="submit"
            page={namespace}
            role="submit"
            fullWidth
            disabled={loading}
            className="mt-2"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 size={18} className="animate-spin" />
                {t(`${namespace}.loading`)}
              </span>
            ) : (
              t(`${namespace}.btn`)
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}

export default AuthForm;
