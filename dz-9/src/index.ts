/* Вам потрібно створити умовний тип, що служить для встановлення типу, що повертається з функції.
 Як параметр типу повинен обов'язково виступати функціональний тип. */
type ParamType<T> = T extends (...param: any[]) => infer R ? R : void;

function funcA(param: number): number {
  return 5;
}

function funcB(): void {}

function funcC(param: number): string {
  return "sffssf";
}

function funcD(param1: number, param2: string): string {
  return "TEST";
}

let test: ParamType<typeof funcA>;
let test2: ParamType<typeof funcB>;
let test3: ParamType<typeof funcC>;
let test4: ParamType<typeof funcD>;

/* Вам потрібно створити умовний тип, який приймає функціональний тип з одним параметром (або задовільним)
 та повертає кортеж, де перше значення - це тип, що функція повертає, а другий - тип її параметру */
type ParamsTypes<T> = T extends (args: infer U) => infer R ? [R, U] : undefined;

function funcAA(param: number): number {
  return 5;
}

function funcBB(param: string): void {}

function funcCC(param: []): Array<string> {
  return new Array("test", "test2");
}

let test5: ParamsTypes<typeof funcAA>;
let test6: ParamsTypes<typeof funcBB>;
let test7: ParamsTypes<typeof funcCC>;
