import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage';
import { AppRouter } from './AppRouter';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const MainRouter = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          <PublicRoutes>
            <LoginPage/>
          </PublicRoutes>
        }>  
        </Route>
        <Route path="/*" element={
          <PrivateRoutes>
            <AppRouter/>
          </PrivateRoutes>
        }></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}
