/** 
 * Copyright (c) 2017 Callan Peter Milne
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above 
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 * OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */'use strict';

const metaBanner = `
/**\n
 * <%= pkgName %>\n
 * Copyright © 2016 <% pkg.author %>\n
 * @version v<%= pkg.version %><%= buildTag %>\n
 * @link <%= pkg.homepage %>\n
 */\n
`;

module.exports = initMetaConfig;

function initMetaConfig ($config) {

  $config['meta'] = {
    banner: metaBanner,
  };

}
