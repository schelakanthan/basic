const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcryptjs");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const complexityOptions = {
  min: 8,             // minimum length
  max: 30,            // maximum length
  lowerCase: 1,       // require at least 1 lowercase letter
  upperCase: 1,       // require at least 1 uppercase letter
  numeric: 1,         // require at least 1 digit
  symbol: 1,          // require at least 1 special character
  requirementCount: 4 // total requirements must be met
};

const passwordComplexitySchema = passwordComplexity(complexityOptions);

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    const user = await User.findOne({ userName: req.body.userName });
    if (!user) {
      return res.status(401).send({ message: "Invalid userName or Password" });
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(401).send({ message: "Invalid userName or Password" });
    }

    const token = user.generateAuthToken();
    res.status(200).send({ data: token, message: "logged in successfully" });
  } catch (error) {
    console.error("Login Route Error:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

const validate = (data) => {
  const schema = Joi.object({
    userName: Joi.string().required().label("user Name"),
    password: passwordComplexitySchema.required().label("Password"),
  });
  return schema.validate(data);
};

module.exports = router;
