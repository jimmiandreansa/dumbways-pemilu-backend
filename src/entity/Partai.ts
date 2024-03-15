import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Paslon } from "./Paslon";

@Entity()
export class Partai {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  namePartai: string;

  @Column({nullable: true})
  paslonId: number;

  @Column()
  ketumPartai: string;

  @Column({ array: true })
  visiMisi: string;

  @Column()
  address: string;

  @Column()
  logoPartai: string;

  // Relations
  @ManyToOne(() => Paslon, { eager: true })
  @JoinColumn({ name: "paslonId", referencedColumnName: "id" })
  paslon: Paslon;
}
