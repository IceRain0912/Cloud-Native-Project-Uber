import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity()
  class Book extends BaseEntity {
    @PrimaryGeneratedColumn()
    ID: number;
  
    @Column({ type: 'text' })
    Title: string;
  
    @Column({ type: 'text' })
    Author: string;
  
    @Column({ type: 'int' })
    PageCount: number;
  
    @CreateDateColumn()
    createdAt: string;
  
    @UpdateDateColumn()
    updatedAt: string;
  }
  
  export default Book;
  