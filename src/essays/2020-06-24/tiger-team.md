---
date: "2020-06-24"
year: "2020"
title: "Using Tiger Teams to Solve Problems and Create an Environment for Learning"
category: "Leadership"
---

_(This article was originally published on [PlatoHQ](https://www.platohq.com/resources/using-tiger-teams-to-solve-problems-and-create-an-environment-for-learning-317437887))_

Arjun Rao is the Director of Engineering at Place Exchange. Here, he talks about how he assembled a tiger team, which is a specialized, cross-functional team brought together to fix or investigate a critical issue, and how that team helped resolve a specific problem within a short period of time.

## Problem
Place Exchange is making Out of Home advertising truly programmatic. As a result, a lot of our bread and butter is processing transactions and serving ads. It is critical in nature and therefore expects very high up-times, so that we can continuously receive and process requests to serve ads on out-of-home screens.
 
Over the back half of last year, there was a heavy increase in traffic coming our way. We noticed that one of our services critical to ad serving began to feel the load. This didn’t cause any SLA-related issues, but were severe enough for me to decide it was a problem worth solving, so as to not run into it in the future.
 
## Actions taken

### Investigation

In the time between the two traffic spikes in September, before the tiger team was put together, we poked around to see whether or not there were small steps we could take to solve the problem or if it required a more focused effort. This exercise helped us understand that the root cause of the problem was increased strain on the database causing performance issues.
 
### Critical Next Steps

Tuning database performance, either by optimizing SQL queries or tinkering with database parameters, is a hard problem and not something everyone is familiar with. To tackle that, I assembled a tiger team composed of four senior members of the staff. By the beginning of August, these engineers knew what the stack looked like and put their heads together to figure out how to solve the problem.
 
When you want to solve such a complex problem within a short period of time in order to gain actionable wins, you need to ensure certain key aspects are in place. One of them was to create clear objectives. For a three week window to solve this issue, we came up with three objectives -
 
1. How do we improve instrumentation in our stack so that we can have some metrics in place to better understand what causes these issues to surface?
2. Are there short term fixes we can implement to alleviate the situation?
3. What long term proposals should we present? Once the three week period is over, this would help the teams to work on stabilizing and scaling out the system.
 
Maintaining transparent communications was another key ingredient. We used Slack for asynchronous conversations, and had a formal, once-a-week reconvene by video conference. In conjunction with our RCA (root cause analysis) observations after the two high traffic spikes, we had few action items to take away. During the tiger team kickoff, in order to come up with an actionable list of items the team could work on -
 
We stated everything we knew; clustering patterns together and seeing where we could get some quick wins.
We came up with a list of metrics to be created/updated, to provide both early warning indications, as well as better insight into system behavior. We identified several other tasks to be tackled by this tiger team, with the end goal of seeing if our changes would result in observable differences.
 
Since that three week period, we haven’t seen any notable spikes correlated with our initial observations, and our scale since then has seen a consistent increase. So far so good, but we have also been implementing some of those long term proposals to keep the ball rolling forward.

## Lessons learned

- You want the people who are solving the problem to be focused on what they are doing without distractions. Being able to free them up and have them direct their attention on a new project that came out of nowhere, can be complicated.
- You need to make sure you have the right people to solve the project in an urgent manner. As you run your hiring process, you should ask yourself, ‘Do we have enough bench strength across the team, in the event we come across that we might not be able to foresee?’ It’s helpful to have organizational slack for the flexibility to pull people to solve critical problems. If the teams are being run too thin, then you can’t switch your team’s focus, as it will be very disruptive and will result in being counterproductive to the business goals. Your team needs to understand why it’s an important problem to solve and that there is enough breadth in the team to handle this, in addition to scheduled work. It was very cool to see our own team come together like that.
- At Place Exchange Engineering, we follow a “pull policy", where people pull whatever work they would do next. Pushing work down to people, in a way where they feel like they have to do it, does not create the right incentives.
- If it’s a timeboxed effort, which has a deadline, it is good to set very clear expectations and objectives from the get-go. Set some lightweight processes such as a Slack channel or some other medium, to post and share updates, both within the team and to other stakeholders, all through the process.
- In general, we make an effort to distribute findings throughout the engineering organization, so that the same people don’t get tapped when similar situations come up the next time. We create an environment of learning so that our teams are able to keep iterating and improving their systems. Disseminating context about why we created the tiger team and what outcomes it created for everybody else, was a useful exercise in teamwide awareness as well as preparing ourselves for the future.

