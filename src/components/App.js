import React from "react";
import { useDataLayerValue } from "../datalayer";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

function App() {
 
  // special syntax to pull info from DataLayer, (if we need to grab anything from DataLayer, we need to put into object)
  // dispatch: to dispatch action, by which we can update datalayer 
  const [{user}, dispatch] = useDataLayerValue();
  
  return (
    <div className="app">
      {/* if user is not present then display login component otherwise render everything else */}
      {!user? (
        <Login/>
      ) : (
        // wrapped all sibling component inside fragment(i.e <></>) or div
        <>
          <Header/>

          <div className="app_body">
            <Sidebar/>
            <Feed/>
            <Widgets/>
          </div>

        </>
      )}

    </div>
  );
}

export default App;
