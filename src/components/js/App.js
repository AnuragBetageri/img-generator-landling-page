
import '../css/App.css';
import Collection from './collection';
import Getstarted from './getstarted';
import Usecases from './usecases';
import Endcredits from './endcredits';
import Keyfeatures from './key_features';
import Home from './home';

function App() {
  return (
    <div className="App">
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
