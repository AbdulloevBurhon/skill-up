import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useTranslation } from "react-i18next";

function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section
      className="
        flex flex-1 items-center justify-center
        px-4 py-8
      "
    >
      <div
        className="
          max-w-3xl w-full
          text-center
          space-y-6
          animate-fade-in
        "
      >
        {/* Badge */}
        <span
          className="
            inline-flex items-center gap-2
            px-4 py-1.5
            rounded-full text-sm font-medium
            bg-blue-100 text-blue-700
            dark:bg-blue-900/40 dark:text-blue-300
          "
        >
          {t("home.badge")}
        </span>

        {/* Title */}
        <h1>
          {t("home.banner")}{" "}
          <span className="text-blue-600 dark:text-blue-400">
            {t("home.banner-1")}
          </span>{" "}
          {t("home.banner-3")}{" "}
          <span className="text-orange-500 dark:text-orange-400">
            {t("home.brand")}
          </span>
        </h1>

        {/* Description */}
        <p
          className="
            text-gray-600 dark:text-gray-400
            text-base sm:text-lg
            max-w-xl mx-auto
            leading-relaxed
          "
        >
          {t("home.desc")}
        </p>

        {/* Buttons */}
        <div
          className="
            flex flex-col sm:flex-row
            items-center justify-center
            gap-4
            pt-4
          "
        >
          {/* Login */}
          <Button
            page="home"
            role="voyti"
            fullWidth
            onClick={() => navigate("/login")}
          >
            {t("home.btn-1")}
          </Button>
          <Button
            page="home"
            role="register"
            onClick={() => navigate("/register")}
            fullWidth
          >
            {t("home.btn-2")}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Home;
