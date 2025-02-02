/* eslint-disable @next/next/no-img-element */
import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  PlayIcon,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume1,
  Maximize2,
  DicesIcon,
} from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-cente gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center gap-3 text-xs font-semibold text-zinc-200"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-xs font-semibold text-zinc-200"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-xs font-semibold text-zinc-200"
            >
              <Library /> Your Library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              hothits brasil
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Top Brasil
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Pagodin
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              tambozao RJ
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              furacao 2000
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <img
                src="/redhot.jpg"
                width={104}
                height={104}
                alt="capa de album redHot"
              />
              <strong>Wasting Laght </strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0,5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <img
                src="/redhot.jpg"
                width={104}
                height={104}
                alt="capa de album redHot"
              />
              <strong>Wasting Laght </strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0,5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <img
                src="/redhot.jpg"
                width={104}
                height={104}
                alt="capa de album redHot"
              />
              <strong>Wasting Laght </strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0,5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <img
                src="/redhot.jpg"
                width={104}
                height={104}
                alt="capa de album redHot"
              />
              <strong>Wasting Laght </strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0,5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <img
                src="/redhot.jpg"
                width={104}
                height={104}
                alt="capa de album redHot"
              />
              <strong>Wasting Laght </strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0,5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <img
                src="/redhot.jpg"
                width={104}
                height={104}
                alt="capa de album redHot"
              />
              <strong>Wasting Laght </strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0,5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <PlayIcon />
              </button>
            </a>
          </div>
          <h2 className="font-semibold text-2xl mt-10">Made for Joao Murilo</h2>

          <div className="grid grid-cols-9 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
            >
              <img
                src="/redhot.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="capa de album redHot"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, Coin, Gril in red and more{" "}
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
            >
              <img
                src="/redhot.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="capa de album redHot"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, Coin, Gril in red and more{" "}
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
            >
              <img
                src="/redhot.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="capa de album redHot"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, Coin, Gril in red and more{" "}
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
            >
              <img
                src="/redhot.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="capa de album redHot"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, Coin, Gril in red and more{" "}
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
            >
              <img
                src="/redhot.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="capa de album redHot"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, Coin, Gril in red and more{" "}
              </span>
            </a>
          </div>
        </main>
      </div>
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
            <DicesIcon size={20} className=" text-zinc-200" />
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
    </div>
  );
}
