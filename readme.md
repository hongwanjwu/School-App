# School App


## Usage
1. Install all dependencies
```bash
npm install
```

2. Start server
```bash 
npm start
``` 

3. Please copy the config_example.js file, and save it as config.js. If your psql has a password, please enter it in the config.js file, else, set it to null.

4. Create database and seed database
Please update the psql user name in the script, then:
```
npm run schema 
npm run seed
```

5. To create a client bundle
```javascript
npm run build
```

6. Go to localhost:3000

Node version: 13.1
Postgres version: 11.5
