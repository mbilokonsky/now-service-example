See this running [here](http://app.l3.wtf).

## Simple Example with Client and Server
Now can be used to host all kinds of stuff. In this example, we have a (very, very simple) front-end web application (consisting of a single index.html file), and we have a (very, very simple) back-end web server (consisting of a single `micro` instance).

But understand that this is really no different from a full-stack web app in the important ways. The output of your `webpack` build is going to be a static folder, just like `app/` here. It'll be more complex, but fundamentally it's the same thing.

Similarly, your server may be running express and talking to a database or whatever, but at the end of the day it's a node application (or something else running in docker).

The question is, how can these two aspects of your project be deployed in a way that lets them communicate together? We don't want to serve the static front-end files out of the backend, because that requires a server redeploy every time we change something, etc. We want the ability to decouple two things that are very separate parts of the same project.

## Now to the rescue!
Using `now`, we can deploy the front-end code to one server and the back-end code to another server. The Front End is deployed as static files - we just take the following steps (note: in this code, I'm using `l3.wtf` as my host. For you to run this, you'll want to change that to a host you control on now).

  1. `cd app`
  2. `now`
  3. `now alias [resulting host] [app.yourhost.com]`

Now, when you go to `app.yourhost.com` in your browser, you'll see your front-end app. But, you will get an error if you're trying to hit the server - because we haven't set it up yet.

So, `cd ../api` to go to your API server. Note that in `index.js` I'm manually specifying `Access-Control-Allow-Origin` to point to `app.l3.wtf` - that's my server, you'll want to change this for your own. Once you've done that, just take the following steps:

  1. `now`
  2. `now alias [resulting host] [api.yourhost.com]`

And bam, you've got both running, and the app server can communicate with the API server.

## Is it that simple?
Yeah, but you probably want to get a bit more clever about hostnames. Maybe build it into your webpack build script for the client, and use envars for your api?