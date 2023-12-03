import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { rideStatus } from '../types/types';
import Chat from './Chat';
import User from './User';

@Entity()
class Ride extends BaseEntity {
  @PrimaryGeneratedColumn() ID: number;

  @Column({
    type: "text",
    enum: ["ACCEPTED", "FINISHED", "CANCELED", "REQUESTING", "ONROUTE"],
    default: "REQUESTING"
  })
  status: rideStatus;

  @Column({ type: "int" })
  TransactionID: number;

  @Column({ type: "int", nullable: true })
  DriverID: number;

  @Column({ type: "int", default: 0 })
  MaximumCapacity: number;

  @Column({ type: "int" })
  RouteID: number;

  @ManyToOne(type => User, user => user.ridesAsPassenger)
  passenger: User;

  @ManyToOne(type => User, user => user.Rides, { nullable: true })
  driver: User;

  @OneToOne(type => Chat, chat => chat.ride)
  @JoinColumn()
  chat: Chat;

  @Column({ nullable: true })
  chatId: number;

  @CreateDateColumn() createdAt: string;

  @UpdateDateColumn() updatedAt: string;
}

export default Ride;