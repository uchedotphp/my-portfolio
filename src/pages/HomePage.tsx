import { Link } from "react-router";
import SnakeGame from "@components/snakeGame";
import shape from "@assets/icons/green-shape.svg";
import shape2 from "@assets/icons/blue-shape.svg";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, TextPlugin);

const HomePage = () => {
  useGSAP(() => {
    gsap.registerEffect({
      name: "fadeIn",
      extendTimeline: true,
      effect: (targets: HTMLElement, config: GSAPTimelineVars) => {
        return gsap.from(targets, {
          opacity: 0,
        });
      },
    });

    const tl = gsap.timeline({ defaults: { duration: 2 } });
    tl.to("#intro-name", {
      text: { value: "Uchechukwu Nwulu" },
    });
    tl.to("#intro-role", {
      text: { value: "> Fullstack Engineer" },
    });
    tl.fadeIn("#game-container", { duration: 6 });
    tl.to("#game-instructions", {
      text: { value: "// complete the game to continue" },
    });
  });

  return (
    <div className="h-full">
      <div className="h-full flex md:gap-10 xl:gap-[146px] lg:px-20 overflow-hidden">
        <div className="flex-1 overflow-y-auto flex flex-col justify-center items-center lg:items-end">
          <div className="px-6 lg:px-0">
            <h6 className="mb-1 text-md">Hello, I am</h6>
            <h1 id="intro-name" className="text-white mb-2"></h1>
            <h4 className="text-indigo text-lg lg:text-2xl">
              <code id="intro-role"></code>
            </h4>

            <div className="mt-[75px]">
              <code>
                <p
                  id="game-instructions"
                  className="hidden lg:block mb-2 text-[min(10vw, 75px)]"
                ></p>
                <br />
                <p className="mb-2">// find my profile on Github</p>
                <br />
                <span className="text-indigo">const </span>
                <span className="text-teal">githublink = </span>
                <Link
                  to="https://github.com/uchedotphp"
                  target="_blank"
                  className="underline text-rose"
                >
                  "https://github.com/uchedotphp"
                </Link>
              </code>
            </div>
          </div>
        </div>
        <div className="flex-1 hidden lg:flex items-center">
          <div id="game-container" className="relative">
            <div className="absolute -top-[136.34px] -left-[135.65px]">
              <img src={shape} alt="" />
            </div>

            <div className="absolute -bottom-[136.61px] -right-[137.26px]">
              <img src={shape2} alt="" />
            </div>

            <SnakeGame className="shadow-[inset_0px_2px_0px_0px_rgba(255,255,255,0.3)]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
