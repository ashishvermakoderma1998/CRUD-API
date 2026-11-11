import React, { useEffect } from "react";
import { getPost } from "./api/PostApi";
import { Posts } from "./components/Posts";
import '../src/App.css';


const App = () => {
  console.log(getPost());
  

  return(

    <section className="main-section">
    <Posts/>
    </section>
  
  )
};
export default App;

