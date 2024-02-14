import { Body, Controller, Get } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountsDto } from './dtos';

@Controller()
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  // @Post()
  // public async createAccount(@Body() createAccountDto: CreateAccountsDto) {
  //   return this.accountsService.createAccounts(createAccountDto);
  // }
}
