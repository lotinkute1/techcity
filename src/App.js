
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
<<<<<<< HEAD
      <Payment/>
=======
      <Router/>
>>>>>>> 756de4f16bb3fe027bab79f898411f03bd1667f4
      <Footer/>
    </div>

    
  );
  
}

export default App;
