'use strict';

module.exports = ({ build, append }, methods = (() => {})) => ((core) => (

  core = f => ((tap) => Object.assign(f, {
    ...methods(tap),

    /**
     * Similar to the `map` method in a traditional Reader monad, this method takes the output of the previous function,
     * modifies it, and returns it.
     */
    add: g => tap((x, fx) => append(fx, g(x))),

    /**
     * Similiar to the `flatMap`, or `chain` method in a traditional Reader monad, this method takes the output of the
     * previous function, and returns a new monad.
     */
    lift: g => tap((x, fx) => append(fx, g(x)(x))),

    /**
     * Similar to the `local` method in a traditional Reader monad, this method alters the execution environment in
     * child compositions will be run under.
     */
    scope: g => core(x => f(g(x)))
  }))(g => core(x => (g(x, x = f(x)), x))),

  /**
   * The almighty `Proxy` is what gives this rendering engine its true strength. HTML elements are interpreted as they
   * are imported, rather than being preconfigured.
   */
  new Proxy(core, {
    get: (_, prop) => core(() => build(prop))
  })

))();
