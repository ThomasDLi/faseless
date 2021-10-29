# faseless
Anonymous and open source social media site. Programmed in Next.JS, backend in FastAPI. 

### dependencies

Python Server Dependencies (server found in /server):

- fastapi
- requests lib
- uvicorn (to run server, type "uvicorn server:app --reload" after installing)

NPM Frontend Dependencies (frontend found in /faseless):

- Next.JS

type "npm install" while in the "faseless" directory after downloading files to auto install

### known issues and currently being worked on things

Currently data is stored with a JSON file on the server, plans to migrate to MongoDB is being worked on right now, should be done in 1-2 weeks.

Passwords are currently stored in plaintext, working on hashing them and more secure ways of checking passwords. Should be done in 1-2 weeks.
