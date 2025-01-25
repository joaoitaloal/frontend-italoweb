import { Link, Outlet, useOutletContext } from "react-router-dom"
import style from "../styles/blog/blognav.module.scss"
import mainStyle from '../styles/navbar.module.scss';
import { HomeIcon } from "@radix-ui/react-icons"
import catIcon from '/iconOutlined.png';
import { useEffect, useState } from "react";
import DropdownNav from "./DropdownNav";
import { NavLink } from "../lib/interfaces";

export function useAccessibility(){
    return useOutletContext<React.Dispatch<React.SetStateAction<boolean>>>()
}

function BlogNav(){

    useEffect(() =>{
        fetch('/api/update-visit', {method: 'POST'});
    },[])

    const [nightmode, setNightmode] = useState(false);
    
    function CatIcon(){
        if(window.matchMedia("(max-width: 1365px)").matches)
            return <> </>
        return <a href="/"><img src={catIcon} alt="Icon" /></a>
    }
    function NavBar(){
        if(window.matchMedia("(max-width: 1365px)").matches)
            return(
                <nav>
                    <a className={mainStyle.navItem} href="/"><HomeIcon className={mainStyle.icon}/>Home</a>
                    <DropdownNav itens={[
                        {name: "Blog", link: ""},
                        {name: "Desenvolvimento", link: "dev"},
                        {name: "Filosofia", link: "philosophy"}
                    ] satisfies NavLink[]}/>
                </nav>
            )

        return (
            <nav>
                <a className={mainStyle.navItem} href="/"><HomeIcon className={mainStyle.icon}/>Home</a>
                <Link className={mainStyle.navItem} to="">Blog</Link>
                <Link className={mainStyle.navItem} to="dev">Desenvolvimento</Link>
                <Link className={mainStyle.navItem} to="philosophy">Filosofia</Link>
            </nav>
        )
    }
    return(
        <div id={style.blogRoot}>
            <div id={style.navbar}>
                <CatIcon/>
                <NavBar/>
                <button onClick={() => setNightmode(prev => !prev)}>Modo escuro</button>
            </div>
            <div id={style.blogBody} style={{backgroundColor: nightmode?'black':'white', color: nightmode?'white':'black'}}>
                <Outlet context={setNightmode satisfies React.Dispatch<React.SetStateAction<boolean>>}/>
            </div>
            <footer id={style.footer}>
                Criado por <a href="https://github.com/joaoitaloal" target="_blank">Italo!↗</a> <br />
            </footer>
        </div>
    )
}

export default BlogNav