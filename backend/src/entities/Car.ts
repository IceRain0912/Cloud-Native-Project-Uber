import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import User from './User';
  
  @Entity()
  class Car extends BaseEntity {
    @PrimaryGeneratedColumn() ID: number;

    @Column({ type: "text" })
    Comp: string;

    @Column({ type: "text" })
    Model: string;

    @Column({ type: "text" })
    Num: string;

    @Column({ type: "int" })
    Capacity: number;
  
    @OneToOne(type => User, user => user.Car)
    Owner: User;
  
    @CreateDateColumn() createdAt: string;
  
    @UpdateDateColumn() updatedAt: string;
  }
  
  export default Car;