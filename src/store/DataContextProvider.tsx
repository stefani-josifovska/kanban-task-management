import React, { useCallback, useState } from "react";
import { DataObject, DataContext, ContextDataObject } from "./data-context";

const DataContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [dataToDisplay, setDataToDisplay] = useState<DataObject[]>([
    {
      columns: [
        {
          name: "",
          tasks: [
            {
              description: "",
              status: "",
              subtasks: [{ isCompleted: false, title: "" }],
              title: "",
            },
          ],
        },
      ],
      name: "",
    },
  ]);

  const saveFetchedData = useCallback((data: DataObject[]) => {
    setDataToDisplay(data);
  }, []);

  const contextValue: ContextDataObject = {
    boards: dataToDisplay,
    saveFetchedData,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export default DataContextProvider;
