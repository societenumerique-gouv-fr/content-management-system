'use strict';

/**
 * breve service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::breve.breve');
