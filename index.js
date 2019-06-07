import reduceWithValueKey from "@unction/reducewithvaluekey";
import ifThenElse from "@unction/ifthenelse";
import equals from "@unction/equals";
import always from "@unction/always";
import attach from "@unction/attach";
import fresh from "@unction/fresh";

export default function exceptKey (key) {
  return function exceptKeyKey (keyedList) {
    return reduceWithValueKey(
      (accumulated) =>
        (value) =>
          ifThenElse(equals(key))(always(accumulated))((current) => attach(current)(value)(accumulated))
    )(
      fresh(keyedList)
    )(
      keyedList
    );
  };
}
