import { useFavoritesStore } from "../features/jokes/favorites/favoritesStore";
import {speak} from '../utils/tts'

export default function Favorites(){
    const { jokes, removeJoke} = useFavoritesStore()
    
  return (
    <div className="max-w-xl mx-auto min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-center">Mis Chistes Guardados</h2>
      {jokes.length === 0 ? (
        <p>No tienes chistes favoritos.</p>
      ) : (
        jokes.map((joke) => (
          <div key={joke.id} className="bg-gray-100 p-4 mb-3 rounded-md shadow w-5/6 mx-auto">
            <p>{joke.text}</p>
            <div className="mt-2 flex gap-3">
              <button onClick={() => speak(joke.text)} className="bg-green-500 px-3 py-1 text-white rounded">
                🔊 Reproducir
              </button>
              <button onClick={() => removeJoke(joke.id)} className="bg-red-600 px-3 py-1 text-white rounded">
                🗑 Eliminar
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}