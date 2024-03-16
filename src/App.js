import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Chat from "./components/chat/main";
import Sidebar from "./components/chat/sidebar";
import Dashboard from "./components/dashboard/dashboard";
import Navbar from "./components/nav/navbar";
import Footer from "./components/footers/footer";
import Employees from "./components/admin/employees";
import EmployeeProfile from "./components/admin/employeeProfile";
import Documents from "./components/documents";

function App() {
  return (
    <div className='App container mx-auto'>
      <Navbar />
      <hr className='my-2' />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/employees' element={<Employees />} />
        <Route path='/employees/profile' element={<EmployeeProfile />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/archive' element={<Documents />} />
      </Routes>
      <hr className='my-2' />
    </div>
  );
}

export default App;
