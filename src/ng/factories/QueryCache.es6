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

app.factory('QueryCache', QueryCacheFactory);

QueryCacheFactory.$inject = ['EventEmitter', 'CachedQuery', '$appEnvironment'];
function QueryCacheFactory (  EventEmitter,   CachedQuery,   $appEnvironment) {

  const QUERY_CACHE_URI_PREFIX = $appEnvironment.config.queryCacheUriPrefix;

  class QueryCache extends EventEmitter {

    constructor () {

      super();

      this.queries = {};

    }

    entity (uri) {
      this.ensureQuery(uri);
      return this.queries[uri];
    }

    ensureQuery (uri) {

      if (uri in this.queries) {
        return;
      }

      return this.initQuery(uri);

    }

    initQuery (uri) {

      let entity = new CachedQuery(prefixQueryUri(uri));

      this.queries[uri] = entity;

      return this;

    }

  }

  return QueryCache;

  function prefixQueryUri (uri) {
    return `${QUERY_CACHE_URI_PREFIX}${uri}`;
  }

}
