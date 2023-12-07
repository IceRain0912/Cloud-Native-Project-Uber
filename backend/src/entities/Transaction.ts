import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import User from './User';
  import Ride from "./Ride";
  import Car from "./Car";
  
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
  
    @ManyToOne(type => User, User => User.Transactions)
    Passenger: User;

    @ManyToOne(type => Ride, Ride => Ride.Transactions)
    Ride: Ride;

    @ManyToOne(type => Car, Car => Car.Transactions)
    Car: Car;
  
    @CreateDateColumn() createdAt: string;
  
    @UpdateDateColumn() updatedAt: string;
  }
  
  export default Trasaction;