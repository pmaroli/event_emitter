# Event Emitter

### Running the file

To run the index.ts file, type the following into the terminal (macOS & Linux only):

```
npm start
```

### Problem 1: Implementing more than 1 handler

To implement more than one handler for a specific type, I implemented the handlers object values as an array of Functions. Every function for a specific type is called in the trigger

### Problem 2: Adding an off method

Calling the off method will remove a function from the handlers object if it matches the function passed to `off`. This won't work for anonymous functions.

### Problem 3: Passing Arbitrary Arguments

We can handle arbitrary arguments using `Rest Parameter Syntax`. This will passing the parameters defined in the trigger method to each handler. When using this, we should be careful not to mix types.
