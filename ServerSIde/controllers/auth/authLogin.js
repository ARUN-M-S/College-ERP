const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postLogin = async (req, res) => {
  try {
    const { mail, password } = req.body;
    const user = await User.findOne({ mail: mail.toLowerCase() });

    if (user && (await bcrypt.compare(password, user.password))) {
      //Send a new Token
      const token="JWT TOKEN";
      return res.status(200).json({
        userDetails:{
          mail:user.mail,
          username:user.username,
          token:token
        }
      })
    } else if (!user) {
      return res.status(400).send("Invalid Mail. Please Enter correct mail");
    }
    return res.status(400).send("Invalid Credentials Please Try again");
  } catch (error) {
    return res.status(500).send("Error Occured.Please Try again");
  }
};

module.exports = postLogin;
