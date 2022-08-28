import { useEffect, useContext } from "react";
import useRequest from "../hooks/use-request";
import { DataContext, DataObject } from "../store/data-context";

const BoardDisplay: React.FC = () => {
  const { sendRequest } = useRequest();
  const { boards, saveFetchedData } = useContext(DataContext);

  useEffect(() => {
    const getFetchedData = (data: DataObject[]) => {
      saveFetchedData(data);
    };
    sendRequest(
      "https://kanban-tasks-1dc22-default-rtdb.europe-west1.firebasedatabase.app//boards.json",
      getFetchedData
    );
  },[saveFetchedData, sendRequest]);
  console.log(boards);
  return <p>board</p>;
};

export default BoardDisplay;
