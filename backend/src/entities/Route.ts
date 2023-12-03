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
  import Location from "./Location";
  
  @Entity()
  class Route extends BaseEntity {
    @PrimaryGeneratedColumn() ID: number;

    @Column({ type: "int" })
    DriverID: number;

    @Column({ type: "int" })
    StartingPointID: number;

    @Column("int", { array: true })
    MiddlePointsID: number[];

    @Column({ type: "int" })
    DestinationID: number;
  
    @OneToOne(type => User, User => User.Transaction)
    Passenger: User;

    @ManyToOne(type => Location, Location=> Location.LocationAsStarting)
    Starting: Location;

    @ManyToOne(type => Location, Location=> Location.LocationAsDistination)
    Distination: Location;
  
    @CreateDateColumn() createdAt: string;
  
    @UpdateDateColumn() updatedAt: string;
  }
  
  export default Route;