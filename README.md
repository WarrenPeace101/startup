
 
#  Multiplayer Frogger

Imagine you are all alone in your basement, trying to get the absolute perfect run. You've spent hours hopping across lily pads and side-stepping semi-trucks. You finally did it! A new high score! All is well in the world. And then your grandpa scoffs from the back of the room, saying that he can do it better. A direct challenge to your pride. You must respond.

Now presenting **multiplayer Frogger**! :frog: This is a remake of the classic arcade game, with the addition of a multiplayer interface! :frog: :frog: Different players can each login to the game with their personal froggy and try their hand at the course! The frogs will then maneuver themselves through the obstacles, trying to reach the end of the course. Think you have what it takes to beat your grandpa? Come play and find out!

May the best froggy win! Watch out for cars! 🚙

![IMG_0787](https://user-images.githubusercontent.com/113727042/214997370-7d501060-c900-4892-8bd5-f15e53328c71.jpg)
![IMG_0788](https://user-images.githubusercontent.com/113727042/214997356-4c140b5c-f747-4d7f-896a-a54fcd19ef73.jpg)


Some features include:
* login to the server, create and name your frog
* live in-game chat
* first player to complete the game (cross the obstacles into the safe zone five times) wins
* if you get run over or drown three times, you lose

Frogger: https://startup.warrenfrogger.click/
Simon: https://simon.warrenfrogger.click/
About Me: https://warrenfrogger.click/

## Startup Notes

I've had a lot of fun (and a little bit of sweat) learning the different CSS elements. I combined different elements together to create a frog, a truck, a car, and some other stuff! I also played around with the borders of the page for a while (using flex and relative), even though they are still a little off. I've learned that changing even one tiny detail in the CSS can completely throw off the entire page, so I'm not sure if I'll change it much more. But still I think it's super cool that you can have so much customizaiton.

JavaScript is a load of fun. So far I've added movement abilities for the frog (WASD), which is a little glitchy but works overall. You can move over to the flies on the far side of the map and "eat" them, which will send you back to the front (don't worry though, they'll be back once you're done). I also spent a while customizing the movement of the trucks and cars. I just added collisions, which will kill your frog and send him back to the start. You can ride along the logs as well! I've learned that you have to be very specific about exactly where the left and top elements are located in order for the server to register a connection.

Implementing the next step was the hardest yet. I got a random quote placed onto the front page following the given example, which actually looked a lot better than I thought it would. I was able to get a database registered and connected to my login credentials (which is just a password you enter). I wasn't able to encrypt the password, but I still was happy with that outcome. I then continued by adding some functionality to the live chat at the bottom of the gamescreen. When someone wins the game (who isn't yourself), a message is sent in the chat. I haven't figured out how to personalize that message yet. Overall this step was difficult but I learned a lot and I played a lot of Frogger in the process.

## Simon Project

So far I've played around with the raw HTML files from the Simon project. I messed with the SVG, changing the shapes of the Simon buttons. I also played around with various minor features, such as tweeking the scoreboard. I really enjoyed updating the icon to Simon Peter hehe. So far I've learned basic HTML formatting, and why something like CSS is so necessary. I also think that the script for uploading files to my server is pretty cool.

I've continued with Simon 2.0 by updating the CSS of the project. I utilized a little bit of Bootstrap and some personal selectors, changing the theme of the game to a maroon color. I made the scoreboard stand out more from the background with border colors, as well as changing the size and alignment of the about page. I enjoyed making the navigation bar in the header using the flex property, as well by alternating between visible and invisible sections. I also really like the shadow text effect for the main title.

The JavaScript for my Simon project was a bit of a hassle. I ended up backing up my version of the game (HTML / CSS) and using the demo version for simplicity. Even so I spent a while debugging. I think the problem was that I forgot to include the sound files, which resulted in an await that never fully executed. There might have also been some kind of problem with the JSON file which prevented it from displaying the scoreboard. Regardless, I learned that JavaScript has a lot of power, and that I can really lose myself messing around with all the minor details. I'm excited to mess around with some of these features in my Frogger.

HTTP and Express were a little hard to wrap my head around but I think I more or less understand them now. Basically you are using some kind of service to host your server files, which allows for certain external manipulations. For example, you can use Express to externally run a server, which references source files, rather than running the raw files direclty themselves. For example, the service loads in the scores data that is stored within the service api. Using HTTP commands I can write new scores and edit old ones. I also liked using fetch to obtain data from other services, which could allow for a wide range of additional potential without having to hard code everything yourself. That's super cool!

Adding a Database was an interesting process. Being able to take your scores that you make during gameplay and ship them off to an external source. That's pretty cool. I liked seeing the interaction between the HTTP service, the Javascript code, and the database to which the scores were sent. It all makes a little more sense now. Also I like how in Mongo you are able to distinguish between different project directories for better storage. Now I'm excited that I'm able to boast my Simon skills against my siblings ;)

I really like being able to login to play Simon. I plan on using this system in my Frogger quite a bit. I like how you are able to store additional information besides just the username and password within the database upon creating an account. For example, in my Frogger I can include a "frog-color" section to record the color preference for each account. There are a ton of different ways that I could customize this!

Having a notification system using websockets is super cool. I noticed that it did tend to slow the game down a bit, which is probably from the overhall on my cheap nano server. But still, viewing notifications from various online players at the same time is nifty. Similiar process to implementing the HTTP, but extending to create updates in real time. I also liked the ping-pong functions, which could help relieve some of the overhall.

I walked through the process of converting my Simon code into a React framework. It was a long process but I felt like it was a good review of pretty much everything we did all semester long. I also think it's cool how most modern web services use a framework similar to this one. In some ways it seems a little tedious to set up, but also much more organized and neater coding overall. I learned a lot!

##Final Exam
Cookies allow a server to store data on a client, HTTP headers include host, content-type, cookie, authorization, origin, content-length, cache-control, user-agent, fetch can be used on both front-end and back-end, JSX combines HTML and JS (NOT CSS), Linux daemon (such as PM2) executes independent of users, starts upon reboot, Websocket uses peer to peer communiation (not client-server), HTTP: 80, HTTPS: 443, SSH: 22, 100 information, 200: success, 300: redirect / previous cache is valid, 400: client error, 500: server error, 201: created, 204: no content, 304: not modified, 307: redirect, 400: bad, 401: unauthorized, 404: not found, 418: ima teapot, 429: too many requests, linter warns of non-idiomatic code, prettier formatting, transpiler compiles code into different format (Babel), polyfill creates backward compatible code, bundler packages code into bundles for delivery to browser, minifier, create-react-app CLI for testing React, NPX temporarily downloads package and runs it, react-scripts converts JSX to Javascript & fills HTML w/ references, build script transpiles, minifies, injects proper JavaScript, outputs everything to a deployment ready version, react-router-dom v6, db.frogger.find({ status: 'available', beds: { $lt: 3 } }); db.house.find({ summary: /(modern|beach)/i });
