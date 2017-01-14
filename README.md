# nunjucks-numeral-filter
A [Nunjucks](http://mozilla.github.io/nunjucks/) filter for [numeral.js](http://numeraljs.com/)

### Install
```shell
npm install nunjucks-numeral-filter --save
```

### Use
You must first include the filter and then add it to your nunjucks environment
```js
var numeralFilter = require('nunjucks-numeral-filter');

var env = new nunjucks.Environment();

env.addFilter('numeral', numeralFilter);
```

You can then call the filter in your nunjucks templates:

```
// parse a number string
{% set number = "$10,000.00" | numeral("value") %}

// or format a number
Salary paid out is {{ 104000 | numeral("0a") }}.
```

See all [available formats](http://numeraljs.com/#format)

### License - [WTFPL](http://www.wtfpl.net/)
```
            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2015 WebEngage <geeks {at} webengage.com>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.
```
