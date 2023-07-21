import { v as validate_store, s as subscribe } from "../../../../../chunks/utils.js";
import { c as create_ssr_component, a as add_attribute, e as escape, b as each } from "../../../../../chunks/ssr.js";
import { u as user } from "../../../../../chunks/firebase.js";
import "firebase/firestore";
import "firebase/storage";
function reverseTagString(tags) {
  if (tags) {
    if (tags.length >= 1) {
      return "#" + tags.join(" #");
    } else {
      return "";
    }
  } else
    return "";
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let { data } = $$props;
  const { menu } = data;
  let previewURL = menu?.menuImg;
  let menuName = menu?.menuName;
  menu?.menuId;
  let tagString = reverseTagString(menu?.tags);
  let about = menu?.about;
  let ingredients = menu?.ingredients ?? {};
  let numIngredient = Object.keys(ingredients).slice(-1)[0];
  if (numIngredient)
    numIngredient = +numIngredient;
  else
    numIngredient = 1;
  let procedures = menu?.procedures ?? {};
  let numProcedure = Object.keys(procedures).slice(-1)[0];
  if (numProcedure)
    numProcedure = +numProcedure;
  else
    numProcedure = 1;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_user();
  return `${menu?.uid === $user?.uid ? `<div class="p-6 md:px-8"><form class="card card-compact w-full h-full p-6 sm:p-10 border-2 bg-base-100 shadow-xl"><div class="form-control w-full max-w-xs mx-auto my-4"> <label class="label" data-svelte-h="svelte-1hnh5m2">Upload the photo of the menu</label> <img class="p-3"${add_attribute("src", previewURL ?? "", 0)} alt="" width="256"> <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept="image/png, image/jpeg"></div> <div class="form-control w-full max-w-sm mb-4"> <label class="label" data-svelte-h="svelte-1p1dqi1">Menu name</label> <div class="indicator"><span class="indicator-item badge badge-warning text-xs" data-svelte-h="svelte-yfich9">Required</span> <input type="text" placeholder="Name of your menu" class="input input-bordered w-full"${add_attribute("value", menuName, 0)}></div></div> <div class="form-control w-full max-w-lg mb-4"> <label class="label" data-svelte-h="svelte-1o89tvr">Tag</label> <input type="text" placeholder="please separate each tag with a space e.g. #tag1 #tag2 #..." class="input input-bordered w-full"${add_attribute("value", tagString, 0)}></div> <div class="form-control mb-4"> <label class="label" data-svelte-h="svelte-88p5d6">About</label> <textarea class="textarea textarea-bordered h-24" placeholder="About your menu">${escape(about || "")}</textarea></div> <div class="form-control mb-4"> <label class="label" data-svelte-h="svelte-1coz2re">Ingrediant</label>  <div class="px-2 mb-2"><label class="inline-flex text-sm" data-svelte-h="svelte-19nza0g">How many ingredients are there?</label> <input type="number" class="inline-flex ml-2 input input-bordered w-20 h-8" min="0"${add_attribute("value", numIngredient, 0)}></div> <div class="grid gap-1.5 px-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">${each(Array(numIngredient), (_, index) => {
    return ` <input type="text" placeholder="what & how much?" class="input input-bordered w-full" min="0"${add_attribute("value", ingredients[index + 1], 0)}>`;
  })}</div></div> <div class="form-control mb-4"> <label class="label" data-svelte-h="svelte-69iasy">Procedure</label>  <div class="px-2 mb-2"><label class="inline-flex text-sm" data-svelte-h="svelte-1r1685v">How many steps are there?</label> <input type="number" class="inline-flex ml-2 input input-bordered w-20 h-8"${add_attribute("value", numProcedure, 0)}></div> ${each(Array(numProcedure), (_, index) => {
    return ` <label class="inline-flex text-sm mt-3 mb-1 ml-3">${escape(index + 1)})</label> <textarea class="textarea textarea-bordered h-20 ml-4" placeholder="How to cook your menu">${escape(procedures[index + 1] || "")}</textarea>`;
  })}</div> <button class="form-control btn btn-success mx-auto mt-6" data-svelte-h="svelte-p5ajy0">save</button> <button class="form-control btn btn-error mx-auto mt-6" data-svelte-h="svelte-1i2tzii">delete</button></form></div>` : `<div class="alert-error text-center"><p class="text-error text-xl m-6" data-svelte-h="svelte-1gn7qtv">You have no permission to edit this menu!</p> <a class="btn btn-error mb-6" href="/" data-svelte-h="svelte-17eifp0">Return to Homepage</a></div>`}`;
});
export {
  Page as default
};
