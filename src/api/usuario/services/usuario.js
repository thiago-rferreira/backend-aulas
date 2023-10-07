'use strict';

/**
 * usuario service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::usuario.usuario');
