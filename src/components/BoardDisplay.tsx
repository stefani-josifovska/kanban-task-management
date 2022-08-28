import { useEffect, useContext } from "react";
import useRequest from "../hooks/use-request";
import { DataContext, DataObject } from "../store/data-context";
import EmptyBoard from "./EmptyBoard";
import Loading from "./Loading";

const BoardDisplay: React.FC = () => {
  const { isLoading, error, sendRequest } = useRequest();
  const { boards, saveFetchedData } = useContext(DataContext);

  useEffect(() => {
    const getFetchedData = (data: DataObject[]) => {
      saveFetchedData(data);
    };
    sendRequest(
      "https://kanban-tasks-1dc22-default-rtdb.europe-west1.firebasedatabase.app//boards.json",
      getFetchedData
    );
  }, [saveFetchedData, sendRequest]);

  return (
    <>
      {error && <p>error</p>}
      {isLoading && <Loading />}
      {!isLoading && (
        <>{boards.length === 0 ? <EmptyBoard /> : <p>display</p>}</>
      )}
    </>
  );
};

export default BoardDisplay;
