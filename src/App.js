import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import userApi from "./api/userApi";
import "./App.css";
import "./assets/js/index";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header2/index";
import SupplierList from "./components/SupplierList/SupplierList";
import ChatMessager from "./features/ChatMessager";
import Router from "./features/Router/Router";

function App() {
  const notify = (type = "success", text = "text!") => {
    toast[type](text);
  };
  const [suppliers, setSupliers] = useState([]);

  useEffect(()=>{
    getSupliers();
  },[])
  const getSupliers = async () => {
    try{
      const response = await userApi.getPopularSuppliers('total_products_sold');
      var {data,message} = response;
      setSupliers(data);
    }catch(error){
      console.error(message);
    }
  }
  return (
    <div className="wrapper">
      <SupplierList suppliers = {suppliers}/>

      {/* notification */}
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
      />
      <Header />
      <div id="main">
        <div className="scroll-top">
          <a href="#main">
            <i className="fas fa-chevron-circle-up" />
          </a>
        </div>
        <div className="scroll-call">
          <span>
            Tổng Đài CSKH
            <br />
            0784508270
          </span>
        </div>
        <div className="content">
          <Router />
        </div>
      </div>
      <ChatMessager />
      <Footer />
    </div>
  );
}

export default App;
