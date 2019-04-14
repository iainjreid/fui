declare function FuiProxy<Target, Methods = {}>(target: Target, methodsFn: (target: Target) => Methods): Methods & Target;

export = FuiProxy;
