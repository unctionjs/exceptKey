import reduceWithValueKey from "@unction/reducewithvaluekey";
import ifThenElse from "@unction/ifthenelse";
import equals from "@unction/equals";
import always from "@unction/always";
import attach from "@unction/attach";
import fresh from "@unction/fresh";
import {KeyedEnumerableType} from "./types";

export default function exceptKey<A, B> (key: B) {
  return function exceptKeyKey (keyedList: KeyedEnumerableType<A, B>): KeyedEnumerableType<A, B> {
    return reduceWithValueKey(
      (accumulated: KeyedEnumerableType<A, B>) =>
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
