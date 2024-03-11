import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Chat from "./components/chat/main";
import Sidebar from "./components/chat/sidebar";
import Dashboard from "./components/dashboard/dashboard";
import Navbar from "./components/nav/navbar";

function App() {
  return (
    <div className='App container mx-auto'>
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
