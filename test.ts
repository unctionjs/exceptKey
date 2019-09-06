/* eslint-disable no-magic-numbers */
import exceptKey from "./index.ts";

test(() => {
  expect(exceptKey("bbb")({
    aaa: "aaa",
    bbb: "bbb",
    ccc: "ccc",
  })).toEqual({
    aaa: "aaa",
    ccc: "ccc",
  })
})

test(() => {
  expect(exceptKey(1)([
    "a",
    "b",
    "c",
  ])).toEqual([
    "a",
    "c",
  ])
})

test(() => {
  expect(exceptKey(1)("abc")).toEqual("ac")
})

test(() => {
  expect(
    exceptKey("bbb")(new Map([["aaa", "aaa"], ["bbb", "bbb"], ["ccc", "ccc"]]))
  ).toEqual(new Map([["aaa", "aaa"], ["ccc", "ccc"]]))
})
