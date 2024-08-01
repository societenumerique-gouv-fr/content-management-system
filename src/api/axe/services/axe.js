'use strict';

/**
 * axe service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::axe.axe');
