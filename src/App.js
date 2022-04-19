
import './App.css';
import ProfileGeneral from './components/profile';
import Education from './components/education';
import Experiences from './components/experiences';
import ConnectRef from './components/connect_references';

function App() {
  return (
    
   <div className="App">
      <ProfileGeneral />
     <div className="content">
    
       <Education />

       <Experiences />

       <ConnectRef />

     </div>
   </div>
  );
}

export default App;
