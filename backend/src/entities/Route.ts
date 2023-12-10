import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
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

    @ManyToOne(type => Location, Location=> Location.LocationAsStarting)
    Starting: Location;

    @ManyToMany(type => Location, Location=> Location.LocationAsMidpoints)
    MiddlePoints: Location[];

    @ManyToOne(type => Location, Location=> Location.LocationAsDistination)
    Distination: Location;
  
    @CreateDateColumn() createdAt: string;
  
    @UpdateDateColumn() updatedAt: string;
  }
  
  export default Route;