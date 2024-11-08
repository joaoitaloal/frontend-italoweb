import style from '../styles/blog.module.scss';
import { useAcessibility } from '../components/NavBar.tsx'; 
import { useState } from 'react';

function Blog(){
    //acessibility
    const [nightmode, setNightmode] = useState(false)
    const acess = useAcessibility()

    return(
        <div id={style.blog} style={{backgroundColor: nightmode?'black':'white', color: nightmode?'white':'black'}}>
            <h1>Blog</h1>
            <p>Bem vindo ao meu blog, aqui vão ter vários pensamentos soltos, pequenos textos sobre qualquer coisa e o que mais eu quiser escrever e deixar publico</p>
            <p>Já que provavelmente será uma página de puro texto, vou dar algumas opções de estilo pra não ser muito ruim de ler:</p>
            <div>
                <input type="checkbox" name="nightmode" id="nightmode" onChange={() => setNightmode(prevstate => !prevstate)}/> <label htmlFor="nightmode">Modo escuro para a janela</label> <br />
                <input type="checkbox" name="darkbg" id="darkbg" onChange={() => acess(prevstate => !prevstate)}/> <label htmlFor="blackbg">Fundo da página escuro</label>
            </div>
        </div>
    )
}

export default Blog