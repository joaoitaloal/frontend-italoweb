import { FormEvent, useEffect, useState } from 'react';
import style from '../styles/chat.module.scss';
import { socket } from '../lib/socket';
//import axios from 'axios';
//import { getConfig } from '../lib/utils';
import { msg } from '../lib/interfaces';

function Chat(){
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [connection, setConnection] = useState(socket.connected)
    //object array: {name: "name", message: "message"}
    const [log, setLog] = useState(new Array<msg>)

    useEffect(() => {
        socket.connect();

        function onConnect(){
            setConnection(true)
        }
        function onDisconnect(){
            setConnection(false)
        }
        function onMessage(data: msg){
            setLog(prev => [...prev, data])
        }

        socket.on('connect', onConnect)
        socket.on('disconnect', onDisconnect)
        socket.on('message', onMessage)
        return () => {
            socket.off('connect', onConnect)
            socket.off('disconnect', onDisconnect)
            socket.off('message', onMessage)
            socket.disconnect();
        }
    },[])

    /*useEffect(() => {
        getMessages();
    },[])*/

    function Messages(){


        return(
            <div id={style.messages}>
                {connection?'connected':'not connected'}
                {log.map((message) => {
                    console.log(log)
                    return(
                        <div className={style.message}>
                            <p>Nome: {message.name}</p>
                            <p>{message.message}</p>
                        </div>
                    )
                })}
            </div>
        );
    }

    /*function getMessages(){
        axios.request(getConfig({ name: name, message: message}, 'get', '/sendchat'))
        .then((res) => {
            let data = res.data.map((msg: string) => {
                return JSON.parse(msg);
            })
            setLog([...log].concat(data))
        })
    }*/

    function sendMessage(e: FormEvent){
        e.preventDefault()
        try{
            socket.emit('message', {name: name, message: message})
        }
        catch{
            console.error('error')
        }
    }

    return(
    <div id={style.chat}>
        <form onSubmit={(e) => {sendMessage(e)}}>
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
            <label htmlFor="name">Mensagem</label>
            <input type="text" name="message" id="message"  value={message} onChange={(e) => setMessage(e.target.value)}/>
            <button type="submit">Enviar</button>
        </form>
        <Messages/>
    </div>
    )
}

export default Chat