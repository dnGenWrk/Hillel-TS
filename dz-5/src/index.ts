interface IFirst {
  [key: string]: number | string;
}

interface ISecond {
  [key: string]: (...args: any[]) => any;
}

interface IThird {
  [index: number]: string;
}

interface IFourth {
  fname: string;
  age: number;
  [key: string]: number | string;
}

interface IFive {
  [key: string]: any;
}

interface IFiveAnother extends IFive {
  fiveAnotherName: string;
  fiveAnotherValue: IFourth[];
}

function someObjValidate(obj: IFourth) {
  if ("someProp" in obj && typeof obj.someProp === "number") {
    return "someProp is valid";
  }
  return "someProp is invalid";
}
