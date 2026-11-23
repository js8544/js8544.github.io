---
layout: post
title: "How We Built an AI-Native Organization at Offloop"
modified:
categories: blog
excerpt: "Why organizations divide labor, which of those constraints AI lifts, and how Offloop runs with very few people and agent employees that stay on the job."
tags: [AI, organization]
image:
  feature:
date: 2026-11-12

---
At nine in the morning, Loopie sends me its daily brief on WeChat: two new candidates are waiting for my call. My co-founder is traveling for the next two days, so it suggests I look at them directly. Each candidate comes with one line: the screening score, what they have built, and which interview round it recommends. At the end it reminds me that a candidate from the day before is still undecided.

I reply with one sentence: "I'll interview both. Send me the résumés." A few minutes later both résumés are in my hands, and Loopie has already gone into each candidate's channel to tell the HR agent and the recruiter to find a time. The next day it simply sends the candidates my calendar booking link and lets them pick a slot. It only comes back to me when no time works at all.

![Loopie's morning brief on WeChat: two new candidates waiting for a decision, with names and details blurred.](/images/blog/how-we-built-an-ai-native-organization-at-offloop/01.webp)

<p style="text-align:center;font-size:0.85em;color:#888;margin-top:-0.5em">The morning brief, translated from Chinese, with candidate details blurred: two new candidates, a screening score and a recommended next round for each, and a reminder about one left over from the day before.</p>

From sourcing and screening to background checks and scheduling, I made exactly one decision in this whole process: interview or not.

We get messages like this every day. Our company has no full-time HR person and no full-time finance person. Agents do the recruiting and the bookkeeping. We also have a product called Readever that is run entirely by agents, from growth to product iteration, without a single dedicated employee.

Offloop is the product we are building: a workspace where agent employees and people work together. An agent employee has its own role and responsibilities. It stays on the job, moves work forward on its own, and comes to a person only when a judgment is needed. For the past year we have been building this product and running our own company on it at the same time.

![The Offloop workspace home, with channels on the left, messages in the middle, and workspace agents on the right.](/images/blog/how-we-built-an-ai-native-organization-at-offloop/02.webp)

<p style="text-align:center;font-size:0.85em;color:#888;margin-top:-0.5em">The Offloop workspace home: channels organized by function on the left, the messages that need my attention in the middle, and the agent employees on duty on the right. Message text translated from Chinese.</p>

All of this kept me thinking about one question: what should an AI-native organization actually look like? This essay is my answer. It starts from a very old question: why do organizations divide labor at all?

## 1. Why we divided labor in the first place

### Two reasons to divide labor

- **Ability.** No one can do everything.
- **Time.** One person can do it, but cannot do all of it. This is often the real constraint. Someone who understands product, engineering, algorithms, and evaluation still has only a dozen or so working hours in a day, so the work gets split into four jobs.

### What each split costs

In *The Mythical Man-Month*, Fred Brooks wrote down the observation that later became known as Brooks's law:

> Adding manpower to a late software project makes it later.

The reason is communication. Among n people there are n(n−1)/2 lines of communication. Triple the headcount and the number of lines grows roughly tenfold. New people first need time to learn the project's context, and the people already on it have to stop working to explain it.

![Bar chart: lines of communication grow from 1 for 2 people to 105 for 15 people.](/images/blog/how-we-built-an-ai-native-organization-at-offloop/03.webp)

Brooks's answer was the "surgical team": one chief surgeon who owns the core design and the key decisions, with everyone else in a supporting role. That gives up some parallelism in exchange for conceptual integrity. The system has one person's thinking in it from start to finish, and is not stitched together from many. In his view that mattered more than a few extra pairs of hands.

Later, in *No Silver Bullet*, he separated two kinds of complexity. One comes from tools and implementation: languages, compilers, debugging. The other comes from the problem itself: what exactly to build, and how the parts fit together. Better tools keep reducing the first kind. The second kind does not go away. What AI solves today is mostly the first kind too.

Brooks was writing about a single team. Scale the same cost up to a whole company and it decides where the company's boundary sits. In 1937 Ronald Coase asked a very basic question: if markets can coordinate the division of labor through prices, why do firms exist at all? His answer in *The Nature of the Firm*:

> The main reason why it is profitable to establish a firm would seem to be that there is a cost of using the price mechanism.

Getting something done through the market means finding people, negotiating, signing contracts, and monitoring delivery. When those costs are higher than the cost of arranging the work inside a company, the work moves inside. Put another way, work that needs context passed back and forth all the time ends up inside the firm.

Oliver Williamson built on Coase and spelled out which work belongs inside: the more specific it is to this company (knowledge and relationships that are only useful here), the more uncertain, the more frequent, and the harder to measure, the more reason to do it yourself. In today's terms, the more a piece of work depends on internal context, the more it should stay in the company.

From one team to one company, the conclusion is the same. Dividing labor adds capacity, but every additional split adds another round of passing context. We accepted that cost because without the split, the work would never get done.

## 2. Have these constraints been lifted?

The time constraint is mostly gone. The ability constraint is partly gone. The cost of dividing labor has not moved at all.

| | Before | Now |
| --- | --- | --- |
| Time | Could do it, but not all of it | Mostly lifted: execution goes to agents, and one person can move two or three things forward at once |
| Ability | No one can do everything | Partly lifted: agents cover the weak spots |
| Cost of dividing labor | Every handoff means passing the context again | Unchanged: people still hold meetings, write documents, and confirm things over and over |

The reasons for dividing labor are disappearing. The cost of dividing labor is still here.

This means that, for the first time, a highly capable person can be used in full. Take product and engineering. These used to be two people: product wrote a requirements document and handed it to engineering, and if engineering understood it slightly differently, the result had to be redone. Now one person reads the user feedback, works out what to change, has an agent write the code and run the tests, and then judges the result. There is no handoff in the middle, so there is nothing to misunderstand.

Hire one more person and you add a pile of communication. Add one more agent and you only add capacity. The condition is that all of these agents see the same context.

## 3. The new bottlenecks

Once execution is no longer scarce, three other things are.

![Diagram: the old bottlenecks of time, ability, and the cost of dividing labor, and the new ones: human attention, verification, and communication between people.](/images/blog/how-we-built-an-ai-native-organization-at-offloop/04.webp)

1. **Human attention.** There is a limit to how many things one person can keep in mind at once. With agents that number goes from one to maybe two or three. Beyond that, judgment starts to slip.
2. **Communication between people.** Agents share context with each other at almost no cost. An agent coming to a person takes up that person's attention. People aligning with each other on direction and taste is the slowest and most expensive of all.
3. **Verification.** Agents produce more and more, and the people and standards that can tell good from bad do not keep up. Whether you can hand a piece of work to an agent with confidence depends on whether its correctness can be checked.

![Diagram: work that a program or an expert can check sits on the left and is already handled by agents; work judged by the market or by taste sits on the right.](/images/blog/how-we-built-an-ai-native-organization-at-offloop/05.webp)

The further left a piece of work sits, the more it has a right answer, and the more it can already be handed to agents. The further right, the more it depends on taste, and the harder it is to know quickly whether it was done well, so people still have to do it. Agents can take over exactly as far as the evals have been written. That is why the scarcest people in an organization are the ones on the right: those who can set direction and make trade-offs.

## 4. Do the old organizational practices still hold?

Treating the cost of passing context as the central problem of organization is not a new idea. For decades good companies have used management systems to push that cost down. They differ only in the means. I count five kinds of practice:

| Practice | Who does it | What it depends on |
| --- | --- | --- |
| Write the context down and make it public | Netflix talks about "context, not control"; Amazon reads a six-page memo before every meeting; Meta's code and documents are open to almost every employee | Someone willing to write and someone with time to read; documents go stale and need a maintainer |
| Keep teams small | Amazon's two-pizza teams; Basecamp staffs a project with one designer and one or two engineers | Everyone has to be very good; Netflix hiring only the best is the price of this |
| One owner for each thing | Amazon's single-threaded owner; Apple's DRI; Netflix names one person to make each major call | That person's energy decides how much they can own |
| Teams connect only through interfaces | Amazon requires teams to work with each other only through APIs; Netflix talks about "highly aligned, loosely coupled" | The interfaces must be well designed; alignment on direction still happens person to person |
| Fewer layers, decisions pushed down | Amazon sorts decisions into one-way and two-way doors; in 2023 Meta cut layers of middle management under "flatter is faster" | The front line needs enough context; managers take on more direct reports and more information |

All of these work, but all of them rest on the same assumption: people write the context, people read it, people pass it on. So all of them hit the same ceiling, which is human time and attention. Netflix's "give context" requires managers to spend a great deal of time explaining background. Amazon's six-page memos need someone to write them and someone to read them. After Meta cut its middle layers, each manager had more people to manage directly.

![Diagram: context used to be written, scattered, and read by people before a person could decide; now agents record it, it lives in one shared place, and a personal agent filters it.](/images/blog/how-we-built-an-ai-native-organization-at-offloop/06.webp)

### What AI changes

**Sharing context goes from culture to system.** "Write the context down" used to be a cultural demand that relied on people's discipline. Now agents can record decisions, the reasons behind them, and progress as they work, and they can read the relevant parts for a person and boil them down. What Netflix and GitLab pushed hard for and found difficult to really achieve becomes the default behavior of the infrastructure.

**The size of a "small team" changes.** A two-pizza team is six to ten people, and that number was propped up by the amount of execution. With execution handed to agents, two or three people plus a group of agents can own the same scope. The scope a single-threaded owner can handle grows with it.

**Decisions can be pushed down to agents, not only to front-line employees.** Amazon says to hand reversible decisions to the front line quickly. Some of those can now go to agents. The test has not changed. It only gains one more item: can the correctness of the result be checked?

**Flattening is no longer limited by human bandwidth.** Meta cut its middle layers at the price of each manager handling more people and more information. Now each person's personal agent can pick out the relevant parts of the shared context for them. There can be fewer layers without people drowning in information.

### What does not change

**Each thing still needs one person who owns it.** DRI, single-threaded owner, informed captain: none of these designs is out of date in the age of AI. They matter more. An agent can move things forward, but someone has to set the goal and someone has to answer for the outcome.

**Talent density matters more.** Netflix hires only the best because each person's judgment affects a large part of the business. Now each person has a group of agents behind them, one judgment reaches further, and the bar for people only goes up.

**Alignment on direction and taste still happens only between people.** The "highly aligned" half was never accomplished through documents. It comes from people talking things through again and again. AI does not bring this cost down. Organizational design can only reduce the number of people who need to align this way.

**What is not written down, the agent cannot see.** Amazon's six-page memo forces people to write their thinking out clearly. This matters more in the age of AI: agents can only use the context that has been written down.

So what AI changes is who carries the load. Recording, organizing, and distributing context can be handed to the system. What does not change is judgment and accountability. They stay with people, and they become more concentrated.

## 5. What the new organization should look like

Very few people, each able to play several roles. All context is shared. Any execution work whose correctness can be checked goes to agents, and people sign off on it. Each person has a personal agent that guards their attention.

Concretely, that comes to six practices. The first three are things the companies in section 4 have long been doing, except that the system now carries them and not people. The last three only became possible with agents.

| Practice | Bottleneck it addresses |
| --- | --- |
| All context is shared, and written down | Communication |
| Few people, and each block of context has exactly one owner | Communication |
| If you must split, split where the two sides need to talk least, and connect them through explicit deliverables | Communication |
| Execution work that can be checked goes to agents that stay on the job | Verification |
| One personal agent per person, which passes along only what needs their judgment and does not interrupt them with progress updates | Attention |
| Whether to let an agent act on its own depends on two things: can the result be checked, and can a mistake be undone | Verification |

![Two-by-two: agents act on their own when the result is checkable and reversible; a person decides when it is hard to check and irreversible.](/images/blog/how-we-built-an-ai-native-organization-at-offloop/07.webp)

What kind of work suits an agent that stays on the job? I use four criteria: the work recurs; whether it was done right can be checked; the context it needs sits in one place; and one person is accountable for it. Evaluation is an example: after every code change, an agent runs the eval suite, pulls out the failing samples, and hands them to the product owner.

## 6. Offloop: designed around this idea

We call the agents in Offloop "agent employees." An agent employee is not a tool that waits to be called. It is a colleague that stays on the job around one role and one set of responsibilities. It knows what it owns, starts on its own when an event arrives, and keeps pushing the work forward without being chased until there is a result. It comes to a person only when a human judgment is needed. Today's chat assistants, coding agents, and workflow automations all still need a person to trigger them.

The precondition is to bring the context together first. The product has four layers, which map directly onto the practices above:

![The four layers of Offloop: people who own outcomes, a personal agent for each person, agents that stay on the job, and the shared context underneath.](/images/blog/how-we-built-an-ai-native-organization-at-offloop/08.webp)

- **Shared context.** A team's conversations, tasks, files, decisions, and every run record live in the same workspace, and people and agents look at the same copy. Shared does not mean without boundaries: memory is split into public and private, and a person's email can be read only by their own personal agent.
- **Agents that stay on the job.** Each agent has its own role, job description, skills, and permissions. It can be woken by an email, a schedule, a production alert, or another agent. Nobody has to call it.
- **Personal agents.** One per person. As we designed it, it watches its owner's email and calendar and speaks up only when something needs their attention. Anything it prepares on their behalf needs their approval before it goes out. The principle we set for it is "delegate, don't impersonate."
- **People.** They set goals, make judgments, and answer for results. When a human judgment is needed, the agent delivers the question and the evidence together to that person's Inbox.

Our own company runs this way.

Offloop has no full-time HR or finance staff. The recruiting agent sources continuously, scores candidates against the role, and hands a summary to the founders. A person decides only whether to interview. Sending the invitation and scheduling go back to the agent. The finance agent does everything from syncing transactions, bookkeeping, and reconciliation through monthly close and tax filing. A person authorizes access once, at the very beginning.

![Recruiting and finance pipelines: the person appears at one step, the interview decision or the one-time authorization, and agents do the rest.](/images/blog/how-we-built-an-ai-native-organization-at-offloop/09.webp)

Engineering works the same way. Every bug has its own thread in a channel. The bug-fixing agent claims the bug, writes the fix, adds tests, and says plainly which parts are not finished yet. Teammates can drop a screenshot or an instruction into the same thread at any time, and it carries on from there.

![The auto-bug-fix channel in the Offloop workspace, with one thread per bug and the agent's reports in the main pane.](/images/blog/how-we-built-an-ai-native-organization-at-offloop/10.webp)

<p style="text-align:center;font-size:0.85em;color:#888;margin-top:-0.5em">The auto-bug-fix channel in the Offloop workspace: one thread per bug on the left, the agent's execution reports and teammates' follow-ups on the right. Message text translated from Chinese.</p>

## Closing

Fifty years ago Brooks said that adding people to a late project only makes it later. Since then almost every effort in organization has been a fight against the cost of passing context. Splitting into small teams, writing memos, naming owners, cutting middle layers: all of them try to make context travel fewer times.

AI lets us add capacity without adding people for the first time. It also lets context travel without people carrying it for the first time. That brings the question of organization back to its most basic form: who makes the judgment, and who is accountable.

Go back to the morning brief at the start. From sourcing and screening to scheduling, I made exactly one decision in the whole process: interview or not. This is what I understand an AI-native organization to be: very few people, each person's judgment used in full, and everything else handed to agent employees that stay on the job.

The best companies of the future will not be the ones with the most people, or the ones with the most agents. They will be the ones where every person's judgment is used in full. We are building Offloop so that more teams can run this way, and we are a team that runs this way ourselves.

## References

- Frederick Brooks, *The Mythical Man-Month* (1975) and *No Silver Bullet* (1986)
- Ronald Coase, *The Nature of the Firm* (1937); Oliver Williamson, transaction cost economics
- Netflix Culture: context, not control; highly aligned, loosely coupled; informed captain
- Jeff Bezos, 2015 letter to shareholders (one-way and two-way door decisions); Amazon's two-pizza teams, single-threaded owners, and six-page memos
