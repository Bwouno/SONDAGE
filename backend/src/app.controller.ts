// src/app.controller.ts
import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  @Get('*') // Capturer toutes les routes non définies
  serveFrontEnd(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', 'frontend', 'build', 'index.html'));
  }
}
