import "./app.css";
import { BrowserRouter } from "react-router-dom";
import Routers from "./comps/routes";


const App = () => {
  return (
      <BrowserRouter id={'app'}>
       <Routers/>
      </BrowserRouter>
  );
};

export default App;
