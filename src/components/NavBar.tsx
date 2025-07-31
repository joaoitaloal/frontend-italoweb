import { Link, Outlet, useOutletContext } from "react-router-dom";
import style from '../styles/navbar.module.scss';
import { HomeIcon, ChatBubbleIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import catIcon from '/iconOutlined.png';
import gamepadImg from '/gamepad.png';
import guitarImg from '/guitar.png';
import ghostImg from '/ghost.png';
import rghostImg from '/realghost.png'
import DropdownNav from "./DropdownNav";
import { useEffect, useState } from "react";
import { NavLink } from "../lib/interfaces";

//Remove background
export function useAcessibility(){
    return useOutletContext<React.Dispatch<React.SetStateAction<boolean>>>()
}

function BackgroundImgs(props: any){
    if(props.darkbg){return(<></>)}
    return(
        <>
            <img id={style.gamepad} src={gamepadImg} alt="Gamepad pixel art"/>
            <img id={style.guitar} src={guitarImg} alt="Guitar pixel art"/>
            <img id={style.ghost} src={ghostImg} alt="Ghost pixel art"/>
            <img id={style.rghost} src={rghostImg} alt="Ghost pixel art"/>
        </>
    )
}

function NavBar() {
    const [darkbg, setDarkbg] = useState(false); // i dont think this is being used anymore? i need to check

    useEffect(() =>{
        fetch('/api/update-visit', {method: 'POST'});
    },[])

    useEffect(() =>{
        document.body.style.backgroundColor = darkbg?'black':'initial';
        document.body.style.backgroundImage = darkbg?'none':'initial';
    },[darkbg])

    if(!window.matchMedia("(max-width: 1365px)").matches){
        return (
            <div id={style.mainRoot}>
                <BackgroundImgs darkbg={darkbg}/>
                <div id={style.window}>
                    <div id={style.navbar}>
                        <Link to='/'><img src={catIcon} alt="Icon" /></Link>
                            <nav>
                                <Link className={style.navItem} to='/'><HomeIcon className={style.icon}/>Home</Link>
                                <Link className={style.navItem} to='message'><EnvelopeClosedIcon className={style.icon}/>Mensagem</Link>
                                <Link className={style.navItem} to='chat'><ChatBubbleIcon className={style.icon}/>Chat</Link>
                                <DropdownNav itens={[
                                    {name: "Sobre", link: "about"},
                                    {name: "Renderizador", link: "renderer"},
                                    {name:"Blog", link: "/blog"}
                                    ] satisfies NavLink[]}/>
                                <a className={style.navItem} href='/calculator'>Calculadora↗</a>
                            </nav>
                        <footer id={style.footer}>Criado por <a href="https://github.com/joaoitaloal" target="_blank">Italo!↗</a></footer>
                    </div>
                    <div id={style.scrollableContent}>
                        <Outlet context={setDarkbg satisfies React.Dispatch<React.SetStateAction<boolean>>}/>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div id={style.mainRoot}>
                <div id={style.window}>
                    <div id={style.navbar}>
                    <Link to='/'><img src={catIcon} alt="Icon" /></Link>
                        <nav>
                            <Link className={style.navItem} to='/'>Home</Link>
                            <DropdownNav itens={[
                                {name: "Mensagem", link: "message"},
                                {name: "Chat", link: "chat"},
                                {name: "Sobre", link: "about"},
                                {name: "Renderizador", link: "renderer"},
                                {name:"Blog", link: "/blog"},
                                {name: "Calculadora", link: "/calculator"}
                                ] satisfies NavLink[]}/>
                        </nav>
                        <footer id={style.footer}>Criado por <a href="https://github.com/joaoitaloal" target="_blank">Italo!↗</a></footer>
                    </div>
                    <div id={style.scrollableContent}>
                        <Outlet context={setDarkbg satisfies React.Dispatch<React.SetStateAction<boolean>>}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar