# Project Apps


## contacts

- [Project Apps](#project-apps)
  - [contacts](#contacts)
  - [overview](#overview)
  - [task](#task)
  - [Phil](#phil)
  - [Phil2](#phil2)
  - [Node.js Hello World](#nodejs-hello-world)
  - [Node.js Web Server](#nodejs-web-server)
  - [Express.js Web Server](#expressjs-web-server)
  - [React Hello World](#react-hello-world)
  - [Node.js Hello World on Docker](#nodejs-hello-world-on-docker)
  - [Node.js Web Server on Docker](#nodejs-web-server-on-docker)
  - [Express.js Web Server on Docker](#expressjs-web-server-on-docker)
  - [create workspace](#create-workspace)
  - [set nx path](#set-nx-path)
  - [list libraries](#list-libraries)
  - [add a library](#add-a-library)
  - [generate a project](#generate-a-project)
  - [get help](#get-help)
  - [build a project](#build-a-project)
  - [show a project](#show-a-project)
  - [run a project](#run-a-project)
  - [run many](#run-many)
- [Option 2: Run with single command](#option-2-run-with-single-command)
  - [docker](#docker)

## overview

this app is investigating nx, with the help of bolt

## task

recreate this whole repository again from scratch as it's been tainted by ai builder; we need to start again from scratch and have just pure nx scaffolding in here

## Phil
- **Technology**: TypeScript
- **Commands**:
```bash
npm run build -w @apps/phil
npm run serve -w @apps/phil
```

## Phil2
- **Technology**: TypeScript
- **Commands**:
```bash
npm run build -w @apps/phil2
npm run serve -w @apps/phil2
```

## Node.js Hello World
- **Technology**: Node.js
- **Commands**:
```bash
npm run serve -w @apps/node-js-hello-world
```

## Node.js Web Server
- **Technology**: Node.js
- **Commands**:
```bash
npm run serve -w @apps/node-js-web-server
```

## Express.js Web Server
- **Technology**: Node.js with Express.js
- **Commands**:
```bash
npm run serve -w @apps/node-express-web-server
```

## React Hello World
- **Technology**: React with TypeScript
- **Commands**:
```bash
npm run serve -w @apps/react-hello-world
```

## Node.js Hello World on Docker
- **Technology**: Node.js with Docker
- **Commands**:
```bash
# Option 1: Run commands separately
cd apps/node-js-hello-world-on-docker
docker build -t node-hello-world .
docker run node-hello-world

# Option 2: Run with single command
npm run docker:hello
```

## Node.js Web Server on Docker
- **Technology**: Node.js with Docker
- **Commands**:
```bash
# Option 1: Run commands separately
cd apps/node-js-web-server-on-docker
docker build -t node-web-server .
docker run -p 5004:5004 node-web-server

# Option 2: Run with single command
npm run docker:web
```

## Express.js Web Server on Docker
- **Technology**: Node.js with Express.js on Docker
- **Commands**:
```bash
# Option 1: Run commands separately
cd apps/node-express-web-server-on-docker
docker build -t express-web-server .
docker run -p 5005:5005 express-web-server

# Option 2: Run with single command
npm run docker:express
```

## create workspace

```bash
npx create-nx-workspace@latest
```

## set nx path

```bash
# add this line to /etc/paths
# ./node_modules/.bin
which nx
# ./node_modules/.bin/nx
# or
export PATH="$PATH:./node_modules/.bin"
```
## list libraries

```bash
nx list
```

## add a library

```bash
nx add @nx/express
nx add @nx/web
```

## generate a project

```bash
nx generate @nx/node:lib apps/nodelibrary
nx generate @nx/express:app apps/express2
nx generate @nx/web:app apps/webapp01
```

## get help

```bash
nx generate @nx/js:library --help
```

## build a project

```bash
nx build nodelibrary
```

## show a project

```bash
nx show project nodelibrary
```

## run a project

```bash
nx serve express2
```

## run many

```bash
nx run-many -t serve
nx run-many -t build lint
```

# Option 2: Run with single command

```bash
npm run docker:express
```


## docker

```bash
docker build -t user-server .
docker run -p 5005:5005 user-server
```