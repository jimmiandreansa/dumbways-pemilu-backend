import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Users } from "./Users";

@Entity()
export class Articles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  imageUrl: string;

  @Column({ type: "bool", default: false })
  isHeadline: boolean;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdDate: Date;

  @ManyToOne(() => Users, {eager: true})
  @JoinColumn({ name: "userId", referencedColumnName: "id" })
  users: Users;
}
