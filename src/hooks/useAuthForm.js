import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

/**
 * Универсальный хук для login / register
 */
export function useAuthForm({ namespace, initialValues, onSuccess }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForgot, setShowForgot] = useState(false);

  /* Change */
  const handleChange = (name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setFormError("");
    setShowForgot(false);
  };

  /* Validate */
  const validate = () => {
    let err = {};

    // Пустые поля
    Object.keys(values).forEach((key) => {
      if (!values[key]) {
        err[key] = t(`${namespace}.errors.${key}`);
      }
    });

    // Email format
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      err.email = t(`${namespace}.errors.emailFormat`);
    }

    // Confirm password
    if (namespace === "register") {
      if (values.password !== values.confirm) {
        err.confirm = t("register.errors.notMatch");
      }
    }

    return err;
  };

  /* Submit */
  const handleSubmit = (e) => {
    e.preventDefault();

    const err = validate();

    if (Object.keys(err).length) {
      setErrors(err);
      setFormError(t(`${namespace}.errors.all`));
      return;
    }

    setLoading(true);

    // Fake API
    setTimeout(() => {
      try {
        onSuccess(values);
      } catch {
        if (namespace === "login") {
          const msg = t("login.errors.invalid");

          setErrors({
            email: msg,
            password: msg,
          });

          setFormError(msg);
          setShowForgot(true);
        }
      }

      setLoading(false);
    }, 1200);
  };

  return {
    values,
    errors,
    formError,
    loading,
    showForgot,

    handleChange,
    handleSubmit,

    navigate,
    t,
  };
}
