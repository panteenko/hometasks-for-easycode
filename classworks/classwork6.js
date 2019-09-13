const users = [
  {
    "_id": "5d77c985aecc161326450250",
    "index": 0,
    "guid": "52ccf886-89f0-453d-9bc9-fd802434cc07",
    "isActive": true,
    "balance": "$1,948.17",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "eyeColor": "green",
    "name": "Meadows Payne",
    "gender": "male",
    "company": "STROZEN",
    "email": "meadowspayne@strozen.com",
    "phone": "+1 (976) 423-2077"
  },
  {
    "_id": "5d77c9856c489f55c7b71166",
    "index": 1,
    "guid": "78617c71-90f8-4074-8189-e8eb653b057b",
    "isActive": true,
    "balance": "$1,196.30",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "blue",
    "name": "Maynard Marks",
    "gender": "male",
    "company": "ZENOLUX",
    "email": "maynardmarks@zenolux.com",
    "phone": "+1 (873) 516-2166"
  },
  {
    "_id": "5d77c98579d212c08aa6a4e7",
    "index": 2,
    "guid": "ebcb58c5-34b6-4be9-98b6-ff0f5c358b43",
    "isActive": true,
    "balance": "$2,156.30",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "eyeColor": "green",
    "name": "Elsie Hampton",
    "gender": "female",
    "company": "CONFERIA",
    "email": "elsiehampton@conferia.com",
    "phone": "+1 (925) 600-2400"
  },
  {
    "_id": "5d77c985115ab5c2ac4e72be",
    "index": 3,
    "guid": "da5ef045-aadb-4338-8b98-07aa75fc14a1",
    "isActive": true,
    "balance": "$1,025.12",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "blue",
    "name": "Ines Harrison",
    "gender": "female",
    "company": "DIGIPRINT",
    "email": "inesharrison@digiprint.com",
    "phone": "+1 (836) 525-2921"
  },
  {
    "_id": "5d77c985cbc01bebc743e4a6",
    "index": 4,
    "guid": "6fe8309b-dbbf-41a1-924b-df84f14e27c3",
    "isActive": true,
    "balance": "$3,778.98",
    "picture": "http://placehold.it/32x32",
    "age": 23,
    "eyeColor": "brown",
    "name": "Frances Flowers",
    "gender": "female",
    "company": "VOLAX",
    "email": "francesflowers@volax.com",
    "phone": "+1 (992) 505-3932"
  }
];

function filterUsers (arr, key, value) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {

    
    if (arr[i][key] === value) {

      console.log(arr[i]);
      res.push(arr[i]);

    }

  }

  return res;
}

const filteredUsers1 = filterUsers(users, 'gender', 'male');
const filteredUsers2 = filterUsers(users, 'eyeColor', 'blue');

function filterWithHighOrder (arr, handler) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    const handlerRes = handler(arr[i]);
    if (handlerRes) {

      res.push(arr[i]);

    }

  }

  return res;
}

const filteretUsers3 = filterWithHighOrder(users, function(item) {

  return item.age > 30;

});