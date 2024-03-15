import Joi from "joi";

export const VoteValidator = Joi.object({
  paslonId: Joi.number().required(),
  userId: Joi.number().required(),
});