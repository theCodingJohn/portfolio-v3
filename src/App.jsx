import React, { useState, useEffect } from "react"

// pages
import {Home} from "./pages"

// components 
import { PageLoader } from "./components"
  
// styles
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.classList = `main-bg-0${Math.floor(Math.random() * 5) + 1}`;
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])

  return (
    <> 
      {
        loading &&  <PageLoader />
      }
      <Home />
    </>
  );
}

export default App;
