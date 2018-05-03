// This is used for Mock data when creating the forms and binding them to Angular for validation and such
export class User {
  id = 0;
  firstName = '';
  lastName = '';
  addresses: Address[];
}

export class Address {
  street = '';
  city   = '';
  state  = '';
  zip    = '';
}

export const users: User[] = [
  {
    id: 1,
    firstName: 'Kevin',
    lastName: 'Martinez',
    addresses: [
      {street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801'},
      {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226'},
    ]
  },
  {
    id: 2,
    firstName: 'Emelie',
    lastName: 'Liffner',
    addresses: [
      {street: '789 Elm',  city: 'Smallville', state: 'OH',  zip: '04501'},
    ]
  },
  {
    id: 3,
    firstName: 'Maja',
    lastName: 'Bladström',
    addresses: [ ]
  },
];

export const states = ['CA', 'MD', 'OH', 'VA'];
