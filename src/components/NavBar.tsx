import { Link, Outlet } from "react-router-dom";
import style from '../styles/navbar.module.scss';
import catIcon from '/iconOutlined.png';
import gamepadImg from '/gamepad.png';
import guitarImg from '/guitar.png';
import ghostImg from '/ghost.png';
import rghostImg from '/realghost.png'

function NavBar() {
    return (
        <>
            <div id={style.test}></div>
            <img id={style.gamepad} src={gamepadImg} />
            <img id={style.guitar} src={guitarImg} />
            <img id={style.ghost} src={ghostImg} />
            <img id={style.rghost} src={rghostImg} />
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