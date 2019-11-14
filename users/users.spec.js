const Users = require("./users-model");
const db = require("../data/dbConfig");

beforeEach(async () => {
  await db("users").truncate();
});
describe("users model", () => {
  describe("insert function", () => {
    test("should insert a user", async () => {
      let users;
      await Users.insert({ name: "Tolu" });
      users = await db("users");
      expect(users).toHaveLength(1);
      await Users.insert({ name: "Tody" });
      // eslint-disable-next-line require-atomic-updates
      users = await db("users");
      expect(users).toHaveLength(2);
    });
  });
  describe("remove function", () => {
    test("should remove a user", async () => {
      let users;
      await Users.insert({ name: "Segun" });
      users = await db("users");
      expect(users).toHaveLength(1);

      await Users.remove(1);
      // eslint-disable-next-line require-atomic-updates
      users = await db("users");
      expect(users).toHaveLength(0);
    });
  });
});
