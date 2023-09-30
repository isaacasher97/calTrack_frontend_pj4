import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import "../src/styles.scss";
import DietLinks from './components/DietLinks';
import Footer from './components/Footer';


function App() {
  
  return (
    <div className="App">
      <Header />
      <Outlet/>
      <DietLinks/>
      <Footer/>
    </div>
  )
}

export default App;