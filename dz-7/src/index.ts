interface IExtStr {
  toString(): string | undefined;
}

function convertToString<T>(element: T): string | undefined {
  if (element !== null && element !== undefined && typeof element.toString === "function") {
    return element.toString();
  }
  return undefined;
}

const test1 = { sds: "sdsf", dsdssd: 555 };
const testRes = convertToString(test1);
console.log(testRes);

interface IEntity {
  id: number;
  [key: string]: string | number;
}

enum EOrder {
  desc = "desc",
  asc = "asc",
}

function sortEntities<T extends IEntity>(entities: T[], order: EOrder): T[] {
  if (order === "desc") {
    return [...entities].sort((a, b) => b.id - a.id);
  } else {
    return [...entities].sort((a, b) => a.id - b.id);
  }
}

const item1: IEntity = { id: 10, name: "Vasua", lname: "Kozlevich" };
const item2: IEntity = { id: 8, name: "Petua" };
const item3: IEntity = { id: 12, name: "Kolyan" };
const arr1: IEntity[] = [item1, item2, item3];

const sortedAscArray = sortEntities(arr1, EOrder.asc);
const sortedDescArray = sortEntities(arr1, EOrder.desc);

console.log(sortedAscArray);
console.log(sortedDescArray);
