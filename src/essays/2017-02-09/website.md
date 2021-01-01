---
date: "2017-02-09"
year: "2017"
title: "Website Redesign 2017"
category: "Technology"
---

I want to document the process I went through to revamp my personal website. I'll walk through some of the design decisions as well as some of the mistakes ( at times horrendous ) that I made.

I think it is important to have your own home page. You could have myriad reasons for having one, ranging from showcasing your talents, presenting it as an online resume or in my case, just a place that I could tinker with technologies that I do not use in my day job.

The first iteration of my home page was hosted on Heroku. For those who don't know how Heroku works, it's a PaaS( Platform as a service ). Now this is a handy tool for people who don't have their own infrastructure to deploy production applications. It's very similar to AWS in that regard except that it abstracts away many of the nitty gritty details that AWS requires to configure deployment of an application. Long story short, I chose Heroku because of its convenience factor and because I was on the Developer plan that was completely free! I built my website using Sparkjava which is a micro framework to create web applications. It is inspired by Sinatra, the Ruby framework. I am a big proponent of Sparkjava for prototyping applications and for a personal website that was just gonna serve static pages, it was the easiest for me to get off the ground with. Since I had personally never built a "portfolio" website, I took the help of <a target="_blank" href="https://startbootstrap.com/template-categories/all/"> Start Bootstrap </a> to help me get inspiration. And by inspiration, I pretty much mean all of the CSS and JS that I needed for my site. Don't judge me, I didn't know any better! As Pablo Picasso said, 'good artists borrow, great artists steal.'. Not sure which one I am, but I atleast did one of those. I chose the coffee themed template, partially because I liked the rugged brick look which seemed to give the website a very Victorian feel. Once I had all the basic boilerplate code in place, I hacked around it to make sure it displayed the content I wanted it to with the mods that I wanted to display.

This was a very simple first exercise and I definitely had no problems getting this up and running locally on my computer. Deploying it to Heroku was a bit of a challenge, because at the time Spark was not natively supported by Heroku. Some simple google searches, however, paved the way to some kind soul who posted how she/he had deployed their app to Heroku and from there it was a breeze. So I got my first site up and running and it was great! I thought the look and feel was good and it showed the content I wanted to display.

I am a clean freak by nature and computer cleanliness is not excluded from this. So in my very energetic sprees of freeing up space on my Mac by deleting unwanted files, I accidentally deleted my website code from the computer. And no, I had forgotten to check it into GitHub ( my choice of SCM ). And yes, that is unpardonable. So for a long time, everytime I had an urge to futz around with my website, I was brutally reminded of my idiocy, so I'd lay those ideas to rest.

ANYWAY, then came 2017 and I figured the new year needed a fresh burst of vitality and the website was the hallowed ground upon which I would consecrate the focus of my arts. My initial instict was to just go back to Heroku and do the same spiel all over again but then the more I started thinking about what I had on my website, the more I realized that there were things that were fundamentally wrong. I will walk through some of the issues that I found and how I solved them in my personal page 2.0

## 1. Choice of hosting service ( Heroku v/s GitHub )

If you want to use the free plan, Heroku is a good place to test out greenfield prototypes that you don't want to invest too much money into. It is a good place to test request/response type of apps that actually need a server to function ( I am not getting into the discussion of Backend as a Service which is a whole different conversation ). However, for my personal website, the most complex thing that I would have wanted to do was maybe accept form inputs when people wanted to reach out to me. There was no fancy interaction that would need any real-time response. The other big problem with the free plan of Heroku is the way they maintain uptime. You get "dynos" which are up only when they are needed. So if you haven't had any hits on your website for say 6 hours, the next hit to come to your website, will take about 20 seconds for the page to render, because the dyno is in the process of being woken up. As a result, whenever I had to show my page to someone, I always had to "pre-warm" the dyno, so they could see the page being responsive. ( I mean lets be real, nobody is interested in my site, so the only people seeing it are probably people I am forcing to see my site ). To solve the "sleeping dyno" problem, I started using <a href="https://uptimerobot.com/" target="_blank">Uptime Robot</a> which would ping my website every 5 minutes to keep it up and running. Which sounds great right? There is a catch though. As I was on the Free heroku plan, Heroku lets my account ( which includes upto 5 free applications ) have a total uptime of 1000 dyno hours per month, after which they would shut down all applications until the next month started. Since I had a couple of other apps that I was testing out as well, my website would be shut down pretty much around the 20th day of the month mark. Shucks! Guess I am not so smart after all, with the whole uptime thing.

I had come across GitHub hosting in the past, but I had never really used it. This time around, I was determined to use Github hosting for my website by using it in conjunction with Jekyll ( which I will go into detail in a bit ) because of how well suited it seemed for the purpose I wanted. No databases, built for blog hosting and easy templating. The lagniappe was the fact that there were no uptime restrictions on Github hosting and they could handle upto 100,000 hits per month! Which of course, is most likely 99,999 more than I will be getting each month. Works for me!

## 2. To Server or not to Server ( Spark Java v/s No server )

In my previous version of the website, I was using Sparkjava for literally just serving static pages. As light as Sparkjava is, it still needs some boilerplate configuration like using Maven ( as I did ) for dependency management/builds or setting up routes in Java to assign paths to how people interact with your page and writing some barebones response handlers. With Github hosting + Jekyll, all of that went away. All I needed to do was concentrate on building the website.

## 3. Website templates ( Handlebar v/s Liquid )

Sparkjava does not come with its own templating mechanism, however it has support for several such as Handlebar, Mustache, Pebble etc. I chose Handlebar because it was fairly simple to use. This time around I used Jekyll's templating mechanism called Liquid, developed by the folks over at Shopify. I would say I didn't find anything particularly fantastic or particularly annoying about Liquid. It got the job done and that is what I was looking for.

## 4. Use an existing css template v/s building from scratch

In my website's 2.0 version, I wanted a very clean and sparse look. I felt that the previous version was very "heavy" and being the minimalist that I am, I am a bit surprised I went down that route. So the new website, was going to be minimal, it was going to have lots of whitespace and above all, content would be front and center, undistracted by unnecessary CSS styling.

## 5. Page layout and design consideration

### 1. Title Bar

Changed the font type to Cardo from Josefin Slab. It is much "lighter" and gives a cleaner look
### 2. Navigation Bar

The Nav Bar isn't that conspicuous now in terms of styling. It is just surrounded by 2 thin lines instead of being embedded within a bar.
### 3. Footer

There was a time when I was obsessed with putting things like "Made with <3..." or "Handcrafted in...". Not anymore. This time its more professional and to the point. Also added icons to my social network profiles.
### 4. Favico

The favico of yore was an image saying "LoT" which was meant to be an acronym of the name of the original site ( Legions of Thought ). The new icon, however is a bow and an arrow, something used by my mythological namesake after whom I am named.

### 5. Home Page

The older home page had some random photos that I had taken and was a very heavily styled page. The new version is the equivalent of an "About Me" page and has no extra styling per se.
### 6. About
The "About" page has moved to the home page in the newer version and has a much more sane description of who I am and what I do.
### 7. Blog

I think the blog was the most complex part of this whole enterprise. Hosting blogs yourself is one of the more tricky aspects of maintaining your website. Platforms like Django give you a lot of customization options if you are hosting a Django server and you can go crazy with that. When I was using Sparkjava to host my site, I decided to not go into the weeds of blog hosting. Instead I just pointed my blog page on the site to my pre-existing wordpress blog. Technically, this translates into using an iframe to box up the wordpress page into the site. I hated this approach, because it is a jarring difference from the look and feel of your own website. However, since Wordpress provided a ton of options out of the box such as comments, tagging, blog discovery etc, I decided not to poke the hornets nest.

When I decided to move to Jekyll, which has a blog-first approach, I thought it was the perfect opportunity to get rid of the wordpress hacky integration that I had in place. Wiring the whole thing together while having a professional looking blog ( with features like listing posts, having a short snippet of the post ) was fairly straightforward. I did have to put features in like comments ( via disqus ) and social sharing of the blog post by myself. I think the biggest piece of work I have left in the blog section is being able to tag blogs and search blogs by tag as well as enable blog discovery across the interwebs. Should be a fun problem to figure out and solve!
### 8. Photos

This is one section that I think is more well fleshed out in the older version. I am an avid photographer and I definitely intend to use my homepage to promote some of my original content. In the older version, I had linked my flickr album via juicebox.js and displayed it as a slide show of my portfolio. In the newer version I kind of skipped on that and just linked the page to my instagram feed via an app called <a href="http://www.instush.com/" target="_blank"> Instush </a>. This is definitely one section that I will be putting work into.
### 9. Travel

Travel is always one of my favorite sections to work with. From a look perspective, not much has changed except that I have added a section called "USA Travel". From a 'feel' perspective, there are a couple of changes. The maps added are interactive and you can actually hover and find the countries I have been to, as opposed to the old view which was just an image screenshot off which you couldn't retrieve any useful information. The map widget is provided by <a href="https://www.amcharts.com/" target="_blank">AMCharts</a>.
### 10. Projects

In the previous iteration, there was no Projects section. I added this tab to highlight the work I do, across my interests, be it technology, helping out the community or doing any kind of public speaking. I loved designing this page because I love the clean cut card layout ( using Bootstrap Cards ) which, according to me, gives it a very slick feel.
### 11. Contact Me

Although the old version of the contact form looked good, it didn't do anything! Well it would log the message to Heroku logs, which I would not look through. Yikes. This time I decided to have a different form layout for the contact section and it works. I used <a href="https://formspree.io/" target="_blank"> Formspree</a> which is a really cool utility to help connect your form to an email address of your choice, so you never have to do any kind of form handling. Which is super. There used to be a Captcha in the old one and I will need to re-add it to the new one because I am already seeing spam contacts trickling in.
## 6. Some of the other bells and whistles

Google analytics. Definitely like to have metrics associated with anything I do. Its the only way you can measure your performance. Google Analytics is super easy to use and gives me a swath of information which I can make some very telling observations off of, including bounce rates and places people access my site from. Definitely a must-have. If not google, then some other analytics like Hotjar, might work as well. Adding SEO as well as Google Adsense is possibly in the works for me.

I'd say it was real fun rebuilding my website as it helped me make some UX design decisions. I have found that the static page approach of Github hosting makes for really fast page serving speeds. I am impressed by the work put in by GitHub into this platform and I hope it does not falter off track.

As for my own website, is this the final makeover? I am pretty sure the answer to that is a strong No because I will always be looking to learn something new and I am convinced Future Arjun is always disappointed in the actions of Past Arjun. As Brian Herbert said, "The capacity to learn is a gift; the ability to learn is a skill ; the willingness to learn is a choice." and its a choice I am making willfully.
