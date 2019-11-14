const router = require("express").Router();

const Users = require("./users-model");

router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: err.message
      });
    });
});

router.post("/", (req, res) => {
  Users.insert(req.body)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: err.message });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Users.remove(id)
    .then(() => {
      res.status(200).json({ message: "Deleted" });
    })
    .catch(err => {
      res.status(500).json({ errorMessage: err.message });
    });
});

module.exports = router;
