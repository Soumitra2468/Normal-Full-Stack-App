import { Route, Routes } from "react-router-dom";

import React from 'react'
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Service from "../Pages/Service/Service";
import Contact from "../Pages/Contact/Contact";
import TodoPage from "../Pages/TodoPage/TodoPage";
import Error from "../Pages/Error/Error";
import Dashboard from "../Pages/Dashboard/Dashborad";
import ProfilePage from "../Pages/Dashboard/DashboardPages/ProfilePage";

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todo" element={<TodoPage />} />
      
        <Route path="/dashboard" element={<Dashboard />} >
        <Route path="profile" element={<ProfilePage />} />
        </Route>

        <Route path="*" element={<Error/>} />


    </Routes>
  )
}

export default AllRoutes