import { Link, Outlet, useOutletContext } from "react-router-dom"
import style from "../styles/blog/blognav.module.scss"
import mainStyle from '../styles/navbar.module.scss';
import { HomeIcon } from "@radix-ui/react-icons"
import catIcon from '/iconOutlined.png';
import { useState } from "react";

export function useAccessibility(){
    return useOutletContext<React.Dispatch<React.SetStateAction<boolean>>>()
}

function BlogNav(){
    const [nightmode, setNightmode] = useState(false);
    
    function CatIcon(){
        if(window.matchMedia("(max-width: 1365px)").matches)
            return <> </>
        return <img src={catIcon} alt="Icon" />
    }
    return(
        <div id={style.blogRoot}>
            <div id={style.navbar}>
                <CatIcon/>
                <nav>
                    <a className={mainStyle.navItem} href="/"><HomeIcon className={mainStyle.icon}/>Home</a>
                    <Link className={mainStyle.navItem} to="">Blog</Link>
                    {/*<Link className={mainStyle.navItem} to="dev">Desenvolvimento</Link>
                    <Link className={mainStyle.navItem} to="philosophy">Filosofia</Link>*/}
                </nav>
                <footer id={style.footer}>
                    Criado por <a href="https://github.com/joaoitaloal" target="_blank">Italo!↗</a> <br />
                    <button onClick={() => setNightmode(prev => !prev)}>Modo escuro</button>
                </footer>
            </div>
            <div id={style.blogBody} style={{backgroundColor: nightmode?'black':'white', color: nightmode?'white':'black'}}>
                <Outlet context={setNightmode satisfies React.Dispatch<React.SetStateAction<boolean>>}/>
            </div>
        </div>
    )
}

export default BlogNav