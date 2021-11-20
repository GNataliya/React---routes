import style from './style.module.css';
import { NavLink } from 'react-router-dom'; 

function Header() {
    return (

        <div className={style.container}>

            <ul className={style.headernav}>
                <li className={style.li}>
                    <NavLink to='/home' >Home</NavLink>
                </li>
                <li className={style.li}>
                    <NavLink to='/articles' >Articles about cats</NavLink>
                </li>
                <li className={style.li}>
                    <NavLink to='/pictures' >Pictures of cats</NavLink>
                </li>
            </ul>
            
        </div>
        
    )
}



export default Header;