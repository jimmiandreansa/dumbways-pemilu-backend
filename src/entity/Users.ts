import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, OneToOne } from "typeorm";
import { Articles } from "./Articles";
import { Paslon } from "./Paslon";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  paslonId: number;

  @Column()
  fullname: string;

  @Column()
  address: string;

  @Column()
  gender: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Articles, (post) => post.users)
  articles: Articles[];

  @OneToOne(() => Paslon)
  @JoinColumn({ name: "paslonId", referencedColumnName: "id" })
  paslon: Paslon;
}
