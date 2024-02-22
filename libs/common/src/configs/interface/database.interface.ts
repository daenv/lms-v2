/* This TypeScript code is defining an interface `IDatabaseConfig` that specifies the database
configuration for different environments (development, production, and test). */
import { IDatabaseConfigAttributes } from './database-attributes.interface';

export interface IDatabaseConfig {
  development?: IDatabaseConfigAttributes;
  production?: IDatabaseConfigAttributes;
  test?: IDatabaseConfigAttributes;
}
