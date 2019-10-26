var orm = require("../config/orm.js");
// References the orm.js file for the create, read, update, and delete functions 
// to communicate with the database 

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },

  deleteOne: function(condition, cb) {
    orm.deleteOne("burgers", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;



// $(function() {
//   $(".create-form").on("submit", function(event) {
//     event.preventDefault();

//     var newBurger = {
//       burger_name: $("#newburger")
//         .val()
//         .trim(),
//       devoured: 0
//     };

//     // Send the Create request
//     $.ajax("/api/burgers", {
//       type: "POST",
//       data: newBurger
//     }).then(function() {
//       console.log("Added new burger");
//       location.reload();
//     });
//   });

//   $(".eatburger").on("click", function(event) {
//     event.preventDefault();

//     var id = $(this).data("id");
//     var devouredState = {
//       devoured: 1
//     };

//     // Send the Update request 
//     $.ajax("/api/burgers/" + id, {
//       type: "PUT",
//       data: devouredState
//     }).then(function() {
//       console.log("Burger devoured");
//       location.reload();
//     });
//   });

//   $(".trashburger").on("click", function(event) {
//     event.preventDefault();

//     var id = $(this).data("id");

//     // Send the DELETE request.
//     $.ajax({
//       type: "DELETE",
//       url: "/api/burgers/" + id
//     }).then(location.reload());
//   });
// });