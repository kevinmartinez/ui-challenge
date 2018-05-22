/* This is my mock data model of a fictive user, this could be any model,
for example a MongoDB mongoose schema or bound to any other back-end API model

With Angular 5, i first tried to use Arrays within the form value component,
and also tried a ng method called ArrayForm (i think it was called that,
but realized that one of the best way, specially when iterating in the markup,
is to map a model to an object
*/
export const user = {
  firstName: {
    gridClass: 'gi-1',
    label: 'First name',
    placeholder: 'FIRST NAME',
    type: 'text',
  },
  lastName: {
    gridClass: 'gi-2',
    label: 'Last name',
    placeholder: 'LAST NAME',
    type: 'text',
  },
  birthdate: {
    gridClass: 'gi-3',
    label: 'Date of birth',
    placeholder: 'DATE OF BIRTH',
    type: 'date',
  },
  gender: {
    gridClass: 'gi-4',
    value: 'M',
    type: 'radio',
    options: [
      { label: 'Male', value: 'M'},
      { label: 'Female', value: 'F'}
    ]
  },
  address: {
    gridClass: 'gi-5',
    label: 'Address',
    placeholder: 'ADDRESS',
    type: 'text',
  },
  postCode: {
    gridClass: 'gi-6',
    label: 'Post Code',
    placeholder: 'POST CODE',
    type: 'number',
  },
  city: {
    gridClass: 'gi-7',
    label: 'City',
    placeholder: 'CITY',
    type: 'text',
  },
  country: {
    label: 'Country',
    gridClass: 'gi-8',
    placeholder: 'COUNTRY',
    type: 'select',
    options: [
      { label: 'Sweden', value: '1'},
      { label: 'Norway', value: '2'},
      { label: 'Denmark', value: '3'},
    ]
  },
  phone: {
    gridClass: 'gi-10',
    label: 'Phone',
    placeholder: 'PHONE',
    type: 'number',
  },
  countryCode: {
    gridClass: 'gi-9',
    label: 'Country Code',
    placeholder: '+46',
    type: 'number',
  },
};



// countries: string[] = [
//   'Norway',
//   'Denmark',
//   'Finland',
//   'Spain',
// ];



// // This is used for Mock data when creating the forms and binding them to Angular for validation and such
// export class User {
//   id = 0;
//   firstName = '';
//   lastName = '';
//   addresses: Address[];
// }

// export class Address {
//   street = 'das';
//   city   = 'sad';
//   state  = 'asd';
//   zip    = 'ads';
// }

// export const users: User[] = [
//   {
//     id: 1,
//     firstName: 'Kevin',
//     lastName: 'Martinez',
//     addresses: [
//       {street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801'},
//       {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226'},
//     ]
//   },
//   {
//     id: 2,
//     firstName: 'Emelie',
//     lastName: 'Liffner',
//     addresses: [
//       {street: '789 Elm',  city: 'Smallville', state: 'OH',  zip: '04501'},
//     ]
//   },
//   {
//     id: 3,
//     firstName: 'Maja',
//     lastName: 'Bladström',
//     addresses: [ ]
//   },
// ];

// export const states = ['CA', 'MD', 'OH', 'VA'];











