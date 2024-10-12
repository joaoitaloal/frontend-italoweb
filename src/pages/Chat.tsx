import { useState } from 'react';
import style from '../styles/chat.module.scss';
function Chat(){
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    function sendMessage(){
        
    }

    return(
    <div id={style.chat}>
        <form onSubmit={(e) => {e.preventDefault; sendMessage();}}>
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
            <label htmlFor="name">Mensagem</label>
            <input type="text" name="message" id="message"  value={message} onChange={(e) => setMessage(e.target.value)}/>
        </form>
        <div id={style.messages}>

        </div>
    </div>
    )
}

export default Chat