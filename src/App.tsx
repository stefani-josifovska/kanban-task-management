import { useState, useEffect } from "react";
import useRequest from "./hooks/use-request";
import EmptyBoard from "./components/EmptyBoard";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [fetchedData, setFetchedData] = useState<[]>([]);
  const { sendRequest } = useRequest();

  useEffect(() => {
    const getFetchedData = (data: []) => {
      setFetchedData(data);
    };
    sendRequest(
      "https://kanban-tasks-1dc22-default-rtdb.europe-west1.firebasedatabase.app//boards.json",
      getFetchedData
    );
  }, [sendRequest]);

  console.log(fetchedData);

  return (
    <>
      <Navbar />
      <EmptyBoard />
    </>
  );
}

export default App;
