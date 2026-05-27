# Playwright Automation Framework (TypeScript)
# Trade Me Sandbox Automation Framework

## Overview

This repository contains UI and API automated tests developed for the Trade Me Sandbox technical assessment.

The framework validates both frontend and backend functionality of the Trade Me Sandbox application using modern automation best practices, maintainable framework design, and reliable non-flaky test implementation.


# Tech Stack

- Playwright
- TypeScript
- Node.js


# Framework Features

- Page Object Model (POM)
- UI automation tests
- API automation tests
- Smoke, regression, sanity and integration test tagging
- HTML reporting


# Tasks Covered

## Task #2 – UI Automation

Automated search functionality test scenarios including:

### Functional Coverage
- Search using valid keywords
- Search using invalid keywords
- Empty search handling
- Search result validation
- Search persistence
- Search input clearing
- Location and district filtering
- Category filtering
- Clearing search 
- URL retains search keyword 

## Task #3 – API Automation

Automated Retrieve Categories API validation tests.

### API Coverage
- Status code validation
- Response schema validation
- Data type validation
- Required field validation
- Invalid category testing
- Response time validation

Setup Instructions
Prerequisites

Install:

Node.js (v18 or later recommended)
npm

# Setup Instructions

## Step 1 – Clone the Repository

git clone <repository-url>
```


## Step 2 – Navigate to the Project Directory

cd trademe-automation-framework


## Step 3 – Install Project Dependencies

npm install


This installs all required Node.js packages including Playwright and TypeScript dependencies.


## Step 4 – Install Playwright Browsers


npx playwright install


This installs the required browser binaries for Playwright:
- Chromium
- Firefox
- WebKit



## Step 5 – Verify Installation

Run the following command to verify Playwright is installed correctly:

npx playwright test --list


This will display all discovered test cases.

# Running Tests

## Step 6 – Run All Tests

npx playwright test


## Step 7 – Run UI Tests Only

npx playwright test search.spec.ts


## Step 8 – Run API Tests Only

npx playwright test trademe-api.spec.ts


## Step 9 – Run Smoke Tests


npx playwright test --grep @smoke


## Step 10 – Run Regression Tests


npx playwright test --grep @regression


## Step 11 – Run Tests in Headed Mode


npx playwright test --headed


# Viewing Reports

## Step 12 – Open Playwright HTML Report

npx playwright show-report
