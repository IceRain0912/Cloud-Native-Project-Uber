import { gql } from '@apollo/client';


export const CREATE_BOOK = gql`
    mutation CreateBook($Title: String!, $Author: String!, $PageCount: Int!) {
        CreateBook(Title: $Title, Author: $Author, PageCount: $PageCount){
            ok,
            error,
            book{
                ID
            }
        }
    }
`;

export const CREATE_CAR = gql`
    mutation CreateCar($Comp: String!, $Model: String!, $PlateNum: String!, $Capacity: Int!) {
        CreateCar(Comp: $Comp, Model: $Model, PlateNum: $PlateNum, Capacity: $Capacity){
            ok,
            error,
            car{
                ID
            }
        }
    }
`;

export const CREATE_LOCATION = gql`
    mutation CreateLocation($Name: String!, $Longtitude: Float!, $Latitude: Float!) {
        CreateLocation(Name: $Name, Longtitude: $Longtitude, Latitude: $Latitude){
            ok,
            error,
            location{
                ID
            }
        }
    }
`;

export const CREATE_RATING = gql`
    mutation CreateRating($RaterID: Int!, $RatedPersonID: Int!, $RateStars: Int!, $RouteID: Int!) {
        CreateRating(RaterID: $RaterID,  RatedPersonID: $RatedPersonID, RateStars: $RateStars, RouteID: $RouteID){
            ok,
            error,
            rating{
                ID
            }
        }
    }
`;

export const CREATE_RIDE = gql`
    mutation CreateRide($MaximumCapacity: Int!, $DriverID: Int!) {
        CreateRide(MaximumCapacity: $MaximumCapacity, DriverID: $DriverID){
            ok,
            error,
            ride{
                ID
            }
        }
    }
`;

export const CREATE_ROUTE = gql`
    mutation CreateRoute($Comp: String!, $Model: String!, $PlateNum: String!, $Capacity: Int!) {
        CreateRoute(Comp: $Comp, Model: $Model, PlateNum: $PlateNum, Capacity: $Capacity){
            ok,
            error,
            route{
                ID
            }
        }
    }
`;

export const CREATE_TRANSACTION = gql`
    mutation CreateTransaction($PassengerID: Int!, $RouteID: Int!, $Payment: String!, $DepartureTime: String!, $CarID: Int!, $RequestTime: String!) {
        CreateTransaction(PassengerID: $PassengerID, RouteID: $RouteID, Payment: $Payment, DepartureTime: $DepartureTime, CarID: $CarID, RequestTime: $RequestTime){
            ok,
            error,
            transaction{
                ID
            }
        }
    }
`;

export const EMAIL_SIGNIN = gql`
    mutation EmailSignIn($PhoneNumber: String!, $Password: String!) {
        EmailSignIn(PhoneNumber: $PhoneNumber, Password: $Password){
            ok,
            error,
            token
        }
    }
`;

export const EMAIL_SIGNUP = gql`
    mutation EmailSignUp($Name: String!, $Password: String!, $Sex: Int!, $PhoneNumber: String!) {
        EmailSignUp(Name: $Name, Password: $Password, Sex: $Sex, PhoneNumber: $PhoneNumber){
            ok,
            error,
            token
        }
    }
`;