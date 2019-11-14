const db = require("../data/dbConfig");

module.exports = {
  insert,
  find,
  findById,
  remove
};

function insert(user) {
  return db("users")
    .insert(user)
    .then(ids => {
      return findById(ids[0]);
    });
}

function findById(id) {
  return db("users").where({ id });
}

function remove(id) {
  return findById(id).del();
}

function find() {
  return db("users");
}
