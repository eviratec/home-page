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

app.controller('ContactFormDirectiveController', ContactFormDirectiveController);

ContactFormDirectiveController.$inject = ['$scope', '$animate', '$mdDialog', 'ContactMessage', 'messageSender', '$progressRegistry', 'CONTACT_FORM_PROGRESS'];
function ContactFormDirectiveController (  $scope,   $animate,   $mdDialog,   ContactMessage,   messageSender,   $progressRegistry,   CONTACT_FORM_PROGRESS) {

  class ContactFormDirectiveController {

    constructor () {
      
      this.isLocked = false;
      this.inProgress = false;
      this.data = {};

      this.progressTracker = $progressRegistry.tracker(CONTACT_FORM_PROGRESS);
      
    }

    submit ($event) {

      let data;
      let message;

      let invalidSubmission = false === $scope.contact.$valid;
      let thisIsLocked = true === this.isLocked;

      if (thisIsLocked || invalidSubmission) {
        return this;
      }

      this.lock()
        .showProgress();

      data = Object.assign({}, this.data);
      message = newContactMessage(data);

      messageSender
        .send(message)
        .then(response => {
          showSuccessDialog($event);
        })
        .catch(error => {
          this.unlock()
            .hideProgress();
        });

    }

    lock () {
      this.isLocked = true;
      return this;
    }

    unlock () {
      this.isLocked = false;
      return this;
    }

    showProgress () {
      this.progressTracker.activate();
      return this;
    }

    hideProgress () {
      this.progressTracker.deactivate();
      return this;
    }

  }

  function showSuccessDialog (ev) {
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.body))
        .clickOutsideToClose(true)
        .title('Thanks!')
        .textContent('Your message has been delivered successfully.')
        .ariaLabel('Successful submission message')
        .ok('Great')
        .targetEvent(ev)
    );
  }

  function newContactMessage (d) {
    
    let message = new ContactMessage();
    
    d = d || {};

    configureAuthor(d, message);
    configureMessage(d, message);

    return message;

  }

  function configureAuthor (d, message) {
    
    message.author.displayName = d.contactName;

    if (d.contactEmail) {
      message.author.emailAddress = d.contactEmail;
    }

    if (d.contactPhone) {
      message.author.phoneNumber = d.contactPhone;
    }

  }

  function configureMessage (d, message) {
    message.content.body = JSON.stringify(d, undefined, '  ');
  }

  return new ContactFormDirectiveController();

}
