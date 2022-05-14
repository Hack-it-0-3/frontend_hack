import './App.css';
import Profile from './components/Profile/Profile'
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/SideBar/Sidebar';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Profile/>
        <Dashboard/>
    </div>
  );
}

export default App;
