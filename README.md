![image](https://github.iu.edu/CS450-ECE461/fall2018-group4/blob/master/NODE.svg)

## About the application
This application will provide a venue for researchers and potential participants to connect.

## GitHub Usage

* Each issue must be developed in its own branch -- do not develop in the master branch.
   * Ex: `git checkout -b issue-xxx` (where xxx is the issue number)
* After completing development of your issue, request a pull with that issue compared off master.
   * At least one other group member should review the code
* Once issue has been reviewed, merge-pull the issue back to the master.
* Close the issue.

### Additional Git / GitHub Refresher:

`git clone <repourl>`
Clone this repository to local machine

`git fetch` `git rebase origin/<branchname>`
update your branch with current updates on origin

`git branch`
view all branches on local

`git checkout <branchname>`
switch to a different branch

`git checkout -b <branchname>`
create a new branch and switch to it

`git stash`
place all changes since last commit on stack. Helpful is you want to undo waht you have done

`git stash pop`
pops off item from stack from last stash


## Bios
***

### Front End Developers

| Austin Bearden | Peter Daum | Bard Polley |
| -------------- | ---------- | ----------- |
| I am a Computer Science senior at IUPUI. Indianapolis born. I like thinking creatively and critically. I have played the acoustic guitar for 13 years. Playing guitar helps me relax and serves as a way to appreciate and thank GOD for all He has made and done for me. | I am a CE major, CS minor, working towards a career in Software Engineering. I enjoy making games, which is what sparked my interest in programming to begin with, even though I rarely enjoy playing games these days. In my fantasy world I would probably just make indie games (which would of course be successful enough to sustain my livelihood) with a small team. | Bard is pursuing a Bachelor of Computer Science with a focus on databases and front-back end development interactions. |
| Ember, CSS | Front and Back-end | Ember, Requirements |

### Back End Developers

| Bryce Poeppel | José Francisco | Mitchell Carroll | 
| ------------- | -------------- | ---------------- |
| I am a Computer Science senior at IUPUI. I was born in Fort Wayne Indiana, I primarily just work and play a variety of card games such as Magic the Gathering and Eternal, or Path of Exile. I've always enjoyed programming interacting with the lower levels of the machine, but have spent the last summer working on Freelancer.com almost exclusively to repair or make minor modifications on webpages from a variety of sources. | José is a Computer Engineering (CE) senior at IUPUI born in Luanda, Angola. Though a CE major, Jose's greatest career interest in Software Development. One of his favorite classes in college was "Principles of Software Design" where he first heard about Software Design Patterns. | I am a Computer Science major at IUPUI.  My main strength lies in Mathematics, but my interest in Computer Science was piqued when I took an independent study class during my final semester of high school.  I've also found enjoyment in building computers and systems.
|  Blueprint | Blueprint | Blueprint  |

## Group Process
***
### Requirements
---
* User Stories / Features are captured as a primary requirement
  * Tag the issue with 'Feature/User Story'
  * Add the issue to the 'Features' project
* Use Issues (use #issue-number to relate requirements)
    * Tags for Issues: Frontend, Backend, Both, High, Medium, Low
    * Reference the Feature/User Story that the issue addresses
    * Add the issue to the Front-End or Back-end projects as needed
    
* Content of Requirements: "As a [type of user] I want to be able to..."
    * Phrase out technical issues with direct present tense comments
### Design
---
* Styling: CSS Grid, CSS Flex-box
    * [Figma Mock-up Tool - Provides CSS styling](https://help.figma.com/editor/developer-handoff)
* Take design documents provided by designers and turn them into:
    * Use Case Diagrams – User-level diagrams
    * GUI Diagrams – Presentation layer diagrams (for the customer)
    * Data Flow Diagrams - 
    * State Diagrams – capturing the state of the system
    
### Testing
---
* Decide anticipated testing needed for each requirement *as* the requirement is fleshed out
* QUnit framework will be used to define and run tests
* We will adhere to test-driven development
    * Acceptance tests will be written prior to implementation of each feature
    * They will be run and confirmed to fail prior to implementation of the feature
    * Through the proper implementation, the tests will be made to pass
* Integration tests will be defined and run to verify interaction among features
* Integration tests will be defined and run to verify integration of front-end and back-end

### Collaboration Tools
---
* [Kanban for Development and Bug testing (on Github)](https://github.iu.edu/CS450-ECE461/fall2018-group4/projects)
* [Slack for Communication](https://softengineeringclass.slack.com)
* [Figma for Design](https://help.figma.com/editor/developer-handoff)


## Standards
***
### Coding Standards (Draft Pending Discussion)
#### Comments
---
* File Headers
```ecmascript 6
/************************************************
 * Application:  Application Name
 * File:  services/rentals.js
 * Author: 
 * Creation Date: yyyy-mmm-dd, dd mmm yyyy
 * Feature: [Feature number and title]
 * Purpose: Free-flow text with gist of filename 
 * ?Related files: (not sure we need this - but other files addressing the same feature
 * Modification History:
 * - yyyy-mmm-dd (initials) - Modification / update
 *
 * Licensing Information
 ***********************************************/
```
* Section Headers 
    * Classes
```ecmascript 6
/************************************************
 * Class:  Class Name
 * Purpose: Free-flow text with gist of filename 
 * Input Parameter(s):
 * Modification History:
 * - yyyy-mmm-dd (initials) - Modification / update
 ***********************************************/
```
    * Functions
```ecmascript 6
/************************************************
 * Function:  Function Name
 * Purpose: Free-flow text with gist of filename 
 * Input Parameter(s):
 *  - Parameter name - Definition
 *  - Parameter name - Definition
 * Return / Output Parameter(s):
 *  - Parameter name - Definition
 * Modification History:
 * - yyyy-mmm-dd (initials) - Modification / update
 ***********************************************/
```
#### Naming Conventions
------
* Standard JavaScript camelCase
    * Example (Primitives) - intCounter, iCounter
    * Example (Non-primitives) - ThisObject
* Arrays and Variables
    * Plural variable name for array
    * Singular variable name for single instance variables
* ALL-CAPS for constants

#### Code Block format
* Block opening and closing braces - aligned under the loop or block invariant
* Use tab settings
    * Webstorm : WebStorm -> Preferences -> Editor -> Code Style -> JavaScript/HTML, Use Tabs 
```ecmascript 6

for (init; cond; inc)
{
    //Statements
} 

...

if(condition)
{
    //Statements    
}
else
{
    //Statements
}

...

while(condition)
{
    //update condition
}

...

void methodName()
{
    //functionality
}

...

class ClassName
{
    //class content
}

...

/*
Multi-line comment

*/

...

// Single-line comment

```
    
## Prerequisites - Ember and Blueprint

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Blueprint](#)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd front_end`
* `npm install`

## Running / Development

* `ember serve` (Front end application)

* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
