import './assets/css/style.css'
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Dashboard from "./components/Dashboard"
import Customers from "./components/Customers"
import ErrorPage from './components/ErrorPage'
import Employees from './components/Employees'
import Issues from './components/Issues'
import Reviews from './components/Reviews'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        {/* <Route path="*" element={<ErrorPage/>}/> */}
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/customers" element={<Customers/>}/>
        <Route path="/employees" element={<Employees/>}/>
        <Route path="/issues" element={<Issues/>}/>
        <Route path="/issue-reviews" element={<Reviews/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
