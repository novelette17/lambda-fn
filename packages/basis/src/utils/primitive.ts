type PrimitiveMap = {
    s:  string;
    n:  number;
    bi: bigint;
    b:  boolean;
    sy: symbol;
    nl: null;
    u:  undefined;
};

export type Primitive = PrimitiveMap[keyof PrimitiveMap];

export type LiteralBase<Literal extends Primitive> = {
    [K in keyof PrimitiveMap]: Literal extends PrimitiveMap[K] ? PrimitiveMap[K] : never;
}[keyof PrimitiveMap];

declare const purely: unique symbol;
export type LiteralUnion<Literals, Basis extends Primitive = LiteralBase<Literals & Primitive>> =
    Literals | (Basis & {[purely]?: never});
