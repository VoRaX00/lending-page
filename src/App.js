import './App.css';
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Awaits from "./components/awaits/Awaits";
import Bonuses from "./components/bonuses/Bonuses";
import ProgressBar from "./components/progressBar/ProgressBar";
import PricingPage from "./components/pricing/PricingPage";
import Calculator from "./components/calculator/Calculator";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <About></About>
            <Awaits></Awaits>
            <Bonuses></Bonuses>
            <PricingPage></PricingPage>
            <Calculator></Calculator>
            <Footer></Footer>
            {/*<ProgressBar></ProgressBar>*/}
        </div>
    );
}

export default App;
