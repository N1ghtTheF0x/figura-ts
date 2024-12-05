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

### creating ping functions

For the time being you have to cast the parameters of your ping function until I figure out how not to do that

```typescript
pings.somePingFunction = function(arg)
{
    someFunction(arg as boolean)
}
```

## License

This project is licensed under [MIT License](./LICENSE)
