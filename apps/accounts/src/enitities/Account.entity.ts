import { IAccountEntity, IdEntity } from '@app/bootcamp-data';
import { Column, Entity, Index } from 'typeorm';
import { IsPhoneNumber } from 'class-validator';

@Entity({ name: 'account1' })
export class AccountEntity1 extends IdEntity implements IAccountEntity {
  @Column({ type: 'varchar', length: 300 })
  @Index('IX_Account_Username', { unique: true })
  username: string;

  @Column({ type: 'varchar', length: 300 })
  @Index('IX_Account_Email', { unique: true })
  email: string;

  @Column({ type: 'varchar', length: 300 })
  firstName: string;

  @Column({ type: 'varchar', length: 300 })
  lastName: string;

  @Column({ type: 'varchar', length: 300 })
  @Index('IX_Account_Phone', { unique: true })
  @IsPhoneNumber('VN')
  phone: string;

  @Column({ type: 'varchar', length: 300 })
  pw: string;

  @Column({ type: 'varchar', length: 300 })
  pwSalt: string;

  @Index('IX_Account_Token')
  @Column({ type: 'varchar', length: 4096, nullable: true })
  jwtToken: string;

  @Index('IX_Account_RefreshToken')
  @Column({ type: 'varchar', length: 4096, nullable: true })
  refreshToken: string;

  @Column({ type: 'boolean', default: false })
  verified: boolean;

  @Column({ type: 'varchar', nullable: true })
  verification: string;

  @Column({
    type: 'varchar',
    nullable: true,
    default: () => 'LOCATIONTIMESTAMP',
  })
  verificationExpires: Date;

  @Column({ type: 'integer', nullable: true, default: 0 })
  loginAttempts?: number;

  @Column({
    type: 'timestamp',
    nullable: true,
    default: () => 'LOCATIONTIMESTAMP',
  })
  blockExpires?: Date;

  @Column({
    type: 'varchar',
    array: true,
    nullable: false,
    default: '{"user"}',
  })
  roles: string[];
}
