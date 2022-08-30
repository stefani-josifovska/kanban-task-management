import React from "react";

export type TasksObject = {
  description: string;
  status: string;
  subtasks: { isCompleted: boolean; title: string }[];
  title: string;
}

export type DataObject = {
    columns: {
      name: string;
      tasks: TasksObject[];
    }[];
    name: string;
};

export type ContextDataObject = {
  boards: DataObject[];
  saveFetchedData: (data: DataObject[]) => void;
  activeBoard: string,
  setActiveBoard: (boardName: string) => void
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
  saveFetchedData: (data: DataObject[]) => {},
  activeBoard: "",
  setActiveBoard: (boardName: string) => {}
});
