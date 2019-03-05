// New project set up:

1. mkdir - reponamehere 
2. npm init -y
3. npm install webdriver@^4
4. Open package.json file
5. Inside scripts object add "config": "wdio"
6. npm run config - set up steps:

CONFIGURATION
- Where do you want to execute your tests? On my local machine
- ? Which framework do you want to use? mocha
- ? Shall I install the framework adapter for you? Yes
- ? Where are your test specs located? ./test/specs/**/*.js
- ? Which reporter do you want to use?  spec - https://github.com/webdriverio/wdio-spec-reporter
- ? Shall I install the reporter library for you? Yes
- ? Do you want to add a service to your test setup?  selenium-standalone - https://github.com/webdriverio/wdio-
selenium-standalone-service
- ? Shall I install the services for you? Yes
- ? Level of logging verbosity error
- ? In which directory should screenshots gets saved if a command fails? ./errorShots/
- ? What is the base url? http://localhost

7. Create folder for config and move wdio.conf.js file inside
8. Create screenshots folder
9. npm install wdio-screenshots-cleanup-service
10. Create browsers.js file in config to configure browsers