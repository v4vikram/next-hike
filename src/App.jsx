import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="app">
        <Header/>
        <Home/>
        <Footer/>
    </div>
  )
}