import { Link, Outlet } from "react-router-dom";
import style from '../styles/navbar.module.scss';
import catIcon from '/iconOutlined.png';

function NavBar() {
    return (
        <>
            <div id={style.window}>
                <div id={style.navbar}>
                <img src={catIcon} alt="Icon" />
                    <nav>
                        <Link to='/'>Página principal</Link>
                        <Link to='message'>Mande uma mensagem!</Link>
                        <Link to='chat'>Chat</Link>
                        {/* <Link to='test'>Teste</Link> */}
                        <a href='calculator'>Calculadora↗</a>
                    </nav>
                    <footer id={style.footer}>Criado por <a href="https://github.com/joaoitaloal" target="_blank">Italo!↗</a></footer>
                </div>
                <Outlet />
            </div>
            
        </>
    )
}

export default NavBar