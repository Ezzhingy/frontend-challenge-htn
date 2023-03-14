# frontend-challenge-htn

Build a tool to display events for both hackers and the general public.

Designed using Figma. Created using React, Chakra UI, and Animate.css.

USERNAME: `admin`
PASSWORD: `password`

**Usage:**

1. `npm i`
2. `npm start`

That's it!

The tool's appearance was inspired by https://hackthenorth.com/

As with most projects I make, I tend to try and visualize the app in my mind before I start creating a plan of action. After reading the challenge, I found that all the tasks seemed quite straightforward, which made my mind drift to more artistic thoughts. Was there a way I could take inspiration from Hack the North’s website when creating my app? A thought began to form in my head.
First, I created a Figma file and added Hack the North’s colour palette to it. I decided to settle with a dark navy background to match the HtN website, along with some vibrant greens, blues, yellows, and pinks; a Hack the North classic. After a bit of tinkering, I prototyped the login page and the events page. My plan was to force the user to either login or proceed as a guest on the initial window load. Depending on the option they choose, the appropriate events are loaded in (here’s the [Figma file!](https://www.figma.com/file/d6d7Rlw5O6XdFmuzyInut1/organizer-apps?node-id=0%3A1)).
Now that I had a design in mind, time to get coding! I’ve been using React for a while, so Create React App was my go-to due to its quick setup and simplicity. Although I normally use TailwindCSS, I decided to use Chakra UI this time; I’m currently a developer for UW Blueprint and I use Chakra quite frequently when building their software, thus I found it more transferable. In terms of hitting the endpoint, I chose to use the Fetch API as it seemed the most convenient to me.
With all the tools figured out, I began implementing my design. There were a few minor hiccups I encountered along the way, such as how I would organize the event data after I hit the endpoint and how to implement a filter system. There have been many times in the past when I dug myself into a debugging rabbit hole from speeding through the coding process. However, I’ve learned from my past failures and I quickly overcame these difficulties by taking a step back and going through my implementation slowly and methodologically, pulling from my prior experiences to create an effective solution.
I also ended up experiencing an artistic epiphany when developing the events page. Although the colour scheme resembles the Figma file, I formatted the date and the event body in a slightly different way, making it much more appealing and also responsive as well; I’m quite proud of how it turned out.
As a whole, the app is responsive on all devices 320px wide and greater!

The most important aspect of the project that requires some tweaking would be the login page. At the moment, the login details are hard-coded; a better authentication system must be implemented for the app to become a functional product. This would include creating a signup page and persisting the user information in the backend. The events page could also be changed to showcase which events overlap and demonstrate each event's duration more visually (with a timeline, for instance). This can help hackers better plan for which events they would like to fit into their busy schedules. Also, assuming thousands of hackers will be using the app, tracking the number of requests the API receives and its response time can help gauge app performance. Maintaining fast app performance improves the user experience and maintains good user retention as well. Finally, although not necessary, a good balance of animations and transitions can improve the overall quality of the app and bring it to the next level.

A slightly ambitious idea I had was to allow the signed-in users to move the events around themselves and treat the events page as a personal planner of sorts. They would simply drag and drop the different events to create their own personalized schedule. This individualized planner can exist on a separate route so the user can refer to the original planner if needed. Unfortunately, given the time constraint, I wasn't able to execute this idea, but I thought it was a cool concept to share.

© 2023 Eugene Zhang. All rights reserved.
