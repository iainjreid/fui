export type FuiEngine<Type, Names extends PropertyKey, Methods = {}> = Record<Names, FuiElement<Type, any, Methods>>;

export interface FuiBuilder<Type, Names extends PropertyKey> {
  build(name: Names): Type
  append(a: Type, b: Type): void
}

export type FuiTap<Type, Methods> = (tap: (value: any, target: Type) => any) => FuiElement<Type, unknown, Methods>;

export type FuiElement<Type, Env, Methods> = {
  (scope?: Env): Type;

  add: (element: this) => FuiElement<Type, Env, Methods>;
  lift: <AltEnv>(fn: (scope: AltEnv) => FuiElement<Type, AltEnv, Methods> & Methods) => FuiElement<Type, Env extends unknown ? AltEnv : Env, Methods>;
  scope: <OldEnv>(fn: (scope: OldEnv) => Env) => FuiElement<Type, OldEnv, Methods>;
} & Methods

export function core<Type, Names extends PropertyKey, Methods = {}>(builder: FuiBuilder<Type, Names>, methods?: (tap: FuiTap<Type, Methods>) => Methods): FuiEngine<Type, Names, Methods>
