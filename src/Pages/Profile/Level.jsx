import { Trophy, Star } from "lucide-react";

function Level() {
  return (
    <div className="flex items-center w-full max-w-md px-3 py-1 select-none">
      {/* 🌟 ЛЕВО */}
      <div className="relative flex items-center h-7 w-[140px]">
        {/* Капсула */}
        <div
          className="
          absolute left-3
          flex items-center
          w-32 h-[12px]
          bg-white
          rounded-full
          border border-black
          dark:border-white
          overflow-hidden
        "
        >
          <div className="h-full w-[60%] bg-gradient-to-r from-sky-400 to-blue-600" />
        </div>

        {/* ⭐ Звезда */}
        <div className="relative z-10 flex items-center justify-center -ml-5.5 -mt-3">
          <Star
            size={46}
            fill="#2563eb"
            className="relative z-20 text-blue-600"
          />

          <span className="absolute z-30 text-[10px] font-black text-white">
            12
          </span>
        </div>
      </div>

      {/* 👤 ЦЕНТР */}
      <div className="flex-1 flex justify-center">
        <span
          className="
          text-[14px]
          font-bold
          bg-gradient-to-r from-sky-500 to-blue-600
          bg-clip-text text-transparent
          drop-shadow-sm
          dark:from-sky-300 dark:to-blue-400
          truncate
          max-w-[120px]
        "
        >
          John
        </span>
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
