import Navbar from "./components/navbar/Navbar";
import DataContextProvider from "./store/DataContextProvider";
import BoardDisplay from "./components/BoardDisplay";
import EmptyBoard from "./components/EmptyBoard";

function App() {
  return (
    <>
      <Navbar />
      <EmptyBoard />
      <DataContextProvider>
        <BoardDisplay />
      </DataContextProvider>
    </>
  );
}

export default App;
