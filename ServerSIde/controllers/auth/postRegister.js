const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const postRegister = async (req, res) => {
  try {
    const { username, mail, password } = req.body;
    //============================check if user exist=================
    const userExist = await User.exists({ mail: mail.toLowerCase() });
    if (userExist) {
      return res.status(409).send("E-mail Already in use");
    }
    //======================Encrypt the password===================
    const encryptedPasseword = await bcrypt.hash(password, 10);
    //==========================create User document in the Database===================
    const user = await User.create({
      username,
      password: encryptedPasseword,
      mail: mail.toLowerCase(),
    });
    // ===================Create JWt token=============
    const token = jwt.sign(
      {
        userId:user._id,
        mail
      },
      process.env.TOKEN_KEY,
      {
        expiresIn:'24h'
      }
    )
    
    res.status(200).json({
      userDetails: {
        mail: user.mail,
        token: token,
        username: user.username,
      },
    });
  } catch (err) {
    return res.status(500).send("Error occured ,Please try again Later");
  }
};

module.exports = postRegister;
