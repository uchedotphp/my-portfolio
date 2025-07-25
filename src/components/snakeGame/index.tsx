import Bolt from "./Bolt";
import DisplayArea from "./DisplayArea";
import Controls from "./Controls";
import { ChancesLeft } from "./ChancesLeft";
import Button from "@components/Button";
import { useSnakeStore } from "../../stateManagement/snakeStore";

const SnakeGame = ({ className, id }: { className?: string; id?: string }) => {
  const { chancesLeft } = useSnakeStore();

  return (
    <section
      className={`h-[506.69px] w-[469.32px] rounded-lg bg-gradient-to-r 
    from-[#175553] 
    to-[rgba(67,217,173,0.13)] p-8 relative flex gap-6 stroke-slate-700 ${className}`}
      id={id}
    >
      <Bolt className="absolute top-3 right-3 bg-[radial-gradient(circle,_#217D7A_15%25,_#114B4A_100%25)] shadow-[inset_0px_1px_2px_0px_#1F8177,2px_2px_4px_0px_#0D4341]" />
      <Bolt className="absolute bottom-3 left-3 bg-[radial-gradient(circle,_#164C51_15%25,_#0D3A40_100%25)] shadow-[inset_0px_1px_2px_0px_#16645C,2px_2px_4px_0px_#092D32]" />
      <Bolt className="absolute top-3 left-3 bg-[radial-gradient(circle,_#217D7A_15%25,_#114B4A_100%25)] shadow-[inset_0px_1px_2px_0px_#1A8277,2px_2px_4px_0px_#0D4341]" />
      <Bolt className="absolute bottom-3 right-3 bg-[radial-gradient(circle,_#234B7C_15%25,_#122E4F_100%25)] shadow-[inset_0px_1px_2px_0px_#2C588D,2px_2px_4px_0px_#122C4E]" />
      <div className="flex-1 rounded-lg overflow-hidden">
        <DisplayArea />
      </div>
      <div className="flex flex-col gap-4">
        <div className="rounded-lg p-2.5 bg-slate-800">
          <Controls />
        </div>
        <ChancesLeft chancesLeft={chancesLeft} />

        <div className="mt-auto text-end">
          <Button className="btn--outline">
            <span>skip</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SnakeGame;
