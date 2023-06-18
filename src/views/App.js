import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'
import React from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from '../components/Home/Home'
import About from '../components/About/About'
import Nav from '../components/Navigation'
import Todos from '../components/Todos/Todos'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fas)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/basic-react-app' element={<Nav />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='todo' element={<Todos />} />
    </Route>
  )
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored" />
      </header>
    </div>
  );
}

export default App;
