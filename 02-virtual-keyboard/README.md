# JavaScript Reboot

## Virtual Keybord

Run the following commands to begin the first challenge

```shell
# navigate to the first folder
cd ~/code/javascript-reboot/02-virtual-keyboard/

# copy your previous js file over
cp ../01-dictionary/index.js .

# open up the challenge folder in VS code
code .

# serve the file
serve
```

## Objectives

![challenge-02](https://github.com/user-attachments/assets/b948425a-1534-4208-8528-edfe0383ebaf)


For this challenge, we want to add on the functionality of the virtual keyboard. Useful for when users have a faulty keyboard from spilling coffee on it.

Users can now use both their native keyboard or the onscreen keyboard to add text to the input.

## Specs

This seems simple enough, and it is. It should be the quickest challenge in this set.

Some thoughts that we should have moving in.

1. Can I show something in the console when I click on any of the keys?
2. Now that I can react to it, can I actually show the key that I pressed?
   > _you should use the [dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset) property_
3. I can now capture the key that the user selects, but where does it go? Do I need to get anything new from the DOM?
4. append... append...
5. ⚠️ Referencing the example, moving between the keyboard and the virtual keyboard should be a seamless process. see [Element Focus](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus).

Good luck :rocket:
