## CSS Preprocessors

A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax. There are many CSS preprocessors to choose from, however most CSS preprocessors will add some features that don't exist in pure CSS, such as mixin, nesting selector, inheritance selector, and so on. These features make the CSS structure more readable and easier to maintain.

To use a CSS preprocessor, you must install a CSS compiler on your web server.

### Why Pre-Processing CSS?
CSS is primitive and incomplete. Building a function, reusing a definition or inheritance are hard to achieve. For bigger projects, or complex systems, maintenance is a very big problem. On the other hand, web is evolving, new specs are being introduced to HTML as well as CSS. Browsers apply these specs while they are in proposal state with their special vendor prefixes. In some cases (as in background gradient), coding with vendor specific properties become a burden. You have to add all different vendor versions for a single result.

In order to write better CSS, there were different approaches such as separating definitions into smaller files and importing them in to one main file. This approach helped to deal with components but, did not solved code repetitions and maintainability problems. Another approach was early implementations of object oriented CSS. In this case, applying two or more class definition to an element. Each class adds one type of style to the element. Having multiple classes increased re-usability but decreased the maintainability.

Pre-processors, with their advanced features, helped to achieve writing reusable, maintainable and extensible codes in CSS. By using a pre-processor, you can easily increase your productivity, and decrease the amount of code you are writing in a project.

[Read More](https://htmlmag.com/article/an-introduction-to-css-preprocessors-sass-less-stylus)

## CSS Preprocessors: SASS

# Intro to Sass

[Source](https://github.com/tiffanytse/intro-to-sass/blob/master/README.md)

Since we are beginning to make larger websites, it makes sense to break up our projects into parts and extend functionality and reusability with Sass!

---
## What is Sass?
- Sass: Syntactically Awesome Style Sheets
- Sass is a preprocessing language for CSS
    - There are many other preprocessor languages out there (LESS, Stylus, etc) 

As stylesheets are getting larger, more complex, and harder to maintain. This is where a preprocessor can help. Sass lets you use features that don't exist in CSS yet like variables, nesting, mixins, inheritance and other fun things. 
- It helps us develop CSS much more quickly and efficiently

### .sass versus .scss
There are two ways of writing Sass. Using the ```.sass``` extension and syntax or using the ```.scss``` extension and syntax.

When Sass first came out it used only the ```.sass``` extension - the syntax of which meant that you couldn't use ```;``` or ```{ }``` in the code itself, as the language relied on *indentation* only to be compiled properly. This was problematic for people with existing projects, that had tons of CSS - which meant less people were switching to using Sass. 

**The solution**

Sass then came out with the ```.scss``` extension which allowed for regular css to be placed in a ```.scss``` file. This meant for existing projects, only the files themselves have to be renamed. 

http://thesassway.com/editorial/sass-vs-scss-which-syntax-is-better 

---
## Benefits of using Sass
- Sass can concatenate and compress your styles for you, so you only have to attach one stylesheet and that means less requests to a server
- Variables in Sass make your code more consistent ( you can set up a particular set of colors at the beginning and use them throughout your project )
- Helps to make your code more modular, because you can break things down into smaller parts

---
## Setup
A ```.scss``` file is compiled into ```.css``` using a compiler. This compiler can be a command line tool like [Jekyll](http://jekyllrb.com/docs/assets/) or it could be a GUI application like [Prepros](https://prepros.io/) or [Livereload](http://livereload.com/). A compiler looks for the ```.scss``` extension, and compiles any Sass files into CSS for us - usually on save, or when we run a compile command explicitly. 
```
.scss  ➡  compiler(Prepros/Jekyll)  ➡  .css
```
### Prepros
To set up prepros simply create your folder structure and import statements first, then drag the  **whole project folder** into Prepros. Prepros should automatically compile your ```style.scss``` file for you into a ```.css``` file.  This will happen once you make a change to any ```.scss``` file in your project - since Prepros is now watching your project folder. 

Also don't forget to include the ```prepros.cfg``` and ```*.css.map``` file in your ```.gitignore``` file when commiting to Github. This way you dont commit the created configuration file that Prepros makes to watch your folder for changes. 

### File Structure & Partials
We usually break up our styling into modular parts, so that we can find things more easily, and make items reusable.

Your folder structure for a Sass project will look something like this: 
```
index.html
sass/
  └ style.scss    ⬅︎ This file is compiled
  └ _base.scss
  └ _mixins.scss
  └ components/
    └ _main.scss
css/
  └ style.css     ⬅︎ This file is generated by the compiler
```
---
## Partials
 The sass directory contains what are called *partials*, which are .scss files that begin with an ```_``` (underscore). 
 
For example: ```_mixins.scss```, ```_base.scss```, and ```_main.scss``` are all partial files. 

The underscore lets Sass know that the file is only a partial file and that it should not be generated into a CSS file.

#### Importing Partials
Partials are **imported** into our ```style.scss``` file using ```@import``` statements.

**style.scss**
```scss
@import 'base';
@import 'mixins';
@import 'components/main';
```
Notice when you use an ```@import``` statement, you don’t need to include the ```_``` (underscore) in the file name that you are importing.

You'll notice that the only file that is compiled into CSS is the ```style.scss```. **This is the only file that the compiler will actually turn into CSS in this example because it's the only file that is not a partial.**

---
## Variables
- **Variables** are placeholders for storing information that you want to reuse  throughout your styles
- You can store things like colors,  font-families, or any css value you think you might want to reuse
- Sass uses the ```$``` symbol to declare variables

Only variable declarations will go into ```_base.scss```. 

**_base.scss**
```scss
// Colors
$blue: #3498db;
$dark-blue: #2980b9;
$grey: #aaaaaa;
$grey-dark: #666666;
$white: #fff;

// You can use variables inside variables
$primary: $blue;
$secondary: $grey;

// Font Families
$helvetica: Helvetica, Arial, sans-serif;
```

**How do we use a variable?**

In your ```_main.scss``` file you would write some normal CSS. In place of a color you delcared you might use a variable instead. This would mean if later on you want to change the color - you would only have to do it in one place and it would update everywhere in your styles that you have used the color variable. 

*Remember that we declared ```$helvetica``` in our ```_base.scss``` file already?*

**In ```_main.scss``` you might write:**
```scss
html{
    font-family: $helvetica;
}
```

**Which would compile to:**
```css
html {
  font-family: Helvetica, Arial, sans-serif;
}
```
---
## Nesting
When writing HTML you've probably noticed that it has a clear nested and visual hierarchy. CSS, on the other hand, doesn't. Sass will let you nest your CSS selectors in a way that follows the same visual hierarchy of your HTML.**Never nest your selectors more than 2 levels deep to avoid overly-specific selectors.**

**In your ```_main.scss``` for example:**
```scss
.border{
  border: 1px solid #ccc;
    p{
      color: red;
    }
}
```

**Which would compile to:**
```css
.border{
  border: 1px solid #ccc;
}

.border p{
  color: red;
}
```

**We can also append nested selectors in Sass using the ```&``` symbol just before it:**
```scss
a{
  text-decoration: none;
  &:hover{
    text-decoration: underline;
  }
}
```
**Which would compile to:**
```css
a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
```
---
## Mixins
**Mixins** let you define common properties once, and then re-use them over and over again. Mixins are defined using ```@mixin``` and you can make multiple css declarations within a mixin. To use a mixin in your styling simply use ```@include``` followed by the mixin name.

**We place all our mixins for the site in the ```_mixins.scss``` partial, an example of that might be for a button style, optionally you can also pass arguments to mixins so that they are resuable:**
```scss
@mixin button($bg-color){        //⬅︎ The argument passed is in the round brackets
  display: inline-block;
  margin: 1em;
  padding: .5em 1em;
  border-radius: 3px;
  text-decoration: none;
  color: #fff;
  background: $bg-color;         //⬅︎ It gets used within the mixin here
}
```
**Then you can use the mixin in your ```_main.scss```:**
```scss
.primary-btn{
  @include button(#2980b9);   //⬅︎ When we use the mixin we need to give it a bg-color
}
```
**Which would compile to:**
```scss
.primary-btn{
  display: inline-block;
  margin: 1em;
  padding: .5em 1em;
  border-radius: 3px;
  text-decoration: none;
  color: #fff;
  background: #2980b9;       //⬅︎ This is where that color argument outputs
}
```
---
## Extend
This is one of the most useful features of Sass. Using ```@extend``` lets you share a set of CSS properties from one selector to another. It helps keep your Sass very [DRY](http://www.vanseodesign.com/css/dry-principles/). 

**In your ```_main.scss``` you might have a class for border, which you can extend to other selectors:**
```scss
.border{
  border: 1px solid #ccc;
}

// Extend
ul{
  @extend .border;
}
```
**Which would compile to:**
```css
.border, ul {
  border: 1px solid #ccc;
}
```
---
## Helpful Links
- [Get Started with SASS](http://sass-lang.com/guide)
- [SASS Extended Documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)
- [How to Structure a SASS Project](http://thesassway.com/beginner/how-to-structure-a-sass-project)

##### Helpful Things for writing Sass
- [Tiffany's Favourite Base/Mixins](https://github.com/tiffanytse/base-and-mixins)
- [Getting Started with Sass - Presentation by Tiffany Tse](https://docs.google.com/presentation/d/1wbeYMqc8qfXl4Ngye94adIArUdkinFixTjFv19_FG4A/edit?usp=sharing)
- [Additional Links](https://htmlmag.com/article/an-introduction-to-css-preprocessors-sass-less-stylus)

## Introduction to LESS

---
title: Features Overview
---

> Less (which stands for Leaner Style Sheets) is a backwards-compatible language extension for CSS. This is the official documentation for Less, the language and Less.js, the JavaScript tool that converts your Less styles to CSS styles.

Because Less looks just like CSS, learning it is a breeze. Less only makes a few convenient additions to the CSS language, which is one of the reasons it can be learned so quickly.

* _For detailed documentation on Less language features, see [Features](../features/)_
* _For a list of Less Built-in functions, see [Functions](../functions/)_
* _For detailed usage instructions, see [Using Less.js](../usage/)_
* _For third-party tools for Less, see [Tools](../tools/)_

What does Less add to CSS? Here's a quick overview of features.


# Variables

These are pretty self-explanatory:

```less
@width: 10px;
@height: @width + 10px;

#header {
  width: @width;
  height: @height;
}
```

Outputs:

```css
#header {
  width: 10px;
  height: 20px;
}
```

**[Learn More About Variables](../features/#variables-feature)** 


# Mixins

Mixins are a way of including ("mixing in") a bunch of properties from one rule-set into another rule-set. So say we have the following class:

```css
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
```

And we want to use these properties inside other rule-sets. Well, we just have to drop in the name of the class where we want the properties, like so:

```less
#menu a {
  color: #111;
  .bordered();
}

.post a {
  color: red;
  .bordered();
}
```

The properties of the `.bordered` class will now appear in both `#menu a` and `.post a`. (Note that you can also use `#ids` as mixins.)

**[Learn More About Mixins](../features/#mixins-feature)** 


# Nesting

Less gives you the ability to use nesting instead of, or in combination with cascading. Let's say we have the following CSS:

```css
#header {
  color: black;
}
#header .navigation {
  font-size: 12px;
}
#header .logo {
  width: 300px;
}
```

In Less, we can also write it this way:

```less
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```

The resulting code is more concise, and mimics the structure of your HTML.

You can also bundle pseudo-selectors with your mixins using this method. Here's the classic clearfix hack, rewritten as a mixin (`&` represents the current selector parent):

```less
.clearfix {
  display: block;
  zoom: 1;

  &:after {
    content: " ";
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
```

**[Learn More About Parent Selectors](../features/#parent-selectors-feature)** 


## Nested At-Rules and Bubbling

At-rules such as `@media` or `@supports` can be nested in the same way as selectors. The at-rule is placed on top and relative order against other elements inside the same ruleset remains unchanged. This is called bubbling.

```less
.component {
  width: 300px;
  @media (min-width: 768px) {
    width: 600px;
    @media  (min-resolution: 192dpi) {
      background-image: url(/img/retina2x.png);
    }
  }
  @media (min-width: 1280px) {
    width: 800px;
  }
}

```
outputs:

```css
.component {
  width: 300px;
}
@media (min-width: 768px) {
  .component {
    width: 600px;
  }
}
@media (min-width: 768px) and (min-resolution: 192dpi) {
  .component {
    background-image: url(/img/retina2x.png);
  }
}
@media (min-width: 1280px) {
  .component {
    width: 800px;
  }
}
```


# Operations

Arithmetical operations `+`, `-`, `*`, `/` can operate on any number, color or variable. If it is possible, mathematical operations take units into account and convert numbers before adding, subtracting or comparing them. The result has leftmost explicitly stated unit type. If the conversion is impossible or not meaningful, units are ignored. Example of impossible conversion: px to cm or rad to %.

```less
// numbers are converted into the same units
@conversion-1: 5cm + 10mm; // result is 6cm
@conversion-2: 2 - 3cm - 5mm; // result is -1.5cm

// conversion is impossible
@incompatible-units: 2 + 5px - 3cm; // result is 4px

// example with variables
@base: 5%;
@filler: @base * 2; // result is 10%
@other: @base + @filler; // result is 15%
```

Multiplication and division do not convert numbers. It would not be meaningful in most cases - a length multiplied by a length gives an area and css does not support specifying areas. Less will operate on numbers as they are and assign explicitly stated unit type to the result.

```less
@base: 2cm * 3mm; // result is 6cm
```

You can also do arithemtic on colors:

```less
@color: #224488 / 2; //results in #112244
background-color: #112244 + #111; // result is #223355
```

However, you may find Less's [Color Functions](../functions/#color-operations) more useful.

## calc() exception

_Released [v3.0.0]({{ less.master.url }}CHANGELOG.md)_

For CSS compatibility, `calc()` does not evaluate math expressions, but will evaluate variables
and math in nested functions.

```less
@var: 50vh/2;
width: calc(50% + (@var - 20px));  // result is calc(50% + (25vh - 20px))
```


# Escaping

Escaping allows you to use any arbitrary string as property or variable value. Anything inside `~"anything"` or `~'anything'` is used as is with no changes except [interpolation](../features/#variables-feature-variable-interpolation).

```less
@min768: ~"(min-width: 768px)";
.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}
```

results in:
```less
@media (min-width: 768px) {
  .element {
    font-size: 1.2rem;
  }
}
```
Note, as of Less 3.5, you can simply write:
```less
@min768: (min-width: 768px);
.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}
```
In 3.5+, many cases previously requiring "quote-escaping" are not needed.


# Functions

Less provides a variety of functions which transform colors, manipulate strings and do maths. They are documented fully in the [function reference](../functions/).

Using them is pretty straightforward. The following example uses percentage to convert 0.5 to 50%, increases the saturation of a base color by 5% and then sets the background color to one that is lightened by 25% and spun by 8 degrees:

```less
@base: #f04615;
@width: 0.5;

.class {
  width: percentage(@width); // returns `50%`
  color: saturate(@base, 5%);
  background-color: spin(lighten(@base, 25%), 8);
}
```

**[See: Function Reference](../functions/)** 


# Namespaces and Accessors

(Not to be confused with [CSS `@namespace`](http://www.w3.org/TR/css3-namespace/) or [namespace selectors](http://www.w3.org/TR/css3-selectors/#typenmsp)).

Sometimes, you may want to group your mixins, for organizational purposes, or just to offer some encapsulation. You can do this pretty intuitively in Less. Say you want to bundle some mixins and variables under `#bundle`, for later reuse or distributing:

```less
#bundle() {
  .button {
    display: block;
    border: 1px solid black;
    background-color: grey;
    &:hover {
      background-color: white;
    }
  }
  .tab { ... }
  .citation { ... }
}
```

Now if we want to mixin the `.button` class in our `#header a`, we can do:

```less
#header a {
  color: orange;
  #bundle.button();  // can also be written as #bundle > .button
}
```
Note: append `()` to your namespace (e.g. `#bundle()`) if you don't want it to appear in your CSS output i.e. `#bundle .tab`.

# Maps

As of Less 3.5, you can also use mixins and rulesets as maps of values.
```less
#colors() {
  primary: blue;
  secondary: green;
}

.button {
  color: #colors[primary];
  border: 1px solid #colors[secondary];
}
```
This outputs, as expected:
```css
.button {
  color: blue;
  border: 1px solid green;
}
```

**[See also: Maps](../features/#maps-feature)**

# Scope

Scope in Less is very similar to that of CSS. Variables and mixins are first looked for locally, and if they aren't found, it's inherited from the "parent" scope.

```less
@var: red;

#page {
  @var: white;
  #header {
    color: @var; // white
  }
}
```

Like CSS custom properties, mixin and variable definitions do not have to be placed before a line where they are referenced. So the following Less code is identical to the previous example:

```less
@var: red;

#page {
  #header {
    color: @var; // white
  }
  @var: white;
}
```

**[See also: Lazy Loading](../features/#variables-feature-lazy-loading)**


# Comments

Both block-style and inline comments may be used:

```less
/* One heck of a block
 * style comment! */
@var: red;

// Get in line!
@var: white;
```

# Importing

Importing works pretty much as expected. You can import a `.less` file, and all the variables in it will be available. The extension is optionally specified for `.less` files.

```css
@import "library"; // library.less
@import "typo.css";
```

**[Learn More About Imports](../features/#imports-feature)** 
