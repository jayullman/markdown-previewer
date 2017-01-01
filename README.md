# markdown-previewer

## Requirements for this project:
__Objective__: Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/JXrLLE/.

Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style.

* User Story: I can type GitHub-flavored Markdown into a text area.

* User Story: I can see a preview of the output of my markdown that is updated as I type.

* Hint: You don't need to interpret Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked

## Technologies used for this project

I used React.js to create the UI and state management for this project. I paid special attention to managing state from the topmost component, <App/>, and then delegating state changes down to its children (the input and output divs). The children were able to communicate with the <App/> component via a passed down callback from <App/>

Note: this is the first project I built using React.
