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
