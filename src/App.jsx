import './index.css' 
import Jokes from "./components/jokes";
import Header from './components/header';
import PanelSaveds from './components/saveds';
import { useState } from 'react';
import Resolveds from './components/jokes';
import Flyer from './components/flyer';
// Backup jokes in case the model fails






export default function App() {
    const [menuToggle, setMenuToggle] = useState(false)
    const [readyForCanvas, setReadyForCanvas] = useState(null);
    const [saved, setSaved] = useState('')
    



 return (
  <>
  <Header
  menuToggle = {menuToggle}
  setMenuToggle={setMenuToggle}
  
  />
  {readyForCanvas ? <Flyer joke={saved} readyForCanvass={readyForCanvas} setReadyForCanvas={setReadyForCanvas} /> : null}

  <Jokes
  setReadyForCanvas={setReadyForCanvas}
  />
  </>
 )
}