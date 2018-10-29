# fall2018-group4

## Git / GitHub Refresher:

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
### Austin Bearden
* About Me

    I am a Computer Science senior at IUPUI. Indianapolis born. I like thinking creatively and critically. I have played the acoustic guitar for 13 years. Playing guitar helps me relax and serves as a way to appreciate and thank GOD for all He has made and done for me.
    
* Project Roles

    Frontend developer: Ember and CSS
    
### Bryce Poeppel
* About Me

    I am a Computer Science senior at IUPUI. I was born in Fort Wayne Indiana, I primarily just work and play a variety of card games such as Magic the Gathering and Eternal, or Path of Exile. I've always enjoyed programming interacting with the lower levels of the machine, but have spent the last summer working on Freelancer.com almost exclusively to repair or make minor modifications on webpages from a variety of sources.
* Project Roles

    Backend developer
### José Francisco
* About Me

    José is a Computer Engineering (CE) senior at IUPUI born in Luanda, Angola. Though a CE major, Jose's greatest career interest in Software Development. One of his favorite classes in college was "Principles of Software Design" where he first heard about Software Design Patterns.

* Project Roles

    Backend Developer: Blueprint
    
### Mitchell Carroll
* About Me
* Project Roles
### Peter Daum
* About Me

    I am a CE major, CS minor, working towards a career in Software Engineering. I enjoy making games, which is what sparked my interest in programming to begin with, even though I rarely enjoy playing games these days. In my fantasy world I would probably just make indie games (which would of course be successful enough to sustain my livelihood) with a small team.
    
* Project Roles

    Front-End and Back-End Developer as needed

### Bard Polley
* Bard is pursuing a Bachelor of Computer Science with a focus on databases and front-back end development interactions.
* Project Roles
    * Front-End Developer (EmberJS)

## Group Process
***
### Requirements
---
* Use Issues (use #issue-number to relate requirements)
    * Tags for Issues: Frontend, Backend, Both, High, Medium, Low
    * Use standard numbering with issues
* Content of Requirements: "As a [type of user] is want to be able to..."
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
*
    
### Testing
---
*
*
*
### Collaboration Tools
---
* [Option - Kanban for Development and Bug testing (on Github)](https://github.iu.edu/CS450-ECE461/fall2018-group4/projects)
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
    * Example (Non-primitives) - objThisObject
        This is just an idea; I don't have the level of coding experience that you all have -- other recommendations welcome!

#### Code Block format (We should pick one of the following)
```ecmascript 6
//Option A

if (init; cond; inc) {
    //Statements
} else {
    //Statements
}

// * * * OR * * * Option B

if (init; cond; inc)
{
    //Statements
} else
{
    //Statements    
}

//* * * OR * * * Option X

//Enter choice(s) here


```
    
### User Stories

Store on `Issues`

### GitHub Usage

* A new branch for every feature

* Stage branch off of master branch that all our feature branches branch off of. Update master branch with stage every sprint.

