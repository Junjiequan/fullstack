# Product feedback app - full stack [ Work In Progress ]

## Installation

Clone repository

```
git@github.com:a331998513/fullstack.git
cd fullstack/client    < open app folder
cd fullstack/server    < open api folder
```

NPM

``` 
cd fullstack/client npm install
cd fullstack/server npm install
```

Run app 

```
cd fullstack/client npm run start
cd fullstack/server npm run server
```

If typescript erro pops up, create .env in the root folder and include the text below
```
SKIP_PREFLIGHT_CHECK=true
```

PORT for Server is 5000 whereas for Client is 3000;
If you are running the app on different port other than 3000, then the origin of the cors needs to be changed accordingly. 
Origin of the cors can be found in `fullstack/server/index.ts` 
```
const origin = "http://localhost:3000";    // Change 3000 to your current port
```

