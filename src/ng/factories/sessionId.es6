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

app.factory('$session', sessionFactory);

sessionFactory.$inject = ['$cookies', 'uuid'];
function sessionFactory (  $cookies,   uuid) {

  const SESSION_COOKIE = 'EV_SESSION';

  class Session {

    get SESSION_COOKIE () {
      return SESSION_COOKIE;
    }

    constructor (sessionId) {

      setSessionId(this, sessionId);

    }

    reset () {
      removeSessionCookie();
      setSessionId(this, newSessionIdCookieValue());
    }

  }

  return new Session(sessionId());

  function sessionId () {

    if (hasSessionCookie()) {
      return existingSessionIdCookieValue();
    }

    return newSessionIdCookieValue();

  }

  function hasSessionCookie () {
    return !!$cookies.get(SESSION_COOKIE);
  }

  function newSessionIdCookieValue () {
    return uuid.v4() + '.' + uuid.v4().substr(0,7);
  }

  function existingSessionIdCookieValue () {
    return $cookies.get(SESSION_COOKIE);
  }

  function removeSessionCookie () {
    return $cookies.remove(SESSION_COOKIE);
  }

  function setSessionId (session, newValue) {
  
    let sessionId = newValue;
    
    $cookies.put(SESSION_COOKIE, sessionId);
    session.id = sessionId;
    
  }

}
