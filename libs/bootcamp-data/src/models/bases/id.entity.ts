import { CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import { IIdEntity } from '../interfaces';

export class IdEntity implements IIdEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDateTime: Date;
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  lastChangedDateTime: Date;
}
