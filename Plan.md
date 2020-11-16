Basics to typescripts :

[x] INSTALL TYPESCRIPT
--> `npm install typescript`
[x] COMPILE TS FILES
--> `npx tsc src/index.ts`
[x]INITIALIZE TSC CONFIG
--> `npx tsc --init`
[x]CHOOSE THE BEST OPTION TO COMPILE TS

### "target": "es5",

/_ Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. _/

### "module": "commonjs",

/_ Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. _/

### "strict": true,

/_ Enable all strict type-checking options. _/

### "esModuleInterop": true,

/_ Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. _/

### "skipLibCheck": true,

/_ Skip type checking of declaration files. _/

### "forceConsistentCasingInFileNames": true

/_ Disallow inconsistently-cased references to the same file. _/

### "outDir": "dist",

/_ Redirect output structure to the directory. _/

### "jsx": "react",

/_ Specify JSX code generation: 'preserve', 'react-native', or 'react'. _/

### "include": ["src/**/*"]

/_ include which folder you wanna compile or which file _/

[x]RUN THIS CODE TO SEE IF IT WORKS
--> `npx tsc`
/_ It should create a new directory called dist where there is an index file _/

[x]INSTALL NODEMON AND `CONCURRENTLY `
--> `npm install nodemon and concurrently`

[x]YOU CAN CREATE NEW SCRIPT LIKE :

--> `"build": "tsc"`

/_ you can call it by `npm run build`_/

--> `"dev":"concurrently -k -n COMPILER,NODEMON -c yellow,blue "tsc -w" "nodemon -w dist -q dist/index.js""`

/_ This basically helps you to run nodemon and typescript compiler at the same time, with a clean text and by watching every changes in the files _/
