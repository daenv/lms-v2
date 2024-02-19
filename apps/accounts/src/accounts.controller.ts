import { Body, Controller, Get } from '@nestjs/common';

import { CreateAccountsDto } from './dtos';

@Controller()
export class AccountsController {
  constructor() {}

  // @Post()
  // public async createAccount(@Body() createAccountDto: CreateAccountsDto) {
  //   return this.accountsService.createAccounts(createAccountDto);
  // }
}
