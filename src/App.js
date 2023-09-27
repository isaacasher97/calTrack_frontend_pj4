import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import "../src/styles.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet/>
    </div>
  );
}

export default App;