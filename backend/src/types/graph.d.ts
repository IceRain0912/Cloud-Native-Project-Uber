export const typeDefs = ["type CreateCarResponse {\n  ok: Boolean!\n  error: String\n  car: String\n}\n\ntype Mutation {\n  CreateCar(DriverID: Int!, StartingPointID: Int!, MiddlePointsID: [Int]!, DestinationID: Int!): CreateCarResponse!\n  CreateRoute(Comp: String!, Model: String!, PlateNum: String!, Capacity: Int!): CreateRouteResponse!\n  EmailSignIn(PhoneNumber: String!, Password: String!): EmailSignInResponse!\n  EmailSignUp(Name: String!, Password: String!, Sex: Int!, PhoneNumber: String!): EmailSignUpResponse!\n}\n\ntype Car {\n  ID: Int!\n  Comp: String!\n  Model: String!\n  PlateNum: String!\n  Capacity: Int!\n  Owner: User!\n  Transactions: Transaction\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Location {\n  ID: Int!\n  Name: String!\n  Longtitude: Float!\n  Latitude: Float!\n  LocationAsStarting: Route\n  LocationAsMidpoints: [Route]\n  LocationAsDistination: Route\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Rating {\n  ID: Int!\n  RaterID: Int!\n  RatedPersonID: Int!\n  RaterComments: String!\n  RouteID: Int!\n  Rater: User!\n  Rated: User!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Ride {\n  ID: Int!\n  TransactionID: Int!\n  DriverID: Int!\n  MaximumCapacity: Int!\n  RouteID: Int!\n  Driver: User!\n  Transactions: [Transaction]\n  createdAt: String!\n  updatedAt: String\n}\n\ntype CreateRouteResponse {\n  ok: Boolean!\n  error: String\n  route: String\n}\n\ntype Route {\n  ID: Int!\n  DriverID: Int!\n  StartingPointID: Int!\n  MiddlePointsID: [Int]\n  DestinationID: Int!\n  Starting: Location\n  MiddlePoints: [Location]\n  Distination: Location\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Transaction {\n  ID: Int!\n  PassengerID: Int!\n  Payment: String!\n  RouteID: Int!\n  DepartureTime: String!\n  ArrivalTime: String!\n  CarID: Int!\n  Status: TransStatus!\n  RequestTime: String!\n  Passenger: User!\n  Ride: Ride!\n  Car: Car!\n  createdAt: String!\n  updatedAt: String\n}\n\nenum TransStatus {\n  PENDING\n  APPROVED\n  REJECTED\n}\n\ntype EmailSignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype EmailSignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype GetMyProfileResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype Query {\n  GetMyProfile: GetMyProfileResponse!\n}\n\ntype User {\n  ID: Int!\n  Name: String!\n  Password: String\n  Sex: Int\n  Age: Int\n  DriverRating: Int\n  PassengerRating: Int\n  DriverPreferredRouteID: Int\n  PassengerPreferredRouteID: Int\n  CarID: Int\n  EmailAddress: String\n  PhoneNumber: String\n  CreditCardNumber: String\n  RidesAsDriver: [Ride]\n  Transactions: [Transaction]\n  Car: [Car]!\n  RatingAsRater: [Rating]\n  RatingAsRated: [Rating]\n  createdAt: String!\n  updatedAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  GetMyProfile: GetMyProfileResponse;
}

export interface GetMyProfileResponse {
  ok: boolean;
  error: string | null;
  user: User | null;
}

export interface User {
  ID: number;
  Name: string;
  Password: string | null;
  Sex: number | null;
  Age: number | null;
  DriverRating: number | null;
  PassengerRating: number | null;
  DriverPreferredRouteID: number | null;
  PassengerPreferredRouteID: number | null;
  CarID: number | null;
  EmailAddress: string | null;
  PhoneNumber: string | null;
  CreditCardNumber: string | null;
  RidesAsDriver: Array<Ride> | null;
  Transactions: Array<Transaction> | null;
  Car: Array<Car>;
  RatingAsRater: Array<Rating> | null;
  RatingAsRated: Array<Rating> | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface Ride {
  ID: number;
  TransactionID: number;
  DriverID: number;
  MaximumCapacity: number;
  RouteID: number;
  Driver: User;
  Transactions: Array<Transaction> | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface Transaction {
  ID: number;
  PassengerID: number;
  Payment: string;
  RouteID: number;
  DepartureTime: string;
  ArrivalTime: string;
  CarID: number;
  Status: TransStatus;
  RequestTime: string;
  Passenger: User;
  Ride: Ride;
  Car: Car;
  createdAt: string;
  updatedAt: string | null;
}

export type TransStatus = "PENDING" | "APPROVED" | "REJECTED";

export interface Car {
  ID: number;
  Comp: string;
  Model: string;
  PlateNum: string;
  Capacity: number;
  Owner: User;
  Transactions: Transaction | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface Rating {
  ID: number;
  RaterID: number;
  RatedPersonID: number;
  RaterComments: string;
  RouteID: number;
  Rater: User;
  Rated: User;
  createdAt: string;
  updatedAt: string | null;
}

export interface Mutation {
  CreateCar: CreateCarResponse;
  CreateRoute: CreateRouteResponse;
  EmailSignIn: EmailSignInResponse;
  EmailSignUp: EmailSignUpResponse;
}

export interface CreateCarMutationArgs {
  DriverID: number;
  StartingPointID: number;
  MiddlePointsID: Array<number>;
  DestinationID: number;
}

export interface CreateRouteMutationArgs {
  Comp: string;
  Model: string;
  PlateNum: string;
  Capacity: number;
}

export interface EmailSignInMutationArgs {
  PhoneNumber: string;
  Password: string;
}

export interface EmailSignUpMutationArgs {
  Name: string;
  Password: string;
  Sex: number;
  PhoneNumber: string;
}

export interface CreateCarResponse {
  ok: boolean;
  error: string | null;
  car: string | null;
}

export interface CreateRouteResponse {
  ok: boolean;
  error: string | null;
  route: string | null;
}

export interface EmailSignInResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface EmailSignUpResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface Location {
  ID: number;
  Name: string;
  Longtitude: number;
  Latitude: number;
  LocationAsStarting: Route | null;
  LocationAsMidpoints: Array<Route> | null;
  LocationAsDistination: Route | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface Route {
  ID: number;
  DriverID: number;
  StartingPointID: number;
  MiddlePointsID: Array<number> | null;
  DestinationID: number;
  Starting: Location | null;
  MiddlePoints: Array<Location> | null;
  Distination: Location | null;
  createdAt: string;
  updatedAt: string | null;
}
