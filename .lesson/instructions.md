# Web Fundamentals 

Welcome to Web Fundamentals, where we will cover the essential building blocks of web development.

In your main view you should see the contents of an `index.html` file, and if you click 'Run' at the top your screen, this should open a webview displaying the contents: `Hello World`.

Now, we'll try making some changes to this file, and others, and see what we can create.

## HTML
1. Try editing the text inside the `<h1>` (heading 1) element, and then hit the 'Run' button
2. Blocks of text can be added with `<p>` (paragraph) tag. Add a new `<p>` element below your heading with some text inside, and run your code again to see it:
    ```html
    <p>Some exciting text</p>
    ```
3. You can create lists of items by combining two HTML tags, `<ul>` (unordered list) and `<li>` (list item). Try creating a list of items below your paragraph:
    ``` html
      <ul>
        <li>Thing number one</li>
        <li>Thing number two</li>
        <li>Thing number three</li>
      </ul>
    ```
4. Images can add some excitement to a website, so let's add one! Images can be added using the `<img>` tag and a `src` attribute. Try adding an `<img>` element below and set its `src` attribute to this image: https://bit.ly/38H6AFg
    ``` html
    <img src="https://bit.ly/38H6AFg" alt="<your text here>" />
    ```
    - It's also really useful to add an `alt` attribute with some text describing the image for accessibility reasons. It will allow users of your website that depend on a "screen reader" (such as those with visual impairments) to understand what the image is showing
    - The `<img>` tag has optional `height` and `width` attributes if you want to change the size of the image e.g. `width=200 height=150`
5. The `<a>` (anchor) tag can be used to create links to other pages. It has an `href` attribute where you can put your link and you can add text to it in the same way you put text in the `<h1>` or `<p>`. See if you can add a link below your list that opens https://developer.mozilla.org/en-US/ when you click it:
    - Make sure you put some text inside the `<a>` tag or it won't show up!
    ``` html
    <a href="https://developer.mozilla.org/en-US/">Click me!</a>
    ```

When we refer to the structure or heirarchy of HTML elements, there are some common terms that will come up, these are useful when selecting elements to style with CSS rules or interacting with elements in JavaScript:
- an element that contains an element is called the _parent_ element
- elements contained inside another element are its _children_
- multiple child elements are called _siblings_

## CSS
1. In your Files (in the left side panel) you should see a file named `style.css`, click on this now. In this file we can specify CSS rules that will affect the styling of our website.
2. Copy and paste the following CSS into the empty file:
    ``` css
    .title {
      color: cornflowerblue;
      font-size: 16px;
      text-transform: uppercase;
    }
    ```
3. This won't do anything, yet! There are two more steps to complete.
4. Return to `index.html` and add the following `<link>` inside the `<head>` tag. This tells the browser to load an external resource, where the `href` is the location of that file:
    ``` html
    <link href="./style.css" rel="stylesheet">
    ```
5. Update your `<h1>` tag to add a `class` attribute with the name of our CSS selector. This tells the browser to apply the styles we have written to this element:
    ``` html
    <h1 class="title">Hello World!</h1>
    ```
6. Run your code now to see the style of your header change! Try changing the values of the CSS properties and see how the style changes.
7. Now we have some elements on the page, let's see how we can arrange them using CSS flexbox. We can use the `<div>` (divider) tag to create sections of content, and then use CSS to change the layout:
    1. Firstly, create one `<div>` that contains inside it your heading, text, and list elements
    2. Then create another `<div>` that contains your image and link elements
    3. Amend your `<body>` element to add a `class` attribute with a value of `layout`
    4. In `style.css`, add a new CSS rule that will target the `layout` class and set the `display` property to `flex`:
    ``` css
    .layout {
      display: flex;
    }
    ```
8. Run your code and you should see the two sections of content side-by-side!
9. Go back to your styles.css stylesheet and add a `flex-direction` property to your `.layout` rule to see how you could create some different layouts, the different values include `row`, `column`, `row-reverse`, and `column-reverse`

## JavaScript
1. In your `index.html` file, create a `<script>` element inside `<head>`. This can contain JavaScript code that will execute when the page loads
2. Inside your `<script>` element, copy the following code snippet. This will add a 'click handler' to our title element to modify the text content when the element is clicked:
    ``` javascript
     document.addEventListener('DOMContentLoaded', () => {
      const title = document.getElementById('title');
    
      title.addEventListener('click', () => {
        title.innerText = title.innerText + '!';
      });
    });
    ```
3. Update your `<h1>` element to have an `id` attribute with the value `title`. This will allow the above code to find the correct element on the page.
4. Run your code now, and clicking the title element should make it shoutier!
5. Try changing the event type that will trigger the text change. In the `<script>`, change the `click` event to `mouseover` and see how that changes when the code runs.
6. Just like with CSS, the browser can load external JavaScript, too! You should have a `script.js` file in your Files list. Move the code from `index.html` `<script>` tag into `script.js`, and then add a `src` attribute to the `<script>` tag, like below:
    ``` html
    <script src="./script.js"></script>
    ```
7. The code should still work the same as it did before!
   