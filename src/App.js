import './App.css';
import CarItem from './CarItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import Time from './Time';

function App() {
  return (
    <div className="App">
     <Time></Time>
     <div className='itm'><CarItem/></div>
    
    </div>
  );
}

export default App;
