import bcrypt from 'bcrypt';
import {
  BaseEntity, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, JoinColumn
} from 'typeorm';
import Car from './Car';
import Transaction from './Transaction';
import Ride from './Ride';
import Rating from './Rating';

const BCRYPT_ROUNDS = 10;

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn() ID: number;

  @Column({ type: "text" })
  Name: string;

  @Column({ type: "text", nullable: true })
  Password: string;

  @Column({ type: "int", nullable: true })
  Sex: number;

  @Column({ type: "int", nullable: true })
  Age: number;

  @Column({ type: "int", nullable: true, default: 0  })
  DriverRating: number;

  @Column({ type: "int", nullable: true, default: 0  })
  PassengerRating: number;

  @Column({ type: "int", nullable: true  })
  DriverPreferredRouteID: number;

  @Column({ type: "int", nullable: true })
  PassengerPreferredRouteID: number;

  @Column({ type: "int", nullable: true })
  CarID: number;

  @Column({ type: "text", nullable: true })
  EmailAddress: string;

  @Column({ type: "text", nullable: true })
  PhoneNumber: string;

  @Column({ type: "text", nullable: true })
  CreditCardNumber: string;

  @OneToMany(type => Ride, ride => ride.Driver)
  RidesAsDriver: Ride[];

  @OneToMany(type => Transaction, Transaction => Transaction.Passenger)
  Transaction: Transaction[];

  @OneToOne(type => Car, Car => Car.Owner)
  @JoinColumn()
  Car: Car;

  @OneToMany(type => Rating, Rating => Rating.Rater)
  RatingAsRater: Rating[];

  @OneToMany(type => Rating, Rating => Rating.Rated)
  RatingAsRated: Rating[];

  @CreateDateColumn() createdAt: string;

  @UpdateDateColumn() updatedAt: string;

  public comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.Password);
  }

  @BeforeInsert()
  @BeforeUpdate()
  async savePassword(): Promise<void> {
    if (this.Password) {
      const hashedPassword = await this.hashPassword(this.Password);
      this.Password = hashedPassword;
    }
  }

  private hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, BCRYPT_ROUNDS);
  }
}

export default User;