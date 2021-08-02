# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What is an instance variable in Ruby? How is it different from other variables?

  Your answer: An instance variable is a variable that is linked to an object, which is an instance of a class. In ruby the instance variable is shown with an @ symbol.

  Researched answer: An instance variable is a variable that is linked to an object, which is an instance of a class. In ruby the instance variable is shown with an @ symbol. An instance variable has a local scope of the class it belongs to. It cannot be accessed outside the instance of the class. In order to access or change the instance variable of an object you need to use getter or setter methods.



2. What is a block in Ruby?

  Your answer: A block is what anonymous functions are called in Ruby. Blocks are started with the do keyword and ended with the end keyword.

  Researched answer: A block is what anonymous functions are called in Ruby. Blocks are started with the do keyword and ended with the end keyword. Blocks can also be started and ended with curly brackets. Blocks are always called with a method. It is the chunk of code passed into a method.



3. Ruby has an implicit return. What does that mean?

  Your answer: You don't need to use the return keyword in Ruby. In Ruby the value of the last line of the method is returned automatically.

  Researched answer: You don't need to use the return keyword in Ruby. In Ruby the value of the last line of the method is returned automatically. You can still use the return keyword in Ruby. When you use the return keyword it is called an explicit return. Sometimes using an explicit return can make the code more readable.



4. What is object-oriented programming? How is it different than functional programming?

  Your answer: Object-oriented programming, also known as OOP is a model of programming that organizes design around objects instead of functions and logic, while functional programming is organized around functions and logic.

  Researched answer: Object-oriented programming, also known as OOP is a model of programming that organizes design around objects instead of functions and logic, while functional programming is organized around functions and logic. OOP uses object to repressent things that you are programming about. The objects hold data in attributes. In functional programming you avoid having your data change at all.



5. What is the difference between a class and an object?

  Your answer: A class is a prototype of an object. It is the blueprints of an object.

  Researched answer: A class is a prototype of an object. It is the blueprints of an object. An object is abstracted from a class. The class defines the behavior the object will have. An object is a specific instance of a class.



6. STRETCH: What is `attr_accessor`?

  Your answer: An attr_accessor is a keyword in Ruby that works as a getter and a setter for instance variables outside the scope of the object.

  Researched answer: An attr_accessor is a keyword in Ruby that works as a getter and a setter for instance variables outside the scope of the object. An attr_accessor automatically sets up setters and getters for use on instance variables. It is a method that makes getter and setter methods for you to access instance variables.



## Looking Ahead: Terms for Next Week

1. PostgreSQL: Postgres is a open source, reltational, database management system. It is used as the primary data storage for a lot of webs applications, mobile applications, geospatial applications, and analytics applications.
 
2. Ruby on Rails: Ruby on Rails is a server-side web application framework that is written in Ruby. It provides default structures for databases, web services, and websites.

3. CRUD: CRUS stands for create, read, update and delete. Which are the four basic operations of persistent storage. It is a basic function of any computer database or a program with persistent storage.

4. ORM: ORM stands for object–relational mapping, which is a technique for converting data between incompatible type systems using object-oriented programming languages like Ruby.

5. Active Record: Acitve Record is the interface between a Ruby on Rails application and a database. It is object-relational mapping for Ruby on Rails. It takes data from a database and lets you interact with the data like a Ruby object.
