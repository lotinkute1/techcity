import { toast, ToastContainer } from "react-toastify";
import "./App.css";
import "./assets/js/index";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header2/index";
import ChatMessager from "./features/ChatMessager";
import Router from "./features/Router/Router";

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
      <ChatMessager />
      <Footer />
    </div>
  );
}

export default App;
