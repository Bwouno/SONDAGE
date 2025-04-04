import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Poll } from './poll.entity';
import { CreatePollDto } from './dto/create-poll.dto';

@Injectable()
export class PollService {
  constructor(
    @InjectRepository(Poll)
    private pollRepository: Repository<Poll>,
  ) {}

  async create(createPollDto: CreatePollDto): Promise<Poll> {
    const { title, description, options, singleChoice } = createPollDto;
    const poll = this.pollRepository.create({
      title,
      description,
      options,
      singleChoice,
      votes: [],
    });
    return this.pollRepository.save(poll);
  }

  async findAll(): Promise<Poll[]> {
    return this.pollRepository.find();
  }

  async getPollById(id: number): Promise<Poll> {
    const poll = await this.pollRepository.findOne({ where: { id } });
    if (!poll) {
      throw new NotFoundException(`Poll with ID ${id} not found`);
    }
    return poll;
  }
}
