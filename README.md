# Logo Generator

## Description
This project uses node.js's inquirer to take user prompts in order to define and create a loge in an SVG file.  The user is asked for the text, text color, shape, and shape color.  These inputs are then converted to classes and used to populate html that generates the .svg.  The user has a choice between a circle, square, and triangle logo.


## User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Installation
This project uses node.js, inquirer, jest for testing.  'npm install' will need to be performed before running the script.

## Usage
This project can be ran simply by typing 'node index.js' in the terminal and then following the following prompts.

![Logo-Screenshot](./assets/Screen%20Shot%202023-03-13%20at%2010.45.41%20PM.png)

Github Repository Link: https://jpbaer.github.io/LogoGenerator/

Video Demonstration Link: https://drive.google.com/file/d/1HmJzhubOMoq63s94tok4HCjEqZ-BGhh9/view



