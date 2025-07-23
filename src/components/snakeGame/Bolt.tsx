import bolt from "@assets/icons/bolt-x.svg";

const Bolt = ({ className }: { className?: string }) => {
  return (
    <div
      className={`h-[13px] w-[13px] rounded-full flex items-center justify-center ${className}`}
    >
      <img src={bolt} alt="bolt" />
    </div>
  );
};

export default Bolt;
