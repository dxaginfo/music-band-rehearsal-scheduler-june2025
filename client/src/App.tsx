import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuth, refreshToken } from './store/slices/authSlice';
import Layout from './components/Layout/Layout';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Bands from './pages/Bands/Bands';
import BandDetail from './pages/Bands/BandDetail';
import Rehearsals from './pages/Rehearsals/Rehearsals';
import RehearsalDetail from './pages/Rehearsals/RehearsalDetail';
import Songs from './pages/Songs/Songs';
import Setlists from './pages/Setlists/Setlists';
import Settings from './pages/Settings/Settings';
import NotFound from './pages/NotFound/NotFound';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useSelector(selectAuth);
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(selectAuth);
  
  useEffect(() => {
    if (isAuthenticated) {
      // Set up token refresh interval
      const intervalId = setInterval(() => {
        dispatch(refreshToken());
      }, 10 * 60 * 1000); // Refresh every 10 minutes
      
      return () => clearInterval(intervalId);
    }
  }, [dispatch, isAuthenticated]);
  
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      <Route path="/" element={
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      }>
        <Route index element={<Dashboard />} />
        <Route path="bands" element={<Bands />} />
        <Route path="bands/:bandId" element={<BandDetail />} />
        <Route path="rehearsals" element={<Rehearsals />} />
        <Route path="rehearsals/:rehearsalId" element={<RehearsalDetail />} />
        <Route path="songs" element={<Songs />} />
        <Route path="setlists" element={<Setlists />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;