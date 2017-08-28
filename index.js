import reduceWithValueKey from "@unction/reducewithvaluekey"
import ifThenElse from "@unction/ifthenelse"
import equals from "@unction/equals"
import always from "@unction/always"
import attach from "@unction/attach"
import fresh from "@unction/fresh"

export default function exceptKey (key: KeyType): Function {
  return function exceptKeyKey (keyedList: KeyedFunctorType): KeyedFunctorType {
    return reduceWithValueKey(
      (accumulated: KeyedFunctorType): Function =>
        (value: ValueType): Function =>
          ifThenElse(equals(key))(always(accumulated))((current: KeyType): KeyedFunctorType => attach(current)(value)(accumulated))
    )(
      fresh(keyedList)
    )(
      keyedList
    )
  }
}
