There is no need to .gitignore firebaseConfig.js for our web application.
In our public folder add an index.html
Fireship is suggesting that the copy and pasted firebaseConfig code is placed in this index.html
This HTML will also initialise firebase with the following method

`firebase.initializeApp(firebaseConfig);`

Only add the links for the firebase features that are going to be used in the app. The code for authentication is:

<script src="https://www.gstatic.com/firebasejs/7.6.1/firebase-auth.js"></script>

![Alt text](../images/firebase-available-library.jpg);

These links get pasted into our index.html just like any other CDN that we link to.

We also want a app.js file in our public folder.
This file should have a script tag that references these links.
We want to use the defer attribute so that theese scripts loads after the body element has loaded

`<script src="app.js" defer><script>`

This will make it so that firebase is a glocal variable on the window that can be accessed from app.js file when logging to the console

To check that this is working properly, right click, copy path, use this path as the URL in the browser 

![Alt text](../images/fireship-object-console-log.jpg)

Next thing to do is to download the firebase command-line tools and to initialise the project so that it connects the command-line to the cloud. Serves and deploys our app to a real URL on the internet 

![Alt text](../images/firebase-CLI.jpg)

To install this use the following command with the global flag -g to make the commands globally available on our system

`npm i firebase-tools -g`

next use:

`firebase login` 

and authenticate the window. This will allow us to manage our firebase project from the command line.

Download Firebase Explorer extension in VSCode. Connects google account to firebase projects in vscode.

Next run:

`firebase init`

to configure firebase in this project

![Alt text](../images/firebase-features.jpg)

This will prompt firebase to ask you what features you will be using in your project. (Ship choices were hosting as well as emulators (use spacebar to make the selection)). 

Firebase emulators are a way for you to be able to simulate firebase services locally on your computer. (Running cloud functions without connecting to the cloud)

![Alt text](../images/firebase-emulator-options.jpg)

This will create two files in the root of our project - 
.firebaserc (resource configurator file, contains an identifier for our project in the clour) and firebase.json (a file we can modify to change the behaviour of various firebase services).

firebase.json can be used in conjunction with hosting for creating redirects and rewrites to different URLs in the app.

To run our app locally (on localHost:5000) there are two methods:

`firebase serve` or `firebase emulators:start`

To deploy the app to a production URL is also very easy, we just need to use the command 

`firebase deploy`

will take the files in our public directory and upload them to a storage bucket in the cloud- it will automatically provision a hosting URL and web.app. Follow the url to see the web app available on the internet.

---

# Authentication

Getting a user logged in to the application.
The firebase console - authentication tab.

![Alt text](../images/firebase-user-authentication.jpg)

firebase-auth is kind of like a read-only database for your users.

We could manually add a user here but simply adding a username and password. Every user has a unique user ID generated in this way. Custom user data will be assigned to this identifier.

Enough of that though - on to some actual code. I will talk you through what is happening in the code below:

![Alt text](../images/firebase-signin-signout-btn.jpg)

2 sections, 1 for when signed out and 1 for when signed in. Just usual javascript stuff is happening here, unique and descriptive id, and a hidden attribute active on the section that we do not want displayed.

When not signed in section has a btn to sign in and visa versa.

In app.js, to reference auth we need to use

`const auth = firebase.auth();`

This part of the SDK gives us access to a whole bunch of different methods that allow us to manage users in the app

First grab the HTML elements that we want to interact with 

`const whenSignedIn = document.getElementById('whenSignedIn')`

When I'm doing this myself, we need to use React hooks and use state for this

We want the user to be able to login with their google account. Use the following code, declaring a variable (built into firebase):

`const provider = new firebase.auth.GoogleAuthProvider();`

Next register a click handler for our sign in btn:

`signInBtn.onclick = () => auth.signInWithPopup()`

Just a function that calls our firebase signInWithPopup method, using the provider as the argument. (Note that you can repeat the same logic across multiple sign-up providers). 

To sign-out, this is the same across all providers, and all you have to do is call.

`signOutBtn.onclick = () => auth.signOut();`

That's all it takes to build a full-stack authentication flow.
This won't change anything in the UI but it will generate a JSON web-token that firebase will use to manage the authentication state.

We can see the record of information from the user in our application tab of our dev tools:

![Alt text](../images/firebase-auth-record.jpg)

This user is created in the firebase dashboard as well.
(Where we can manage/delete the user etc.)

Please note: These signIn and out methods are one-time operations that return a promise. When they are called, they do something asynchronous, and then they are done. 

The user authentication state, however, is something that can be changed multiple times throughout the life-cycle of the application.

We want UI changes to occur when this happens, and this is handled by listening to:

`auth.onAuthStateChanged();` 

Any time the user signs-in, or signs-out, the callback function passed to this method will be called.

The callback function gives you access to the currently logged in user. Which means that you can provide conditional logic to show the user different things depending on whether the user is logged in or out.

```
auth.onAuthStateChanged(user => {
    if(user) {
        // signed in:
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h3>Hello ${user.displayName}</h3><p></p>`
    } else {
        // not signed in 
        // this will obviously just be the opposite
    }
});
```

When the user object is defined - we know that the user is signed in.  (So basically if user is true like above).
We can show the signedIn template and add custom user details 
to the UI using that user object. 

This is exactly the same thing as the thing in the application tab of the web dev tools as screenshotted above. 

---

# Databases - 

Firebase provides 2 SQL databases - Realtime Database & Firestore.

Firestore is similar to MongoDB, in that it is a NOSQL Document-Oriented database. 

Basically you have a set of collections, where each collection is a container for multiple documents- and you can make queries across multiple documents in a collection. There's no schema, meaning the database is very flexible and easy to use. (Pro and con). 

![Alt text](../images/firebase-collections.jpg)

Conversely there is SQL where you do have a schema, where it is harder to make mistakes with things like data-modelling. 

Firestore is real-time by default. When we intergrate it to our front-end-application it stay up-to-date with the back-end without any effort on our part.

Go ahead and start fireship in test-mode. (Security rules for this can be set later).

### Firestore management console

This is the place where the super-admin developer can manage any of the data in the database. 

Step-one would just to be creating a collection. Something like "things"- and then inside that collection add the first document. Every document in a collection needs to have a unique ID. Firestore can create one automatically, or you can create one yourself to help manage different data-model relationships. 

![Alt text](../images/firebase-collection-id.jpg)

To reiterate, the document is where you store all your data in a series of key-value pairs- similar to a javascript object. This object might have a name field, where the value is a string, and a weight, where the value is a number.

You can name these values anything that you want, but it is important to maintain consistency across documents, as this is what we are going to use to query them.

![Alt text](../images/firebase-collection-document.jpg)

As you can see in the screenshot above, we have multiple documents in the database (see upside down pyramid icon - this allows one to experiment with different queries). Open the panel to chose a field to filter by i.e. weight/name etc. Just below this there are a number of query operators we can use to handle the filtering. (e.g. query select all documents and filter where they have a weight greater than or equal to 5).

![Alt text](../images/firebase-filter.jpg)

So, now that we have very rough idea of how to use firestore- how does this let us associate data to a user in our app?

Example: In our HTML we have an unordered list of things that the logged-in user has created with a createThing btn. We'll create a way for the user to create a random thing in the database using faker.js. Back in our javascript we need to make a reference to the firebase.firestore() SDK as the variable db.

`const db = firebase.firestore();`

Use the browser API to grab the createThing btn (document.getElementId('createThing) grab things list etc.)

There are two things you need when accessing data from firestore in realtime.

The first is a reference to the document or collection you want to access. (Database location). Which we can give a variable name such as `let thingsRef`. The reference is a starting point to create, read, update, delete data at a specific point in the database. 

When it comes to reading data in realtime our front-end UI will always react to changes that happen on the server. That means we will be subscribed to a stream of changes happening to the database.

This will be the second variable- `let unsubscribe` so we can tell the app when to stop listening to the database. i.e. 'turn off realtime stream'. If you don't unsubscribe from your data, it could lead to memory leaks and also unecessary costs by listening to documents that you don't actually need for the UI.

In the code below, we only want our database records to only be accessible to the currently logged-in user. That means, before we make a record to the database we need to check the authentication state of the user (recall the section above).



```
auth.onAuthStateChanged(user => {
    if(user) {
        // setting everything up when the user is signed in:
        // first step will always be to create a reference to the database
        thingsRef = db.collection('things')
    } else {
        
    }
});
```

Now that we have that reference, we can register an event handler on the click event on the create thing btn. There are several different ways one can create data, but when you have a reference to a collection, the `.add` method will create a new document to that reference. 

```
auth.onAuthStateChanged(user => {
    if(user) {
        thingsRef = db.collection('things)

        createThing.onclick = () => {
            thingsRef.add({
                // add method creates a new document
                // and automatically generates a unique ID
                // it takes a javascript object as an argument:
                // this is the actual data that will be saved to the document in the database (user object has many things)

                uid: user.uid,

            })
        }
    } else {     
    }
});
```

The way to associate data with a user, is to make a reference to their user ID on the document itself. That way we can query all of the documents that have the corresponding user ID.

From there add a name field to the document with just some random thing using faker, another potentially valuable thing to do would be to create a time stamp for when this document was created:

```
auth.onAuthStateChanged(user => {
    if(user) {
        thingsRef = db.collection('things)
        createThing.onclick = () => {

            const { serverTimestamp } = firebase.firestore.FieldValue; // timestamp

            thingsRef.add({
                uid: user.uid,
                name: faker.commerce.productName(),
                createdAt: serverTimestamp(); // don't use Date.now(), because back-end things

            })
        }
    } else {     
    }
});
```
This code alone is enough to start generating data in our firestore database. 

![Alt text](../images/firebase-generated-data.jpg)

The real magic firestore though is being able to listen for these changes and react with our front-end UI.

The way to do this is by making a query. When you make a query in firestore, it will return a function that you can use to unsubscribe from that query later on. It is a good idea to name that variable something like unsubscribe, and to use it when the state of the app changes, like when the user signs out.

Using our reference we can make a query by calling on where the userid == the current user's user id. That will call on the documents that only this particular user has created. To get a real 




