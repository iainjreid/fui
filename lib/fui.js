// @ts-check

'use strict';

/**
 * Note:
 *
 * Rational behind not using TS for this project
 */

/**
 * Mandatory core functions used in every Fui instance
 *
 * @template Name, Type
 * @typedef {Object} FuiSetup
 *
 * @property {FuiSetupBuildCallback<Name, Type>} build
 * @property {FuiSetupAppendCallback<Type>} append
 */

/**
 * Mandatory core functions used in every Fui instance
 *
 * @template Name, Type
 * @callback FuiSetupBuildCallback
 *
 * @param {Name} name The name of the node to be built
 *
 * @returns {Type}
 */

/**
 * Mandatory core functions used in every Fui instance
 *
 * @template Type
 * @callback FuiSetupAppendCallback
 *
 * @param {Type} parentNode
 * @param {Type} childNode
 *
 * @return {void}
 */

/**
 * Optional extended methods that will be added to the Fui instance
 *
 * @template Type
 * @typedef {Object.<string, FuiMethod<Type>>} FuiMethods
 */

 /**
 * A custom method introduced into a `FuiEngine` by a given implementation.
 *
 * @template Type
 * @callback FuiMethod
 *
 * @param {*} x1
 * @param {*} x2
 * @param {*} x3
 *
 * @returns {FuiElement<Type>}
 */

/**
 * @template Type
 * @callback FuiMethodsBuilder
 *
 * @param {FuiTapCallback<Type>} tap
 *
 * @returns {FuiMethods<Type>}
 */

/**
 * @template Type
 * @callback FuiTapCallback
 *
 * @param {FuiTapEffectCallback<Type>} tapEffect
 *
 * @return {FuiElement<Type>}
 */

/**
 * A callback function tasked with responsibility of applying effects to nodes
 * in the tree.
 *
 * @template Type
 * @callback FuiTapEffectCallback
 *
 * @param {string} f
 * @param {Type} fx
 *
 * @return {void}
 */

/**
 * A functional wrapper
 *
 * @template Type
 * @callback FuiElement
 *
 * @returns {Type}
 */

/**
 * A prepared instance of Fui.
 *
 * @template Name, Type
 * @typedef {Object<Name, FuiElement<Type>>} FuiEngine
 */

/**
 * @template Name, Type
 * @function
 *
 * @param {FuiSetup<Name, Type>} setup
 * @param {FuiMethodsBuilder<Type>} methods
 *
 * @returns {FuiEngine<Name, Type>} Foo
 */
export default ({ build, append }, methods = (() => ({}))) => {
  const impl = f => (tap => Object.assign(f, {
    ...methods(tap),

    /**
     * Similar to the `map` method in a traditional Reader monad, this method takes the output of the previous function,
     * modifies it, and returns it.
     *
     * @param {FuiElement<Type>} g
     */
    add: g => tap((x, fx) => append(fx, g(x))),

    /**
     * Similiar to the `flatMap`, or `chain` method in a traditional Reader
     * monad, this method takes the output of the previous function, and
     * returns a new monad.
     *
     * @param {Function} g
     */
    lift: g => tap((x, fx) => append(fx, g(x)(x))),

    /**
     * Similar to the `local` method in a traditional Reader monad, this method alters the execution environment in
     * child compositions will be run under.
     */
    scope: g => impl(x => f(g(x))),
  }))(g => impl(x => (g(x, x = f(x)), x)));

  /**
   * The almighty `Proxy` is what gives this rendering engine its true strength. HTML elements are interpreted as they
   * are imported, rather than being preconfigured.
   */
  return new Proxy(impl, {
    get: (_, prop) => impl(() => build(prop)),
  });
};
