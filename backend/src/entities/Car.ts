import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import User from './User';
  import Transaction from './Transaction';
  
  @Entity()
  class Car extends BaseEntity {
    @PrimaryGeneratedColumn() ID: number;

    @Column({ type: "text" })
    Comp: string;

    @Column({ type: "text" })
    Model: string;

    @Column({ type: "text" })
    PlateNum: string;

    @Column({ type: "int" })
    Capacity: number;
  
    @OneToOne(type => User, user => user.Car)
    Owner: User;

    @OneToMany(type => Transaction, transaction=> transaction.Car)
    Transaction: Transaction[];
  
    @CreateDateColumn() createdAt: string;
  
    @UpdateDateColumn() updatedAt: string;
  }
  
  export default Car;