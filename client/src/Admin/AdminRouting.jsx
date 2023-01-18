import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminSidebar from "./component/Sidebar/AdminSidebar";
import AddProduct from "./Pages/AddProduct";
import AdminHome from "./Pages/AdminHome";
import "./adminrouter.css";
import { Container } from "react-bootstrap";

const AdminRouting = () => {
  return (
    // <div>

    //   <div>
    //     <AdminSidebar />
    //   </div>
    //   <div>
    //     <Routes>
    //       <Route>
    //         <Route path="/" element={<AdminHome />} />
    //         <Route path="/addproduct" element={<AddProduct />} />
    //       </Route>
    //     </Routes>
    //   </div>
    // </div>

    <div className="p_dashbord">
      <div className="p_sidebar_section">
        <div>
        <AdminSidebar />
        </div>
        <div className="p_navbar_section">
          
          <div>
            <Container>
              <Routes>
                <Route>
                  <Route path="/" element={<AdminHome />} />
                  <Route path="/addproduct" element={<AddProduct />} />
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
