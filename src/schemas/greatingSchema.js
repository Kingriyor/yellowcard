const Joi = require('joi');

const greetingText = Joi.string();

module.exports = {
  GreetingSchema: Joi.object({
    greetingText,
  }),
};
