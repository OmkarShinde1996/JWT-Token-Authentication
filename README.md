# JWT-Token-Authentication

In this repo I have implemented the logic of JWT Token authentication with access & refresh token. One can use access token to access perticuler content on the different server and that token will expire after 20s so user can use refresh token api to generate another access token to access the content again for 20s.

Using this way of authorization even if hacker has the access token then he/she will not be able to access the content for much time.I haven't set the expiary for refresh token but have implemented the logic to invalidate the refresh token using which we can delete that perticular refresh token from the DB and then user has to generate new access and refresh token to access the content on different servers. (User can use same access token to access content on different servers.).

To simulate this process using this repo follow below steps.
1) Clone this repo
2) run npm install to download all the dependencies.
3) run "npm run dev" to start 1st server 
4) run "npm run dev2" to start 2nd server
5) run 4th api in request.rest file to get access token and refresh token for username "omkar"
6) copy and paste access token in 1st api and copy paste refresh token in 2nd and 3rd api
7) now run 1st api (if you get forbidden error run the 3rd api to generate new access token using refresh token as access token is only valid for 20s).
8) keep generating access tokens as long as you want using 3rd api with refresh token.
9) once done you can use 3rd api to invalidate the refresh token and after that you  no longer able to generate new access token using the same refresh token with 3rd api. You need to re-generate new access and refresh token to access 1st api using 4th api.
