import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    ManyToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import Route from './Route';
  
  @Entity()
  class Location extends BaseEntity {
    @PrimaryGeneratedColumn() ID: number;

    @Column({ type: "text" })
    Name: string;

    @Column({ type: "float" })
    Longtitude: number;

    @Column({ type: "float" })
    Latitude: number;
  
    @OneToMany(type => Route, Route => Route.Starting)
    LocationAsStarting: Route;

    @ManyToMany(type => Route, Route => Route.Distination)
    LocationAsDistination: Route;
  
    @CreateDateColumn() createdAt: string;
  
    @UpdateDateColumn() updatedAt: string;
  }
  
  export default Location;