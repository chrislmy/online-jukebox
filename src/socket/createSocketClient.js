import socketIOClient from 'socket.io-client';
import config from '../config';

const socket = socketIOClient(config.server.SERVER_BASE_ENDPOINT);

export default socket;