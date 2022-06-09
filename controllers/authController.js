const register = async (req, res) => {
  res.send("Register User");
};

const login = async (req, res) => {
  res.send("login User");
};

const updateUser = async (req, res) => {
  res.send("updateUser User");
};

export { register, login, updateUser };
