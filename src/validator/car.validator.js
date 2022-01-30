import Joi from 'joi';

export const CarValidator =Joi.object({
    model:Joi.string().regex(new RegExp('^[[A-zа-яА-ЯіІЇїЙй]{1,20}$')).required().messages({
        'string.pattern.base':'"Model" can`t be only  from 1 to 20 letters',
        'string.empty':'String can`t be empty'
    }),
    price:Joi.number().min(1).max(1000000).required().messages({
        'number.base':'Price can be from 1 to 1000000',
        'number.max':'Max price can be 1000000',
        'number.min':'Min price can be 1',
    }),
    year:Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
        'number.base':"Year can by only from 1900 to current year"
    })
})
