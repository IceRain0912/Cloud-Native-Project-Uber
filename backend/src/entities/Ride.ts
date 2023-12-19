import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import Transaction from "./Transaction";
import User from './User';

@Entity()
class Ride extends BaseEntity {
  @PrimaryGeneratedColumn() ID: number;

  @Column({ type: "int" })
  TransactionID: number;

  @Column({ type: "int", nullable: true })
  DriverID: number;

  @Column({ type: "int", default: 0 })
  MaximumCapacity: number;

  @Column({ type: "int" })
  RouteID: number;

  @ManyToOne(type => User, user => user.RidesAsDriver, { nullable: true })
  Driver: User;

  @OneToMany(type => Transaction, transaction => transaction.Ride)
  Transaction: Transaction[];

  @CreateDateColumn() createdAt: string;

  @UpdateDateColumn() updatedAt: string;
}

export default Ride;