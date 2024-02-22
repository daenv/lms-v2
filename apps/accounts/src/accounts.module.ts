import { Module } from '@nestjs/common';
import { AccountsController } from './accounts.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { DatabaseModule } from '@app/common/databases/database.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule],
  controllers: [AccountsController],
  providers: [ConfigService],
})
export class AccountsModule {}
