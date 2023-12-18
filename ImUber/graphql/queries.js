import { gql } from '@apollo/client';

export const GET_BOOK = gql`
  query ($ID: ID) {
    Book (ID: $ID) {
        ID,
        Title,
        Author,
        PageCount,
        createdAt,
        updatedAt
    }
  }
`;

export const GET_CAR = gql`
  query ($ID: ID) {
    Car (ID: $ID) {
        ID,
        Comp,
        Model,
        PlateNum,
        Capacity,
        Owner,
        Transaction,
        createdAt,
        updatedAt
    }
  }
`;

export const GET_LOCATION = gql`
  query ($ID: ID) {
    Location (ID: $ID) {
        ID,
        Name,
        Longtitude,
        Latitude,
        LocationAsStarting,
        LocationAsMidpoints,
        LocationAsDistination,
        createdAt,
        updatedAt,
    }
  }
`;

export const GET_RATING = gql`
  query ($ID: ID) {
    Location (ID: $ID) {
        ID,
        RaterID,
        RatedPersonID,
        RaterComments,
        RouteID,
        Rater,
        Rated,
        createdAt,
        updatedAt,
    }
  }
`;

export const GET_RIDE = gql`
  query ($ID: ID) {
    Ride (ID: $ID) {
        ID,
        TransactionID,
        DriverID,
        MaximumCapacity,
        RouteID,
        Driver,
        Transactions,
        createdAt,
        updatedAt
    }
  }
`;

export const GET_ROUTE = gql`
  query ($ID: ID) {
    Route (ID: $ID) {
        ID,
        DriverID,
        StartingPointID,
        MiddlePointsID,
        DestinationID,
        Starting,
        MiddlePoints,
        Distination,
        createdAt,
        updatedAt
    }
  }
`;

export const GET_TRANSACTION = gql`
  query ($ID: ID) {
    Transaction (ID: $ID) {
        ID,
        PassengerID,
        Payment,
        RouteID,
        DepartureTime,
        ArrivalTime,
        CarID,
        Status,
        RequestTime,
        Passenger,
        Ride,
        Car,
        createdAt,
        updatedAt,
    }
  }
`;

export const GET_USER = gql`
  query ($ID: ID) {
    User (ID: $ID) {
        ID,
        Name,
        Password,
        Sex,
        Age,
        DriverRating,
        PassengerRating,
        DriverPreferredRouteID,
        PassengerPreferredRouteID,
        CarID,
        EmailAddress,
        PhoneNumber,
        CreditCardNumber,
        RidesAsDriver,
        Transactions,
        Car,
        RatingAsRater,
        RatingAsRated,
        createdAt,
        updatedAt
    }
  }
`;