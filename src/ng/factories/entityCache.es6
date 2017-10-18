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

app.factory('EntityCache', EntityCacheFactory);

EntityCacheFactory.$inject = ['EventEmitter', 'CachedEntity', '$appEnvironment'];
function EntityCacheFactory (  EventEmitter,   CachedEntity,   $appEnvironment) {

  const ENTITY_CACHE_URI_PREFIX = $appEnvironment.config.entityCacheUriPrefix;

  class EntityCache extends EventEmitter {

    constructor () {

      super();

      this.entities = {};

    }

    entity (uri) {
      this.ensureEntity(uri);
      return this.entities[uri];
    }

    ensureEntity (uri) {

      if (uri in this.entities) {
        return;
      }

      return this.initEntity(uri);

    }

    initEntity (uri) {

      let entity = new CachedEntity(prefixEntityUri(uri));

      this.entities[uri] = entity;

      return this;

    }

  }

  return EntityCache;

  function prefixEntityUri (uri) {
    return `${ENTITY_CACHE_URI_PREFIX}${uri}`;
  }

}
