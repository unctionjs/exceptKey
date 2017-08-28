/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"

import exceptKey from "./"

test(({same, end}) => {
  same(
    exceptKey("bbb")({
      aaa: "aaa",
      bbb: "bbb",
      ccc: "ccc",
    }),
    {
      aaa: "aaa",
      ccc: "ccc",
    }
  )

  end()
})

test(({same, end}) => {
  same(
    exceptKey(1)([
      "a",
      "b",
      "c",
    ]),
    [
      "a",
      "c",
    ]
  )

  end()
})

test(({same, end}) => {
  same(
    exceptKey(1)("abc"),
    "ac"
  )

  end()
})

test(({same, end}) => {
  same(
    exceptKey("bbb")(new Map([["aaa", "aaa"], ["bbb", "bbb"], ["ccc", "ccc"]])),
    new Map([["aaa", "aaa"], ["ccc", "ccc"]])
  )

  end()
})


test(({same, end}) => {
  same(
    exceptKey(1)(new Set([
      "a",
      "b",
      "c",
    ])),
    new Set([
      "a",
      "c",
    ])
  )

  end()
})
