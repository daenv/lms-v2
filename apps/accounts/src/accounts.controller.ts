import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { Request } from 'express';

@Controller()
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  async getAccount(@Req() req: Request) {
    console.log(req?.body.name);
  }
  @Get('/:id')
  async getAccounts(@Param('id') id: string) {
    console.log(id);
  }
}
