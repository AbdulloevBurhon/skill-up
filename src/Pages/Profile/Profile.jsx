import { Globe, Mail, Star, Search } from "lucide-react";
import Level from "./Level";
function Profile() {
  return (
    <section className="w-full min-h-screen px-4 pt-4 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-md mx-auto space-y-5">
        {/* ⭐ Контейнер Уровня и Опыта в стиле Clash of Clans */}
        <Level />
        {/* 🔍 Поиск */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Поиск чатов..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          />
        </div>
        {/* 💬 Карточки чатов */}
        <div className="flex gap-4">
          <div className="flex-1 flex flex-col items-center gap-2 p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all cursor-pointer shadow-sm">
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
              Общий чат
            </h2>
            <div className="p-3 rounded-full bg-blue-500/10 dark:bg-blue-400/20">
              <Mail size={26} className="text-blue-600 dark:text-blue-400" />
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center gap-2 p-4 rounded-2xl bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all cursor-pointer shadow-sm">
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
              Личные чаты
            </h2>
            <div className="flex gap-1 p-3 rounded-full bg-purple-500/10 dark:bg-purple-400/20">
              <Globe
                size={22}
                className="text-purple-600 dark:text-purple-400"
              />
              <Mail
                size={22}
                className="text-purple-600 dark:text-purple-400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
