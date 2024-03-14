import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Chat from "./components/chat/main";
import Sidebar from "./components/chat/sidebar";
import Dashboard from "./components/dashboard/dashboard";
import Navbar from "./components/nav/navbar";
import Footer from "./components/footers/footer";
import Employees from "./components/admin/employees";

function App() {
  return (
    <div className='App container mx-auto'>
      <Navbar />
      <hr className='my-2' />

      <Employees />
      <hr className='my-2' />
    </div>
  );
}

export default App;
