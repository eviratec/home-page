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
 */

app.config(appEnv);

appEnv.$inject = ['$appEnvironmentProvider'];
function appEnv (  $appEnvironmentProvider) {

  $appEnvironmentProvider
  
  /**
   * Default environment vars
   */

  .setDefaults({
    appTitle: 'Eviratec Web Application',
    entityCacheUriPrefix: 'https://s3-ap-southeast-2.amazonaws.com/pub.cache.eviratec.software/entities/',
    queryCacheUriPrefix: 'https://s3-ap-southeast-2.amazonaws.com/pub.cache.eviratec.software/queries/',
    msgSendVia: 'https://s3-ap-southeast-2.amazonaws.com/au-2.cmd.eviratec.software/',
    msgRecieveVia: 'https://s3-ap-southeast-2.amazonaws.com/au-2.cmd.eviratec.software/',
    ssoHost: 'http://login.eviratec.co',
    assetUriPrefix: '/',
    msgIdPrefix: 'dev/local/default/',
    copyright: 'Copyright © 2016 Callan Peter Milne.',
    analyticsEnabled: false,
    analyticsTrackingCode: 'UA-XXXXXXXX-1',
  })
  
  /**
   * Local dev environment
   */

  .addEnvironment('localdev', ['127.0.0.1', 'localhost', '10.0.0.92', /\.local$/i], {
    appTitle: '127/ Eviratec Software :: Eviratec.local',
    contactEmail: 'info@eviratec.localhost',
    msgIdPrefix: 'dev/local/callan.milne/',
  })
  
  /**
   * Staging (preview.eviratec.com.au) environment
   */

  .addEnvironment('staging-com-au', /^(|preview\.)eviratec\.com.au$/, {
    appTitle: 'S/ Eviratec Software :: Eviratec.com.au',
    contactEmail: 'info@eviratec.com.au',
    msgIdPrefix: 'dev/staging/www.eviratec.com.au/',
  })
  
  /**
   * Production (www.eviratec.com.au) environment
   */

  .addEnvironment('production-com-au', /^(|www\.)eviratec\.com\.au$/, {
    appTitle: 'Eviratec Software :: Eviratec.com.au',
    contactEmail: 'info@eviratec.com.au',
    msgIdPrefix: 'prod/www.eviratec.com.au/',
    assetUriPrefix: 'https://s3-ap-southeast-2.amazonaws.com/landing-page.eviratec.software/www/',
    analyticsEnabled: true,
    analyticsTrackingCode: 'UA-96534995-1',
  })
  
  .defaultEnvironmentName('local');

}

