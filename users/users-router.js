const router = require("express").Router()


const users = require("./users-model");

router.get("/", (req, res) => {
  users
    .find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({
        message: "Something went wrong trying to get users: " + err.message
      });
    });
});

router.post("/", (req, res) => {
  users
    .insert(req.body)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Something went wrong adding user: " + err.message });
    });
});

router.delete("/:id", (req, res) => {
  users
    .remove(req.params.id)
    .then(() => {
      res.status(200).json({ message: "User deleted", id: req.params.id });
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Could not delete user: " + err.message });
    });
});

module.exports = router;