# 5 Growth Areas for a Software Developer

- ## Understanding

	- Define the problem being solved

  	  > Not so good
  	  > > They asked me to change the default value, so I will change it.

	  > Better
	  > > This change modifies the existing behavior of the application. What are we trying to accomplish?
	  
	
	- Understand broader concepts before implementation
	
	  > Not so good
	  > > Start writing code. Keep trying things until it works.
	
	  > Better
	  > > Understanding the people, their problem and the goal will help in making decisions along the way.
	  
	- Ask clarifying questions

	  > Not so good
	  > > No questions at this time.
	
	  > Better
	  > > I’ve taken some notes during the discussion, and have questions about the user flow.
	  
	- Be able to teach it

	  > Not so good
	  > > Go read this email chain, JIRA ticket and design mockups, then check stackoverflow if you have questions.
	
	  > Better
	  > > Let me walk you through the user story and how that led to changes we made to the schema, backend logic, frontend views and UI.
	  
- ## Planning

	- Establish well-defined requirements
	
	  > Not so good
	  > > Given only a vague summary description, go ahead and start working. Hope for the best.
	
	  > Better
	  > > Take responsibility of making sure the objective is identified, and all of the requirements are understood and documented.
	
	- Handle edge cases and failure states
	
	  > Not so good
	  > > Only consider the [happy path](https://en.wikipedia.org/wiki/Happy_path).
	
	  > Better
	  > > Consider and document all the alternate paths, edge cases and failure modes, then handle and write tests for all of them.
	  
	- Anticipate problems

	  > Not so good
	  > > There are still some unanswered questions here, but I’m sure it will all work itself out.
	  
	  > Better
	  > > It is risky to start work when we may get new information that causes us to change course. Let’s make a plan.
	
	- Communicate risks

	  > Not so good
	  > > I have concerns about a security vulnerability, but the stakeholders won’t like to hear that it could delay the release.

	  > Better
	  > > I have to make sure the business fully understands my concerns about a security vulnerability, so we can make an informed decision about the release.
	
	- Present alternate solutions
	  > Not so good
	  > > They’ve already given me design layouts and user flows. No sense in questioning them.
	
	  > Better
	  > > If we change one step in this user flow, it could cut the implementation time in half.
	
	- Manage time and tasks

	  > Not so good
	  > > Saying yes to every work request is the best way to get ahead!
	
	  > Better
	  > > Overcommitting will lead to work that is rushed, incomplete or late.	
	  
- ## Collaborating

	- Facilitate understanding across disciplines and organizations
	
		> Not so good
		> > Everyone in this room is smarter than me, so I’ll keep quiet and let them figure it out.
		
		> Better
		> > I’m the one who will be doing the work. It is up to me to make sure everyone understands and agrees on the direction we are going to take. 

	- Document everything

		> Not so good
		> > Sure hope someone will remember being discussed in this superlong kickoff meeting...
		
		> Better
		> > Hi everyone, attached are my notes from the meeting with action items at the bottom.
	
	- Understand other points of view

		> Not so good
		> > The designer doesn’t get why what they are asking for won’t work. I will just do what I think is right.
		
		> Better
		> > Let me explain some of the technical challenges and maybe we can come up with a better solution together.
	
	- Communicate proactively

		> Not so good
		> > I didn’t realize this code change touches so many areas of the application. If I go heads down, I can probably still hit the deadline.
		
		> Better
		> > The scope of impact is larger than originally planned. I’ll let the team know so we can consider our options.
	
	- Follow up

		> Not so good
		> > Still waiting for a response on that bug escalation. I guess they’ll get back to me if it is important.
		
		> Better
		> > Still waiting for a response on that bug escalation. I better message them directly to find out whats going on.

	- Identify process improvements

		> Not so good
		> > This is the way it has always been done.
		
		> Better
		> > I wonder what a new hire would think of the way we do things?

	- Accept feedback

		> Not so good
		> > I’m not paid to be nice. I’m paid to get shit done.
		
		> Better
		> > I’m sorry that I have been hard to work with. Thank you for telling me. I’ll work to get better.

	- Explain technical complexities
	
	    > Not so good
	    > > This is too complicated too explain to a non-technical person. You’ll just have to trust me.
	
	    > Better
	    > > If I draw this flowchart, it will make the pattern of behavior more clear...

- ## Writing

	- Take pride in writing well, from longform docs to commit messages 
	
       > Not so good
       > > `commited some stuf`
	
	    > Better
	    > > `adjust button alignment in signup form fix #123`

	- Format for scannability

		> Not so good
		> > I’ll just go ahead and put 15 run-on sentences together in this one massive paragraph.
		
		> Better
		> > 2-3 sentences per paragraph. Bulleted or numbered lists. Style formatting for emphasis.
	
	- Get to the point

		> Not so good
		> > I will thrill everyone with my long, obscure vocabulary words, unrelated background knowledge, interesting digressions and elaborate descriptions of minutiae!

		> Better
		> > “If it is possible to cut a word out, always cut it out.” — George Orwell
	
	- Include the right details

		> Not so good
		> > I don’t have time to bring everyone up to speed. I just need them to make a quick decision.

		> Better
		> > I’ll include a quick synopsis of background information, and some relevant links if they need more detail.
	
	- Read and revise

		> Not so good
		> > Yada yada yasda. Send!

		> Better
		> > Yada yada <del>yasda</del> yada. Send!

- ## Developing

	- Readable code

	    > Not so good
	    > > If I nest ternary operators 4 levels deep, this can be a one-liner! If the next dev isn’t smart enough to figure it out, that’s on them.

	    > Better
	    > > Some good ol’ fashioned if/else blocks with sensible var names and some helpful comments will make this easy for the next person to figure out.

	- Get past being stuck

	    > Not so good
	    > > I will never be able to figure this out.
	    
	    > Better
	    > > If another human can figure it out, then I can figure it out.
	
	- Avoid multiple rounds of QA

	    > Not so good
	    > > Quick branch switch and fix. Better back to QA.
	
	    > Better
	    > > Manually repro the issue. Write a test that fails. Fix the test and verify no regression or UI breakage.
	
	- Debugging / Troubleshooting

	    > Not so good
	    > > My code is perfect. Must be the computer’s fault. 
	
	    > Better
	    > > Breakpoint. Check network requests. Console debug. Git bisect. Use Google fu. Remove code. Consider the dumbest thing that could possibly be wrong.
	
	- Knowing When to Refactor

	    > Not so good
	    > > Code smell? Never heard of it. *..or..* Refactoring everything that wasn’t written by me
	    
	    > Better
	    > > I have to rewrite half of this, might clean up a few things while I’m here *..or..* Refactoring could break many things and is out of scope. I’ll make some notes for the future.
	  
	- Working concurrently

	    > Not so good
	    > > Working in isolation, not paying attention to others in the same area of the codebase, merging only at the end, `git push --force`
	
	    > Better
	    > > Check in with your team, collaborate, keep your branch fresh, minimize merge conflicts by coordinating work.
       
	- Test, Test, Test
	
	  > Not so good
	  > > Writing tests slows down software development. 
	
	  > Better
	  > > Having tests speeds up software development because it reduces the need for manual testing and prevents regression.

## Thanks for reading! 

[View project](https://github.com/johnpolacek/growth-areas-for-a-software-developer) or [make suggestions](https://github.com/johnpolacek/growth-areas-for-a-software-developer/issues) on GitHub.

> "I did then what I knew how to do. Now that I know better, I do better." 
> > Maya Angelou