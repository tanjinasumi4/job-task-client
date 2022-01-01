import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Explore2 from './Pages/Explore2/Explore2/Explore2';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
// import Review from './Pages/Review/Review';
// import DisplayReviews from './Pages/DisplayReview/DisplayReviews/DisplayReviews';
import Pay from './Pages/Dashboard/Pay/Pay';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Switch>
          <PrivateRoute path="/explore">
            <Explore2 />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>

          {/* <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute> */}

          <Route path="/pay">
            <Pay></Pay>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          
          {/* <Route path="/review">
            <DisplayReviews></DisplayReviews>
          </Route> */}

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
