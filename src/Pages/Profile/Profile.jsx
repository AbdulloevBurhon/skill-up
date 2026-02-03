import { Globe, Mail } from "lucide-react";

function Profile() {
  return (
    <section className="min-h-screen px-2 pt-8 bg-gray-50 dark:bg-gray-950">
      {/* Container */}

      <div className="flex justify-between gap-4">
        {/* Общий чат */}
        <div
          className="
              flex-1
              flex flex-col items-center gap-1

              p-3
              rounded-xl

              bg-blue-50 dark:bg-blue-900/20
              hover:bg-blue-100 dark:hover:bg-blue-900/30

              transition
              cursor-pointer
            "
        >
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
            Личный чат
          </h2>

          <Mail size={24} className="text-blue-600 dark:text-blue-400" />
        </div>

        {/* Личные чаты */}
        <div
          className="
              flex-1
              flex flex-col items-center gap-1

              p-3
              rounded-xl

              bg-purple-50 dark:bg-purple-900/20
              hover:bg-purple-100 dark:hover:bg-purple-900/30

              transition
              cursor-pointer
            "
        >
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
            Глобальный Чат
          </h2>

          <div className="flex items-center gap-1">
            <Globe size={22} className="text-purple-600 dark:text-purple-400" />
            <Mail size={22} className="text-purple-600 dark:text-purple-400" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
