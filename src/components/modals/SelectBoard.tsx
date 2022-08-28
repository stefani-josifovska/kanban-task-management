import { useState } from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import { SunIcon, MoonIcon } from "./Icons";
import Switch from "react-switch";

const boardNames = ["platform launch", "marketing plan", "roadmap"];

const BoardModal = () => {
  const [isLightModeOn, setIsLightModeOn] = useState(true);

  const hangleChange = () => {
    setIsLightModeOn((prev) => !prev);
  };

  return (
    <div className="z-50 bg-white fixed top-4 w-4/5 mx-10% rounded-lg mt-16 pt-4">
      <h3 className="uppercase text-xs tracking-widest font-bold text-[#828FA3] ml-6 mb-5">
        all boards ({boardNames.length})
      </h3>
      <ul className="pr-6">
        {boardNames.map((name) => {
          return (
            <li
              key={Math.random().toString()}
              className="pl-6 py-3.5 text-base capitalize text-[#828FA3] font-semibold rounded-r-full hover:cursor-pointer hover:bg-main-purple/80 hover:text-white focus:bg-main-purple"
            >
              {name}
            </li>
          );
        })}
        <li className="pl-6 py-3.5 text-base capitalize font-semibold text-main-purple hover:cursor-pointer hover:opacity-90">
          + create new board
        </li>
      </ul>
      <div className="w-[90%] h-12 mx-[5%] bg-[#F4F7FD] mb-4 flex justify-center items-center gap-x-6">
        <SunIcon />
        <label className="h-[20px]">
          <Switch
            onChange={hangleChange}
            checked={isLightModeOn}
            height={20}
            width={40}
            onColor="#635FC7"
            handleDiameter={14}
            checkedIcon={false}
            uncheckedIcon={false}
            className="rotate-180"
          />
        </label>
        <MoonIcon />
      </div>
    </div>
  );
};

const SelectBoard: React.FC<{ onBackdropClick: () => void }> = ({
  onBackdropClick,
}) => {
  const backdropId: HTMLElement = document.getElementById("backdrop-root")!;
  const boardModalId: HTMLElement =
    document.getElementById("select-board-root")!;

  const onClickHandler = () => {
    onBackdropClick();
  };

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={onClickHandler} />, backdropId)}
      {ReactDOM.createPortal(<BoardModal />, boardModalId)}
    </>
  );
};

export default SelectBoard;