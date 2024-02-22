/* This TypeScript code defines an interface named `IDatabaseConfigAttributes` that specifies the
structure of database configuration attributes. Each attribute has a specific type such as `string`,
`number`, or `boolean`. Here's a breakdown of the attributes: */
export interface IDatabaseConfigAttributes {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  dialect: string; // e.g., 'postgres', 'mysql'
  synchronize?: boolean; // Optional, default: false (not recommended for production)
  logging?: boolean; // Optional, default: false
  entities?: string[]; // Optional, path to entities
  migrations?: string[];
}
