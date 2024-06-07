const TimingOption = ({ selected, setSelected, handleChange, timing }) => {
  return (
    <button
      className={`flex flex-col justify-center sm:py-2 py-1 items-center max-w-[95px] rounded-md cursor-pointer ${
        selected
          ? `bg-light-lime text-black border-black border-2`
          : `bg-white border-gray-400 border-1 text-gray-800`
      } w-[100px]`}
      onClick={(e) => {
        handleChange(e);
        setSelected(timing.name);
      }}
      id="time"
      value={timing.time}
    >
      <span className="font-medium text-black text-md">{timing.name}</span>
      <span className="font-normal text-black text-xs">{timing.time} </span>
    </button>
  );
};

export default TimingOption;
