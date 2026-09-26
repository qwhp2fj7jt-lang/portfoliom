export const SEARCH_FOCUS_EVENT = "site:focus-search";

let pending = false;

export function requestSearchFocus() {
  pending = true;
  window.dispatchEvent(new Event(SEARCH_FOCUS_EVENT));
}

export function consumeSearchFocus() {
  const had = pending;
  pending = false;
  return had;
}
