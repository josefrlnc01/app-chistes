import './index.css' 
import Jokes from "./components/jokes";
import Header from './components/header';
import PanelSaveds from './components/saveds';
import { useState } from 'react';
import Resolveds from './components/jokes';
// Backup jokes in case the model fails






export default function App() {
    const [menuToggle, setMenuToggle] = useState(false)
    const [saved, setSaved] = useState('')
 return (
  <>
  <Header
  menuToggle = {menuToggle}
  setMenuToggle={setMenuToggle}
  
  />
  
  
  <Jokes
  saved={saved}
  setSaved={setSaved}/>
  </>
 )
}