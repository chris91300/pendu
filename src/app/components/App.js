"use client"

import React from "react";

import LeJeuDuPendu from './LeJeuDuPendu'

const styles = {
  app : {
    backgroundImage : "url('/img/pendu_illustration.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative"
  }
}



export default function App(){
  
  
    return (      
      <div className="large">
        <h1>LE JEU DU PENDU</h1>
        <div style={styles.app}>        
          <LeJeuDuPendu />
        </div>
      </div>
    );
  
}




