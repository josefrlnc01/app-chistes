import { useState } from 'react';
import { speak } from '../utils/tts';
import chistesData from '../data/chistes.json'
import { useFavoritesStore } from '../features/jokes/favorites/favoritesStore';
import { gsap } from "gsap";

const BACKUP_JOKES = [
  "¿Qué le dice un jaguar a otro jaguar? Jaguar you",
  "¿Cómo se despiden los químicos? Ácido un placer",
  "¿Qué le dice una iguana a su hermana gemela? Somos iguanitas"
];

// Use a supported model from WebLLM
const SELECTED_MODEL =   "gemma-2-2b-it-q4f32_1-MLC";

let engine = null;
let isModelLoading = false;



export  default  function Jokes({saved,setSaved}){
    const [loading, setLoading] = useState(false);
  
  const [error, setError] = useState('');
  const [chistes, setChistes] = useState('')
  const [chisteActual, setChisteActual] = useState('')
  const {addJoke, removeJoke} = useFavoritesStore()
 
  

    const [jokes, setJokes] = useState(chistesData);

    

    const mostrarChisteAleatorio = () => {
      try {
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        setChisteActual(randomJoke.chiste);
        gsap.fromTo('.card',
          {rotationX:0, opacity:.5},
          {rotationX:360,
          opacity:1,
            yoyo:true}
        )
      } catch (error) {
        console.error('Error al mostrar el chiste:', error);
        // Fallback to backup jokes if there's an error
        const backupJoke = BACKUP_JOKES[Math.floor(Math.random() * BACKUP_JOKES.length)];
        setChisteActual(backupJoke);
        speak(backupJoke);
      }
    }
   

  
  return (
  <>
  <main>
    <div className="min-w-full min-h-screen  text-center flex flex-col justify-startitems-center gap-20
    " >
      
      <div className='min-w-52 min-h-full mt-10 flex-col justify-center items-center'>
        
        <button onClick={mostrarChisteAleatorio} className='bg-green-300 px-12 py-8 rounded-xl text-white'  >CONTAR CHISTE</button>
        <div className=' card min-w-60 max-w-60 min-h-72 mx-auto mt-16 border-x-slate-950 flex flex-col justify-between bg-slate-300 text-white px-8 py-12 rounded-md shadow-xl'>
        <p className='text-lg'>{chisteActual.toUpperCase()}</p>
        <div className=' min-w-full min-h-full px-2 py-4  text-white flex flex-row justify-center gap-2  rounded-lg' >
        <button className='bg-white  px-6 py-6  rounded-md' onClick={() => speak(chisteActual)}>🔊​</button>
        <button className='bg-white  px-6 py-6  rounded-md' onClick={() => addJoke(chisteActual)}>⭐​​</button>
        </div>
        </div>
        
      </div>
    </div>
  </main>
  </>
  )
}