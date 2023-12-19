import { gql } from '@apollo/client';

export const GET_BOOK = gql`
  query GetBook($BookID: Int!) {
    GetBook(BookID: $BookID) {
      ok
      error
      book {
        ID
        Title
        Author
        PageCount
      }
    }
  }
`;

export const GET_CAR = gql`
  query GetCar($CarID: Int!) {
    GetCar(CarID: $CarID) {
      ok
      error
      car{
        ID,
        Comp,
        Model,
        PlateNum,
        Capacity,
        Owner{
          ID,
          Name
        },
        Transaction{
          ID
        },
        createdAt,
        updatedAt
      }
    }
  }
`;

export const GET_LOCATION = gql`
  query GetLocation($LocationID: Int!) {
    GetLocation(LocationID: $LocationID) {
      ok
      error
      location{
        ID,
        Name,
        Longtitude,
        Latitude,
        LocationAsStarting{
          ID,
          DriverID,
          StartingPointID,
        },
        LocationAsMidpoints{
          ID,
          DriverID,
          MiddlePointsID,
        },
        LocationAsDistination{
          ID,
          DriverID,
          DestinationID,
        },
        createdAt,
        updatedAt,
      }
    }
  }
`;

export const GET_RATING = gql`
  query GetRating($RateID: Int!) {
    GetRating(RateID: $RateID) {
      ok
      error
      rating{
        ID,
        RaterID,
        RatedPersonID,
        RaterComments,
        RouteID,
        Rater{
          ID,
          Name,
        },
        Rated{
          ID,
          Name,
        },
        createdAt,
        updatedAt,
      }
    }
  }
`;

export const GET_RIDE = gql`
  query GetRide($RideID: Int!) {
    GetRide(RideID: $RideID) {
      ok
      error
      ride{
        ID,
        TransactionID,
        DriverID,
        MaximumCapacity,
        RouteID,
        Driver{
          ID,
          Name
        },
        Transaction{
          ID
        },
        createdAt,
        updatedAt
      }
    }
  }
`;

export const GET_ROUTE = gql`
  query GetRoute($RouteID: Int!) {
    GetRoute(RouteID: $RouteID) {
      ok
      error
      route{
        ID,
        DriverID,
        StartingPointID,
        MiddlePointsID,
        DestinationID,
        Starting{
          ID
        },
        MiddlePoints{
          ID
        },
        Distination{
          ID
        },
        createdAt,
        updatedAt
      }
    }
  }
`;

export const GET_TRANSACTION = gql`
  query GetTransaction($TransactionID: Int!) {
    GetTransaction(TransactionID: $TransactionID) {
      ok
      error
      transaction{
        ID,
        PassengerID,
        Payment,
        RouteID,
        DepartureTime,
        ArrivalTime,
        CarID,
        Status,
        RequestTime,
        Passenger{
          ID,
          Name
        },
        Ride{
          ID
        },
        Car{
          ID
        },
        createdAt,
        updatedAt,
      }
    }
  }
`;

export const GET_USER = gql`
  query GetUser($UserID: Int!) {
    GetUser(UserID: $UserID) {
      ok
      error
      user{
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
        RidesAsDriver{
          ID
        },
        Transaction{
          ID
        },
        Car{
          ID
        },
        RatingAsRater{
          ID
        },
        RatingAsRated{
          ID
        },
        createdAt,
        updatedAt
      }
    }
`;