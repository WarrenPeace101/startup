
 
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

## Simon Project

So far I've played around with the raw HTML files from the Simon project. I messed with the SVG, changing the shapes of the Simon buttons. I also played around with various minor features, such as tweeking the scoreboard. I really enjoyed updating the icon to Simon Peter hehe. So far I've learned basic HTML formatting, and why something like CSS is so necessary. I also think that the script for uploading files to my server is pretty cool.

I've continued with Simon 2.0 by updating the CSS of the project. I utilized a little bit of Bootstrap and some personal selectors, changing the theme of the game to a maroon color. I made the scoreboard stand out more from the background with border colors, as well as changing the size and alignment of the about page. I enjoyed making the navigation bar in the header using the flex property, as well by alternating between visible and invisible sections. I also really like the shadow text effect for the main title.

The JavaScript for my Simon project was a bit of a hassle. I ended up backing up my version of the game (HTML / CSS) and using the demo version for simplicity. Even so I spent a while debugging. I think the problem was that I forgot to include the sound files, which resulted in an await that never fully executed. There might have also been some kind of problem with the JSON file which prevented it from displaying the scoreboard. Regardless, I learned that JavaScript has a lot of power, and that I can really lose myself messing around with all the minor details. I'm excited to mess around with some of these features in my Frogger.


##Midterm random notes

 <div>: division
·        <b>: bring attention
·        To point to another DNS record, use the CNAME  record type (CNAME is an alias)
·        A records point to record
·        Importing fonts: @import “font-url”
·        JSON object: {“x”:3} (can’t be undefined)
·        A.filter() returns array with values that match filter
o   /A|f/I (looks for a or f incase sensitive)   
·        A.reduce(): reduces an array down to a single value
·        querySelector returns a single selector element
·        querySelectorALL returns all instances of the selector type
·        a.map(): takes an array and maps it to another array
·        Inner HTML creates a new HTML document, textContent has a single text node
·        Subdomain:
·        Arrow functions have an implied return function when there are no parenthesis
·        Objects do not requires double quotes, JSON do
·        Chmod + x deploy.sh: change modification to be + executable to run the deploy script

Exploring the realms of tech, art, social, discovery
Technology stack: group of technologies used to create / deliver your web application
“The stack”
Top of stack: web framework
Angular, Vue, React, Svelte
Web framework communicates with web services to provide authentication, business, data, storage
Web services use backend services (caching, database, logging, monitoring)
Dependability, support, scalability, performance, and security are all important factors in choosing your stack components
The console navigates your disk and runs console applications
Windows consoles are not POSIX compliant
POSIX commands are Linux standards
Echo: output parameters of command
Cd: change directory
Mkdir: make directory
Rmdir: remove directory
Rm: remove files
Mv: move file
Cp: copy files
Ls: list files
Ls -la: lists all files
Curl: command line client URL browser
Grep: regular expression search
Find: find values
Top: view running processes
Df: view disk stats
Cat: output file
Less: interactive file output
Wc: count words
Ps: view processes
Kill: kill process
Sudo: execute as admin
Ssh: remote shell
Scp: securely copy files to a remote computer
History: history of command
Ping: test connection
Tracert: trace network
Dig: DNS info
Man: look in the manual
Pwd: present working directory
Pipe: output of one command becomes input of the next command
CTRL-C: cancel command
CTRL-R: recall command
CTRL-Z background command
~: default browser
VIM
Insert mode: i
Leave insert mode back into command mode: ESC
:w - write 
:q - quit
Caddy listens for HTTP requests, serving up static files or rerouting the request
Gateway / reverse proxy: the ability to route requests, allows you to exposes multiple web services as a single web service
Caddy handles creation and rotation of web certificates
Caddy serves static HTML, CSS, and JavaScript files
Caddy is your gateway for subdomain requests (proxies requests to the node.js)
Caddy includes 2 files by default
Configuration file (~/Caddyfile): contains definitions for HTTP requests that Caddy receives, determines location of static HTML files, and to proxy requests into services
HTML files (~/public_html): directory served up when root is called, mapped to /usr/share/caddy in ubuntu directory
When Caddy receives an HTTP request on a specific port, the path of the request will be used to find a corresponding file
http://domainName/index.html: will look for index.html file in public_html directory
HTTP (non secure hyper text transport protocol)
Most servers display user information within the server, NOT secure
HTTPS uses a secure connection before data is exchanged
TLS protocol is used to encrypt your data
SSL: outdated predecessor to TLS
A “handshake” happens, including a certificate for your domain name
Web certificate: uses public/private key encryption to validate your browser
Caddy uses Let’s Encrypt to auto-generate a web certificate for any HTTPS that lacks one
You can get a web certificate by enabling ACME protocol and talking to Lets Encrypt to generate needed certificates
We only need to configure Caddy with your domain name (most other production changes are handled with CI processes)
80: http port
443: https port
P (selector) {
		(rule) color:green (property:value)             ←- declaration

}

<body>
<p style=”color:red”>   CSS</p> inline assignment of style
</body>

<head>
<style>
P {
	color:green
}
</style>

Can define using a link to an external document

<link rel=”stylesheet” href=””>

Content, padding, border, margin
Change the “box-sizing” property to “border-box” to include padding and border in width / height measurements

Inline > link > style (precedence)

Lowest child overrides the parent styles

#id-selector

.class-selector

Id takes precedence over class

CSS versions
Selectors, font, background, alignment, margin, border, padding
Positioning, bi-directional text, shadows
2.1 bug fix
Media, box, background, borders, color

Combinators
Body section: for any section that is a descendent of body
Section > p: any p that is a direct child of section
P ~ div: any p that has a div sibling
P + div: any p with an adjacent div sibling

Families of fonts: serifs, san-serif, fixed, symbol
@font-face used to specify and load in new fonts
@import “”


Animation
Animation-name: name;
Animation-duration: duration;
@keyframes name {
From {}
95% {}
To {}
} 
Defines key stages of animation
Unicode: global standard of characters and integers, includes ASCII

Use the Chrome debugger to fix CSS

Tailwind CSS
Smaller CSS definitions for individual HTML elements
Much of CSS done in HTML file
Bootstrap
Very popular and dominant
<link href=”Bootstrap URL” rel=”stylesheet”>

Separate where you made the web application vs where you make it publicly available
Staging, internal and external testing environments must be separate
Continuously integration (CI) processes developed code, tests it, verifies it, and sends it out to the different company departments
Never experiment with your code in your production environment (your AWS server)
Automated deployment is more reliable and faster
Deployment script ./deployService.sh -k ~/prod.pem -h yourdomain.click -s simon
-k: credential file to access your production environment
-h: domain name of your production environment
-s: name of application you are deploying
Script parses the command line parameters
Script copies applicable source files into a distribution directory 
Secure shell program (ssh) deletes directory on the production environment so that a new one can replace it
Secure copy program (scp) copies distribution directory to your production environment
Use ssh to install node packages and restart the service daemon in the production environment
Delete the distribution directory in your development environment
Staging environment: testing prior to release to production environment, a prototype of the production environment

Dig / nslookup:  used to return IP address of a domain name
Domain name registry contains all domain names
Domain name contains subdomain prefixes followed by root domain
Root domain consists of top level and secondary level domain
Top level domain (TLD) represents com, edu, click
Whois: used in console for information about a domain name
Authoritative name servers associate domain names with the IP address
Address (A) record: maps from domain name to IP address
Canonical name (CNAME) record: maps a domain name to another domain name as an alias (byu.com vs byu.edu)
Time to live (TTL) setting for domain names will clear the cache of domain names after a certain amount of time
Localhost: an IP address that refers to your own development environment
Name server (NS): contains names of authoritative name servers, used to verify your identity in the DNS
Start of authority record (SOA): contact information about the domain name owner

VI (vim): very old and powerful, available on all Linux servers
Modal: can input characters or move throughout the console
Useful for system administration, programming, working with markup languages, heavy editing of text files
Insert mode: type ‘i’, allows for characters, escape with ESC
Command mode: default
H: cursor left
J: cursor down
K: cursor up
L: cursor right
0: cursor to start of line
$: cursor to end of line
W: forward one word
B: back one word
G: move to end of file
gg: move to beginning of file
‘.: move to last edit
Preface with a number to repeat multiple times
X: deletes character with mouse pointer
U: undo
Dw: delete word from cursor onwards
CTR-R: redo
/text searches for text in document
?text searches backwards
N brings back searched text
You can past deleted text back into the document ‘p’
V: select text V select lines
CTR-V: highlight a column
Y: yanks highlighted text into buffer
P: paste text
CTR-wv: split window vertically
CTR-ww: toggle windows
CTR-wq close current window
Last-line mode: used to save file
 : for last-line mode
:w filename to save file
:q quit
:q! Quit w/o saving
ZZ save and quit file

Linus Torvalds (creator of Linux) created Git, the world’s most popular version control system
Git allows you to track versions of a file in a directory
Git allows you to clone those versions to another location (like another computer)
You can track file versions by initializing git for that directory
Versions stored in the .git directory
Use git add to allow git to track versions of a file
Commit -m “message to live with version”
A commit can represent multiple files
Git commit -a “message”
A means that we will add all tracked modified files to our commit
View version history with git log
Every commit has a unique identifier, file mixed with SHA hashing
Checkout command is used to view previous versions
Git checkout master: reverts to branch name (latest version)
Commits move from your working directory to staging them for a commit, to committing them to a repository
Checking out older versions is like going back in time to the status at the time of the commit
Git diff HEAD HEAD~1 
Branching your code: allowing variations of code will still allowing changes on the original branch
Git branch creates branch
Git merge, to connect side branch into the main branch
Committing often is a good habit
Protects you from losing your work
Allow access from anywhere
Quickly share changes
Reduce peer conflict
Explore different possibilities
Everytime you make a change to a large file (like a video), git will save a copy of it
Git init:
Git add: pushed into staging state
Git commit: pushes staged information into a repository

GitHub: a cloud based program used to store cloned repositories online
Pull request: used to insert your own ideas to a repository
Anyone with your repository URL can clone it to their projects
When you clone a repository it is placed into a subdirectory with the name of the repository
Push pushes your changes forward, pull is used to access them
Git status compares your working repository with the one on GitHub
Each repository contains a README.md for note taking
Fork a repo creates a copy of a repository on GitHub
Commit: a snapshot of all the files in your project at a given time
Personal access token: provides access to GitHub resources for your personal self
Fine-grained personal access tokens
Each token can access resources from a single organization
Only access specific repositories
Always include expiration date
Can  require organization approval
Personal access tokens can only be used for HTTPS git operations
GitHub writing and formatting (Markdown)
# large heading ###### small heading
** bold text **
* italic text *
~~ strikethrough text ~~
*** all bold and italic ***
<sub> subscript text </sub>
<sup> superscript text </sup>
> quote text
‘ text not to be formatted ‘
‘’’ unique block of text ‘’’
[name of link](url)
Use relative links to refer to other files in your repository
Images: ![alt text](image directory)
List of tasks - []
:EMOJICODE:
\ used to escape Markdown formatting symbols
.gitignore
Choose the files not to track

   3 phases
Formation of the internet, which supports communication of web applications
ARPANET: created by Department of Defense to communicate among universities for defense (70s)
Formed network paths w/o central authority, link by link
Consumers began to participate and explode in the 90s
Explosion in 2000s with phones and appliances
Internet Engineering Task Force (IETF): defines technical standards for how physical networks communicate
Internet Corporation for Assigned Names and Numbers (ICANN): oversees IP (Internet Protocol) and DNS (Domain Name Space) 
The “address book” of the Internet
2016: The US government gave the Internet control to the public
Formation of HTML & HTTP, which allowed the sharing of hyperlinked documents (Web 1.0)
1980, Tim Berners-Lee: create a system to share documents between remote systems
Defined document sharing protocols -> World Wide Web
Format of document named Hyper Text Markup Language (HTML)
Introduced hyperlinks to connect documents
1990 first web server
Browser vendors created new HTML tags for profit and efficiency
HyperText Transfer Protocol (HTTP): 
Uniform Resource Locator (URL):
Used to specify how web documents are addressed and transmitted across the internet
Creation of CSS & JavaScript, which allowed interactive web applications (Web 2.0)
Cascading Style Sheets (CSS): gave HTML documents visual styling apart from structure
Avoided hard coding appearance in pure HTML
1996 CSS became standard and implemented
CSS is used for styling web pages, much more advanced now
1995 Netscape wanted to script web pages -> Brendan Eich formed 
JavaScript
JavaScript allowed for interacting with web pages
Aka ECMAScript
Last major update (ECMAscript 6) in 2015
2009, JavaScript applied outside of a browser (Node.js)
2013, standardization of object notation JSON
2012, TypeScript
Web browser can render a page with HTML, and then references CSS and Javascript to build the page
HTTP and DNS are used to communicate with web servers
Web server connects to external cloud services

Hypertext Markup Language
Foundational content structure
A page can represent a single page application (SPA) or hyperlinked multi-page application (MPA)
HTML elements are enclosed by tags (enclose other elements or text)
<p>Hello world </p>
<html> top level page structure
<head> contains metadata about page and title
<title> shows up on the browser tab
<body> represents content structure
<main> represents main content structure (opposed to headers, footers, asides, navigation content)
Every element can have attributes, which describe details of the element
Id: gives element id
Class: part of a named group of elements
Hyperlinks: <a href=”IP”>Name</a> (this is absolute)
Relative: relative to your current URL
<!DOCTYPE html> used at start to tell the browser the type of document
Comments: <!--         - ->
Certain special characters needed for escapes
&amp; &lt; &gt; &quot; &apos;
Years of development with different versions
Format tags, tables & international, MathML CSS frame tags, external CSS, email password media semantic tags, etc.
<div> block division of content
<span> inline span of content
Block elements take up the entire line, in-line is part of a line
Greater structure in an HTML documents allows for search indexing crawlers and accessibility screen readers can interpret the document correctly
Form: input container and submission
Fieldset: labeled input grouping
Select: selection dropdown
Otpgroup: grouped selection dropdown
Option: selection option
Textarea: multiline text input
Meter: display value with a known range
Form sends data to a web server (JavaScript can also do this)
Types of input: 
Text: single line of text
Password
Email
Tel
Url
Number
Checkbox: inclusive selection
Radio: exclusive selection
Range: limited number
Date: year, month, day
Datetime-local: date and time
Month: year, month
Week: week of the year
Submit: triggers form submission
Input attributes
Name: submitted as name in form
Disabled: interactable or not
Value: initial value
Required: needs a value
Pattern: a required pattern for a field
Img, audio, video, all reference external file
Svg, canvas: contain code for visual
Canvas uses JavaScript

Brendan Eich invented JavaScript, -> ECMAScript, various updates until 2015
JS is turned into an executable through an interpreting engine
console.log(): used for output
Function name(parameters) {
		Return a + ‘ ‘ + b;
}

You can include JS in HTML with <script>
Or <script src=”javascript.js”></script>
You can include JS within other elements
Debugger; launches debugger in code
Loose equality without types 1 == “1”
Strict equality with types 1 === “1” FALSE
‘Use strict’;
Let y = 1;
Var keyword defies scoping operator, let follows scoping operators
Time, timeEnd: returns time between 2 lines
.count(): returns number of iterations of a specific block of code
Number: datatype
Object: set of name-value pairs
Date: calender date and time
Array: ordered sequence of any type
Map: collection of key-value pairs for efficient hookups
JSON: data interchange format for sharing information
Can convert into JavaScript, can lose information in the process
Functions return
Arrow function syntax
Single line, implicit return value
This pointer, refers to scope of the arrow function
Const arrow = () => 1;
Const arrow = function() {return 1;}
Can’t be used for constructors or iterator generators
With braces, you must include return


Closure: function and its surrounding state
Used for a function that returns a function
String
toUpperCase(), toLowerCase()
.split() -> array
.endsWith()
.replace()
.slice(pos, pos2)
Regex
“Regular expression”
Textual pattern matchers
Const objeRegex = new RegExp(parameters)
Const literalRegex = /parameter/parameter2;
string.match(objRegex): returns found elements
string.replace(objRegex, replace): replaces string values with replace
objRegex.test(“element”) = true
array.push()
.pop() removes last element
Let x of array: iterating
.map(): used to apply functions to arrays, returns a new array
.reduce(accumulator p, current c): reduces down to a single value
.filter():  returns a filtered subset “true values”
.some(): returns true is some of the memers return true
Try, throw, catch, finally
Only use exceptions in situations that are rare
Let x = NULL || 5;
Chooses 2nd value if 1st is false
?? uses right if left is nullish (null or undefined)
Object: {animal : “fish”};
A function that returns an object is a constructor
.join(“”)
spread(): spreads out content into new content
const p = person(...['Ryan', 'Dahl'])
rest(): one parameter represents other parameters
Put … before final parameter, they are combined into an array


objectArrayOperators():
Module scope: visible in the module
This can refer to globalThis object, within a function it refers to the object that owns the function, or referring to an object within an object
Functions within an object have access to the object’s this pointer
Arrow functions have a this of their creation context
If you return the arrow function this refers to the object
Node.js: JavaScript execution application
Node.js modules: CommonJS
JavaScript modules: ES
Modules create file-based scope, use export to be visible outside module
Import module into another module
Modules can only be imported into other modules (not globals)
You can specify the type of module in your <script>
DOM: Document Object Model
Object representation of HTML elements used to render your display
Global variable document refers to DOM
QuerySelectorAll(selectorVariable): selects elements
Create element in DOM, append it to existing element in DOM tree
removeChild()
Injected HTML shouldn’t be manipulable
Event listeners execute function when event occurs
.addEventListener(‘click’, function (event) ) {}
.getElementById()
.QuerySelectorAll()
.innerHTML()
.createElement()
newChild.textContent = text
parentElement.appendChild(newChild)


Destructuring
[x] = a; only returns the first value of an array
[x y= 500] = a;
With objects, you specify the attribute that you want to reference
Javascript is single-threaded (one execution process at a time)
Asynchronous functions are executed after a certain amount of time
Pushed into WebAPI stack, pops function back onto main execution queue afterwards
Promise
Pending: currently running
Fulfilled: completed 
Rejected: failed to complete
Function callback(resolve, reject) {
resolve(‘done’);    ←– result
Const p = new Promise(callback)
p.then((result) => console.log(result));
Then function executes when the function resolves or rejects
p.catch()
p.finally() 
Await: used as a promise (different syntax, same purpose)
Await must be called from a top level module function or called form an async function
Await returns the result of a promise
Async functions always return promises
If not explicitly returning a promise, one will be auto-generated
Observers: similar to Promises, but instead of being called immediately they can be reused
 
Responsive design: how an application can readjust to different screen sizes
CSS display property
Block: width fits parent element (div, p, etc.)
Inline: width fits content of element (span, b, etc.)
Flex: flexible orientation
Grid: grid orientation
To not scale the browser size
<meta name=”viewport” content=”width=device-width, initial-scale=1” />
Float CSS: moves element to side of its container frame
@media selector reads device orientation and dynamically applies CSS
Grid layout used to display a group of elements in a responsive grid
Grid-template-columns: specifies 
Flexboxes: elements responsively adjust
Uses ratios to orient the page















