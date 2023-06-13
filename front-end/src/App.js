
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import WebFont from 'webfontloader';
import './App.css';
import Doctors from './Components/Doctors/Doctors';
import Home from './Components/Home/Home';
import SingleDoctor from './Components/SingleDoctor/SingleDoctor';
import LoginSignUp from './Components/User/LoginSignUp';
import Footer from './Share/Footer/Footer';
import Navbar from './Share/Navbar/Navbar';
import { useSelector } from 'react-redux';
import axios from 'axios';
import store from "./store";
import { loadUser } from './actions/userAction';
import UserOption from './Components/User/UserOption';
import ProtectedRoute from './Route/ProtectedRoute';
import Profile from './Components/User/Profile';
import Appointment from './Components/User/Appointment';
import Dashboard from './Admin/Dashboard';
import AllUsers from './Admin/AllUsers';
import AllAppointment from './Admin/AllAppointment';
import AllDoctors from './Admin/AllDoctors';
import NewDoctor from './Admin/NewDoctor';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
// import store from './store';
// import store from './store';

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user)
  axios.defaults.withCredentials = true;

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto Condensed", "Roboto", "Droid Sans"],
      },
    });

    store.dispatch(loadUser())

  }, []);



  return (
    <>
      <Navbar user={user} />
      {isAuthenticated && <UserOption user={user} />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='home' element={<Home />}></Route>

        <Route path='doctors' element={<Doctors />}></Route>
        <Route path='/doctors/:id' element={<SingleDoctor user={user} />}></Route>
        <Route path='/login' element={<LoginSignUp />}></Route>
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/appointment' element={<Appointment user={user} />}></Route>
        </Route>
        <Route element={<ProtectedRoute adminRoute={true} isAdmin={true} isAuthenticated={isAuthenticated} />}>
          <Route path='/admin/dashboard' element={<Dashboard />}>  </Route>
          <Route path='/admin/dashboard' element={<Dashboard />}>  </Route>
          <Route path='/admin/dashboard/appointments' element={<AllAppointment />}>  </Route>
          <Route path='/admin/dashboard/doctors' element={<AllDoctors />}>  </Route>
          <Route path='/admin/dashboard/users' element={<AllUsers />}>  </Route>
          <Route path='/admin/dashboard/new/doctor' element={<NewDoctor/>}>  </Route>
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
