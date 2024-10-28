import { Link, Outlet } from "react-router-dom";
import style from '../styles/navbar.module.scss';
import { HomeIcon, ChatBubbleIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import catIcon from '/iconOutlined.png';
import gamepadImg from '/gamepad.png';
import guitarImg from '/guitar.png';
import ghostImg from '/ghost.png';
import rghostImg from '/realghost.png'
import DropdownNav from "./DropdownNav";

function BackgroundImgs(){
    return(
        <>
            {/*<div id={style.test}></div>*/}
            <img id={style.gamepad} src={gamepadImg} alt="Gamepad pixel art"/>
            <img id={style.guitar} src={guitarImg} alt="Guitar pixel art"/>
            <img id={style.ghost} src={ghostImg} alt="Ghost pixel art"/>
            <img id={style.rghost} src={rghostImg} alt="Ghost pixel art"/>
        </>
    )
}

function NavBar() {
    return (
        <>
            <BackgroundImgs/>
            <div id={style.window}>
                <div id={style.navbar}>
                <img src={catIcon} alt="Icon" />
                    <nav>
                        <Link className={style.navItem} to='/'><HomeIcon className={style.icon}/>Home</Link>
                        <Link className={style.navItem} to='message'><EnvelopeClosedIcon className={style.icon}/>Mensagem</Link>
                        <Link className={style.navItem} to='chat'><ChatBubbleIcon className={style.icon}/>Chat</Link>
                        <DropdownNav/>
                        {/* <a href="#" className={style.dropdown}><DotsVerticalIcon className={style.icon}/>Outros
                            <div className={style.dropdownContent}>
                                <Link to='chat'>Blog</Link>
                                <Link to='test'>Teste</Link>
                            </div>
                        </a>
                        <Link to='test'>Teste</Link> */}
                        <a className={style.navItem} href='calculator'>Calculadora↗</a>
                    </nav>
                    <footer id={style.footer}>Criado por <a href="https://github.com/joaoitaloal" target="_blank">Italo!↗</a></footer>
                </div>
                <Outlet />
            </div>
        </>
    )
}

export default NavBar