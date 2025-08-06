import { useState } from "react"
import Favorites from "../pages/Favorites"
export default function PanelSaveds(){
    
    const savedsJokes = Array.from(localStorage.getItem('favorite-jokes').split(' '))
   
    
    

    return(
        <>
        <aside className="saveds h-full fixed top-0 mt-0 flex px-2 py-6 flex-col justify-between  overflow-y-auto ">
       <Favorites/>
        </aside>
        </>
    )
}