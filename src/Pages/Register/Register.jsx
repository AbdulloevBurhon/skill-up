import AuthForm from "../../components/auth/AuthForm";
import { useAuthForm } from "../../hooks/useAuthForm";

function Register() {
  const {
    values,
    errors,
    formError,
    loading,

    handleChange,
    handleSubmit,

    navigate,
  } = useAuthForm({
    namespace: "register",

    initialValues: {
      name: "",
      age: "",
      email: "",
      password: "",
      confirm: "",
    },

    onSuccess: () => {
      navigate("/login");
    },
  });

  return (
    <AuthForm
      namespace="register"
      values={values}
      errors={errors}
      loading={loading}
      formError={formError}
      onChange={handleChange}
      onSubmit={handleSubmit}
      bottomTextKey="register.haveAccount"
      bottomLinkKey="register.login"
      bottomAction={() => navigate("/login")}
      showForgot={false}
    />
  );
}

export default Register;
