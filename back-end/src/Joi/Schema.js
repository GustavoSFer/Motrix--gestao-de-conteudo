const Joi = require('joi');

const schemaBlog = Joi.object({
  titulo: Joi.string().max(50).required().messages({
    'string.base': 'Titulo precosa ser string',
    'any.required': 'Titulo é um campo obrigatório',
  }),
  corpo: Joi.string().required().messages({
    'string.base': 'Corpo precosa ser string',
    'any.required': 'Corpo é um campo obrigatório',
  }),
});

const schemaUpdate = Joi.object({
  corpo: Joi.string().required().messages({
    'string.base': 'Corpo precosa ser string',
    'any.required': 'Corpo é um campo obrigatório',
  }),
  blogId: Joi.number().positive().required().messages({
    'any.required': 'BlogId é um campo obrigatório',
  }),
});

module.exports = {
  schemaBlog,
  schemaUpdate,
};
