---
date: "2017-08-27"
year: "2017"
title: "The One"
category: "Technology"
---

“Learning to choose is hard. Learning to choose well is harder. And learning to choose well in a world of unlimited possibilities is harder still, perhaps too hard.”

― Barry Schwartz, The Paradox of Choice: Why More Is Less

## Rationale

I use a lot of recommendation apps for figuring out places to go to, either after a work day or something over the weekend. For the most part these apps do their work just as I’d like them to. However, there are situations when recommendation apps just don’t cut it. Some scenarios when this occurs could be —

1. You have a big group of people to go out with and everybody has an opinion on where to go

2. You are with someone who cannot make up their mind about what they want to do

3. You want to do something but all those filters and choices and options are just too many for you to select because you don’t quite know what you want.

Enter ‘The One’. The One is a mobile app based on the premise that choice is overrated and that if a person were given a certain place rather than having through wade through many options, decision making would become much much simpler. There is an interesting TED talk called the Paradox of Choice, which highlights how the availability of options delays decision making and in some cases causes negative effects. I would highly recommend listening to this talk.

## Getting the app

The app is available in the Google Play store (Android) and you can download it [here](https://play.google.com/store/search?q=org.tnc.theone&hl=en). If there is any kind of demand for it, I will consider putting it on the App Store (iOS).
## Key Features

I had initially designed a Meteor app ( called Where Do We Go? )which was web based a couple of years ago, but I decided to make it a mobile app this time around. Let me highlight a few key features of this app —

1. The app provides 4 categories for which you can choose a place to go to. These are ‘Food’, ‘Drinks’, ‘Cafes’ and ‘Random’ (If you really don’t know what it is you want to do!)

2. Once you select a category and get back a recommendation, you cannot select a new place for that same category ( you can still select other categories ) for the next 2 minutes. The idea is that if you were given the option to change places repeatedly, you would fall into the same trap as any other recommendation app. In order to help you understand the 2 minute timer limit, a small countdown timer will appear on the category you selected, to let you know how many seconds are left before you can select a new place in that same category.

3. The result displayed when you select a category, will show you the name, address of the venue ( which you can open in Google Maps ), how expensive the place is ( $ -$$$$ ) and the rating of the venue ( 1–10 ). The background color of the result also gives a quick indication of the rating — green for rating≥9, yellow for rating ≥ 7 and < 9 and red for rating < 7

4. The category whose result you are viewing currently, is marked by a subtle underline

5. The only 2 filters you can choose ( by accessing the menu ) are Distance and Cost. The defaults are preset, so you’d never need to ever tweak these settings if you don’t want to. If you do change either one of these, you will get a fresh set of places based on your filters only after all the countdown timers are reset.

6. There is no signup required for the app. It just works! The results are powered by the Foursquare API.

7. As I do not have any design background, the look and feel of the app is very striking. The colors are bold and bright to show a sense of decisiveness coupled with simplicity.

## Technical architecture

#### Back End

1. Express
2. REST
3. Docker
4. Nginx

#### Front End

1. React Native using Expo

#### Hosting

1. Digital Ocean

## Conclusion

I built the app over a couple of weekends and had a great time seeing the idea come to fruition. Shout out to InYong Chung for helping out with product feedback and and loaning me an Android device to make sure product deployment was a success! If you have any feedback, please send it via the “Rate Us” form in the app menu. If not, you can reach me at Contact Me and send me a message. You can also reach me on Twitter. If you like the app, don’t forget to rate it on the Play Store and have fun using The One!

“Choose less and feel better.”

― Barry Schwartz, The Paradox of Choice: Why More Is Less
