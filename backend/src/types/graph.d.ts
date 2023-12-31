export const typeDefs = ["type CreateBookResponse {\n  ok: Boolean!\n  error: String\n  book: Book\n}\n\ntype Mutation {\n  CreateBook(Title: String!, Author: String!, PageCount: Int!): CreateBookResponse!\n  CreateCar(Comp: String!, Model: String!, PlateNum: String!, Capacity: Int!): CreateCarResponse!\n  CreateLocation(Name: String!, Longtitude: Float!, Latitude: Float!): CreateLocationResponse!\n  CreateRating(RaterID: Int!, RatedPersonID: Int!, RateStars: Int!, RouteID: Int!): CreateRatingResponse!\n  CreateRide(MaximumCapacity: Int!, DriverID: Int!): CreateRideResponse!\n  CreateRoute(DriverID: Int!, StartingPointID: Int!, MiddlePointsID: [Int], DestinationID: Int): CreateRouteResponse!\n  CreateTransaction(PassengerID: Int!, RouteID: Int!, Payment: String!, DepartureTime: String!, CarID: Int!, RequestTime: String!): CreateTransactionResponse!\n  EmailSignIn(PhoneNumber: String!, Password: String!): EmailSignInResponse!\n  EmailSignUp(Name: String!, Password: String!, Sex: Int!, PhoneNumber: String!): EmailSignUpResponse!\n}\n\ntype GetBookResponse {\n  ok: Boolean!\n  error: String\n  book: Book\n}\n\ntype Query {\n  GetBook(BookID: Int!): GetBookResponse!\n  GetCar(CarID: Int!): GetCarResponse!\n  GetLocation(LocationID: Int!): GetLocationResponse!\n  GetRating(RateID: Int!): GetRatingResponse!\n  GetRide(RideID: Int!): GetRideResponse!\n  GetRoute(RouteID: Int!): GetRouteResponse!\n  GetRoutePoint(RouteID: Int!): GetRoutePointResponse!\n  GetTransaction(TransactionID: Int!): GetTransactionResponse!\n  GetUser(UserID: Int!): GetUserResponse!\n}\n\ntype Book {\n  ID: Int!\n  Title: String!\n  Author: String!\n  PageCount: Int!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype CreateCarResponse {\n  ok: Boolean!\n  error: String\n  car: Car\n}\n\ntype GetCarResponse {\n  ok: Boolean!\n  error: String\n  car: Car\n}\n\ntype Car {\n  ID: Int!\n  Comp: String!\n  Model: String!\n  PlateNum: String!\n  Capacity: Int!\n  Owner: User\n  Transaction: [Transaction]\n  createdAt: String!\n  updatedAt: String\n}\n\ntype CreateLocationResponse {\n  ok: Boolean!\n  error: String\n  location: Location\n}\n\ntype GetLocationResponse {\n  ok: Boolean!\n  error: String\n  location: Location\n}\n\ntype Location {\n  ID: Int!\n  Name: String!\n  Longtitude: Float!\n  Latitude: Float!\n  LocationAsStarting: Route\n  LocationAsMidpoints: [Route]\n  LocationAsDistination: Route\n  createdAt: String!\n  updatedAt: String\n}\n\ntype CreateRatingResponse {\n  ok: Boolean!\n  error: String\n  rating: Rating\n}\n\ntype GetRatingResponse {\n  ok: Boolean!\n  error: String\n  rating: Rating\n}\n\ntype Rating {\n  ID: Int!\n  RaterID: Int!\n  RatedPersonID: Int!\n  RaterComments: String!\n  RouteID: Int!\n  Rater: User!\n  Rated: User!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype CreateRideResponse {\n  ok: Boolean!\n  error: String\n  ride: Ride\n}\n\ntype GetRideResponse {\n  ok: Boolean!\n  error: String\n  ride: Ride\n}\n\ntype Ride {\n  ID: Int!\n  TransactionID: Int!\n  DriverID: Int!\n  MaximumCapacity: Int!\n  RouteID: Int!\n  Driver: User!\n  Transaction: [Transaction]!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype CreateRouteResponse {\n  ok: Boolean!\n  error: String\n  route: String\n}\n\ntype GetRouteResponse {\n  ok: Boolean!\n  error: String\n  route: Route\n}\n\ntype GetRoutePointResponse {\n  ok: Boolean!\n  error: String\n  route: Route\n}\n\ntype Route {\n  ID: Int!\n  DriverID: Int!\n  StartingPointID: Int!\n  MiddlePointsID: [Int]\n  DestinationID: Int!\n  Starting: Location\n  MiddlePoints: [Location]\n  Distination: Location\n  createdAt: String!\n  updatedAt: String\n}\n\ntype CreateTransactionResponse {\n  ok: Boolean!\n  error: String\n  transaction: Transaction\n}\n\ntype GetTransactionResponse {\n  ok: Boolean!\n  error: String\n  transaction: Transaction\n}\n\ntype Transaction {\n  ID: Int!\n  PassengerID: Int!\n  Payment: String!\n  RouteID: Int!\n  DepartureTime: String!\n  ArrivalTime: String!\n  CarID: Int!\n  Status: TransStatus!\n  RequestTime: String!\n  Passenger: User!\n  Ride: Ride!\n  Car: Car!\n  createdAt: String!\n  updatedAt: String\n}\n\nenum TransStatus {\n  PENDING\n  APPROVED\n  REJECTED\n}\n\ntype EmailSignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype EmailSignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype GetUserResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype User {\n  ID: Int!\n  Name: String!\n  Password: String\n  Sex: Int\n  Age: Int\n  DriverRating: Int\n  PassengerRating: Int\n  DriverPreferredRouteID: Int\n  PassengerPreferredRouteID: Int\n  CarID: Int\n  EmailAddress: String\n  PhoneNumber: String\n  CreditCardNumber: String\n  RidesAsDriver: [Ride]\n  Transaction: [Transaction]\n  Car: Car!\n  RatingAsRater: [Rating]\n  RatingAsRated: [Rating]\n  createdAt: String!\n  updatedAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  GetBook: GetBookResponse;
  GetCar: GetCarResponse;
  GetLocation: GetLocationResponse;
  GetRating: GetRatingResponse;
  GetRide: GetRideResponse;
  GetRoute: GetRouteResponse;
  GetRoutePoint: GetRoutePointResponse;
  GetTransaction: GetTransactionResponse;
  GetUser: GetUserResponse;
}

export interface GetBookQueryArgs {
  BookID: number;
}

export interface GetCarQueryArgs {
  CarID: number;
}

export interface GetLocationQueryArgs {
  LocationID: number;
}

export interface GetRatingQueryArgs {
  RateID: number;
}

export interface GetRideQueryArgs {
  RideID: number;
}

export interface GetRouteQueryArgs {
  RouteID: number;
}

export interface GetRoutePointQueryArgs {
  StartingPointID : number;
  DestinationID: number;
}

export interface GetTransactionQueryArgs {
  TransactionID: number;
}

export interface GetUserQueryArgs {
  UserID: number;
}

export interface GetBookResponse {
  ok: boolean;
  error: string | null;
  book: Book | null;
}

export interface Book {
  ID: number;
  Title: string;
  Author: string;
  PageCount: number;
  createdAt: string;
  updatedAt: string | null;
}

export interface GetCarResponse {
  ok: boolean;
  error: string | null;
  car: Car | null;
}

export interface Car {
  ID: number;
  Comp: string;
  Model: string;
  PlateNum: string;
  Capacity: number;
  Owner: User | null;
  Transaction: Array<Transaction> | null;
  createdAt: string;
  updatedAt: string | null;
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
  Transaction: Array<Transaction> | null;
  Car: Car;
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
  Transaction: Array<Transaction>;
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

export interface GetLocationResponse {
  ok: boolean;
  error: string | null;
  location: Location | null;
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

export interface GetRatingResponse {
  ok: boolean;
  error: string | null;
  rating: Rating | null;
}

export interface GetRideResponse {
  ok: boolean;
  error: string | null;
  ride: Ride | null;
}

export interface GetRouteResponse {
  ok: boolean;
  error: string | null;
  route: Route | null;
}

export interface GetRoutePointResponse {
  ok: boolean;
  error: string | null;
  route: Route | null;
}

export interface GetTransactionResponse {
  ok: boolean;
  error: string | null;
  transaction: Transaction | null;
}

export interface GetUserResponse {
  ok: boolean;
  error: string | null;
  user: User | null;
}

export interface Mutation {
  CreateBook: CreateBookResponse;
  CreateCar: CreateCarResponse;
  CreateLocation: CreateLocationResponse;
  CreateRating: CreateRatingResponse;
  CreateRide: CreateRideResponse;
  CreateRoute: CreateRouteResponse;
  CreateTransaction: CreateTransactionResponse;
  EmailSignIn: EmailSignInResponse;
  EmailSignUp: EmailSignUpResponse;
}

export interface CreateBookMutationArgs {
  Title: string;
  Author: string;
  PageCount: number;
}

export interface CreateCarMutationArgs {
  Comp: string;
  Model: string;
  PlateNum: string;
  Capacity: number;
}

export interface CreateLocationMutationArgs {
  Name: string;
  Longtitude: number;
  Latitude: number;
}

export interface CreateRatingMutationArgs {
  RaterID: number;
  RatedPersonID: number;
  RateStars: number;
  RouteID: number;
}

export interface CreateRideMutationArgs {
  MaximumCapacity: number;
  DriverID: number;
}

export interface CreateRouteMutationArgs {
  DriverID: number;
  StartingPointID: number;
  MiddlePointsID: Array<number> | null;
  DestinationID: number | null;
}

export interface CreateTransactionMutationArgs {
  PassengerID: number;
  RouteID: number;
  Payment: string;
  DepartureTime: string;
  CarID: number;
  RequestTime: string;
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

export interface CreateBookResponse {
  ok: boolean;
  error: string | null;
  book: Book | null;
}

export interface CreateCarResponse {
  ok: boolean;
  error: string | null;
  car: Car | null;
}

export interface CreateLocationResponse {
  ok: boolean;
  error: string | null;
  location: Location | null;
}

export interface CreateRatingResponse {
  ok: boolean;
  error: string | null;
  rating: Rating | null;
}

export interface CreateRideResponse {
  ok: boolean;
  error: string | null;
  ride: Ride | null;
}

export interface CreateRouteResponse {
  ok: boolean;
  error: string | null;
  route: string | null;
}

export interface CreateTransactionResponse {
  ok: boolean;
  error: string | null;
  transaction: Transaction | null;
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
