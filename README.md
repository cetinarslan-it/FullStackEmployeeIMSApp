# Employee IMS App
This project was built to sharpen our pair programming skills and gain more competence on using ASP.NET WebAPI, React and JWT authentication.

## Table of Contents
* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Prerequisites](#prerequisites)
* [Usage](#usage)

## About the Project
Employee IMS app is a fullstack application built by Cetin and Yusuf.

The intended purpose was to create a portal that allows key users in companies to find employee specific information after authenticating themselves:
- Authentication feature to list and manipulate employee data
- Employee add, list, edit, delete features
- Admin portal and role definitions (work-in-progress)

## Built With

### Back End
![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white)
![.Net](https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)

### Front End
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

### Authentication
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

### Auxiliary
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

## Prerequisites
To get started you will need to have installed
 - .NET 6 or higher
 - Yarn 1.22.19 or higher, or corresponding NPM

## Usage
Start by running the back end. Open a terminal and start the API by running

```
dotnet run
```

Open the running localhost port in your browser by using this url `https://localhost:7053/swagger`, you should now be able to interact with API using the Swagger interface.

Now move on to running the front end.

Open a new terminal and navigate to the `ClientApp` folder, start the website with the command

```
npm install
```
Let the dependencies be installed, then run
```
npm start
```
And open the running localhost port as displayed in the terminal.

Enjoy!
