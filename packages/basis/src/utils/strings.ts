import type {Primitive} from './primitive';
import type {Strong} from './strongTypes';

export type AsString<T, Default extends string = string> = T extends Exclude<Primitive, symbol> ? `${T}` : Default;

export const asString = <T>(value: T): AsString<T> =>
    String(value) as AsString<T>;

export type StrongString<Input> = Strong<Input, string, AsString<Input, ''>>;
