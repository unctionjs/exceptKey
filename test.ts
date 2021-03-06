/* eslint-disable no-magic-numbers */
import exceptKey from "./index";

test("works", () => {
  expect(exceptKey("bbb")({
    aaa: "aaa",
    bbb: "bbb",
    ccc: "ccc",
  })).toEqual({
    aaa: "aaa",
    ccc: "ccc",
  })
})

test("works", () => {
  expect(exceptKey(1)([
    "a",
    "b",
    "c",
  ])).toEqual([
    "a",
    "c",
  ])
})

test("works", () => {
  expect(exceptKey(1)("abc")).toEqual("ac")
})

test("works", () => {
  expect(
    exceptKey("bbb")(new Map([["aaa", "aaa"], ["bbb", "bbb"], ["ccc", "ccc"]]))
  ).toEqual(new Map([["aaa", "aaa"], ["ccc", "ccc"]]))
})
