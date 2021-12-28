import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header2/index";
import Router from "./features/Router/Router";
import firebase from "./features/Firebase/Firebase";
import "./assets/js/index";
import Cart from "./features/Cart";
import Payment from "./features/Payment";
import Address from "./features/Profiles/Address";
import Profile from "./features/Profiles/Profile";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Profile/>
      <Footer />
    </div>
  );
}

export default App;
