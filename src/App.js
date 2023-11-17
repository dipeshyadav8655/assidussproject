// import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import SideBar from './Components/SideBar';
import Graphs from './Components/Graphs';

function App() {
  return (
    <>
    <Nav />
    <div className='flex'>
      <SideBar />
      <Graphs />
    </div>
    </>
  );
}

export default App;
