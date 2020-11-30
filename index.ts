import reduceWithValueKey from "@unction/reducewithvaluekey";
import ifThenElse from "@unction/ifthenelse";
import equals from "@unction/equals";
import always from "@unction/always";
import attach from "@unction/attach";
import fresh from "@unction/fresh";

export default function exceptKey<A, B> (key: B) {
  return function exceptKeyKey (keyedList: Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string): Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string {
    return reduceWithValueKey(
      (accumulated: Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string) =>
        (value: A) =>
          ifThenElse(
            equals(key)
          )(
            always(accumulated)
          )(
            (current: A) => attach(current)(value)(accumulated)
          )
    )(
      fresh(keyedList)
    )(
      keyedList
    );
  };
}
