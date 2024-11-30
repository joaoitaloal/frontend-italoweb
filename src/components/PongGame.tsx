import { Application, Graphics, Sprite, Text, Texture } from 'pixi.js';
import { useEffect } from 'react';
import style from '../styles/pongGame.module.scss';
import { Socket } from 'socket.io-client';
import { PongInfo } from '../lib/interfaces';

interface pongGameProps {
    socket: Socket;
    team: string;
}

function PongGame(props: pongGameProps){
    const app = new Application();
    let socket = props.socket;
    let keys = new Set(["ArrowUp", "ArrowDown", "w", "s"]);

    const PlayerRed = new Sprite(Texture.WHITE);
    const PlayerBlue = new Sprite(Texture.WHITE);
    const Ball = new Graphics().circle(400/2, 180/2, 8);
    const Scoreboard = new Text({text: "0x0", style: {fill: 0xffffff}}); 

    function initGame(){
        //Setting the scene
        let gameWidth = app.canvas.width;
        let gameHeight = app.canvas.height;

        Scoreboard.x = 0;
        Scoreboard.y = 0;
        app.stage.addChild(Scoreboard);

        PlayerRed.height = gameHeight/4;
        PlayerRed.width = 6;
        PlayerRed.tint = 0xff0000;

        PlayerRed.x = gameWidth / 8;
        PlayerRed.y = gameHeight / 2;
    
        PlayerRed.anchor.x = 0.5;
        PlayerRed.anchor.y = 0.5;
    
        app.stage.addChild(PlayerRed);

        PlayerBlue.height = gameHeight/4;
        PlayerBlue.width = 6;
        PlayerBlue.tint = 0x0000ff;

        PlayerBlue.x = 7*gameWidth / 8;
        PlayerBlue.y = gameHeight / 2;
    
        PlayerBlue.anchor.x = 0.5;
        PlayerBlue.anchor.y = 0.5;
    
        app.stage.addChild(PlayerBlue);

        Ball.fill(0xffffff);

        app.stage.addChild(Ball);
    }

    useEffect(() => {
        function updateGame(info: PongInfo){
            app.ticker.addOnce(() => {
                PlayerBlue.y = info.playerBlueY;
                PlayerRed.y = info.playerRedY;
                Ball.x = info.ballX;
                Ball.y = info.ballY;
                Scoreboard.text = info.scoreboard;
            })
        }
        
        function handleKeyDown(e: KeyboardEvent){
            if(keys.has(e.key))
                socket.emit('keydown', e.key);
        }
        function handleKeyUp(e: KeyboardEvent){
            if(keys.has(e.key))
                socket.emit('keyup', e.key);
        }

        app.init({background: '#111', width: 400, height: 180}).then(initGame).then(() =>{
            document.getElementById("Pong")?.appendChild(app.canvas);
        }).then(() =>{
            socket.on('tick', updateGame);

            //these will only be added if the user is playing
            window.addEventListener("keydown", handleKeyDown)
            window.addEventListener("keyup", handleKeyUp)
        })

        return () => {
            socket.emit('keyup', "all");
            socket.off('tick', updateGame);
            window.removeEventListener("keydown", handleKeyDown)
            window.removeEventListener("keyup", handleKeyUp)
        }
    },[])

    return(
        <>        
            <div id="Pong" className={style.pong}>
            </div>
        </>
    )    
}

export default PongGame;