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

app.factory('MessageTransporter', MessageTransporterFactory);

MessageTransporterFactory.$inject = ['EventEmitter', '$http', '$logger'];
function MessageTransporterFactory (  EventEmitter,   $http,   $logger) {

  const DEFAULT_READ_VIA = 'http://localhost/';
  const DEFAULT_WRITE_VIA = 'http://localhost/';
  const DEFAULT_MSG_ID_PREFIX = '';

  class MessageTransporter extends EventEmitter {

    constructor (config) {

      super();

      configure(this, config);

    }

    get writeViaUrl () {
      return [this.writeVia, this.msgIdPrefix].join('');
    }

    send (message) {
      $logger.log('sending', message);
      $logger.log('sending', JSON.stringify(message));
      return httpPut(message, this.writeMsgUrl(message));
    }

    writeMsgUrl (message) {
      return [this.writeViaUrl, message.id, '/msg.json'].join('');
    }

  }

  function httpPut (message, url) {
    
    return new Promise((resolve, reject) => {

      let attrs = {
        method: 'PUT',
        url: url,
        headers: {
          'x-amz-acl': 'bucket-owner-full-control',
          'Content-Type': 'application/json',

        },
        data: JSON.stringify(message),
      };

      $http(attrs).then(resolve, reject);

    });

  }

  function configure (messageTransporter, config) {

    let attrs = {};

    config = config || {};

    attrs.readVia = config.readVia || DEFAULT_READ_VIA;
    attrs.writeVia = config.writeVia || DEFAULT_WRITE_VIA;
    attrs.msgIdPrefix = config.msgIdPrefix || DEFAULT_MSG_ID_PREFIX;

    Object.keys(attrs).forEach(key => {
      messageTransporter[key] = attrs[key];
    });

  }

  return MessageTransporter;

}
