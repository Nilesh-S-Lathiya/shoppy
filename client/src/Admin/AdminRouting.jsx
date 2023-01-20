import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminSidebar from "./component/Sidebar/AdminSidebar";
import AddProduct from "./Pages/Add Product/AddProduct";
import AdminHome from "./Pages/Dashboard/AdminHome";
import "./adminrouter.css";
import { Container } from "react-bootstrap";
import ViewProducts from "./Pages/View Product/ViewProducts";
import UpdateProduct from "./Pages/UpdateProduct/UpdateProduct";



const AdminRouting = () => {
  
  return (
    <div className="p_dashbord">
      <div className="p_sidebar_section">
        <div>
          <AdminSidebar />
        </div>
        <div className="p_navbar_section">
          <div>
            <Container className="mx-auto">
              <Routes>
                <Route>
                  <Route path="/" element={<AdminHome />} />
                  <Route path="/addproduct" element={<AddProduct />} />
                  <Route path="/updateproduct/:id" element={<UpdateProduct />} />
                  <Route path="/viewproduct" element={<ViewProducts />} />
                </Route>
              </Routes>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRouting;
