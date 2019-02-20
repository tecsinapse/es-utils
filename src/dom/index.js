/* eslint-disable */

"use strict";

const getForm = require('get');

// eslint-ignore-next-line
function focusByForm(formName, errors) {
  const form = getForm(formName);
  const elmts = (form || {}).elements || [];
  for (let i = 0, iLen = elmts.length; i < iLen; ++i) {
    const elmt = elmts[i];
    // If invalid, then...
    if (errors[elmt.name]) {
      elmt.focus();
      return elmt;
    }
  }
  return null;
}


/**
 * Focuses the first invalid input control found in the form.  What is considered
 * first is based on the order of the input controls found in the DOM.  That is,
 * the input control's `tabindex` or it's visual appearance is not taken into
 * account.
 *
 * @param {string} formName - The name of the form which may have invalid input
 *   controls.
 * @param {object} errors - An object where each key is the name of an input control
 *   in the form.  If the value associated with it is truthy, then it indicates
 *   that this input control is invalid.  If the value associated with it is
 *   falsey, then the input control will not be considered a candidate to be
 *   focused.
 *
 * @returns {HTMLButtonElement|HTMLInputElement|HTMLSelectElement}
 *   The first invalid input control or `null` if not found.
 */
exports.focusFirstInvalidInputControl = function(formName, errors) {
  errors = (typeof errors !== 'undefined') ? errors : {};
  Object.keys(errors).map(name => {
    const a = (document.getElementsByName(name) || [])[0];
    if (a) {
      a.focus();
      return a;
    }
    return null;
  });
};