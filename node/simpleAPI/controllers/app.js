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



async function editUser(req, res) {
  const { userId } = req.params;
  const { email, username } = req.body;

  if (!email && !username) {
    return res.status(400).json({ error: "Atleast one field required" });
  }

  const userToUpadte = users.find((user) => user.id === userId);

  if (!userToUpadte) {
    return res.status(400).json({ error: "user not found" });
  }

  if (email) {
    userToUpadte.email = email;
  }

  if (username) {
    userToUpadte.username = username;
  }

  return res.json(userToUpadte);
}

module.exports = { registerNewUser, getAllUsers, editUser };
