# Cellular Automata kata.

## Description

Most of us have probably heard of Conway's Game of Life, but there are other cellular automata that are equally interesting. In fact, there is a group of 256 one-dimensional cellular automata that are quite easy to simulate but still fun to observe.

These CAs have a number of simple "rules" that define system behavior, like "If my neighbors are both active, I am inactive" and the like. The rules are all given numbers, but they're not sequential for historical reasons.

So to simulate these elementary cellular automata, you first need to construct a rule table. This table is a description of the changes that happen in each discreet step of time. 

For instance, this is the table for the **Rule 30 automaton**:

    +-----------------------------------------------------------------+
    | Neighborhood    | 111 | 110 | 101 | 100 | 011 | 010 | 001 | 000 |
    +-----------------------------------------------------------------+
    | New Center Cell |  0  |  0  |  0  |  1  |  1  |  1  |  1  |  0  |
    +-----------------------------------------------------------------+

and this is the one for the **Rule 90 automaton**:

    +-----------------------------------------------------------------+
    | Neighborhood    | 111 | 110 | 101 | 100 | 011 | 010 | 001 | 000 |
    +-----------------------------------------------------------------+
    | New Center Cell |  0  |  1  |  0  |  1  |  1  |  0  |  1  |  0  |
    +-----------------------------------------------------------------+
  
# Coding the CAs.

You have already implemented the rules for evolutions in the initial repo. So you can do

```js
evolve(rule30, [[1], [1, 1, 1]]);
/*
[
   [0, 1, 0],
   [0, 1, 1, 1, 0],
   [1, 1, 0, 0, 1]
]
*/
```

Given a initial state of `[[1]]`, you should calculate the next evolution and render the state in your application using `reffects`.

When you click on the automaton, the evolution should start and if you click again it should stop.

You can also include a selector to choose which rule to apply. Whenever you change the rule, don't forget to reset the state.


<p align="center">
  <img width="600" height="268" src="./automaton.gif">
</p>

*Hint: You may need to use the `dispatchLater` effect to keep the automaton generating states every couple of milliseconds ;)*

## Sources:
  1. [Challenge #213 [Easy] Cellular Automata: Rule 90](https://www.reddit.com/r/dailyprogrammer/comments/3jz8tt/20150907_challenge_213_easy_cellular_automata/)
  2. [Ruby Quiz Cellular Automata (#134)](http://rubyquiz.com/quiz134.html)