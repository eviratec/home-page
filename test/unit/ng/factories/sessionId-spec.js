'use strict';

describe('A $session', function () {

  var $cookies;
  var $session;
  var lastCookieValue;
  var lastSessionId;

  beforeEach(function () {

    module('EviratecWebApp');

    inject(['$session', function (_$session_) {

      $session = _$session_;

    }]);

    inject(['$cookies', function (_$cookies_) {

      $cookies = _$cookies_;

    }]);

  });

  describe('$session.SESSION_COOKIE', function () {

    it('should be defined', function () {
      expect($session.SESSION_COOKIE).toBeDefined();
    });

  });

  describe('$session.id', function () {

    it('should begin with a v4 uuid', function () {
      expect(/^.{36}/.test($session.id)).toBe(true);
    });

  });

  describe('$session.reset()', function () {

    it('should re-set the session id', function () {

      lastSessionId = $session.id;

      $session.reset();

      expect($session.id).not.toBe(lastSessionId);

    });

    it('should re-set the session cookie', function () {

      lastCookieValue = cookieValue();

      $session.reset();

      expect(cookieValue()).not.toBe(lastCookieValue);

      function cookieValue () {
        return $cookies.get($session.SESSION_COOKIE);
      }

    });

  });

});
