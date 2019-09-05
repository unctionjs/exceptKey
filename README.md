# @unction/exceptKey

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> B => KeyedEnumerableType<A, B> => KeyedEnumerableType<A, B>

Takes a key and a keyed functor, returning the keyed functor without the key given.

``` javascript
exceptKey(1)([1, 2, 3]) // [1, 3]
exceptKey(1)("abc") // "ac"
exceptKey("aaa")({aaa: "aaa", bbb: "bbb", ccc: "ccc"}) // {bbb: "bbb", ccc: "ccc"}
exceptKey("aaa")(new Map([["aaa", "aaa"], ["bbb", "bbb"], ["ccc", "ccc"]])) // new Map([["bbb", "bbb"], ["ccc", "ccc"]])
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/exceptKey.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/exceptKey.svg?maxAge=2592000&style=flat-square
