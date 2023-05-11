import "../css/App.css";
import Collection from "./collection";
import Getstarted from "./getstarted";
import Usecases from "./usecases";
import Endcredits from "./endcredits";
import Keyfeatures from "./key_features";
import Home from "./home";
import {Helmet} from "react-helmet";
function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Around AI</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Home></Home>
      <Keyfeatures></Keyfeatures>
      <Usecases></Usecases>
      <Collection></Collection>
      <Getstarted></Getstarted>
      <Endcredits></Endcredits>
    </div>
  );
}

export default App;
