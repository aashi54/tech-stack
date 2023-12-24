const users = [];

async function registerNewUser(req, res) {
  const { email, username } = req.body;

  if (!email || !username) {
    return res.status(400).json({ error: "username and email required" });
  }

  const newUser = { email, username };
  users.push(newUser);

  return res.status(201).json(newUser);
}

async function getAllUsers(req, res) {
    res.json(users);
}

module.exports = { registerNewUser, getAllUsers };
