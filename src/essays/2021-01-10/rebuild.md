---
date: "2021-01-10"
year: "2021"
title: "arjunrao.co-v4 - Yet another website rebuild"
category: "Technology"
---

Towards the end of December, I tried to push a change to my website but I realized that the recent Catalina upgrade on my Mac left one of the Gatsby plugins completely broken. Since this is all the learning I got from the next iteration of my personal website, all I will say is that I reached a conclusion that I do not need a heavy Javascript framework to publish my personal content. 

![](assets/boromir.jpg)

After this little epiphany, I figured why not go all the way down to the bones and try to resurrect the next version of arjunrao.co, using just HTML, CSS and maybe some JS (how original!). Ordinarily, this would be a non-story, but a couple of things made this more challenging that I initially foresaw - 
1. I haven't had the chance to write something in this vanilla stack for several years now, so I wanted to see what things I could learn/talk about with a new lens.
2. I wanted to still write my blog posts in raw markdown and have it made available on my static site, especially so because I had markdown posts dating back 5 years that I didn't want to have to rewrite in something else. 
3. I did not want to use any frameworks of any kind, for the construction of the site itself. The intent was to not have to rely on 3rd party plugins and update cycles to host a simple personal blog. I slipped on this a little bit, but more to come on this in a while. 

As part of this buildout, there were several things that I tried to be aware of. Some of them were new to me, and some of them were things that have become so engrained in our web development SDLC, that I figured it would be neat to highlight. Here are some of my learnings from this experience. 

# What "stack" should I use? 

Right out the gate, I knew that despite there being some really cool frameworks & libraries like Vue, React, Nuxt, Next - I didn't want any of those advanced features (PWA, SSR etc) for my site. I didn't want to have to deal with `package.json` files and `yarn install` commands that resulted in intransigient errors like this - 

![](assets/error.png)

However, I knew that I wanted to use markdown to write my posts, since its 2021 and I didn't want to have to go write formatted HTML 🤮. 

That train of thought lead me to the 2nd tier of "frameworks" - those geared towards markdown publishing, namely Jekyll, Hugo, Eleventy and the like. However, in terms of first principles, I realized I didn't want anything where too much of the magic was happening behind the scenes, for similar concerns of backwards compatibility and the like. 

After several hours of scouring the internet(shocking!), and nearly giving up, I stumbled upon [zero-md](https://zerodevx.github.io/zero-md/). Based on their definition - 

> A native markdown-to-html web component based on Custom Elements V1 specs to load and display an external MD file

which turned out to be _exactly_ what I needed.

# Local development with the vanilla stack

Before I could get started with zero-md, I wanted to figure out what I wanted my local dev environment to look like. Starting off with a simple folder which had an `index.html`, which had some baseline html tag content was the easy part. I could technically just open that file in a browser and call it a day. However, as I started adding other pages, like "About me" etc, that starts getting annoying.

I came across [http-server](https://www.npmjs.com/package/http-server), which promised to be `powerful enough for production usage, but it's simple and hackable enough to be used for testing, local development, and learning.`. I knew my eventual deployment of the app would be as a static site, but if I could use it for local development, that might save me the hassle of bouncing through different chrome tabs for testing my buildout. 

![](assets/httpserver.png)

I realize, I have started slipping from my original draconian "I DO NOT WANT TO USE FRAMEWORKS" as I describe what amounts to a yarn install. However, my mental gymnastics to justify this include not _needing_ http-server as part of development or deployment, but it merely being a convenience. If this were to break or not work in the future, I could easily toss it away without needing to rewrite the website. 

FWIW, this is what it looks like to bring up the http server locally, nice and easy - 

![](assets/local.png)

In terms of deciding where to host the site, it was really a no-brainer for me. [Netlify](https://www.netlify.com/) has made the DevEx of shipping apps (static sites or otherwise), so ridiculously enjoyable, that I don't even bother checking out other deployment mechanisms anymore. They go an awful long way on the "Free" tier and hopefully that continues to be the case for a while. 

There are an awful lot of nifty things I found and debugged along the way, with respect to handling redirects, or using [water.css](https://watercss.kognise.dev/) for some basic styling (and dark mode!🌚)  or cracking the code for pretty URLs, but all of that I'd consider tangential to what I spent the bulk of my time on this project for - i.e. Enabling markdown posts to be published to my static site. So lets get after it.

# Publishing markdown posts to a static site

As I mentioned before, I read and mocked through multiple options to give me the freedom to write my post as markdown but have it rendered as HTML after I deployed my site. Some categories of options that I looked at were - 
- Markdown -> HTML at build/deploy time : This to me was least preferable, since it would involve some work around importing NPM packages, and doing some webpack magic. Some options in this category were libraries like [remark](https://github.com/remarkjs/remark). 
- Markdown -> HTML at render time : This would be pretty ideal, since I wouldn't need to do a whole lot of pre-processing and could just have the conversion occur automagically.

# Enabling high SEO and all that jazz

- Optimizing Lighthouse (Frameworks used for SEO etc)
    - adding lang="en" to get lighthouse score from 83 -> 92
    - SEO increased by adding meta.description

- Building the markdown posts
    - going through the selection process of what markdown converter to use 
        - reference: https://stackoverflow.com/questions/16633057/is-it-possible-to-access-shadow-dom-elements-through-the-parent-document
    - things you tried (console.log outside, console.log inside the app.zero-md-render event)
    - finally `app.shadowRoot.querySelector(".markdown-body")` based on how shadowroot works 
    - using zmode with custom template 
    - write about shadow dom(https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) and how you wanted to access an element inside the shadow dom (how zero-md creates it)
    - innerText (no work), vs innerHTML (no work) vs textContent (this worked)
    - for md["children"][1].textContent.split("\n") and other variations 
    - where const md = app.shadowRoot.querySelector(".markdown-body")
    - making individual posts work (how i almost gave up but then decided to hardcode summary page)
    - passing parameters to the page in the individual post was the final solution

-----


- Things i can do better
    - having to write a summary page 
    - Scrappy JS 
    - Better folder layout 
    - Look at other git issues
    - unable to clean the path urls for the blog posts (see issue link)

    