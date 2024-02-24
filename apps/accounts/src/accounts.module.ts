import { Module } from '@nestjs/common';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@app/bootcamp-data';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AccountsController],
  providers: [AccountsService],
})
export class AccountsModule {}
