import React, {useEffect} from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import EndPoint from './Endpoint';
import { AuthProvider, useAuth } from './Auth/AuthContext';
import PrivateRoute from './Auth/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
          <AppContent />
      </AuthProvider>
    </Router>
  );
}

const AppContent = () => {
  const { isAuth } = useAuth();

  return (
    <>
      {isAuth && <EndPoint.base.SidePanel/>}
      {!isAuth && <EndPoint.base.Navbar/>}
      <div className={`${isAuth ? "main-content-view" : "main-content"}`}>
        <Routes>
          <Route path={EndPoint.path.Home} element={<EndPoint.pages.Home/>} />
          <Route path={EndPoint.path.SignIn} element={<EndPoint.pages.SignIn/>} />
          <Route path={EndPoint.path.SignUp} element={<EndPoint.pages.SignUp/>} />
          <Route path={EndPoint.path.Profile} element={
            <PrivateRoute>
              <EndPoint.pages.Profile/>
            </PrivateRoute>
          } />
        </Routes>
      </div>
      
    </>
  );
}

export default App;
