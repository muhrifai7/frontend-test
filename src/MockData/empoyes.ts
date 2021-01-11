import {User} from "../utils/userTypes"

export const createMockedUser :User[] = [
  {
    gender: "female",
    name: {
    title: "Miss",
    first: "Celina",
    last: "Stavik"
    },
    location: {
    street: {
    number: 593,
    name: "Hauketoveien"
    },
    city: "Hundorp",
    state: "Vest-Agder",
    country: "Norway",
    postcode: "7601",
    coordinates: {
    latitude: "57.4718",
    longitude: "130.2058"
    },
    timezone: {
    offset: "-3:30",
    description: "Newfoundland"
    }
    },
    email: "celina.stavik@example.com",
    login: {
    uuid: "2c45055e-840e-40a7-b660-72e4cda37863",
    username: "beautifulkoala266",
    password: "googoo",
    salt: "rd4aQCEy",
    md5: "700bd215c989162ce3f80488da8e5269",
    sha1: "475a8cb8923b2e1856f7873f8d4ce84179ed48bd",
    sha256: "b666895422dbf9984e54a4b723fb3357208ab553b2159466632beebc401a7659"
    },
    dob: {
    date: "1993-08-31T12:30:48.186Z",
    age: 28
    },
    registered: {
    date: "2006-09-21T03:53:22.778Z",
    age: 15
    },
    phone: "86245412",
    cell: "92023580",
    picture: {
    large: "https://randomuser.me/api/portraits/women/75.jpg",
    medium: "https://randomuser.me/api/portraits/med/women/75.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/women/75.jpg"
    },
    nat: "NO"
}
];

export const createMockedUsers = () => [createMockedUser];

export const createMockedGetUser = ()=> [
  {
    gender: "female",
    name: {
    title: "Miss",
    first: "Celina",
    last: "Stavik"
    },
    location: {
    street: {
    number: 593,
    name: "Hauketoveien"
    },
    city: "Hundorp",
    state: "Vest-Agder",
    country: "Norway",
    postcode: "7601",
    coordinates: {
    latitude: "57.4718",
    longitude: "130.2058"
    },
    timezone: {
    offset: "-3:30",
    description: "Newfoundland"
    }
    },
    email: "celina.stavik@example.com",
    login: {
    uuid: "2c45055e-840e-40a7-b660-72e4cda37863",
    username: "beautifulkoala266",
    password: "googoo",
    salt: "rd4aQCEy",
    md5: "700bd215c989162ce3f80488da8e5269",
    sha1: "475a8cb8923b2e1856f7873f8d4ce84179ed48bd",
    sha256: "b666895422dbf9984e54a4b723fb3357208ab553b2159466632beebc401a7659"
    },
    dob: {
    date: "1993-08-31T12:30:48.186Z",
    age: 28
    },
    registered: {
    date: "2006-09-21T03:53:22.778Z",
    age: 15
    },
    phone: "86245412",
    cell: "92023580",
    picture: {
    large: "https://randomuser.me/api/portraits/women/75.jpg",
    medium: "https://randomuser.me/api/portraits/med/women/75.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/women/75.jpg"
    },
    nat: "NO"
}
];