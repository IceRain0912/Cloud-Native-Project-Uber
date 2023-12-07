import bcrypt from 'bcrypt';
import {
  BaseEntity, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn
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

  @Column({ type: "text" })
  Sex: number;

  @Column({ type: "int" })
  Age: number;

  @Column({ type: "int" })
  DriverRating: number;

  @Column({ type: "int" })
  PassengerRating: number;

  @Column({ type: "int" })
  DriverPreferredRouteID: number;

  @Column({ type: "int" })
  PassengerPreferredRouteID: number;

  @Column({ type: "int" })
  CarID: number;

  @Column({ type: "text", nullable: true })
  EmailAddress: string | null;

  @Column({ type: "text", nullable: true })
  PhoneNumber: string;

  @Column({ type: "text", nullable: true })
  CreditCardNumber: string;

  @OneToMany(type => Ride, ride => ride.Driver)
  RidesAsDriver: Ride[];

  @OneToMany(type => Transaction, Transaction => Transaction.Passenger)
  Transactions: Transaction[];

  @OneToOne(type => Car, Car => Car.Owner)
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