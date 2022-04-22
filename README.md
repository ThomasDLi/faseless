# faseless
Anonymous and open source social media site. Programmed in Next.JS, backend in FastAPI, data stored with MongoDB. 

### dependencies

Python Server Dependencies (server found in /server):

- fastapi
- requests lib
- mongodb for python, as well as a mongodb server.
- uvicorn (to run server, type "uvicorn server:app --reload" after installing)

NPM Frontend Dependencies (frontend found in /faseless):

- Next.JS

type "npm install" while in the "faseless" directory after downloading files to auto install

### website and server

Website:

https://faseless-thomasdli.vercel.app/

Server:

https://replit.com/@daffythomasli/FaselessServer#main.py

### known issues and currently being worked on things

Passwords are currently stored in plaintext, working on hashing them and more secure ways of checking passwords. Should be done in 1-2 weeks.
Update: too lazy to fix, passwords will continue to be stored in plaintext.
