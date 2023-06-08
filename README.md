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
"target": "es2016",
"rootDir": "./src",
"outDir": "./dist",
"noImplicitAny": true,
"noUnusedParameters": true,
"noImplicitReturns": true,
"noUnusedLocals": true
```

## Fundamental Types

JavaScript Data Types

1. number : 1,2,3
2. string : 'hi', 'hello', '123'
3. boolean : true, false
4. null : Intentional absence of value
5. undefined : Absence of value
6. object : const person = {firstName:"John", lastName:"Doe"}
7. symbol : Immutable and unique

```
Symbol

const x = Symbol('hey');
console.log(x.description); // hey
```

TypeScript Extends the list by adding :

1. any
2. unknown
3. never
4. enum
5. tuple
