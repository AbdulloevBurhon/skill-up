import { Trophy, Star } from "lucide-react";

function Level() {
  return (
    <div className="flex items-center w-full max-w-md px-3 py-1 select-none">
      {/* 🌟 ЛЕВО */}

      <div className="relative flex items-center h-7 w-[140px]">
        {/* ⭐ Звезда */}
        <div className="relative z-10 flex items-center justify-center -mt-3">
          <Star
            size={46}
            fill="#2563eb"
            className="relative z-20 text-blue-600"
          />

          <span className="absolute z-30 text-[10px] font-black text-white">
            12
          </span>
        </div>

        {/* Обёртка капсулы */}
        <div className="relative -ml-5 w-32">
          {/* Имя сверху */}
          <span
            className="
        absolute
        -top-4
        left-1/2
        -translate-x-1/2
        text-[11px]
        font-semibold
        text-black
        dark:text-white
        whitespace-nowrap
      "
          >
            John
          </span>

          {/* Капсула */}
          <div
            className="
        relative
        flex items-center
        w-full h-[12px]
        bg-white
        dark:bg-black
        rounded-full
        border border-black
        dark:border-white
        overflow-hidden
      "
          >
            {/* Прогресс */}
            <div className="h-full w-[60%] bg-gradient-to-r from-sky-400 to-blue-600" />
          </div>
        </div>
      </div>

      {/* 🏆 ПРАВО */}
      <div className="flex items-center gap-5 w-[140px] justify-end">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-[26px] h-[26px] bg-gradient-to-b from-yellow-300 to-orange-500 rounded-md" />

          <Trophy size={14} className="relative z-20 text-white" fill="white" />
        </div>

        <span className="text-[12px] text-yellow-400 font-black dark:text-white">
          2706
        </span>
      </div>
    </div>
  );
}

export default Level;
