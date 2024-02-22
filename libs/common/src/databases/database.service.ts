import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IDatabaseConfigAttributes } from '../configs';

@Injectable()
export class DatabaseService {
  constructor(private readonly configService: ConfigService) {}

  getDatabaseConfig(): IDatabaseConfigAttributes {
    return this.configService.get<IDatabaseConfigAttributes>('database');
  }
}
