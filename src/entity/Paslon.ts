import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Users } from "./Users";

@Entity()
export class Paslon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  number: number;

  @Column()
  image: string;

  @Column({ array: true })
  visiMisi: string;

  @OneToOne(() => Users, (users) => users.paslon)
  users: Users;
}
