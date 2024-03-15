import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Users } from "./Users";
import { Paslon } from "./Paslon";

@Entity()
export class Vote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  paslonId: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  voteDate: Date;

  // Relations
  @OneToOne(() => Users, (user) => user.vote)
  @JoinColumn({ name: "userId", referencedColumnName: "id" })
  user: Users;

  @OneToOne(() => Paslon, (paslon) => paslon.vote)
  @JoinColumn({ name: "paslonId", referencedColumnName: "id" })
  paslon: Paslon;
}
