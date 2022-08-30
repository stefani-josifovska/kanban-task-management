import { useEffect, useContext } from "react";
import useRequest from "../hooks/use-request";
import { DataContext, DataObject } from "../store/data-context";
import EmptyBoard from "./EmptyBoard";
import Loading from "./Loading";
import Column from "./UI/Column";

const BoardDisplay: React.FC = () => {
  const { isLoading, error, sendRequest } = useRequest();
  const { boards, saveFetchedData, activeBoard } = useContext(DataContext);

  useEffect(() => {
    const getFetchedData = (data: DataObject[]) => {
      saveFetchedData(data);
    };
    sendRequest(
      "https://kanban-tasks-1dc22-default-rtdb.europe-west1.firebasedatabase.app//boards.json",
      getFetchedData
    );
  }, [saveFetchedData, sendRequest]);

  const activeBoardData = boards.filter((obj) => obj.name === activeBoard);

  return (
    <>
      {error && <p>error</p>}
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          {activeBoardData[0]?.columns.length === 0 ? (
            <EmptyBoard />
          ) : (
            <div className="min-h-[calc(100vh-64px)] bg-[#F4F7FD] flex gap-4 pt-4 px-4 overflow-x-scroll">
              {activeBoardData[0]?.columns.map((col) => {
                return (
                  <Column
                    key={Math.random().toString()}
                    colName={col.name}
                    tasks={col.tasks}
                  />
                );
              })}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default BoardDisplay;
