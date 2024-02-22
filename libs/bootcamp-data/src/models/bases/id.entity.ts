import { CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import { IIdEntity } from '../interfaces';

export class IdEntity implements IIdEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @CreateDateColumn({ type: 'timestamptz' })
  createDateTime: Date;
  @CreateDateColumn({ type: 'timestamptz' })
  lastChangedDateTime: Date;
}
