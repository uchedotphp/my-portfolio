import { Link } from "react-router";
import SnakeGame from "@components/snakeGame/Index";

const HomePage = () => {
  return (
    <div className="h-full">
      <div className="h-full flex md:gap-10 xl:gap-[146px] lg:px-20 overflow-hidden">
        <div className="flex-1 overflow-y-auto flex flex-col justify-center items-center lg:items-end">
          <div className="px-6 lg:px-0">
            <h6 className="mb-1 text-md">Hello, I am</h6>
            <h1 className="text-white text-4xl lg:text-5xl mb-2">
              Uchechukwu Nwulu
            </h1>
            <h4 className="text-indigo text-lg lg:text-2xl">
              <code>{">"} Front-end developer</code>
            </h4>

            <div className="mt-[75px]">
              <code>
                <p className="mb-2">
                  // complete the game to continue <br />
                </p>
                <p className="mb-2">
                  // find my profile on Github <br />
                </p>
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
        <div className="flex-1 overflow-auto hidden lg:flex items-center">
          <SnakeGame />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
