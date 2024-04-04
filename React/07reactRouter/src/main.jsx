import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './User/User.jsx'
import Github from './github/Github.jsx'

// const router = createBrowserRouter([
//   {path: '/',
//     element: <Layout/>,
//     children : [
//       {
//         path: "",
//         element : <Home/>
        
//       },
//       {
//         path: "about",
//         element : <About/>
//       },
//       {
//         path: "Contact",
//         element : <Contact/>
//       }
//     ]

// }
// ])                                                              *******this is little bit tough so another approach

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element= {<Layout/>}>
        <Route path='' element= {<Home/>}  />
        <Route path='About' element= {<About/>}  />
        <Route path='Contact' element= {<Contact/>}  />
        <Route path='User/:userid' element= {<User/>}  />
        <Route 
        loader={githubInfoLoader}
        path='Github' 
        element= {<Github/>}  
        />
        
        
      </Route>
    )
  )




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
