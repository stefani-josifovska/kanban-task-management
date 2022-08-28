import React, { useCallback, useState } from "react";
import { DataObject, DataContext, ContextDataObject } from "./data-context";

const DataContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [dataToDisplay, setDataToDisplay] = useState<DataObject[]>([]);
  const [activeBoard, setActiveBoard] = useState("");

  const saveFetchedData = useCallback((data: DataObject[]) => {
    setDataToDisplay(data);
    setActiveBoard(data[0].name)
  }, []);

  const changeActiveBoard = (clickedBoardName: string) => {
    setActiveBoard(clickedBoardName);
  };

  const contextValue: ContextDataObject = {
    boards: dataToDisplay,
    saveFetchedData,
    activeBoard,
    setActiveBoard: changeActiveBoard,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export default DataContextProvider;
