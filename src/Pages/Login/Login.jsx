import { useAuthForm } from "../../hooks/useAuthForm";
import AuthForm from "../../components/auth/AuthForm";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const TEST_USER = {
    email: "test@mail.com",
    password: "123456",
  };

  const {
    values,
    errors,
    formError,
    loading,
    showForgot,
    handleChange,
    handleSubmit,
  } = useAuthForm({
    namespace: "login",

    initialValues: {
      email: "",
      password: "",
    },

    onSuccess: (data) => {
      // ✅ простая проверка
      if (
        data.email === TEST_USER.email &&
        data.password === TEST_USER.password
      ) {
        navigate("/profile"); // ← заходим
      } else {
        throw new Error("INVALID");
      }
    },
  });

  return (
    <AuthForm
      namespace="login"
      values={values}
      errors={errors}
      loading={loading}
      formError={formError}
      onChange={handleChange}
      onSubmit={handleSubmit}
      bottomTextKey="login.noAccount"
      bottomLinkKey="login.register"
      bottomAction={() => navigate("/register")}
      showForgot={showForgot}
    />
  );
}

export default Login;
