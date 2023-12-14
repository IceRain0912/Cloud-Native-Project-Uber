export const typeDefs = ["type CreateBookResponse {\n  ok: Boolean!\n  error: String\n  book: Book\n}\n\ntype Mutation {\n  CreateBook(Title: String!, Author: String!, PageCount: Int!): CreateBookResponse!\n  CreateCar(DriverID: Int!, StartingPointID: Int!, MiddlePointsID: [Int]!, DestinationID: Int!): CreateCarResponse!\n CreatePosition(UserID: Int!, Longtitude: Float!, Latitude: Float!): CreatePositionResponse\n UpdatePosition(positionID: Int!, Longtitude: Float!, Latitude: Float!): UpdatePositionResponse\n CreateLocation(Name: String!,  Longtitude: Float!,  Latitude: Float!):CreateLocationResponse!\n CreateRating(RaterID: Int!,  RatedPersonID: Int!,  RaterComments: String!,  RouteID: Int!):CreateRatingResponse!\n CreateRide(MaximumCapacity: Int!, DriverID: Int!): CreateRideResponse!\n CreateTransaction(PassengerID: Int!,  RouteID: Int!,  Payment: String!,  DepartureTime: String!,  CarID: Int!,  RequestTime: String!):CreateTransactionResponse!\n CreateRoute(Comp: String!, Model: String!, PlateNum: String!, Capacity: Int!): CreateRouteResponse!\n  EmailSignIn(PhoneNumber: String!, Password: String!): EmailSignInResponse!\n  EmailSignUp(Name: String!, Password: String!, Sex: Int!, PhoneNumber: String!): EmailSignUpResponse!\n}\n\ntype GetBookResponse {\n  ok: Boolean!\n  error: String\n  book: Book\n}\n\ntype Query {\n  GetBook: GetBookResponse!\n  GetCar: GetCarResponse!\n  GetRoute: GetRouteResponse!\n  GetUser: GetUserResponse!\n GetTransaction: GetTransactionResponse!\n GetRide: GetRideResponse!\n GetRating: GetRatingResponse!\n GetLocation: GetLocationResponse!\n GetPosition: GetPositionResponse!\n}\n\ntype Book {\n  ID: Int!\n  Title: String!\n  Author: String!\n  PageCount: Int!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype CreateCarResponse {\n  ok: Boolean!\n  error: String\n  car: Car\n}\n\ntype CreateLocationResponse {\n  ok: Boolean!\n  error: String\n  location: Location\n}\n\ntype CreatePositionResponse {\n  ok: Boolean!\n  error: String\n  position: Position\n}\n\ntype UpdatePositionResponse {\n  ok: Boolean!\n  error: String\n  position: Position\n}\n\ntype CreateRatingResponse {\n  ok: Boolean!\n  error: String\n  rating: Rating\n}\n\ntype CreateRideResponse {\n  ok: Boolean!\n  error: String\n  ride: Ride\n}\n\ntype CreateTransactionResponse {\n  ok: Boolean!\n  error: String\n  transaction: Transaction\n}\n\ntype GetCarResponse {\n  ok: Boolean!\n  error: String\n  car: Car\n}\n\ntype Car {\n  ID: Int!\n  Comp: String!\n  Model: String!\n  PlateNum: String!\n  Capacity: Int!\n  Owner: User!\n  Transaction: Transaction\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Location {\n  ID: Int!\n  Name: String!\n  Longtitude: Float!\n  Latitude: Float!\n  LocationAsStarting: Route\n  LocationAsMidpoints: [Route]\n  LocationAsDistination: Route\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Position {\n positionID: Int!\n UserID: Int!\n Longtitude: Float!\n Latitude: Float!\n}\n\ntype Rating {\n  ID: Int!\n  RaterID: Int!\n  RatedPersonID: Int!\n  RaterComments: String!\n  RouteID: Int!\n  Rater: User!\n  Rated: User!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Ride {\n  ID: Int!\n  TransactionID: Int!\n  DriverID: Int!\n  MaximumCapacity: Int!\n  RouteID: Int!\n  Driver: User!\n  Transactions: [Transaction]!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype CreateRouteResponse {\n  ok: Boolean!\n  error: String\n  route: Route\n}\n\ntype GetRouteResponse {\n  ok: Boolean!\n  error: String\n  route: Route\n}\n\ntype Route {\n  ID: Int!\n  DriverID: Int!\n  StartingPointID: Int!\n  MiddlePointsID: [Int]\n  DestinationID: Int!\n  Starting: Location\n  MiddlePoints: [Location]\n  Distination: Location\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Transaction {\n  ID: Int!\n  PassengerID: Int!\n  Payment: String!\n  RouteID: Int!\n  DepartureTime: String!\n  ArrivalTime: String!\n  CarID: Int!\n  Status: TransStatus!\n  RequestTime: String!\n  Passenger: User!\n  Ride: Ride!\n  Car: Car!\n  createdAt: String!\n  updatedAt: String\n}\n\nenum TransStatus {\n  PENDING\n  APPROVED\n  REJECTED\n}\n\ntype EmailSignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype EmailSignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype GetUserResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype GetTransactionResponse {\n  ok: Boolean!\n  error: String\n  transaction: Transaction\n}\n\ntype GetRideResponse {\n  ok: Boolean!\n  error: String\n  ride: Ride\n}\n\ntype GetRatingResponse {\n  ok: Boolean!\n  error: String\n  rating: Rating\n}\n\ntype GetLocationResponse {\n  ok: Boolean!\n  error: String\n  location: Location\n}\n\ntype GetPositionResponse {\n  ok: Boolean!\n  error: String\n  position: Position\n}\n\ntype User {\n  ID: Int!\n  Name: String!\n  Password: String\n  Sex: Int\n  Age: Int\n  DriverRating: Int\n  PassengerRating: Int\n  DriverPreferredRouteID: Int\n  PassengerPreferredRouteID: Int\n  CarID: Int\n  EmailAddress: String\n  PhoneNumber: String\n  CreditCardNumber: String\n  RidesAsDriver: [Ride]!\n  Transactions: [Transaction]\n  Car: [Car]!\n  RatingAsRater: [Rating]\n  RatingAsRated: [Rating]\n  createdAt: String!\n  updatedAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  GetBook: GetBookResponse;
  GetCar: GetCarResponse;
  GetRoute: GetRouteResponse;
  GetUser: GetUserResponse;
  GetTransaction: GetTransactionResponse;
  GetRide: GetRideResponse;
  GetRating: GetRatingResponse;
  GetLocation: GetLocationResponse;
  GetPosition: GetPositionResponse;
}

export interface GetBookResponse {
  ok: boolean;
  error: string | null;
  book: Book | null;
}

export interface GetPositionQueryArgs {
  UserID: number;
  Longtitude: number;
  Latitude: number;
}

export interface GetCarQueryArgs {
  CarID: number;
}

export interface GetRideQueryArgs {
  MaximumCapacity: number;
  DriverID: number;
}

export interface GetRatingQueryArgs {
  RaterID: number;
  RatedPersonID: number;
  RaterComments: string;
  RouteID: number;
}

export interface GetLocationQueryArgs {
  Name: string;
  Longtitude: number;
  Latitude: number;
}

export interface GetTransactionQueryArgs {
  PassengerID: number;
  RouteID: number;
  Payment: string;
  DepartureTime: string;
  CarID: number;
  RequestTime: string;
  Status: TransStatus;
  ArrivalTime: string;
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
  Owner: User;
  Transaction: Transaction | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface Position {
  positionID: number;
  UserID: number;
  Longtitude: number;
  Latitude: number;
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
  RidesAsDriver: Array<Ride>;
  Transaction: Array<Transaction> | null;
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

export interface GetRouteResponse {
  ok: boolean;
  error: string | null;
  route: Route | null;
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

export interface GetUserResponse {
  ok: boolean;
  error: string | null;
  user: User | null;
}

export interface GetTransactionResponse {
  ok: boolean;
  error: string | null;
  transaction: Transaction | null;
}

export interface GetRideResponse {
  ok: boolean;
  error: string | null;
  ride: Ride | null;
}

export interface GetRatingResponse {
  ok: boolean;
  error: string | null;
  rating: Rating | null;
}

export interface GetLocationResponse {
  ok: boolean;
  error: string | null;
  location: Location | null;
}

export interface GetPositionResponse {
  ok: boolean;
  error: string | null;
  position: Position | null;
}

export interface Mutation {
  CreateLocation: CreateLocationResponse;
  CreateRating: CreateRatingResponse;
  CreateRide: CreateRideResponse;
  CreateBook: CreateBookResponse;
  CreateCar: CreateCarResponse;
  CreateRoute: CreateRouteResponse;
  CreateTransaction: CreateTransactionResponse;
  EmailSignIn: EmailSignInResponse;
  EmailSignUp: EmailSignUpResponse;
  CreatePosition: CreatePositionResponse;
  UpdatePosition: UpdatePositionResponse;
}

export interface CreatePositionMutationArgs {
  UserID: number;
  Longtitude: number;
  Latitude: number;
}

export interface UpdatePositionMutationArgs {
  positionID: number;
  Longtitude: number;
  Latitude: number;
}

export interface CreateBookMutationArgs {
  Title: string;
  Author: string;
  PageCount: number;
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

export interface CreateTransactionMutationArgs {
  PassengerID: number;
  RouteID: number;
  Payment: string;
  DepartureTime: string;
  CarID: number;
  RequestTime: string;
}

export interface CreateRideMutationArgs {
  MaximumCapacity: number;
  DriverID: number;
}

export interface CreateRatingMutationArgs {
  RaterID: number;
  RatedPersonID: number;
  RaterComments: string;
  RouteID: number;
}

export interface CreateLocationMutationArgs {
  Name: string;
  Longtitude: number;
  Latitude: number;
}

export interface CreatePositionResponse {
  ok: boolean;
  error: string | null;
  position: Position | null;
}

export interface UpdatePositionResponse {
  ok: boolean;
  error: string | null;
  position: Position | null;
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

export interface CreateRouteResponse {
  ok: boolean;
  error: string | null;
  route: Route | null;
}

export interface CreateTransactionResponse {
  ok: boolean;
  error: string | null;
  transaction: Transaction | null;
}

export interface CreateRatingResponse {
  ok: boolean;
  error: string | null;
  rating: Rating | null;
}

export interface CreateLocationResponse {
  ok: boolean;
  error: string | null;
  location: Location | null;
}

export interface CreateRideResponse {
  ok: boolean;
  error: string | null;
  ride: Ride | null;
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
