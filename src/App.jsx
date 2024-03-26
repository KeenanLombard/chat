import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getAuth } from "firebase/auth";
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
        <Routes>
          <Route exact path='/' element={<Login />} />
          {/* <Route exact path='/employees' element={<Employees />} />
          <Route
            exact
            path='/employees/profile/:id'
            element={<EmployeeProfile />}
          />
          <Route exact path='/chat' element={<Chat />} />
          <Route exact path='/archive' element={<Documents />} />
          <Route exact path='/settings' element={<Settings />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
