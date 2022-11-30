# React-native app

It is individual project as assessment of INFT2508 autumn 2022.
The goal of this project is to create simple app for Android using React-native framework.
The project is mobile grocery app where user can search products and get information on the products on mobile.


## Table of Contents


- [Technologies](#technologies)
- [Run the project](#runtheproject)
- [Screenshot](#screenshot)
- [Features](#features)
- [Reference](#reference)

## Technologies


![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Android Studio](https://img.shields.io/badge/Android%20Studio-3DDC84.svg?style=for-the-badge&logo=android-studio&logoColor=white)

## Run the project


To run the app it is required to install

1. React-native. For more information on the installation of React-native, please go to the official website (https://reactnative.dev/docs/environment-setup)
2. Android-studio : the app will be run on Emulators in android-studio
3. Json-server : json-server library is used to get mock REST API server
4. Ngrok : it helps to run Android emulator on a local machin with Https address
5. Axios : Axios library is used for client server

**If all above installed,**

clone the repository of project in terminal,

```bash
git clone https://github.com/sunny-potato/first_react_native_project.git
```

run React-native app in terminal,

```bash
npm start
```

start emulator of Andorid-studio in new terminal,

```bash
npm run android
```

run json-server in new terminal

```bash
npm run mockapi
```

run ngrok in new terminal,

```bash
ngrok http 3000
```

and add url from ngrok as baseURL to api.js

(an alternative to ngrok)
1. Commando "ipconfig" in terminal and then copy "IPv4 Address"
2. Add "--host IPv4 Address" to package.json file
   ex) mockapi: "json-server --host 192.168.50.208 -w src/data/data.json"
3. Add "http://IPv4address:localhostnumber" as base url to api.js file.
   ex) http://100.158.30.208:3000

## Screenshot
![](first_react_native.gif)


## Features

- Display products by tags
- Search products by keyword in search bar
- Filter products by category/country of origin/tags
- Save favorites as a list
- Offer two languages (English, Norwegian)
- Change background theme (Dark mode, Light mode)

## Reference
Product descriptions in the app come from https://www.bama.no/ or https://meny.no/
