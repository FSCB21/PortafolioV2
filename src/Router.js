import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Error404 from "./pages/Error404";

import Index from "./pages/Index";
import Referencias from "./pages/Referencias";
import VerMas from "./pages/VerMas";

function App() {

    return (
      <BrowserRouter>
        
        <Switch>
          
          <Route exact path="/">
            <Index/>
          </Route>

          <Route exact path="/habilidades">
            <VerMas/>
          </Route>
          
          <Route exact path="/referencias">
            <Referencias/>
          </Route>

          <Route>
            <Error404/>
          </Route>

        </Switch>

      </BrowserRouter>
      
    );
  }
  
    
      

export default App;
