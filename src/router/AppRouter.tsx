import { Routes, Route } from 'react-router-dom'
import { WelcomePage } from '../pages/WelcomePage';

import { ProductosPage } from '../pages/ProductosPage';
import { PedidosPage } from '../pages/PedidosPage';
import { ClientesPage } from '../pages/ClientesPage';
import { ConfigPage } from './../pages/ConfigPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { MainSidebar } from './../components/common/MainSidebar';
import { Navbar } from './../components/common/Navbar';
import { useToggle } from './../hooks/useToogle';

export const AppRouter = () => {
  const {isActive, toggleMenu} = useToggle(false);
  return (
   
      <div id="wrapper" className={isActive ? 'd-flex toggled': 'd-flex'} >
          <MainSidebar></MainSidebar>
          <div id="page-content-wrapper">
            <Navbar toggleMenu={toggleMenu}></Navbar>
            <Routes>
                <Route path="/" element={<WelcomePage/>}></Route>
                <Route path="/productos" element={<ProductosPage/>} ></Route>
                <Route path="/pedidos" element={<PedidosPage/>} ></Route>
                <Route path="/clientes" element={<ClientesPage/>} ></Route>
                <Route path="/configuraciones" element={<ConfigPage/>} ></Route>
                <Route path="/*" element={<NotFoundPage/>}></Route>
            </Routes>
        </div>
      </div>
  )
}
