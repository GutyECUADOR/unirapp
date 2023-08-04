import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage';
import { AppRouter } from './AppRouter';

export const MainRouter = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route Route path="/login" element={<LoginPage/>} ></Route>
        <Route path="/*" element={<AppRouter/>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}
