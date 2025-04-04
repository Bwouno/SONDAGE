import { Controller, Get, Post, Body } from '@nestjs/common';
import { PollService } from './poll.service';
import { CreatePollDto } from './dto/create-poll.dto';
import { Poll } from './poll.entity';

@Controller('polls')
export class PollsController {
  constructor(private readonly pollService: PollService) {}

  @Get()
  async findAll(): Promise<Poll[]> {
    return this.pollService.findAll();
  }

  @Post()
  async create(@Body() createPollDto: CreatePollDto): Promise<Poll> {
    return this.pollService.create(createPollDto);
  }
}
