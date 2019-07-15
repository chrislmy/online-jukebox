import socketIOClient from 'socket.io-client';
import config from '../config';

const environment = process.env.NODE_ENV;

const socket = socketIOClient(config.server.baseUrl[environment]);

export default socket;