export interface Names {
  title: string;
  first: string;
  last : string
}

export interface Coordinates {
    latitude : string
    longtitude : string
}

export interface TimeZone {
    offset : string
    description : string
}


export interface LocationCoord {
  street?: {};
  city: string;
  state : string;
  country: string;
  postCode: Number;
  coordinates : Coordinates;
  timezone : TimeZone
}

export interface Login {
    uuid : string;
    username : string
    password : string
    salt : string
    md5 : string;
    sha1 : string
    sha256 : string
}

export interface Dob {
    date : Date;
    age : Number
}

export interface User {
  gender: string;
  name: Names;
  loction : LocationCoord;
  email : string;
  login : Login;
  dob : Dob;
  registered : Dob;
  phone : Number;
  cell : Number;
  picture : {};
  nat : string
}

export interface ResultUser {
  results: [];
  info : {}
}