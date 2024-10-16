import { io } from 'socket.io-client';

const URL = 'http://localhost:8002';

export const socket = io(URL, {autoConnect: false});