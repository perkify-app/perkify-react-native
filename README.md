# Perkify - a centralised place for users to store their loyalty cards and a platform for Merchants to advertise their loyalty programs

## Table of contents

- [Overview](#overview)
  - [Key Features](#Key-features)
  - [Screenshot](#screenshot)
- [Our process](#process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
- [Authors](#author)
- [Acknowledgments](#acknowledgments)

## Overview

Perkify is a full-stack Android application with functunality built for both Users and Merchants. For the Front-End we combined the use of React Native and Typescript along with a number of of packages to deliver a fast and visually appealing UI. We fetch the data from our Node Postgres API which stores the data of Merchants, Loyalty cards and Loyalty programs.

### Key-features

Users are able to:

- Login/Logout
- View a list of participating Merchants
- View Merchants information such as name, contact details, google Maps location
- Filtering Merchants by category
- Search for Merchants
- View list of Merchants loyalty programmes and requirements to redeem offer
- Present a QR code for Merchants to receive points
- View progress on loyalty stamp cards
- redeem a complete stamp Card
- delete their account

Merchants are able to:

- use all features that a standard User has
- Add and remove loyalty points using a built in camera scanner to scan QR codes

### Installation/requirements

Requirements

To run the project you will need Node.js v18.0 or higher. You can check your Node version using node --version in your terminal.

In order to preview to application on your phone you will also need to install the Expo Go app on your mobile device.

Setup

1. Make sure Node.js is installed on your system. If not, you can download it from here.
2. create or fork or clone of the repo - git clone https://github.com/perkify-app/perkify-react-native.git
3. Navigate into the cloned directory - cd perkify-app
4. install the required dependencies - npm install
5. Run npm run start and a QR code should appear in your Terminal
6. scan the QR code with your phone and you should be able to run the app on your device

### Video

This is a brief video overview of some of the screens a user sees on their first sign-up and login.
This video shows the following pages: login/sign up, create account, initial splash, list of merchants, an individual merchant, activating and viewing a loyalty card, signing out

https://github.com/perkify-app/perkify-react-native/assets/139591567/b7345139-452f-4f47-abf0-8d7eb76090d6


## Process

To create this application we started with a planning phase where we discussed User Stories for both Users and Merchants.

Once we indentified we decided on our MVP and then started creating wireframes for all the Screens/Views required to achieve this and planned out the schema for our Database.

We then began deciding which tech stack is best to use to build our planned features and spent time spiking various technologies.

Once our tech stack was decided we created a ticketing system and began the building our App, with daily stand ups taking place for progress updates and troubleshooting.

### Built with

Front-end:

- React Native
- Typescript
- Expo

Back-End:

- PSQL
- Node
- SupaBase
- Jest
- Husky

### Continued development

we achieved our MVP but there are still features we would like to work on in future:

- coupon and fixed discount promotions
- ability for Merchants to edit programs
- Pausing Loyalty programs
- user registration
- Desktop Version

## Authors

https://github.com/crossmatthew
https://github.com/mkawi
https://github.com/dannygorgon
https://github.com/Asrock
https://github.com/kevinzehner

## Link to App repositories

https://github.com/orgs/perkify-app/repositories
