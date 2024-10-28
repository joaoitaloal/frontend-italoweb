import { FormEvent, useEffect, useRef, useState } from 'react';
import style from '../styles/chat.module.scss';
import { socket } from '../lib/socket';
//import axios from 'axios'; <--- log loading, dont know if i will do that
//import { getConfig } from '../lib/utils';
import { msg } from '../lib/interfaces';

function Chat(){
    let focusQueue = false

    function Messages(){
        const [log, setLog] = useState(new Array<msg>)
        const [connection, setConnection] = useState(socket.connected)
        const [connectedUsers, setConnectedUsers] = useState(0);
        const scroll = useRef(null)

        useEffect(() => {    
            /*testing: 
            setLog([{name: 'italo', message: 'oi', picId: 0}])*/
    
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
            function onUserConnected(usersConnected: number){
                setConnectedUsers(usersConnected)
            }
    
            socket.on('connect', onConnect)
            socket.on('disconnect', onDisconnect)
            socket.on('message', onMessage)
            socket.on('userConnected', onUserConnected)
            return () => {
                socket.off('connect', onConnect)
                socket.off('disconnect', onDisconnect)
                socket.off('message', onMessage)
                socket.off('userConnected', onUserConnected)
                socket.disconnect();
            }
        },[])

        function ConnectionStatus(){
            return(
            <div id={style.status}>
                <h1>Status da conexão</h1>
                <p style={connection?{color: 'green'}:{color: 'red'}}>{connection?'Conectado':'Não conectado'}</p>
                {connection?<p style={{color: 'green'}}>Usuários conectados: {connectedUsers}</p>:<></>}
            </div>
            )
        }

        useEffect(() =>{
            if(focusQueue){
                document.getElementById('message')?.focus()
                focusQueue = false
            }
        },[])

        return(
            <>
            <div id={style.chatbox}>
                <div id={style.messages}>
                    {log.map((message) => {
                        console.log(log)
                        return(
                            <div className={style.message} onLoad={() =>{
                                //@ts-ignore  look what is the correct type to use here if i have time
                                scroll.current?.scrollIntoView()
                            }}>
                                <img src={getProfilePic(message.picId)} alt="Foto de perfil" />
                                <div className={style.text}>
                                    <p className={style.nameText}>{message.name}</p>
                                    <br />
                                    <p className={style.messageText}>{message.message}</p>
                                </div>
                            </div>
                        )
                    })}
                    <span ref={scroll}></span>
                </div>
            </div>
            <ConnectionStatus/>
            </>
        );
    }
    function MessageForm(props: any){
        const [message, setMessage] = useState('')

        function sendMessage(e: FormEvent){
            e.preventDefault()
            if(props.name == ''){
                window.alert('Insira um nome!')
            }else if(message == ''){
                window.alert('Insira uma mensagem!')
            }else{
                try{
                    socket.emit('message', {name: props.name, message: message, picId: props.imgIndex})
                    setMessage('')
                    focusQueue = true
                }
                catch{
                    console.error('error')
                }
            }
        }

        return(
            <div id={style.messageForm}>
                <form onSubmit={(e) => {sendMessage(e)}}>
                    <label htmlFor="message">Enviar mensagem</label>
                    <input type="text" name="message" id="message"  value={message} onChange={(e) => setMessage(e.target.value)}/>
                    <button type="submit">Enviar</button>
                </form>
            </div>

        )
    }
    function ProfileForm(props: any){
        const [nameText, setNameText] = useState('')

        return(
        <div id={style.profile}>
            <p>Foto de perfil:</p>
            <img id={style.profilepic} src={getProfilePic(props.imgIndex)} alt="Foto de perfil" />
            <select name="pictures" id="pictures" onChange={(e) => {props.setImgIndex(e.target.selectedIndex)}}>
                <option value={0}>Gatos</option>
                <option value={1}>Pessoa</option>
                <option value={2}>Caronte</option>
                <option value={3}>Cachorro?</option>
                <option value={4}>Robô</option>
            </select>
            <form onSubmit={(e) => {e.preventDefault(); props.setName(nameText)}}>
                <label htmlFor="name">Nome: {props.name}</label>
                <input type="text" name="name" id="name" value={nameText} onChange={(e) => setNameText(e.target.value)}/>
                <button type="submit">Confirmar</button>
            </form>
        </div>
        )
    }

    function Forms(){
        const [name, setName] = useState('')
        const [imgIndex, setImgIndex] = useState(0)

        return(
            <>
                <ProfileForm name={name} setName={setName} imgIndex={imgIndex} setImgIndex={setImgIndex}/>
                <MessageForm name={name} setName={setName} imgIndex={imgIndex} setImgIndex={setImgIndex}/>
            </>
        )
    }

    function getProfilePic(imgIndex: number){
        switch (imgIndex){
            case 1: return '/profiles/guy.png'
            case 2: return '/profiles/charon.png'
            case 3: return '/profiles/dog.png'
            case 4: return '/profiles/robot.png'
        }
        return '/profiles/cats.png'
    }

    return(
    <div id={style.chat}>
        <Forms/>
        <Messages/>
    </div>
    )
}

export default Chat