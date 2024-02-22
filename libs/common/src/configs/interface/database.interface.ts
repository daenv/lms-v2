import { IDatabaseConfigAttributes } from './database-attributes.interface';

export interface IDatabaseConfig {
  development?: IDatabaseConfigAttributes;
  production?: IDatabaseConfigAttributes;
  test?: IDatabaseConfigAttributes;
}
