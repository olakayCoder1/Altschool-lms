import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Register from './authentication/Register';
import Login from './authentication/Login';
import ForgetPassword from './authentication/ForgetPassword';
import ResetPassword from './authentication/ResetPassword';
import AuthenticatedRoutes from './AuthenticatedRoutes'
import UserProfile from './other-user/UserProfile';
import Index from './myaccount/pages/Index'
import AccountContainer from './account/AccountContainer';
import Welcome from './welcome/Welcome';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/xyzposts/*' element={<AuthenticatedRoutes />} />
        <Route path='/users/*' element={<UserProfile />} />
        <Route path='/account' element={<AccountContainer />} />
        <Route path='' element={<Welcome />} />
      </Routes>
    </Router>
   
  );

}

export default App;
