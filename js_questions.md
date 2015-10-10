Quiz Questions
Questions and Answers

Types

Question

What are the data types in JavaScript?

Answer

Boolean
String
Undefined
Null
Symbol
Object
Functions and Arrays are kinds of Objects.

Null & Undefined

Question

What's the difference between null and undefined?

Answer

Something with a value of null is empty, while something with the value of undefined hasn't been initialized.

this

Question

What does the this keyword refer to in JavaScript?

Answer

The first value passed to call() or apply()
The value that was bind()ed to the function
The calling object
The global scope
"The DOM element" or "the event" is a naive answer. "The calling context" is better, but still incomplete.

Bubbling

Question

What is event bubbling?

Answer

When an event fires on a DOM node, it will continue to "bubble up" all the parent DOM nodes unless it is stopped from propogating.

Try/Catch

Question

How are errors usually handled in JavaScript?

Answer

Try/Catch/Finally blocks. Ask for a code example:

try {
    // Error-prone code
} catch (error){
    // If an error is thrown
} finally {
    // Runs either way
}
Prototypes

Question

How does inheritance work in JavaScript?

Answer

JavaScript has prototypal inheritance. Rather than a blueprint, objects are copies of other object instances. They can modify their structure and values after instantiation without affecting the rest of the chain.

Paradigms

Question

Name two programming paradigms.

Answer

Common answers include procedural, functional, and object-oriented. May also say imperative/delcarative.

Imperative/Declarative

Question

What's the difference between imperative programming and declarative programming?

Answer

Imperative programming tells the computer what to do. Declarative programming tells the computer what you want, ignorant of the steps required to produce it.

Functional Programming

Question

What are some tenets of functional programming?

Answer

Functional purity (no side-effects, output derived only from input)
Simple functions
First-class functions (functions as variables)
Higher-order functions (functions that return functions)
Immutability

Question

What is immutability?

Answer

When a stored value can't be changed. Functional progams/languages replace values with new values, rather than changing (or "mutating") the existing ones.

Closures

Question

What is a closure?

Answer

When an inner function maintains a reference to the state of an outer function after it completes.

Composition

Question

What does it mean to compose an object?

Answer

Composition is when objects are assembled out of smaller pieces, rather than inherited and specialized.

Binding

Question

What's the difference between one-way and two-way binding?

Answer

Two-way binding is when a UI input is bound to a model, and they are allowed to update each other directly. One-way binding, the model tells the input what to display (single source of truth) and is updated via events.

Async

Question

What is async in JavaScript?

Answer

When a function does not immediately return a value. The rest of the program continues executing, requiring special handling and "callback functions" for when function calls complete.

DOM

Question

What is the DOM?

Answer

Document Object Model. It's the API for web pages, and what HTML gets parsed into.

Factories

Question

Explain how the factory pattern works.

Answer

A factory is when you need an object with a particular interface, but you let a constructor decide which specific object you get back.

    myEmployee = new Employee("fullTime");
    // myEmployee is actually an instance of FullTimeEmployee
Interfaces

Question

What is an interface?

Answer

A set of methods that an object is guaranteed to have.

Methods

Question

What's the difference between a method and a function?

Answer

A method belongs to an object.

Static

Question

What is a static method in OOP?

Answer

A method that belongs to a class, rather than any particular instance of that class.

API

Question

What is an API?

Answer

Application programming interface. The publicly exposed and programmable part of an application.

Environment Variables

Question

What are the variables available to a program (usually server-side) that aren't actually written in the program itself?

Answer

Environment Variables

Loops

Question

Name as many kinds of loops as you can.

Answer

For, While, Do While, For-In, For-Each, Map, Reduce

Conditionals

Question

Name as many different kinds of conditionals as you can.

Answer

if/then/elseIf/else, switch, ternary.

Hoisting

Question

What is hoisting?

Answer

Before a function in Javascript executes, it looks at all of the variable and function declarations and "hoists" them to the top of the function, without their assignments.

Scope

Question

What creates scope in Javascript?

Answer

Functions. In many other languages, it's blocks.

var/let/const

Question

How can variables be assigned in Javascript in 2015?

Answer

var for function scope, let for block scope, const for block scope protected against reassignment.
