import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PollsModule } from './polls/polls.module';
import { WebSocketModule } from './websocket/websocket.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT || '5432', 10),
      username: process.env.DATABASE_USERNAME || 'postgres',
      password: process.env.DATABASE_PASSWORD || '',
      database: process.env.DATABASE_NAME || 'mydatabase',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PollsModule,
    WebSocketModule, // Ajout du WebSocketModule
  ],
})
export class AppModule {}
