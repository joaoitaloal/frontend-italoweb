import { Link, Outlet, useOutletContext } from "react-router-dom";
import '../main.css'
import style from '../styles/navbar.module.scss';
import { HomeIcon, ChatBubbleIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import catIcon from '/iconOutlined.png';
import gamepadImg from '/gamepad.png';
import guitarImg from '/guitar.png';
import ghostImg from '/ghost.png';
import rghostImg from '/realghost.png'
import DropdownNav from "./DropdownNav";
import { useEffect, useState } from "react";

export function useAcessibility(){
    return useOutletContext<React.Dispatch<React.SetStateAction<boolean>>>()
}

function BackgroundImgs(props: any){
    if(props.darkbg){return(<></>)}
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
    const [darkbg, setDarkbg] = useState(false);

    useEffect(() =>{
        document.body.style.backgroundColor = darkbg?'black':'initial';
        document.body.style.backgroundImage = darkbg?'none':'initial';
    },[darkbg])

    if(!window.matchMedia("(max-width: 1365px)").matches){
        return (
            <>
                <BackgroundImgs darkbg={darkbg}/>
                <div id={style.window}>
                    <div id={style.navbar}>
                        <img src={catIcon} alt="Icon" />
                            <nav>
                                <Link className={style.navItem} to='/'><HomeIcon className={style.icon}/>Home</Link>
                                <Link className={style.navItem} to='message'><EnvelopeClosedIcon className={style.icon}/>Mensagem</Link>
                                <Link className={style.navItem} to='chat'><ChatBubbleIcon className={style.icon}/>Chat</Link>
                                <DropdownNav/>
                                <a className={style.navItem} href='calculator'>Calculadora↗</a>
                            </nav>
                        <footer id={style.footer}>Criado por <a href="https://github.com/joaoitaloal" target="_blank">Italo!↗</a></footer>
                    </div>
                    <div id={style.scrollableContent}>
                        <Outlet context={setDarkbg satisfies React.Dispatch<React.SetStateAction<boolean>>}/>
                    </div>
                </div>
            </>
        )
    }else{
        return(
            <>
            <div id={style.window}>
                <div id={style.navbar}>
                <img src={catIcon} alt="Icon" />
                    <nav>
                        <Link className={style.navItem} to='/'>Home</Link>
                        <DropdownNav/>
                    </nav>
                    <footer id={style.footer}>Criado por <a href="https://github.com/joaoitaloal" target="_blank">Italo!↗</a></footer>
                </div>
                <Outlet />
            </div>
            </>
        )
    }
}

export default NavBar