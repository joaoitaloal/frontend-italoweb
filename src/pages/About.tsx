import style from '../styles/about.module.scss'

function About(){

    return(
        <div id={style.about}>
            <h1 id={style.title}>Sobre</h1>
            <div id={style.aboutbox}>
                <h2>Sobre</h2>
                <p>
                    Olá! meu nome é Ítalo e esse site é meu site pessoal, vou usar ele pra aprender coisas sobre web e talvez colocar qualquer coisa que eu tiver afim de vez em quando, não espere nada de muito especial nem elaborado, é realmente o que eu quiser quando eu quiser!
                </p>
                <p>
                    O site não vai estar sempre funcionando, pelo menos por enquanto. Provavelmente vou manter ele funcionando de noite das 18 as 22 horas, é pouco tempo mas po não tem muita coisa pra ver aqui. 
                </p>
                <p>
                    Dito isso, fique a vontade para mandar perguntas ou qualquer coisa na página de mensagens ou qualquer outro lugar que você consiga me encontrar
                </p>
            </div>
            <div id={style.todo}>
                <h2>Planos</h2>
                <ul>
                    <li>Display the names of the users connected to the chat(if they have chosen a name): <span className={style.done}>Thought about it a little more and i will not do it sorry me from the past</span></li>
                    <li>Make a little 'no messages yet' message for the chat, also make the log of messages from the day: <span className={style.done}>done</span></li>
                    <li>Make an english translation, still need to think how i will do it: <span className={style.notdone}>not done</span></li>
                    <li>About page: <span className={style.done}>done</span></li>
                    <li>Set a schedule: <span className={style.done}>done</span></li>
                    <li>Make a pong game: <span className={style.notdone}>not done</span></li>
                    <li>Display how many people connected in the chat: <span className={style.done}>done</span></li>
                    <li>Learn databases, sql postgres whatever: <span className={style.done}>done?</span></li>
                    <li>Make a page for devlogs and eventually create a blog page: <span className={style.notdone}>half done</span></li>
                    <li>Find a font to use: not done, maybe i could customize one but thats a lot of work: <span className={style.notdone}>not done</span></li>
                    <li>Make random pixel art to populate the background[?]: <span className={style.done}>done</span></li>
                    <li>Change the green color: <span className={style.done}>done, its red now</span></li>
                    <li>Fix background art causing side scrolling on small screens, to be honest thats a gigantic 
                    problem, i would need to think and adapt the entire site to mobile to fix it and i am 
                    absolutely not doing that atleast for now, so: not done probably forever: <span className={style.done}>done lets gooo</span></li>
                    <li>There is probably a way for me to send different files if the client is a mobile device, 	
                    that could be useful i think, should look into it: <span className={style.done}>not a priority, marking as done</span></li>
                </ul>
            </div>
        </div>
    )
}

export default About