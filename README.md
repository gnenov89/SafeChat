# Safechat

## The messaging app that keeps your messages safe from prying eyes.

## About 

SafeChat is massaging app which keeps your privacy private. All you need to do is click on the lock button right next to the SafeChat tag and you will hide your actual chat with a dummy chat box. 


# Project Link

(http://www.safechatonline.com)

# Project Structure
```
── LICENSE
├── README.md
├── config
│   ├── connection.js - // Connect to MySQL
│   ├── io.js  - // This page defines the server-side listener for socket emits
│   └── orm.js // Connect to connection.js file 
├── controllers
│   └── controller.js // Routing with Express.js + messageModel from ./models/messages.js
├── db
│   └── schema.sql //MySql initial schema 
├── models . 
│ └── message.js -// Import the ORM to create functions that will interact with the database.
├── package.json
├── public
│   ├── logo.png
│   ├── script.js
│   └── style.css
├── server.js
└── views
    ├── index.handlebars  
    └── layouts
        └── main.handlebars . 
```



## Built With
* [Node.js](https://nodejs.org/en/)
* [Handlebars.JS](https://handlebarsjs.com/)
* [Materialize](https://materializecss.com/)
* [Object Relational Mapping]()
* [Express.js](https://expressjs.com/)
* [Socket.io](https://socket.io/)
* [MySqljs](https://github.com/mysqljs/mysql)






## Authors

* **Georgi Nenov** - *Initial work* - (https://github.com/gnenov89)



## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details



