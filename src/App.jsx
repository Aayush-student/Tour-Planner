import './App.css';
import Tours from './Tours';
import React,{useState} from 'react';
import Data from './Data';
function App() {

 const [tours,setTour] = useState(Data)
 
 function removeTour(id){
   const newTour = tours.filter(tour => tour.id !== id);
   setTour(newTour);
 }
 if(tours.length === 0) {
  return (
    <div className='refresh'>
      <h2>No Tours Left</h2>
      <button className='btn-white' onClick={() => setTour(Data)}> Refresh</button>
    </div>
  );
 }

  return (
    <div className='App'>
     <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>  
  )
};

export default App;
