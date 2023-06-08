# TypeScript

## Installation

```
npm i -g typescript
tsc -v
```

### To generate tsconfig.json file

```
tsc --init
```

### Folder Structure

```
|--src
   |--index.ts
|--dist
   |--index.js
|--tsconfig.json
```

### Modifying tsconfig.json file

```
"target": "es2016"
"rootDir": "./src"
"outDir": "./dist"
```
