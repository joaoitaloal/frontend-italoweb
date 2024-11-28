import { Application, Sprite, Texture } from 'pixi.js';
import { useEffect } from 'react';
import style from '../styles/pongGame.module.scss';

function PongGame(){
    const app = new Application();

    function initGame(){
        //Setting the scene
        const squareB = new Sprite(Texture.WHITE);
        squareB.height = 200;
        squareB.width = 30;
        squareB.tint = 0xff0000;

        squareB.x = app.canvas.width / 8;
        squareB.y = app.canvas.height / 2;
    
        squareB.anchor.x = 0.5;
        squareB.anchor.y = 0.5;
    
        app.stage.addChild(squareB);

        const squareA = new Sprite(Texture.WHITE);
        squareA.height = 200;
        squareA.width = 30;
        squareA.tint = 0x0000ff;

        squareA.x = 7*app.canvas.width / 8;
        squareA.y = app.canvas.height / 2;
    
        squareA.anchor.x = 0.5;
        squareA.anchor.y = 0.5;
    
        app.stage.addChild(squareA);
        
        //Input handling
        const keys = new Set<string>();
        window.addEventListener("keydown", (e) =>{ //should i manually remove these event listeners when the component unmounts?
            keys.add(e.key)
        })
        window.addEventListener("keyup", (e) =>{
            keys.delete(e.key)
        })

        //"Physics" process
        app.ticker.add(() => {
            if(keys.has("ArrowUp") || keys.has("w")){
                squareA.y-=4;
            }
            if(keys.has("ArrowDown") || keys.has("s")){
                squareA.y+=4;
            }
        });
    }

    useEffect(() => {
        let gameDiv = document.getElementById("Game");

        if(gameDiv)
            app.init({background: '#111', resizeTo: gameDiv}).then(initGame).then(() =>{
                gameDiv.appendChild(app.canvas);
            });
    },[])

    return(
        <>        
            <div id="Game" className={style.pong}>
            </div>
        </>
    )    
}

export default PongGame;