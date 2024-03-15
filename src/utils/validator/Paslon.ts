import Joi from "joi";

export const PaslonValidator = Joi.object({
  namePaslon: Joi.string().required(),
  numberPaslon: Joi.number().required(),
  imagePaslon: Joi.string().required(),
  visiMisi: Joi.string().required(),
  koalisi: Joi.string().required(),
})