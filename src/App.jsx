import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Chat from "./components/chat/main";
import Sidebar from "./components/chat/sidebar";
import Dashboard from "./components/dashboard/dashboard";
import Navbar from "./components/nav/navbar";
import Footer from "./components/footers/footer";
import Employees from "./components/employees/employees";
import EmployeeProfile from "./components/employees/employeeProfile";
import Documents from "./components/documents";
import Settings from "./components/settings";

function App() {
  return (
    <div className='App dark:bg-gray-800 h-screen dark:text-white'>
      <div className='container mx-auto'>
        <Navbar />
        <hr className='my-2' />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/employees' element={<Employees />} />
          <Route path='/employees/profile/:id' element={<EmployeeProfile />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/archive' element={<Documents />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
