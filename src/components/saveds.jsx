import { useState } from "react"
import Favorites from "../pages/Favorites"
export default function PanelSaveds({menuToggle}){
    
   
   
    return(
        <>
        <aside className="saveds h-full min-w-full fixed top-0 mt-0 flex px-2 py-6 flex-col justify-between z-10 overflow-y-auto ">
       <Favorites/>
        </aside>
        </>
    )
}