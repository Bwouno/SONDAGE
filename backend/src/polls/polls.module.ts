import { Module } from '@nestjs/common';
import { PollsController } from './poll.controller';
import { PollService } from './poll.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poll } from './poll.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Poll])],
  controllers: [PollsController], // Assure-toi que PollsController est ici
  providers: [PollService],
})
export class PollsModule {}
