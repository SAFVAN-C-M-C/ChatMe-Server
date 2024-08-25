import Joi from "joi";

export const registerDetailsValidation = Joi.object({
  name: Joi.string().required(),
  location: Joi.string().required(),
  phone: Joi.string().required(),
  accountType: Joi.string().required(),
});
