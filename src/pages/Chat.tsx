import { FormEvent, useEffect, useState } from 'react';
import style from '../styles/chat.module.scss';
import { socket } from '../lib/socket';
//import axios from 'axios'; <--- log loading, dont know if i will do that
//import { getConfig } from '../lib/utils';
import { msg } from '../lib/interfaces';

function Chat(){
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [imgIndex, setImgIndex] = useState(0)
    const [connection, setConnection] = useState(socket.connected)
    const [log, setLog] = useState(new Array<msg>)

    useEffect(() => {    
        /*testing: */
        setLog([{name: 'italo', message: 'oi', picId: 0},{name: 'teste', message: 'teste', picId: 4},{name: 'italo', message: 'que', picId: 0}])

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

    function getProfilePic(){
        switch (imgIndex){
            case 1: return '/profiles/guy.png'
            case 2: return '/profiles/charon.png'
            case 3: return '/profiles/dog.png'
            case 4: return '/profiles/robot.png'
        }
        return '/profiles/cats.png'
    }

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
        <div id={style.profile}>
            <p>Foto de perfil:</p>
            <img id={style.profilepic} src={getProfilePic()} alt="Foto de perfil" />
            <select name="pictures" id="pictures" onChange={(e) => {setImgIndex(e.target.selectedIndex)}}>
                <option value={0}>Gatos</option>
                <option value={1}>Cara</option>
                <option value={2}>Caronte</option>
                <option value={3}>Cachorro?</option>
                <option value={4}>Robô</option>
            </select>
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div id={style.form}>
            <form onSubmit={(e) => {sendMessage(e)}}>
                <label htmlFor="name">Mensagem</label>
                <input type="text" name="message" id="message"  value={message} onChange={(e) => setMessage(e.target.value)}/>
                <button type="submit">Enviar</button>
            </form>
        </div>
        <Messages/>
    </div>
    )
}

export default Chat