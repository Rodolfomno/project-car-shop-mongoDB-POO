import Joi = require('joi');

export default Joi.object({
  _id: Joi.string(),
  model: Joi.string().min(3).required(),
  year: Joi.number().integer().min(1900).max(2022)
    .required(),
  color: Joi.string().min(3).required(),
  status: Joi.boolean(),
  buyValue: Joi.number().integer().required(),
  doorsQty: Joi.number().integer().min(2).max(4)
    .required(),
  seatsQty: Joi.number().integer().min(2).max(7)
    .required(),
});
