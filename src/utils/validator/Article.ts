import Joi from "joi";

export const ArticleValidator = Joi.object({
  userId: Joi.number().required(),
  title: Joi.string().required(),
  content: Joi.string().required(),
  imageUrl: Joi.string().required(),
  isHeadline: Joi.boolean().required(),
  createDate: Joi.date().required(),
})