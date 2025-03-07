# figura-ts

Lua Types for the Minecraft Mod [Figura](https://figuramc.org/) with [TypeScriptToLua](https://typescripttolua.github.io/)

## Setup

Install package via any package manager

```sh
npm install -D figura-ts
```

Create a `tsconfig.json` with at least these options:

```json
{
    "compilerOptions": {
        "target": "ESNext",
        "lib": ["ESNext"]
    },
    "tstl": {
        "luaTarget": "5.2",
        "luaLibImport": "require"
    }
}
```

Put this line inside the source directory somewhere:

```typescript
/// <reference types="figura-ts" />
```

Now you can code just like with lua, you can then compile the code with `tstl` and use it

## Limitations

### accessing `LuaEvent` from `events.entity_init`, `events.tick`, etc

In lua you can access the `LuaEvent` object from the lowercase named events but in figura-ts you can only access them from the uppercase named events (`ENTITY_INIT`, `TICK`, etc.)

```typescript
events.entity_init.register(someFunc,someName) // Does not work
events.ENTITY_INIT.register(someFunc,someName) // works
```

## To-Do

- figure out what `FiguraTabList.Header` and `FiguraTabList.Footer` properties have

## Changelog

- `1.0.0`
  - inital version
- `1.0.1`
  - finished current GitHub transpile
  - renamed some functions/types to fit GitHub code
  - fixed some functions/namepspaces
- `1.0.2`
  - fixed some methods with no `this: void` but are required
  - ping functions do not need casting anymore
  - added some Minecraft interfaces from their wiki for nameplates
- `1.1.0`
  - added more Minecraft interfaces
  - Changed all type names to start with `Figura` to not cause any issues with other libraries (maybe)
  - updated for Figura 0.1.5

## License

This project is licensed under [MIT License](./LICENSE)
