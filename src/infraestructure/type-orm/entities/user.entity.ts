import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;
}

export { UserEntity };
