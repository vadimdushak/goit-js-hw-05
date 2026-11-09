const clients = [
  {
    name: 'Moore Hensley',
    gender: 'male',
    balance: 2811,
  },
  {
    name: 'Sharlene Bush',
    gender: 'female',
    balance: 3821,
  },
  {
    name: 'Ross Vazquez',
    gender: 'male',
    balance: 3793,
  },
  {
    name: 'Elma Head',
    gender: 'female',
    balance: 2278,
  },
  {
    name: 'Carey Barr',
    gender: 'male',
    balance: 3951,
  },
  {
    name: 'Blackburn Dotson',
    gender: 'male',
    balance: 1498,
  },
  {
    name: 'Sheree Anthony',
    gender: 'female',
    balance: 2764,
  },
];
const getTotalBalanceByGender = (users, gender) => {
  const gender1 = users.filter((user) => user.gender === gender);
  console.log(gender1);
  const balance1 = gender1.reduce((sum, item) => sum + item.balance, 0);
  console.log(balance1);
};

console.log(getTotalBalanceByGender(clients, 'male')); // 12053
console.log(getTotalBalanceByGender(clients, 'female')); // 8863
