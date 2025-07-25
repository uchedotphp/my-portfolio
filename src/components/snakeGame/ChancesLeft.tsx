interface SingleChanceProps {
  isActive: boolean;
}

const SingleChance = ({ isActive }: SingleChanceProps) => {
  return (
    <div className="w-[20.69px] h-[20.69px] bg-teal-300/10 rounded-full flex items-center justify-center">
      <div className="w-[14.69px] h-[14.69px] bg-teal-300/20 rounded-full flex items-center justify-center">
        <div
          className={`w-2 h-2 rounded-full ${
            isActive ? "bg-teal-300" : "bg-teal-300/10"
          }`}
        ></div>
      </div>
    </div>
  );
};

interface ChancesLeftProps {
  chancesLeft: number;
}

export const ChancesLeft = ({ chancesLeft }: ChancesLeftProps) => {
  return (
    <div>
      <code className="text-base">// food left</code>

      <div className="mt-2 px-3 grid grid-cols-5 gap-2">
        {[...Array(10)].map((_, i) => (
          <SingleChance key={i} isActive={i < chancesLeft} />
        ))}
      </div>
    </div>
  );
};
