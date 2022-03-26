import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header2/index";
import Router from "./features/Router/Router";
import firebase from "./features/Firebase/Firebase";
import "./assets/js/index";

import { toast, ToastContainer } from "react-toastify";
function App() {

  const notify = (type = "success", text = "text!") => {
    toast[type](text);
  };

  return (
    <div className="wrapper">
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
      <Footer />
    </div>
  );
}

export default App;
