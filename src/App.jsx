
import { BookContextProvider } from "./Context/bookContext";
import Layout from "./Layout/Layout";


const App = () => {
  return (
    <div>
      <BookContextProvider>
        <Layout />
      </BookContextProvider>
    </div>
  );
};

export default App;