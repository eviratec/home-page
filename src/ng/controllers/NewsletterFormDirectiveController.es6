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

app.controller('NewsletterFormDirectiveController', NewsletterFormDirectiveController);

NewsletterFormDirectiveController.$inject = ['$scope', '$animate', '$timeout', '$mdDialog', 'messageSender', 'NewsletterSubscription', '$progressRegistry', 'NEWSLETTER_FORM_PROGRESS'];
function NewsletterFormDirectiveController (  $scope,   $animate,   $timeout,   $mdDialog,   messageSender,   NewsletterSubscription,   $progressRegistry,   NEWSLETTER_FORM_PROGRESS) {

  const NEW = 'NEW';
  const SUBMITTED = 'SUBMITTED';
  const SENDING = 'SENDING';
  const ERROR = 'ERROR';
  const DONE = 'DONE';

  class NewsletterFormDirectiveController {

    constructor () {
      
      this.state = NEW;
      this.data = {};

      this.progressElVisible = false;
      this.progressTracker = $progressRegistry.tracker(NEWSLETTER_FORM_PROGRESS);

      this.progressTracker.on('start', () => {
        $timeout(() => {
          this.showProgressEl();
        });
      });

      this.progressTracker.on('stop', () => {
        $timeout(() => {
          this.hideProgressEl();
        });
      });
      
    }

    get isLocked () {
      return SUBMITTED === this.state ||
        SENDING === this.state ||
        DONE === this.state;
    }

    get isSending () {
      return SENDING === this.state;
    }

    get isError () {
      return ERROR === this.state;
    }

    get isDone () {
      return DONE === this.state;
    }

    get state () {
      return this._state;
    }

    set state (newValue) {
      return this._state = newValue;
    }

    submit ($event) {

      let data;
      let message;

      let invalidSubmission = false === $scope.optinForm.$valid;
      let thisIsLocked = true === this.isLocked;

      if (thisIsLocked || invalidSubmission) {
        return this;
      }

      this.state = SUBMITTED;

      this.showProgress();

      data = Object.assign({}, this.data);
      message = newNewsletterSubscription(data);

      this.state = SENDING;

      messageSender
        .send(message)
        .then(response => {

          $timeout(() => {
            this.state = DONE;
            this.hideProgress();
          });

          showSuccessDialog($event);

        })
        .catch(error => {
          $timeout(() => {
            this.state = ERROR;
            this.hideProgress();
          });
        });

    }

    showProgress () {
      this.progressTracker.activate();
      return this;
    }

    hideProgress () {
      this.progressTracker.deactivate();
      return this;
    }
    
    showProgressEl () {
      this.progressElVisible = true;
    }

    hideProgressEl () {
      this.progressElVisible = false;
    }

  }

  function showSuccessDialog (ev) {

    let dialog = $mdDialog.alert()
      .parent(angular.element(document.body))
      .clickOutsideToClose(true)
      .title('Thanks!')
      .textContent('Your confirmation email should arrive, shortly.')
      .ariaLabel('Successful opt-in')
      .ok('Great')
      .targetEvent(ev);

    return $mdDialog.show(dialog);

  }

  function newNewsletterSubscription (d) {
    
    let subscription = new NewsletterSubscription();
    
    d = d || {};

    configureProps(d, subscription);

    return subscription;

  }

  function contactPersonName (d) {
    return `${d.namePrefix}. ${d.familyName}, ${d.givenName}`;
  }

  function configureProps (d, subscription) {
    subscription.content = d.subscription;
  }

  return new NewsletterFormDirectiveController();

}
