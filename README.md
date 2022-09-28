# JWT-Token-Authentication

In this repo I have implemented the logic of JWT Token authentication with access & refresh token. One can use access token to access perticuler content on the different server and that token will expire after 20s so user can use refresh token api to generate another access token to access the content again for 20s.

Using this way of authorization even if hacker has the access token then he/she will not be able to access the content for much time.I haven't set the expiary for refresh token but have implemented the logic to invalidate the refresh token using which we can delete that perticular refresh token from the DB and then user has to generate new access and refresh token to access the content on different servers. (User can use same access token to access content on different servers.).

To simulate this process using this repo follow below steps.
1) Clone this repo
2) run npm install to download all the dependencies.
3) run "npm run dev" to start 1st server 
4) run "npm run dev2" to start 2nd server
5) run apis in request.rest file.
