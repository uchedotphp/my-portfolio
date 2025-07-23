import Button from "@components/Button";
import arrowUp from "@assets/icons/chevron-up.svg";
import arrowLeft from "@assets/icons/chevron-left.svg";
import arrowRight from "@assets/icons/chevron-right.svg";
import arrowDown from "@assets/icons/chevron-down.svg";

const Controls = () => {
  return (
    <div>
      <code className="text-base text-slate-50">
        // use keyboard
        <br />
        // arrows to play
      </code>

      <div className="grid grid-cols-3 gap-2 mt-3">
        <div className="col-start-1 col-end-4 flex justify-center">
          <Button className="h-[30px] w-12 flex items-center justify-center rounded-lg bg-gray-950 border border-slate-700">
            <img src={arrowUp} alt="arrow up" />
          </Button>
        </div>

        <div className="col-start-1 col-end-2">
          <Button className="h-[30px] w-12 flex items-center justify-center rounded-lg bg-gray-950 border border-slate-700">
            <img src={arrowLeft} alt="arrow left" />
          </Button>
        </div>

        <div className="col-start-2 col-end-3">
          <Button className="h-[30px] w-12 flex items-center justify-center rounded-lg bg-gray-950 border border-slate-700">
            <img src={arrowDown} alt="arrow down" />
          </Button>
        </div>

        <div className="col-start-3 col-end-4">
          <Button className="h-[30px] w-12 flex items-center justify-center rounded-lg bg-gray-950 border border-slate-700">
            <img src={arrowRight} alt="arrow right" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Controls;
