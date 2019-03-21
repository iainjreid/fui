"use strict";

module.exports = ((Object, Monot) => (

  Monot = f => ((Tap) => Object.assign(f, {
    attr: (k, v) => Tap((x, fx) => fx.setAttribute(k, v)),
    prop: (k, v) => Tap((x, fx) => fx[k] = v),

    of: x => Tap((_, fx) => fx.innerHTML = x),

    /**
     * Similar to the `map` method in a traditional Reader monad, this method takes the output of the previous function,
     * modifies it, and returns it.
     */
    add: g => Tap((x, fx) => fx.appendChild(g(x))),

    /**
     * Similiar to the `flatMap`, or `chain` method in a traditional Reader monad, this method takes the output of the
     * previous function, and returns a new monad.
     */
    lift: g => Tap((x, fx) => fx.appendChild(g(x)(x))),

    /**
     * Similar to the `local` method in a traditional Reader monad, this method alters the execution environment in
     * child compositions will be run under.
     */
    scope: g => Monot(x => f(g(x)))
  }))(g => Monot(x => (g(x, x = f(x)), x))),

  /**
   * The almighty `Proxy` is what gives this rendering engine its true strength. HTML elements are interpreted as they
   * are imported, rather than being preconfigured.
   */
  new Proxy(Object, {
    get: (_, prop) => Monot(() => document.createElement(prop))
  })

))(Object);
