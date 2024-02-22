import { Module } from '@nestjs/common';
import { AccountsController } from './accounts.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from '@app/common/databases/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USERNAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        // entities: ['dist/**/*.entity{.ts,.js}'],
        // synchronize: true,
      }),
    }),
  ],
  controllers: [AccountsController],
  // providers: [AccountsService],
})
export class AccountsModule {}
