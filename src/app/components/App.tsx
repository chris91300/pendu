"use client"

import React from "react";
import LeJeuDuPendu from './LeJeuDuPendu/LeJeuDuPendu'



/**
 * LA PAGE FAIT W:1530PX H:759 PX SUR MON ORDI
 * RETRAVAILLER L'IMAGE BG POUR QU'ELLE SOIT PLUS BELLE
 */

export default function App(){
  
  
    return (      
      <div className="w-full mt-7">
        <h1 className="text-center text-red-600 text-5xl font-bloody mb-5">LE JEU DU PENDU</h1>
        
        <div>        
          <LeJeuDuPendu />
        </div>
      </div>
    );
  
}




