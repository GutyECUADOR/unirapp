import React from 'react'
import productos from './../data/productos.json';
import { CardProducto } from './../components/CardProducto';
import { Breadcrumb } from './../components/common/Breadcrumb';
import { Search } from '../components/common/Search';
import app from '../config/firebase';
import 'firebase/compat/auth';

export const ProductosPage = () => {
  app.auth().onAuthStateChanged(user => {
    console.log(user);
  })

  return (
    <>
      <div className="container-fluid">
          <h2 className='mt-2'>Productos</h2>
          <Breadcrumb titulo="Productos"></Breadcrumb>
          <div className="row">
            <div className="col">
              <div className="shadow-sm p-3 bg-white rounded">
                <div className="row">
                <Search></Search>
                  <div className="card-group">
                    { 
                      productos.map( producto => {
                        return (<div className="col-md-3 col-sm-6 col-xs-1" key={producto.id}>
                                    <CardProducto  producto={producto}></CardProducto>
                                </div>)
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}
