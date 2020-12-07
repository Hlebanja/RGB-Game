'use strict';

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  transactionFee: 0.012, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  transactionFee: 0.015,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  transactionFee: 0.007,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  transactionFee: 0.01,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumFee = document.querySelector('.summary__value--fee');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

let loggedAccount;

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const addUsername = function (accounts) {
  accounts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
addUsername(accounts);

const calcDisplayValueIn = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}€`;
};

const calcDisplayValueOut = function (acc) {
  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;
};

const calcTransactionFee = function (acc) {
  const totalFee = Math.abs(
    acc.movements
      .filter(mov => mov < 0)
      .map(mov => mov * acc.transactionFee)
      .reduce((acc, mov) => acc + mov, 0)
  );
  labelSumFee.textContent = `${totalFee}€`;
  return totalFee;
};
// const withdrawals = account1.movements.filter(function (mov) {
//   return mov < 0;
// });

const calcDisplayBalance = function (acc) {
  let balance = movements.reduce((acc, mov) => acc + mov);
  balance -= calcTransactionFee(acc);
  labelBalance.textContent = `${balance} €`;
};

const findAccount = inputUsername =>
  accounts.find(acc => acc.username === inputUsername);

const validateLogin = function () {
  const userAccount = findAccount(inputLoginUsername.value);

  if (userAccount?.pin === Number(inputLoginPin.value)) {
    loggedAccount = userAccount;
  }
};

const displayUserInfo = function (acc) {
  labelWelcome.textContent = `Welcome ${loggedAccount.owner.split(' ')[0]}`;
  containerApp.style.opacity = 100;

  displayMovements(acc.movements);
  calcDisplayValueIn(acc);
  calcDisplayBalance(acc);
  calcDisplayValueOut(acc);
  calcTransactionFee(acc);
};

//Log in functionality
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  validateLogin();
  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.blur();

  if (loggedAccount) {
    displayUserInfo(loggedAccount);
  }
});

//Transfer money functionality
// btnTransfer.addEventListener('click', function (e) {
//   const amount = Number(inputTransferAmount.textContent);
//   if (amount >)
//   const receiver = findAccount(inputTransferTo.textContent);
// });

//read form
//validate that you have enough funds
//validate that receiving account exists
//subtract money from your account
//add money to receiving account
