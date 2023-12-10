import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { TransStatus } from '../types/types';
  import User from './User';
  import Ride from "./Ride";
  import Car from "./Car";
  
  @Entity()
  class Transaction extends BaseEntity {
    @PrimaryGeneratedColumn() ID: number;

    @Column({ type: "int" })
    PassengerID: number;

    @Column({ type: "text" })
    Payment: string;

    @Column({ type: "int" })
    RouteID: number;

    @Column({ type: "text" })
    DepartureTime: string;

    @Column({ type: "text" })
    ArrivalTime: string;

    @Column({ type: "int" })
    CarID: number;

    @Column({
      type: "text",
      enum: ["ACCEPTED", "FINISHED", "CANCELED", "REQUESTING", "ONROUTE"],
      default: "REQUESTING"
    })
    Status: TransStatus;

    @Column({ type: "text" })
    RequestTime: string;
  
    @ManyToOne(type => User, User => User.Transaction)
    Passenger: User;

    @ManyToOne(type => Ride, Ride => Ride.Transaction)
    Ride: Ride;

    @ManyToOne(type => Car, Car => Car.Transaction)
    Car: Car;
  
    @CreateDateColumn() createdAt: string;
  
    @UpdateDateColumn() updatedAt: string;
  }
  
  export default Transaction;