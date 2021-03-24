# Diploma Project
Project bulit for presenting how visual regression works. Based on testing websites.

## Tools
- Webdriver.IO
- Cucumber.js
- Node v14
- chromedriver
- wdio-image-comparison-service
- babel

## Website
Website was built using HTML5 UP Spectral template (html5up.net | @ajlkn).

To host website use for example XAMPP. Move website folder to htdocs.

Websites with added word `Updated` to name and `assets/css/mainUpdated.css`, are used as modified version of website. To test first version use `index.html`, for updated `indexUpdated.html`.

## Testing website
To start project (run tests), it's required to have Node.js installed (v12 and higher). In project folder `test` run in console `npm install` to install all required dependencies.

## Project structure
### Website folder
- contains website and updated version
- `assets` folder for assets, JS scripts, CSS files
- `images` folder
### Test folder
- contains tests written for website
- folder `screenshots` will be created after first run of tests, `desktop_chrome` (if chrome was used) contains baseline images, `tmp` has `diff` (output difference) and `actual` images
- `src` folder for code
- `src/features` contains Cucumber BDD scenarios
- `src/pageObject` contains page object files
- `src/steps` contains implementation for BDD scenarios
- `src/support` contains features used across whole website (menu) and naming scheme for visual regression screenshots
- `src/testData` contains testing data (url, data to fill inputs etc.)
### Compare folder
- contains folders with result images after comparisment
- files `sentForm` and `form` show differences between updated and first version of website
- `google images` folder contains compared test images having high resolution
- `google images scaled` folder contains compared test images, where one had lower resolution (images was scaled)
- `resemble images` folder contains compared images that were provided at Resemble.js website project
- for each described folder, every contains `result` folder, where it contains 5 folders with ignoring alghoritm used in visual regression (ignore alpha, antialiasing, colors, less, nothing) and each contains images with filter coloring differences
### Before folder
Contains folder screenshot created when website wasn't modified yet.

### After folder
Contains folder screenshot after website was modified, has diff images

## How proper detection alghoritms for visual regression were determined
Pair of images (folders google images, google images scaled, resemble images) were used on page https://rsmbl.github.io/Resemble.js/. Then output images from every ignore alghoritm and filter were saved. Next best alghoritm were definied for every provided pair, basing on how well differences were marked.

## How to run
Use script `test` defined in package.json or use `npx wdio wdio.conf.js` command.