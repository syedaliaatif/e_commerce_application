import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop.js";

//components 
import ProtectedRoutesComponenent from "./components/ProtectedRouteComponents.js";
import HeaderComponent from "./components/HeaderComponent.js";
import FooterComponent from "./components/FooterComponent.js";
import RoutesWithUserChatComponent from "./components/RoutesWithUserChatComponent.js";

// publicly available pages 
import HomePage from "./pages/homepage.js";
import CartPage from "./pages/cartpage";
import LoginPage from "./pages/loginpage";
import ProductDetailsPage from "./pages/productdetails";
// user protected pages 
import UserProfilePage from "./pages/user/UserProfilePage.js";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage.js";
import UserOrdersPage from "./pages/user/UserOrdersPage.js";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage.js";
// Admin Protected pages 
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage.js";
import AdminChatsPage from "./pages/admin/AdminChatsPage.js";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage.js";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage.js";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage.js";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage.js";
import AdminProductsPage from "./pages/admin/AdminProductsPage.js";
import AdminUsersPage from "./pages/admin/AdminUsersPage.js";
import ProductListPage from "./pages/productlistpage.js";
import RegisterPage from "./pages/registerpage.js";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage.js";

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <HeaderComponent />
      <Routes>
        <Route element={<RoutesWithUserChatComponent />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          /*--------------------User Protected Routes -------------------------------- */
          <Route element={<ProtectedRoutesComponenent admin={false} />}>

            <Route path="/user" element={<UserProfilePage />} />
            <Route path="/user/my-orders" element={<UserOrdersPage />} />
            <Route path="/user/order-details" element={<UserOrderDetailsPage />} />
            <Route path="/user/cart-details" element={<UserCartDetailsPage />} />

          </Route>
        </Route>
        /*--------------------Admin Protected Routes ---------------------------------*/
        <Route element={<ProtectedRoutesComponenent admin={true} />}>

          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/edit-users" element={<AdminEditUserPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route path="/admin/create-new-product" element={<AdminCreateProductPage />} />
          <Route path="/admin/edit-product" element={<AdminEditProductPage />} />
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
          <Route path="/admin/chats" element={<AdminChatsPage />} />
          <Route path="/admin/order-details" element={<AdminOrderDetailsPage />} />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />

        </Route>



      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
