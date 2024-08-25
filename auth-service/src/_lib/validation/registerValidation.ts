import Joi from "joi";

export const registerValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(new RegExp(/^.{8,}$/))
    .required(),
});
