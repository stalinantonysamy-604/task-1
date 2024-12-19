import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import store from './store';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import About from './pages/About';
import TablePage from './pages/TablePage';


const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>

          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="table" element={<TablePage />} />
            </Route>
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>

        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
