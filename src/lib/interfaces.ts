export interface msg {
    name: string,
    message: string,
    picId: number,
    date: string,
    time: string
}

export interface NavLink{
    name: string,
    link: string
}

//pong information sent and received between the server and client
export interface PongInfo{
    playerRedY: number,
    playerBlueY: number,
    /*
    ballY: number,
    ballX: number,
    scoreboard: String,
    */
}