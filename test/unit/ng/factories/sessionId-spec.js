'use strict';

describe('A $session', function () {

  var $session;

  beforeEach(function () {

    module('EviratecWebApp');

    inject(['$session', function (_$session_) {

      $session = _$session_;

    }]);

  });

  describe('$session.id', function () {

    it('should begin with a v4 uuid', function () {
      console.log($session.id);
      expect(/^.{36}/.test($session.id)).toBe(true);
    });

  });

});
