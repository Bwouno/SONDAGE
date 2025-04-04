import { Module } from '@nestjs/common';
import { ChatGateway } from './websocket.gateway';
import { WebSocketService } from './websocket.service';

@Module({
  providers: [ChatGateway, WebSocketService],
})
export class WebSocketModule {}
