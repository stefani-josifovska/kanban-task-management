import React from "react";

export type DataObject = {
    columns: {
      name: string;
      tasks: {
        description: string;
        status: string;
        subtasks: { isCompleted: boolean; title: string }[];
        title: string;
      }[];
    }[];
    name: string;
};

export type ContextDataObject = {
  boards: DataObject[];
  saveFetchedData: (data: DataObject[]) => void;
};

export const DataContext = React.createContext<ContextDataObject>({
  boards: [
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
  ],
  saveFetchedData: (data) => {},
});
