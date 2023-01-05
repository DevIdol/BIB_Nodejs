# BIB_Nodejs_Tutorial-9, 10

- **.env file**
```
PORT = 8000
MONGODB = mongodb://localhost:27017/passport_jwt

SALT = 12

BASE_URL = http://localhost:8000/api
MAIL_CENTER = ucsk.mm@gmail.com
MAIL_PASS = wkifjwvqvcgyobek
HOST = smtp.gmail.com
MAIL_PORT = 587
SECURE = true
SERVICE = gmail

JWTSECRET_KEY = 98d7384a111930fd2d5f0c61dc7aa17b9bf8ba10801a278043b0eb3cc752e3dc51c0001684742619dde243bb0362168e1892dbfe5258803d34e20f3a0f9a98cf
```

- **URL**
```
localhost:8000/api/users/signup

localhost:8000/api/users/login

localhost:8000/api/user/profile

localhost:8000/api/password-reset

localhost:8000/api/password-reset/userId/tokenId
```

- **Method**

`GET`
`POST`


- **Installation**
```
git clone git@github.com:DevIdol/BIB_Nodejs.git
cd BIB_Nodejs
cd "Day20(Tutorial-9)"
yarn
yarn watch
yarn start

open localhost:8000 in the browser