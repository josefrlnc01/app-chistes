import menuIcon from '../assets/menu-abierto.webp'
import PanelSaveds from './saveds'
export default function Header({menuToggle, setMenuToggle}){
    
    const mostrarMenu = () => {
        if(!menuToggle){
            setMenuToggle(true)
        }
       else{
        setMenuToggle(false)
       }
    }
    return(
        <>
        <header className="flex flex-row items-center pt-4 min-w-max min-h-4 ">
            <button type='button' className="px-2 py-2 bg-transparent ml-4 rounded-md z-10"><img alt='logo de menu' className='w-9' src={menuIcon} onClick={mostrarMenu} />​</button>
        {menuToggle ? <PanelSaveds
        /> : ''}
        </header>
        </>
    )
}