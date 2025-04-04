import { Injectable } from '@nestjs/common';
import { ChatGateway } from './websocket.gateway'; // Importation de WebSocketGateway
import { Server } from 'socket.io'; // Server pour émettre des événements

@Injectable()
export class WebSocketService {
  private server: Server;

  constructor(private readonly gateway: ChatGateway) {
    this.server = gateway.server; // Accède à l'instance du serveur WebSocket à partir du Gateway
  }

  sendToAll(message: string) {
    this.server.emit('message', message); // Envoie un message à tous les clients
  }
}
