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
  
  @Entity()
  class Rating extends BaseEntity {
    @PrimaryGeneratedColumn() ID: number;

    @Column({ type: "int"  })
    RaterID: number;

    @Column({ type: "int"  })
    RatedPersonID: number;

    @Column({ type: "text" })
    RaterComments: string;

    @Column({ type: "int" })
    RouteID: number;
  
    @ManyToOne(type => User, User => User.RatingAsRater)
    Rater: User;

    @ManyToOne(type => User, User => User.RatingAsRated)
    Rated: User;
  
    @CreateDateColumn() createdAt: string;
  
    @UpdateDateColumn() updatedAt: string;
  }
  
  export default Rating;