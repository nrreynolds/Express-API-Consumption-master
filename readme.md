# Node Reps! With Disgruntled Avians.

![](https://media.giphy.com/media/fKACOQcJ6LnTa/giphy.gif)

## Setup

Some data has been provided for you in a json file.

## Assignment

#### Part 0 - Before You Start - Think about how you style your code.

* Quite possibly the most important thing you'll need to do as a programmer is write clean, styled code. It doesn't need to work perfectly, or at all, because if you have clean code, then you can easily work with others to resolve your functional issues and others can easily read through your code to provide feedback.
* Below will be links to style guides.  Skim through and update your weekend's hw to be stylistically "on fleek".
* A few things to focus on - proper indentation (possibly the most important), comments, declaration of variables
* As a reminder, we use the [AirBnB Styleguide](https://github.com/airbnb/javascript). We're all capable of improving our style - on one cursory glance through I saw at least three things I do poorly and can improve on.


#### Part 1 - Express with Data

* Now we're going to build an express app that can handle data
* Create a new directory called `angry-birds`, with a file called `index.js` and any other files you may need for the below (e.g views).
* In the `index.js` file, require all modules you need and invoke them as necessary - it's not recommended to just copy + paste code from our earlier exercises, but you can do that here as long as you go through each line and think about what its responsible for
* Ensure that your server is listening for a port - have it log 'Listening on Port PORTNUMBER'  
* Read the angry_birds.json file and save that array to a variable that will act like a database
* Write three GET routes: `/`, `/angry-birds` and `/angry-birds/:id`:
* `/` should **render** a home page with a link to '/angry-birds' 
* `/angry-birds` should **render** a view of ALL angry birds. This view should have each bird's name, ability, image, and group visible on the page, as well as a link to `/angry-birds/BIRDS_ID`. There should also be a link back to `/`. There will be an opportunity to organize and style all pages coherently in an upcoming part
* `/angry-birds/:id` should **render** a view of JUST the angry bird with the matching ID. This should have the bird's name, ability, image, and group visible on the page, as well as links back to `/` and `/angry-birds`
* How would you access the id when visiting `/angry-birds/4`? 

###### Bonus:  Part 2 - Filtering

* Now we're going to expand the filtering capabilities of the Angry Birds app
* Edit the `/angry-birds` route to handle query parameters of 'group', 'species', and 'feels'
* Start with testing just one parameter, then increment to exactly two, and then all three
* The page should render an angry bird that matches ALL the criteria of our query parameters - this is not about sorting them into any particular order

###### Bonus:  Part 3 - Multiple Filters
* Edit the filter function to be able to handle any number of the parameters at a time
* This should not look like a bunch of if conditions regarding the number of parameters, or which combination of parameters are chosen

#### Part 4 - Organizing

* Time to clean up our visuals - start by creating a public directory inside our angry birds directory, a css directory inside that, and any style files you may need inside there
* The home page is pretty bare, let's use gradients and custom animations to make it look nicer. Include any images you want or other elements you want (e.g. marquee). Maybe some CSS Hover effects too. [Aim for this. Jk.](http://www.lingscars.com/) if you need inspiration
* Let's make our `/angry-birds' page look more organized, like [Pinterest](https://cdn.shopify.com/s/files/1/0070/7032/files/pinterest-marketing.png?6545) or our Muvie Haus homework.
* Each bird should have their own card section
* Each birds individual page, found at `/angry-birds/BIRDS_ID` also doesn't have much on it. Organize all the information into a card.
* This page desperately needs a modal.
* Don't tell the UXDI instructors, as this likely isn't great design, but clicking on the card should toggle the modal
* The modal should be fixed across the entire screen, with a fully opaque section in the middle with the bird's image
* Clicking the bird's image will close the modal


