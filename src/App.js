
import './App.css';
import Footer from './components/Footer/Footer';
import Header from "./components/Header2/index";
import Main from './components/Main/Main';
import ProductInfo from './features/ProductInfo/ProductInfo';
function App() {
  

  return (
    <div className="wrapper">
      <Header/>
      {/* <Main/> */}
      <ProductInfo/>
      <Footer/>
    </div>

    
  );
  
}

export default App;
