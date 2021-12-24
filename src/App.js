
import './App.css';
import Footer from './components/Footer/Footer';
import Header from "./components/Header2/index";
import Router from './features/Router/Router';
import firebase from './features/Firebase/Firebase';

function App() {
  

  return (
    <div className="wrapper">
      <Header/>
      <Router/>
      <Footer/>
    </div>

    
  );
  
}

export default App;
