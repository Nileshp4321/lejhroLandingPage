import './App.css';
import HomePage from './NavBar';
import Blog from './Blog';
import StickeyNav from './StickeyNav';
import Reac,{useState,useEffect} from "react";

function App() {
const [showStickyNav,setShowStickyNav]=useState(false);
useEffect(()=>{
  const handleScroll=()=>{
    if(window.scrollY>100){
      setShowStickyNav(true);
    }
    else
    {
      setShowStickyNav(false);
    }
  }
  window.addEventListener("scroll",handleScroll);
  return()=>{
    window.removeEventListener("scroll",handleScroll);
  }
})
  return (
      <>
      {showStickyNav&&<StickeyNav/>}
       <HomePage/>
       <Blog/>
       </>
  );
}

export default App;
