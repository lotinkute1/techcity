
import './App.css';
import Footer from './components/Footer/Footer';
import Header from "./components/Header2/index";
import Router from './features/Router/Router';
import firebase from './features/Firebase/Firebase';
import ShowAllProduct from './features/ShowAllProduct';
import Payment from './features/Payment';
import "./assets/js/index";
import Supplier from './features/Supplier';
import Cart from './features/Cart';
function App() {
  

  return (
    <div className="wrapper">
      <Header/>
      <Payment/>
      <Footer/>
    </div>

    
  );
  
}

export default App;
