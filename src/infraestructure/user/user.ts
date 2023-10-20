import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  username: string;

  @Column()
  password: string;
}

export { User };
