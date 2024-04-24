import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import server from "./server.js"
import HeavenList from './pages/heavenList';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import DetailedHome from './pages/detailedInfo.jsx';
 
export default function App() {
  const [name, setName] = useState("")
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout name={ name } setName={ setName } />}>
          <Route index element={ <Home /> } />
          <Route path='heavenslist' element={<HeavenList/>}/>
          <Route path='heavenslist/:id' element={<DetailedHome/>}/>
        </Route>
      </Routes>
   </BrowserRouter>
  )

}




