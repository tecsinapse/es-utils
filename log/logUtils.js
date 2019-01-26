/* eslint no-console: 0 */
export const Logger = {
  error(error) {
    console.log(error);
    // eslint-disable-next-line
    Raven.captureException(new Error(error));
  },
};
