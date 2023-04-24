
import '../css/App.css';
import Collection from './collection';
import Getstarted from './getstarted';
import Usecases from './usecases';
import Endcredits from './endcredits';
import Keyfeatures from './key_features';

function App() {
  return (
    <div className="App">
      <Keyfeatures></Keyfeatures>
      <Usecases></Usecases>
      <Collection></Collection>
      <Getstarted></Getstarted>
      <Endcredits></Endcredits>
    
      
    </div>
  );
}

export default App;
