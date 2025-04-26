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

Currently no limitations, you can use all the features TypeScript and TypeScriptToLua provides

## To-Do

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
- `1.1.1` (unreleased bc I forgor 💀)
  - fixed raycast api
- `1.2.0`
  - events with lowercase name can be accessed as `FiguraLuaEvent` now
  - added types to `client:getTitle`, `client:getSubtitle` and `client:getActionbar`
  - some return types with `LuaTable` now have specific types
  - `config` is not a generic anymore, but strict types can only be passed now
  - even more Minecraft related types added (not my high priority rn)

## License

This project is licensed under [MIT License](./LICENSE)
