import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
} from "typeorm";
import { Vote } from "./Vote";
import { Partai } from "./Partai";

@Entity()
export class Paslon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  namePaslon: string;

  @Column()
  numberPaslon: number;

  @Column({nullable: true})
  imagePaslon: string;

  @Column({ array: true })
  visiMisi: string;

  @Column({ array: true, nullable: true })
  koalisi: string;

  // Relations
  @OneToOne(() => Vote, (vote) => vote.paslon)
  vote: Vote;

  @OneToMany(() => Partai, (partai) => partai.paslon)
  partai: Partai[];
}
