export default function get(formName, winCntx) {
  let formElem = null;

  const winContext = winCntx || window;

  if (formName instanceof HTMLFormElement) {
    formElem = formName;
  } else if (typeof formName === 'string') {
    formElem = winContext.document.forms[formName] || null;
  }
  return formElem;
}
