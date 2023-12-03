import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToOne,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import User from './User';
  import Ride from "./Ride";
  
  @Entity()
  class Trasaction extends BaseEntity {
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

    @Column({ type: "int" })
    Status: number;

    @Column({ type: "text" })
    RequestTime: string;
  
    @OneToOne(type => User, User => User.Transaction)
    Passenger: User;

    @ManyToOne(type => Ride, Ride => Ride.Transactions)
    Ride: Ride;
  
    @CreateDateColumn() createdAt: string;
  
    @UpdateDateColumn() updatedAt: string;
  }
  
  export default Trasaction;