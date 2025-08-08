// type Role = "expense" | "income";
export interface TransactionsProps{
  id:string;
  role:"income" | "expense";
  emoji:string;
  date:string;
  category:string;
  price:number
}
export const Transactions:TransactionsProps[] = [
  {
    "id": "1",
    "role": "expense",
    "emoji": "\ud83d\udc8a",
    "date": "2025-06-23",
    "category": "Health",
    "price": 275.44
  },
  {
    "id": "2",
    "role": "income",
    "emoji": "\ud83c\udf89",
    "date": "2025-07-12",
    "category": "Bonus",
    "price": 1642.36
  },
  {
    "id": "3",
    "role": "income",
    "emoji": "\ud83d\udcb5",
    "date": "2025-06-29",
    "category": "Freelance",
    "price": 1462.52
  },
  {
    "id": "4",
    "role": "expense",
    "emoji": "\ud83c\udfe5",
    "date": "2025-06-12",
    "category": "Medical",
    "price": 152.34
  },
  {
    "id": "5",
    "role": "expense",
    "emoji": "\ud83d\ude8c",
    "date": "2025-07-12",
    "category": "Transport",
    "price": 271.07
  },
  {
    "id": "6",
    "role": "expense",
    "emoji": "\ud83c\udf93",
    "date": "2025-06-15",
    "category": "Education",
    "price": 338.63
  },
  {
    "id": "7",
    "role": "expense",
    "emoji": "\ud83d\ude97",
    "date": "2025-06-12",
    "category": "Fuel",
    "price": 426.21
  },
  {
    "id": "8",
    "role": "expense",
    "emoji": "\ud83c\udf93",
    "date": "2025-06-17",
    "category": "Education",
    "price": 490.55
  },
  {
    "id": "9",
    "role": "expense",
    "emoji": "\ud83d\udcfa",
    "date": "2025-07-28",
    "category": "Subscription",
    "price": 201.53
  },
  {
    "id": "10",
    "role": "income",
    "emoji": "\ud83c\udf89",
    "date": "2025-07-16",
    "category": "Bonus",
    "price": 626.89
  },
  {
    "id": "11",
    "role": "expense",
    "emoji": "\ud83d\ude97",
    "date": "2025-06-28",
    "category": "Fuel",
    "price": 192.84
  },
  {
    "id": "12",
    "role": "expense",
    "emoji": "\ud83d\udcf1",
    "date": "2025-07-26",
    "category": "Utilities",
    "price": 120.67
  },
  {
    "id": "13",
    "role": "expense",
    "emoji": "\ud83d\udc8a",
    "date": "2025-06-02",
    "category": "Health",
    "price": 303.19
  },
  {
    "id": "14",
    "role": "expense",
    "emoji": "\ud83d\udcf1",
    "date": "2025-06-09",
    "category": "Utilities",
    "price": 129.83
  },
  {
    "id": "15",
    "role": "expense",
    "emoji": "\ud83d\uded2",
    "date": "2025-07-10",
    "category": "Groceries",
    "price": 413.07
  },
  {
    "id": "16",
    "role": "expense",
    "emoji": "\u2708\ufe0f",
    "date": "2025-06-28",
    "category": "Travel",
    "price": 298.79
  },
  {
    "id": "17",
    "role": "expense",
    "emoji": "\ud83c\udf93",
    "date": "2025-06-18",
    "category": "Education",
    "price": 196.04
  },
  {
    "id": "18",
    "role": "expense",
    "emoji": "\ud83c\udfe0",
    "date": "2025-07-03",
    "category": "Rent",
    "price": 333.24
  },
  {
    "id": "19",
    "role": "expense",
    "emoji": "\ud83c\udfac",
    "date": "2025-06-02",
    "category": "Entertainment",
    "price": 169.24
  },
  {
    "id": "20",
    "role": "expense",
    "emoji": "\ud83c\udf7f",
    "date": "2025-07-20",
    "category": "Movies",
    "price": 450.69
  },
  {
    "id": "21",
    "role": "expense",
    "emoji": "\ud83d\udcfa",
    "date": "2025-06-11",
    "category": "Subscription",
    "price": 498.78
  },
  {
    "id": "22",
    "role": "expense",
    "emoji": "\ud83d\udcfa",
    "date": "2025-07-15",
    "category": "Subscription",
    "price": 331.68
  },
  {
    "id": "23",
    "role": "expense",
    "emoji": "\ud83d\udcfa",
    "date": "2025-07-13",
    "category": "Subscription",
    "price": 98.79
  },
  {
    "id": "24",
    "role": "expense",
    "emoji": "\ud83c\udfac",
    "date": "2025-06-20",
    "category": "Entertainment",
    "price": 463.88
  },
  {
    "id": "25",
    "role": "income",
    "emoji": "\ud83c\udf89",
    "date": "2025-07-21",
    "category": "Bonus",
    "price": 1539.82
  },
  {
    "id": "26",
    "role": "income",
    "emoji": "\ud83d\udcc8",
    "date": "2025-06-12",
    "category": "Investment",
    "price": 1752.65
  },
  {
    "id": "27",
    "role": "expense",
    "emoji": "\ud83c\udf7f",
    "date": "2025-07-16",
    "category": "Movies",
    "price": 2.38
  },
  {
    "id": "28",
    "role": "expense",
    "emoji": "\ud83c\udfe5",
    "date": "2025-06-15",
    "category": "Medical",
    "price": 203.22
  },
  {
    "id": "29",
    "role": "expense",
    "emoji": "\ud83c\udfac",
    "date": "2025-07-29",
    "category": "Entertainment",
    "price": 476.77
  },
  {
    "id": "30",
    "role": "expense",
    "emoji": "\ud83d\udecd\ufe0f",
    "date": "2025-07-28",
    "category": "Shopping",
    "price": 195.31
  },
  {
    "id": "31",
    "role": "income",
    "emoji": "\ud83d\udcc8",
    "date": "2025-06-21",
    "category": "Dividend",
    "price": 1957.16
  },
  {
    "id": "32",
    "role": "income",
    "emoji": "\ud83d\udcc8",
    "date": "2025-07-11",
    "category": "Investment",
    "price": 1202.62
  },
  {
    "id": "33",
    "role": "expense",
    "emoji": "\ud83c\udf54",
    "date": "2025-06-22",
    "category": "Dining Out",
    "price": 204.88
  },
  {
    "id": "34",
    "role": "income",
    "emoji": "\ud83d\udcc8",
    "date": "2025-06-16",
    "category": "Investment",
    "price": 1159.04
  },
  {
    "id": "35",
    "role": "expense",
    "emoji": "\ud83d\uded2",
    "date": "2025-07-03",
    "category": "Groceries",
    "price": 296.6
  },
  {
    "id": "36",
    "role": "expense",
    "emoji": "\ud83c\udfe5",
    "date": "2025-07-26",
    "category": "Medical",
    "price": 30.7
  },
  {
    "id": "37",
    "role": "income",
    "emoji": "\ud83c\udf81",
    "date": "2025-06-09",
    "category": "Gift",
    "price": 653.8
  },
  {
    "id": "38",
    "role": "income",
    "emoji": "\ud83d\udcbc",
    "date": "2025-06-05",
    "category": "Salary",
    "price": 191.84
  },
  {
    "id": "39",
    "role": "expense",
    "emoji": "\ud83d\udcf1",
    "date": "2025-07-06",
    "category": "Utilities",
    "price": 356.14
  },
  {
    "id": "40",
    "role": "expense",
    "emoji": "\u2615\ufe0f",
    "date": "2025-07-31",
    "category": "Coffee",
    "price": 253.26
  },
  {
    "id": "41",
    "role": "income",
    "emoji": "\ud83e\uddfe",
    "date": "2025-07-19",
    "category": "Tax Refund",
    "price": 1415.13
  },
  {
    "id": "42",
    "role": "income",
    "emoji": "\ud83d\udcb5",
    "date": "2025-07-12",
    "category": "Freelance",
    "price": 481.11
  },
  {
    "id": "43",
    "role": "income",
    "emoji": "\ud83c\udf81",
    "date": "2025-07-22",
    "category": "Gift",
    "price": 534.25
  },
  {
    "id": "44",
    "role": "expense",
    "emoji": "\ud83c\udfcb\ufe0f\u200d\u2642\ufe0f",
    "date": "2025-06-26",
    "category": "Gym",
    "price": 361.13
  },
  {
    "id": "45",
    "role": "expense",
    "emoji": "\ud83c\udfe5",
    "date": "2025-06-22",
    "category": "Medical",
    "price": 186.93
  },
  {
    "id": "46",
    "role": "expense",
    "emoji": "\u2708\ufe0f",
    "date": "2025-06-17",
    "category": "Travel",
    "price": 387.57
  },
  {
    "id": "47",
    "role": "income",
    "emoji": "\ud83d\udcc8",
    "date": "2025-07-11",
    "category": "Dividend",
    "price": 40.07
  },
  {
    "id": "48",
    "role": "income",
    "emoji": "\ud83d\udcc8",
    "date": "2025-06-20",
    "category": "Investment",
    "price": 661.94
  },
  {
    "id": "49",
    "role": "income",
    "emoji": "\ud83d\udee0\ufe0f",
    "date": "2025-06-21",
    "category": "Side Hustle",
    "price": 1676.05
  },
  {
    "id": "50",
    "role": "expense",
    "emoji": "\u2615\ufe0f",
    "date": "2025-07-03",
    "category": "Coffee",
    "price": 208.72
  },
  {
    "id": "51",
    "role": "income",
    "emoji": "\ud83d\udcb5",
    "date": "2025-07-22",
    "category": "Freelance",
    "price": 848.12
  },
  {
    "id": "52",
    "role": "expense",
    "emoji": "\ud83c\udf7f",
    "date": "2025-06-01",
    "category": "Movies",
    "price": 377.93
  },
  {
    "id": "53",
    "role": "expense",
    "emoji": "\ud83d\ude8c",
    "date": "2025-06-27",
    "category": "Transport",
    "price": 158.47
  },
  {
    "id": "54",
    "role": "expense",
    "emoji": "\ud83c\udfac",
    "date": "2025-06-19",
    "category": "Entertainment",
    "price": 229.69
  },
  {
    "id": "55",
    "role": "expense",
    "emoji": "\u2708\ufe0f",
    "date": "2025-06-14",
    "category": "Travel",
    "price": 303.61
  },
  {
    "id": "56",
    "role": "income",
    "emoji": "\ud83d\udcbc",
    "date": "2025-07-06",
    "category": "Salary",
    "price": 1166.93
  },
  {
    "id": "57",
    "role": "expense",
    "emoji": "\ud83c\udf93",
    "date": "2025-07-27",
    "category": "Education",
    "price": 81.37
  },
  {
    "id": "58",
    "role": "expense",
    "emoji": "\ud83c\udfcb\ufe0f\u200d\u2642\ufe0f",
    "date": "2025-07-31",
    "category": "Gym",
    "price": 331.09
  },
  {
    "id": "59",
    "role": "expense",
    "emoji": "\ud83c\udf54",
    "date": "2025-06-05",
    "category": "Dining Out",
    "price": 471.51
  },
  {
    "id": "60",
    "role": "expense",
    "emoji": "\ud83d\udcfa",
    "date": "2025-06-26",
    "category": "Subscription",
    "price": 65.29
  }
]