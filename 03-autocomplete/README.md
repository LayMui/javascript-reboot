# JavaScript Reboot

## Autocomplete

Run the following commands to begin the first challenge

```shell
# navigate to the first folder
cd ~/code/javascript-reboot/03-autocomplete/

# copy your previous js file over
cp ../02-virtual-keyboard/index.js .

# open up the challenge folder in VS code
code .

# serve the file
serve
```

## Objectives

![challenge-03](https://github.com/user-attachments/assets/a39f620e-8705-4364-99b6-2d37a7dc2052)

This will be the longest challenge today. Since the rest were so easy. :angry:

There are 2 halves to this. The first one, getting the autocomplete should be relatively simple. It is basically the same as yesterday.

The main challenge will come from tying everything together. All the previous things we've done should all work seamlessly with each other. Not so easy now huh 😈

## Specs

This should be abit easier for you to try break down yourselves now. Let's look at the first big challenge, making the autocomplete work.

### Autocomplete

Let's think of the user flow again.

1. user types into the input field
2. some suggestions show up
3. user selects one suggestion from the drop down
4. input field is updated

That is what the **user** sees. How do we expand this?

1. user types into the input field

   - We already have this element!
   - What event are we now listening out to?
   - Same thing, can we react to the event?
   - _**Todo:** One small step, what is it?_
   - The user expects suggestions in the next step. let's <span title="fetch!">_`GET`_</span> them.
     > Use a **fixed** endpoint first! Ensure it works.
   - _**Todo:** Another small step!_

2. some suggestions show up.

   > This is going to be _open ended_. But we've done this many times. This is going to be the only help you will receive.

   **unordered thoughts**

   - We need to study the html structure of what is going to be inserted inside.
     `<li class="search-item">one suggestion</li>`
   - what if the results are empty?
   - `<ul id="search-results" class="empty">` what is that empty class doing on the `ul`?

3. user selects one suggestion from the drop down

   > :warning: this is going to be tricky.

   - We want the user to select an item on click, which is obviously an `addEventListener`, but the suggestions are dynamically generated. This gives us a big risk of [memory leaks](https://medium.com/@lelianto.eko/memory-leaks-in-javascript-and-how-to-prevent-them-96a69de65c31)
   - We want to add a **single eventListener** to the parent, and have it **delegate** the callback to its appropriate child. This is called [Event Delegation](https://javascript.info/event-delegation).
   - what is the callback?
   - always same approach, _test the small steps..._

4. input field is updated
   - at this point, we should have the content that the user has selected.
   - how do we update an `HTMLInputElement`?
   - As per the example, after selecting one suggestion, the suggestion list should close.

## Hygiene and UX approaches

At this point, we have all the functionality our app requires to work! Congrats! :tada::tada:

The hard part is over, but there are some discrepencies:

- Our suggestions work when we type, but not when we use our virtual keyboard! :scream:
- When we clear our input, i.e.`backspace` `backspace` `backspace`, our suggestion box still shows??
- The suggestions Le Wagon returns are nonsensical at times, we have to ensure our app doesn't break if we search for a word that doesn't exist!
- When I don't click on a suggestion and submit the form, my suggestions still remain! :angry:
- What else can you find? 🔍
