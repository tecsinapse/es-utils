"use strict";

exports.Logger = {
  error(error) {
    console.log(error);
    // eslint-disable-next-line
    Raven.captureException(new Error(error));
  },
};
