import { io } from 'socket.io-client';

//should really learn how to use enviroment variables
const URL = 'https://italowebhome.xyz';

export const socket = io(URL, {autoConnect: false});