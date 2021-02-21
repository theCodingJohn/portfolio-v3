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
