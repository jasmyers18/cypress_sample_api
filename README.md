# Cypress API Testing Sample

## Overview

This is just a sample project to demonstrate a few capabilities of API testing using the Cypress framework and a Typescript implementation.

Versions used:
Node: 16.14.0
Cypress: 13.7.0

## Required Software

NodeJS: https://nodejs.org/en (Any LTS version should work fine.)

VS Code: https://code.visualstudio.com/download (You can use any code editor you like, but this is the default that will be referenced in this readme.)

## Setup Instructions

Run this command to install this framework:

    npm -i

## Running Tests

To Open the Cypress application, run this command:

    npm run test.open

To run all tests from the CLI, run this command:

    npm test

## Base Url

Note that for this project the base URL is set to https://dummyjson.com
This is defined in the Cypress.config.ts file

## Add Ons

This projects uses Prettier and ESLint for formatting and linting.
Install and setup appropriate VS Code extensions to utilize these easily.

Otherwise use this command to use prettier to format all code:

    npm run pretty

And this command to lint your files:

    npm run lint
