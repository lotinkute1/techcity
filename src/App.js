import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header2/index";
import Router from "./features/Router/Router";
import firebase from "./features/Firebase/Firebase";
import "./assets/js/index";
function App() {
  return (
    <div className="wrapper">
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
