import { gql } from '@apollo/client';


export const CREATE_BOOK = gql`
  mutation CreateBook($Title: String!, $Author: String!, $PageCount: Int!) {
        CreateBook(Title: $Title, Author: $Author, PageCount: $PageCount){
    }
  }
`;

export const CREATE_CAR = gql`
  mutation CreateCar($DriverID: Int!, $StartingPointID: Int!, $MiddlePointsID: [Int]!, $DestinationID: Int!) {
        CreateCar(DriverID: $DriverID, StartingPointID: $StartingPointID, MiddlePointsID: $MiddlePointsID, DestinationID: $DestinationID){
    }
  }
`;

export const CREATE_LOCATION = gql`
  mutation CreateLocation($Name: String!, $Longtitude: Int!, $Latitude: Int!) {
        CreateLocation(Name: $Name, Longtitude: $Longtitude, Latitude: $Latitude){
    }
  }
`;

export const CREATE_RATING = gql`
  mutation CreateRating($RaterID: Int!, $RatedPersonID: Int!, $RateStars: Int!, $RouteID: Int!) {
        CreateRating(RaterID: $RaterID,  RatedPersonID: $RatedPersonID, RateStars: $RateStars, RouteID: $RouteID){
    }
  }
`;

export const CREATE_RIDE = gql`
  mutation CreateRide($MaximumCapacity: Int!, $DriverID: Int!) {
        CreateRide(MaximumCapacity: $MaximumCapacity, DriverID: $DriverID){
    }
  }
`;

export const CREATE_ROUTE = gql`
  mutation CreateRoute($Comp: String!, $Model: String!, $PlateNum: String!, $Capacity: Int!) {
        CreateRoute(Comp: $Comp, Model: $Model, PlateNum: $PlateNum, Capacity: $Capacity){
    }
  }
`;

export const CREATE_TRANSACTION = gql`
  mutation CreateTransaction($PassengerID: Int!, $RouteID: Int!, $Payment: String!, $DepartureTime: String!, $CarID: Int!, $RequestTime: String!) {
        CreateTransaction(PassengerID: $PassengerID, RouteID: $RouteID, Payment: $Payment, DepartureTime: $DepartureTime, CarID: $CarID, RequestTime: $RequestTime){
    }
  }
`;