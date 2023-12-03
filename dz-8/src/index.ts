interface ITestObj {
  id: number;
  name: string;
  location: {
    lat: number;
    lon: number;
    address: {
      street: string;
      num: number;
    };
  };
}

interface User {
  name: string;
  age: number;
  permission: string[];
}

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

type DeepRequireReadonly<T> = {
  readonly [K in keyof T]-?: T[K] extends object ? DeepRequireReadonly<T[K]> : T[K];
};
type UpperCaseKeys<T> = {
  [K in keyof T as Uppercase<string & K>]: T[K];
};

type TPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/*
const obj3: DeepReadonly<ITestObj> = {
  id: 2222,
  name: "faaf",
  location: {
    lat: 50,
    lon: 120,
    address: {
      street: "derStreet",
      num: 454,
    },
  },
};
*/
//obj3.location.address.num = 555;

let newObj: TPick<User, "name" | "age"> = {
  name: "test",
  age: 55,
};
