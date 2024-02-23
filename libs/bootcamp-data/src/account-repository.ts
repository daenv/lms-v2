import { Account, IRepository, QueryOptions } from '@app/bootcamp-entity';
import { Repository } from 'typeorm';
import { AccountEntity } from './models';
import { InjectRepository } from '@nestjs/typeorm';

export class AccountRepository implements IRepository<string, Account> {
  constructor(
    @InjectRepository(AccountEntity)
    private readonly _repository: Repository<AccountEntity>,
  ) {}
  public async create(entity: Partial<Account>): Promise<Account> {
    const result = await this._repository.save(entity);
    return result;
  }
  getAll(): Promise<Account[]> {
    console.log('Get all accounts');
    throw new Error('Method not implemented.');
  }
  get(id: string): Promise<Account> {
    throw new Error('Method not implemented.');
  }
  getByQuery(query: object) {
    throw new Error('Method not implemented.');
  }
  save(entity: Account): Promise<Account> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  //   public async getAll(option?: QueryOptions): Promise<Account[]> {}
}
