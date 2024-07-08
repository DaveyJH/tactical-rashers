# Name of project
<!-- ![Multiple Device Demo](./readme-content/images/multi-device.png) -->
## Live Site

[Tactical Rashers](https://tactical-rashers-a603b7e7b041.herokuapp.com/)

## Repository

[tactical-rashers](https://github.com/DaveyJH/tactical-rashers)

***

## Table of Contents

- [Name of project](#name-of-project)
  - [Live Site](#live-site)
  - [Repository](#repository)
  - [Table of Contents](#table-of-contents)
  - [Objective](#objective)
  - [Brief](#brief)
    - [Tactical Rashers](#tactical-rashers)
  - [UX − User Experience Design](#ux--user-experience-design)
    - [User Requirements](#user-requirements)
      - [First Time User](#first-time-user)
      - [Returning User](#returning-user)
    - [Initial Concept](#initial-concept)
      - [Wireframes](#wireframes)
      - [Color Scheme](#color-scheme)
      - [Typography](#typography)
        - [Title](#title)
        - [Main](#main)
      - [Imagery](#imagery)
  - [Features](#features)
    - [Existing Features](#existing-features)
    - [Features Left to Implement](#features-left-to-implement)
  - [Technologies Used](#technologies-used)
  - [Testing](#testing)
  - [Bugs](#bugs)
    - [Current](#current)
    - [Resolved](#resolved)
  - [Development](#development)
  - [Deployment](#deployment)
  - [Credits](#credits)
    - [Content](#content)
    - [Media](#media)
    - [Acknowledgments](#acknowledgments)
    - [Personal Development](#personal-development)

***

## Objective

This site is to represent capabilities with React. It will connect with a DRF
back end, allowing full CRUD functionality with well handled user interactions.

The assessment checklist is available to view in the
[`docs/` directory](https://github.com/DaveyJH/tactical-rashers/tree/main/docs)
of the project repository.

***The needs within this project are not genuine and are made purely for the
purpose of completing my Code Institute project***

***

## Brief

### Tactical Rashers

Tactical Rashers : a backgammon players' site.  

The site should allow users to play backgammon in a manner similar to
["Chess by post"](https://en.wikipedia.org/wiki/Correspondence_chess). Users
will be able to play private games, with dice rolls handled via the app, and
comment with their intended moves. They should be able to update the main image
of the game to the latest state of a board and should be able to declare a
winner.

Full CRUD functionality should be available to allow users to interact
appropriately with the various aspects of the finished application. This repo
intends to provide a well-presented front-end React application that interfaces
seamlessly with a DRF back end.

***

## UX &#8722; User Experience Design

### User Requirements

Some example user stories that will affect the design. Please consult the
[GitHub project board](https://github.com/users/DaveyJH/projects/8/views/4) for
a full list of user concerns written in the form of GitHub issues.
Alternatively, a
[status graph can be viewed here](https://github.com/users/DaveyJH/projects/8/insights/6).

Below is a non-exhaustive list of some of the user stories. Some of these are
key user stories that must be achieved for an MVP to be considered complete:

#### First Time User

> *"As a **potential player**, I would like to be able to **read the rules of
> the game** so that I **know how to play**"*
>
> *"As a **potential user**, I would like to be **able to create a profile** so
> that I **am able to play**"*

#### Returning User

> *"As a **returning user**, I would like to **quickly determine whether I am
> logged in** so that I can **log in / out as needed**"*
>
> *"As a **returning user**, I would like to **log in to my account** so that I
> can **interact with the features of the site**"*
>
> *"As a **returning user**, I would like to **view my currently active games**
> so that I can **track the progress of, and make new moves on, my games in
> play**"*
>
> *"As a **returning user**, I would like **to play a game with another
> player** so that I can **enjoy the game of backgammon**"*
>
> *"As a **returning user**, I would like **to comment on completed games** so
> that I can **interact with other users of the site**"*

***

### Initial Concept

The front-end application should provide a good UI/UX for users of the site. It
should implement the functionality of the DRF back end in a user-friendly and
error-free manner.

As a lover of board games, the application may, in time, develop into a much
broader database and front end that could allow for various types of social
games to be played remotely. For this iteration, a proof of concept and MVP is
to implement a playable backgammon application. There will be no interactive
game board due to time constraints, so the game will be played via the means of
descriptive moves being posted by each player.

#### Wireframes

Wireframes have been created as an initial visual concept using
[Balsamiq](https://balsamiq.com/). Please see
[`./docs/wireframes.md`](./docs/wireframes.md) for more pages and extra device
sizes. The `.bmpr` file is available for editing from within this repository.

![mobile wireframe example](./docs/assets/images/mobile-example.png)

***

#### Color Scheme

A color scheme derived from a fairly classic set of backgammon board colors has been chosen for the site.

![color scheme](./docs/assets/images/color-scheme.png)

The contrast of each color has been compared using
[my own contrast checker site](https://daveyjh.github.io/Color-Contrast-Checker/). The results are shown below.

![color contrast table](./docs/assets/images/color-contrasts.png)

***

#### Typography

As a key aspect of the app will be written move descriptions, the font chosen is
intended to be clear and reduce cognitive overload.
[Google Fonts](https://fonts.google.com/)' monospace `Inconsolata` has been used
throughout the application, with the only variation being the title in the
header. The font used there is a little more striking as it has been deemed that
site users will not be distracted by this. The font used for the title is
`Archivo Black`.

##### Title

![archivo black font](./docs/assets/images/archivo-black.png)
Archivo Black

##### Main

![inconsolata](./docs/assets/images/inconsolata.png)
Inconsolata

***

#### Imagery

The style of images for logos and default games is intended to provide a clean
style with little distraction from the purpose of the site. Credits for the
images can be found in the [Media](#media) section at the bottom of this doc.

***

## Features

### Existing Features

<!-- - Feature 1 - allows users X to achieve Y, by having them fill out Z -->
<!-- 1. feature1
>*"User... **story quote**"*
- *explanation*-->
F1
***
<!-- - Feature 2 - allows users X to achieve Y, by having them fill out Z -->
<!-- 1. feature2
>*"User... **story quote**"*
- *explanation*
  ![imgName](imgURL)
-->
F2
***

### Features Left to Implement

<!-- features left to implement -->
<!-- 1. Explain desired feature 1
  - *Notes regarding feature*
  - Explanation of feature need etc. -->
<!-- 2. Explain desired feature 2
  - *Notes regarding feature*
  - Explanation of feature need etc. -->
***

## Technologies Used

<!-- tech used -->
<!-- - *[techNameOne](techURL)*
       - Description -->
<!-- - *[techNameTwo](techURL)*
       - Description -->

## Testing

<!-- explain testing
? item tested
? expected result
? how test was performed
? actual result
? differences
? action required
? re-test
- more detail and better format required compared with project 1
look at daisy's testing documentation and [webinar](https://us02web.zoom.us/rec/play/9FIKllHX2ZiQNFRhYPn_hBh_ZeA8964ZvIDLnhpKGAf1NLVc3_hBJ6zSL8Hv5Hx7ALnPtDmbg8CmFAs.YVsZ9LR_uI7OjEwH)-->

<!-- validation of html, css and script. -->
<!-- lighthouse testing -->

## Bugs

### Current

<!-- current bugs -->

<!-- - bugOne explanation

*notes on explanation* -->
***
<!-- - bugTwo explanation

*notes on explanation* -->
***

### Resolved

<!-- resolved bugs -->
<!-- 1. overriding bootstrap styles

install sass and create override.scss file linked in index.js

https://create-react-app.dev/docs/adding-bootstrap/#using-a-custom-theme

![bootstrap styling](./docs/assets/images/bootstrap-style.png)

*Commit - **[sha](commit link with highlighted lines)** - explanation of fix* -->
***
<!-- 1. bugTwo

![bugTwoImg](bugTwoImgURL)

*Commit - **[sha](commit link with highlighted lines)** - explanation of fix* -->
***

## Development

<!-- section missed in first project. 
!describe development process -->

## Deployment

<!-- !check this section, may need adjusting as using additional languages -->

<!-- **Github Pages**
- Navigate to the relevant GitHub Repository [here](github repo URL)
- Select "Settings" from the options below the name of the repository

![Settings Snip](./readme-content/images/github-settings.png)
- Select "Pages" from the left hand menu

![Pages Snip](./readme-content/images/pages-select.png)
- Select "Branch: main" as the source and leave the directory as "/(root)"

![Source Snip](./readme-content/images/pages-source.png)

- Click the Save button

- Take note of the URL provided

![URL Snip](./readme-content/images/pages-url.png)

- GitHub takes a short while to publish the page. The bar turns green if you refresh the pages tab and the page has been deployed

![Confirmed Deployment Snip](./readme-content/images/pages-deployed.png)
- Click the link or copy the URL to a browser to reach the deployed page
https://daveyjh.github.io/ci-portfolio-one-v4/

The site is now live and operational -->
***

## Credits

### Content
<!-- - the a comes from b -->
<!-- - the c comes from d -->
### Media
<!-- - the favicon comes from https://www.flaticon.com/free-icon/backgammon_7399635?related_id=7399513&origin=search -->
<!-- - the c comes from d -->
### Acknowledgments
<!-- - acknowledge a, found at [b](bURL), for c -->
<!-- - acknowledge d, found at [e](eURL), for f -->
***

### Personal Development

<!-- notes -->