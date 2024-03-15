import Joi from "joi";

export const PartaiValidator = Joi.object({
  namePartai: Joi.string().required(),
  paslonId: Joi.number().required(),
  ketumPartai: Joi.string().required(),
  visiMisi: Joi.string().required(),
  address: Joi.string().required(),
  logoPartai: Joi.string().required(),
});
