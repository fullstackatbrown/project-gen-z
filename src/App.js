import React from "react"

import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"
import './App.css'

function App() {
  return (
    <div className="App">
      <div>
            <Header />
            <MainContent />
            <Footer />
      </div>
    </div>
  );
}

export default App;
