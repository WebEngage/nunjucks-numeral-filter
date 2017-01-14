/**
 * nunjucks-numeral-filter
 * https://github.com/WebEngage/nunjucks-numeral-filter
 *
 */

'use strict';

var numeral  = require('numeral'),
    nunjucks = require('nunjucks');

// a numeral filter for Nunjucks
// usage: {{ a_number | numeral(format) }}
// see: <http://numeraljs.com/>
function numeralFilter (number, format) {
    var n = numeral(number);

    if (format === 'value') {
        return n.value();
    }

    return n.format(format);
}

// set default format for date
numeralFilter.setDefaultFormat = function (format) {
    numeral.defaultFormat(format);
};

module.exports = numeralFilter;
