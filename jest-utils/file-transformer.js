/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// This is a custom Jest transformer turning file imports into filenames.
// http://facebook.github.io/jest/docs/tutorial-webpack.html

const { basename } = require('path');

module.exports = {
  process(src, filename) {
    return `module.exports = ${JSON.stringify(basename(filename))};`;
  },
};
