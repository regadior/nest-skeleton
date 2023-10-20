import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryColumn({ type: 'uuid' })
  id: string;
}

export { User };
