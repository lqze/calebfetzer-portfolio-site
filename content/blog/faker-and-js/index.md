---
date: "2018-12-10T22:10:03Z"
title: Using Faker.js and MongoDB
description: We explore how to generate random data for any app using the Faker.js library.
isPost: true
---
# Introduction

Using Faker.js we can generate lots of sample data for our applications. Many of the tutorials I saw only covered the minimal usage of this library, such as generating one object of random data with some API usage.

I will go through the steps I've found helpful to a sizeable set of data into your MongoDB database, using `mongoimport` and `node.js`.

I'm currently writing an app using Express.js and MongoDB on the backend. The app involves a lot of customer data as well as product information, so I wanted a way to quickly generate a whole heap of randomised data that would let me see how the app handles certain page loading times, or how lots of data affects my current table layouts.

We will first go through writing some JavaScript that allows us to generate a JSON file of data, and then look at importing into our MongoDB database.

This tutorial presumes you have an existing application and are familiar with node and MongoDB to some degree. I don't run through generating a new REST app in this guide, but you could use the express-app generator for this example.

## Faker.js library

Faker.js was written by [Marak](https://github.com/marak/Faker.js/). The Github page has an easy to digest API which covers the use cases in simple detail.

As it is described: *faker.js - generate massive amounts of fake data in the browser and node.js*

This is handy for one very simple reason. It is very time consuming to generate lots of random data on your own. Faker.js lets you call on a bunch of different methods which return data of your choice, such as a telephone number, a person's first name or even a random company name.

Before you start populating your application with real data submitted by users, you may want to test your app out using a whole heap of random data, as if it came from users.

Make sure to run `npm install faker --save` so it is kept in your application.

`fakerTest.js`
```js
const faker = require('faker');

let randomName = faker.name.findName(); // Rowan Nikolaus
let randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
let randomCard = faker.helpers.createCard(); // random contact card containing many properties
```

In the example the `faker` module is imported, three variables are set up with easily-understable names and the randomised/expected output is given in comments. If you were to `console.log()` any of the variables, you would most likely end up with a different result to what is in the comment.

To show further, I've slightly modified `fakerTest.js` to provide the output of three person objects.

```js
// Import the faker module
const faker = require('faker');

// Set up a loop for how many objects we want
for (var i = 0; i < 3; i++) {
    let person = {
        name: faker.name.firstName(),
        email: faker.internet.email(),
        number: faker.phone.phoneNumber(),
        userName: faker.internet.userName(),
    }
    console.log(person);
}
```

This outputs 3 random person objects. On my end this came out to:
```bash
{ name: 'Marisa',
  email: 'Rosendo.Heaney@gmail.com',
  number: '408.501.7523 x48608',
  userName: 'Jaquelin.Hagenes43' }
{ name: 'Jorge',
  email: 'Ofelia.Wuckert13@hotmail.com',
  number: '1-626-315-5484 x3501',
  userName: 'Jaunita38' }
{ name: 'Laila',
  email: 'Deion.McLaughlin32@hotmail.com',
  number: '126-653-9450 x996',
  userName: 'Cleora.Kuphal' }
```

As you can see the data is random enough and good enough for testing purposes. It doesn't really matter that the data doesn't contain consistency, e.g., the name and userName fields are not obviously not related. Let's look at getting this data into a nicer format.


## Writing to JSON

So let's expand upon our `fakerTest.js` file by taking example from Faker.js's `generateSet.js` [code](https://github.com/Marak/faker.js/blob/master/examples/node/generateSet.js).

We are going to need the [fs](https://nodejs.org/api/fs.html) module in order to write files containing our random data to our directory.

`fakerTest.js`
```js
const fs = require('fs');
const faker = require('faker');

// Initialise an empty array for our person object to be pushed into.
let bigSet = [];

// Run the loop run 100 times.
for (var i = 100; i >= 0; i--) {
    // Create a person object.
    let person = {
            name: faker.name.firstName(),
            email: faker.internet.email(),
            number: faker.phone.phoneNumber(),
            userName: faker.internet.userName(),
        }
    bigSet.push(person);
}

// Write a JSON file to the current directory with the name of bigDataSet.json
fs.writeFile(__dirname + '/bigPersonDataSet.json',  JSON.stringify(bigSet), function() {
    console.log("bigPersonDataSet generated successfully!");
});
```
If you run `node fakerTest.js`, you will see the JSON file appear in your current working directory, with the text `bigDataSet generated successfully!`.

By checking the contents of the file you should see 100 instances of the person object with different data for the properties above.

Why do we define a person object in our loop and not outside the loop?

If we were to create an instance of the person object and set its values to the ones generated from `faker.js`, then we would end up with only one instance of the person object. Running the loop, we would have only one set of data pushed into our `bigSet` array 100 times. By creating the object within the loop, this ensures a new person object is made and that data will be randomised each loop.

## Using and importing the data

Now that we have a whole file full of data, we'd like to be able to use it.

In my current app I have a contact schema in my MongoDB database. I also have a lot of styles on a table and am currently using AJAX to load in data on forms and in the table. So for me, using Faker has been a great help in estimating what would be about 10,000 different contacts on my database, both performance wise and visually on the front-end.

How do we get the random data we've created into our database? We use the MongoDB CLI tools.

### Importing the data

MongoDB comes with a powerful feature, [mongoimport](https://docs.mongodb.com/manual/reference/program/mongoimport/). This lets us to import CSV and JSON documents into an existing database, and you can specify which collection the data is for, or you can use this command to import a whole database if needed (it is warned ,however, that you should not use `mongoimport` for full instance production backups. See the docs above for more information). 

It is important to note that we run `mongoimport` from our command line/window, and not from the mongo shell.

On an existing installation of MongoDB, you can run `mongoimport` to connect your selected database, select a collection and also select your file to be imported.

This example is from the MongoDB docs

`
mongoimport --db users --collection contacts --file contacts.json
`

It seems relatively straightforward with getting our data into our database then, doesn't it?

We need to replace the above values with our own, and so we will end up with something like this:

`
mongoimport --db testdb --collection contacts --file bigPersonDataSet.json
`

I've substituted the database name to my test database (testdb) which has a collection called contacts, and have changed the name of the file to be that of our large person set data. Run the above code in your current directory containing the bigPersonDataSet.json file or you will be returned an error.

Make sure you actually have your mongo server running. This is done with `mongod` if your service doesn't start automatically on boot. Usually on Windows MongoDB does not start on startup unless it has been configured to.

If your mongo server is not online, you will get a message like this
```
2018-12-31T15:33:48.787+0800    [........................] testdb.contacts      0B/44.5KB (0.0%)
2018-12-31T15:33:51.788+0800    [........................] testdb.contacts      0B/44.5KB (0.0%)
2018-12-31T15:33:53.313+0800    [........................] testdb.contacts      0B/44.5KB (0.0%)
2018-12-31T15:33:53.313+0800    Failed: error connecting to db server: no reachable servers
2018-12-31T15:33:53.313+0800    imported 0 documents
```

Lets try again with the server online

```
2018-12-31T15:36:23.322+0800    connected to: localhost
2018-12-31T15:36:23.324+0800    Failed: error unmarshaling bytes on document #0: JSON decoder out of sync - data changing underfoot?
2018-12-31T15:36:23.324+0800    imported 0 documents
```

Okay, that's not really the message we want to get back. Particularly due to the fact it says "**Failed: error..**"

Our first impression upon getting this error could be that there is an issue with the .json file itself, or perhaps there are way too many objects we are trying to put in at once?

Let's try with just one object.

`fakerTest.js`
```js
const fs = require('fs');
const faker = require('faker');

// Initialise an empty array for our person object to be pushed into.
let bigSet = [];

// Run the loop run 100 times.
for (var i = 100; i >= 0; i--) {
    // Create a person object.
    let person = {
            name: faker.name.firstName(),
            email: faker.internet.email(),
            number: faker.phone.phoneNumber(),
            userName: faker.internet.userName(),
        }
    bigSet.push(person);
}

// Write a JSON file to the current directory with the name of bigDataSet.json
fs.writeFile(__dirname + '/bigPersonDataSet.json',  JSON.stringify(bigSet), function() {
    console.log("bigPersonDataSet generated successfully!");
});

// Create a single person object.
let singlePerson = {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    number: faker.phone.phoneNumber(),
    userName: faker.internet.userName(),
}

fs.writeFile(__dirname + '/singlePersonDataSet.json',  JSON.stringify(singlePerson), function() {
    console.log("singlePersonDataSet generated successfully!");
});
```

Running our new `fakerTest.js` above will generate two files now, one having only one record of data.

Lets try and import singlePersonDataSet.json and see how it goes.

```
> mongoimport --db testdb --collection contacts --file singlePersonDataSet.json
2018-12-31T16:02:29.242+0800    [........................] testdb.contacts      0B/448B (0.0%)
2018-12-31T16:02:30.751+0800    connected to: localhost
2018-12-31T16:02:30.756+0800    [#########################] testdb.contacts      448B/448B (100.0%)
2018-12-31T16:02:30.756+0800    imported 1 document
```

Alright, successfully imported!

### Importing more than one JSON object

So why didn't it work before when importing our large data set of JSON?

This is because we did not specify the `--jsonArray` flag when running our command. If we look at our large data set, we will see the objects are actually separated by commas, but are also wrapped in square brackets.

```json
[
    {
        "contact_name":"Wade","contact_company_name":"Waelchi - Runolfsson",
        "contact_number":"099-585-0599 x8459","contact_email":"Davon_Johnston@hotmail.com",
        "contact_address_line_one":"660 Josefina Curve","contact_address_line_two":"",
        "contact_address_suburb":"West Ramiro"
    },
    {
        "contact_name":"Lela","contact_company_name":"Yundt - Braun",
        "contact_number":"707.292.3792","contact_email":"Melisa34@yahoo.com",
        "contact_address_line_one":"719 Elroy Mill","contact_address_line_two":"",
        "contact_address_suburb":"Toyfurt"
    },
    # and so forth for all objects...
]
```
This format appears because we push our person objects into our array `bigSet`, and we then convert our array into JSON format by running `JSON.stringify(bigSet)`.

We are actually dealing with an array of JSON objects, not simply a single JSON object. MongoDB is unable to import the whole array unless it interprets it as a JSON array, correctly separating each JSON object into a record for your collection.

Lets try importing again with our large data set but with the `--jsonArray` flag

```
> mongoimport --db testdb --collection contacts --file bigPersonDataSet.json --jsonArray
2019-01-01T05:29:39.529+0800    [........................] testdb.contacts     0B/44.5KB (0.0%)
2019-01-01T05:29:41.038+0800    connected to: localhost
2019-01-01T05:29:41.060+0800    [########################] testdb.contacts     44.5KB/44.5KB (100.0%)
2019-01-01T05:29:41.060+0800    imported 100 documents
```

Okay, great! Looks like our import worked.

It's worth at this point to actually check your database to see if the data was inserted as you wanted, e.g. making sure the collection name was correct and your schema was modeled to the object you desired.

An easy way to view your MongoDB databases and respective schemas is to use [MongoDB Compass](https://www.mongodb.com/products/compass), otherwise feel free to use the mongo shell.

You'll notice that MongoDB automatically generates the `_id` field for each document that is inserted.

## Conclusion

We've looked at the wonderful [Faker.js](https://github.com/marak/Faker.js/) library in generating fake data, typically useful in picturing how your application might scale with how ever many documents you might require.

It's obvious that having a tool to randomly generate a whole assortment of data can be a huge time saver. This library does exist for other languages as well, however this method is also ambiguous in the sense that if you are using a MongoDB database, the `mongoimport` function doesn't really care how you assembled the data you wish to import.

I found this method to be a lot simpler than having code within my app to write to my database, e.g. not using Mongoose to save an object to my database, and it separates combining additional functionality which is not meant to be a part of your project.

The beauty is you can use the code above as a template to generate how many collections you want and also how the schema might look.

Hopefully you learnt something with MongoDB and are now sighing in relief at not having to create a whole bunch of documents manually!