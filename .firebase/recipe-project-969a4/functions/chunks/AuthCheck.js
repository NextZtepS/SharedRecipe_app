import { v as validate_store, s as subscribe } from "./utils.js";
import { c as create_ssr_component } from "./ssr.js";
import { u as user } from "./firebase.js";
const AuthCheck = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `${$user ? `${slots.default ? slots.default({}) : ``}` : `<div class="alert-error text-center"><p class="text-error text-xl m-6" data-svelte-h="svelte-1ch15x6">You must be signed in to access this page!</p> <a class="btn btn-error mb-6" href="/" data-svelte-h="svelte-17eifp0">Return to Homepage</a></div>`}`;
});
export {
  AuthCheck as A
};
