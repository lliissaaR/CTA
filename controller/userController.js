import User from '../models/user';

const UserController = {
  createUser: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = new User({ name, email, password });
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json

    }}}