export interface IDatabaseConfigAttributes {
  username?: string;
  password?: string;
  host?: string;
  database?: string;
  port?: number | string;
  dialect?: string;
  logging?: boolean;
  urlDatabase?: string;
}
