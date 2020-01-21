declare function FuiCore<Type, Names extends PropertyKey[], Methods = {}>(builder: FuiCore.FuiBuilder<Type, Names>, methods?: (tap: FuiCore.FuiTap<Type, Methods>) => Methods): FuiCore.FuiEngine<Type, Names, Methods>;

declare namespace FuiCore {
  type FuiEngine<Type, Names extends PropertyKey[], Methods = {}> = Record<Names, FuiElement<Type, any, Methods> & Methods>;

  interface FuiBuilder<Type, Names extends PropertyKey[]> {
    build(name: keyof Names): Type
    append(a: Type, b: Type): void
  }

  type FuiTap<Type, Methods> = (tap: (value: any, target: Type) => any) => FuiElement<Type, unknown, Methods> & Methods;

  interface FuiElement<Type, Env, Methods> extends Methods {
    (scope?: Env): Type;

    add: (element: this) => FuiElement<Type, Env, Methods>;
    lift: <AltEnv>(fn: (scope: AltEnv) => FuiElement<Type, AltEnv, Methods> & Methods) => FuiElement<Type, Env extends unknown ? AltEnv : Env, Methods>;
    scope: <OldEnv>(fn: (scope: OldEnv) => Env) => FuiElement<Type, OldEnv, Methods>;
  }
}

export = FuiCore;
