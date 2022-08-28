import Navbar from "./components/navbar/Navbar";
import DataContextProvider from "./store/DataContextProvider";
import BoardDisplay from "./components/BoardDisplay";

function App() {
  return (
    <DataContextProvider>
      <Navbar />
      <BoardDisplay />
    </DataContextProvider>
  );
}

export default App;
