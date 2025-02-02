import { Laptop2, LayoutList, Maximize2, Mic2, Volume1 } from "lucide-react";

export function footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-2 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src="/redhot.jpg"
          width={60}
          height={60}
          alt="capa de album redHot"
        />
        <div className="flex flex-col ">
          <strong className="font-normal">rope</strong>
          <span className="text-xs text-zinc-400">redHot</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className=" text-zinc-200" />
          <SkipBack size={20} className=" text-zinc-200" />
          <button className="w-10 h-10 flex items-center justify-center pl-0,5 rounded-full bg-white text-black ">
            <PlayIcon />
          </button>

          <SkipForward size={20} className=" text-zinc-200" />
          <Repeat size={20} className=" text-zinc-200" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
          </div>
          <span className="text-xs text-zinc-400">3:15</span>
        </div>
      </div>
      <div className="flex items-cente gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2  ">
          <Volume1 size={20} />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  );
}
