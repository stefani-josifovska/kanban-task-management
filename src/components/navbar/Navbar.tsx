import { useState, useContext } from "react";
import { DataContext } from "../../store/data-context";
import Button from "../UI/Button";
import { ArrowIcon } from "./ArrowIcon";
import SelectBoard from "../modals/SelectBoard";

const Navbar: React.FC = () => {
  const [isBoardsMenuOpen, setIsBoardsMenuOpen] = useState(false);
  const { activeBoard } = useContext(DataContext);

  const onArrowClickHandler = () => {
    setIsBoardsMenuOpen((prev) => !prev);
  };

  const onBackdropClickHandler = () => {
    setIsBoardsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white flex justify-between h-16 w-screen items-center px-4 fixed">
        <div className="flex justify-between gap-x-4 items-center">
          <div className="h-6 w-6 flex justify-between gap-0.5">
            <div className="h-full flex-1 bg-black rounded-sm bg-purple-700"></div>
            <div className="h-full flex-1 bg-black rounded-sm bg-purple-700/75"></div>
            <div className="h-full flex-1 bg-black rounded-sm bg-purple-700/50"></div>
          </div>
          <h1 className="font-Jakarta text-lg">{activeBoard}</h1>
          <ArrowIcon
            className={`${isBoardsMenuOpen ? "rotate-180" : ""}`}
            onClick={onArrowClickHandler}
          />
        </div>
        <div className="flex justify-between gap-x-4">
          <Button className="font-bold w-12 h-8 text-2xl">+</Button>
          <button className="h-8 text-2xl text-stone-500">⋮</button>
        </div>
      </header>
      {isBoardsMenuOpen && (
        <SelectBoard onBackdropClick={onBackdropClickHandler} />
      )}
    </>
  );
};

export default Navbar;
