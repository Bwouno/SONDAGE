import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway(3000, { cors: { origin: '*' } }) // Connexion WebSocket
export class ChatGateway {
  // Nom de la classe modifié
  @WebSocketServer() server: Server; // Expose l'instance de Server pour être accessible

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): string {
    console.log('Message reçu:', message);
    return `Message reçu : ${message}`;
  }
}
