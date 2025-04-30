# Project Apps

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