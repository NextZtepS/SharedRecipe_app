import { v as validate_store, s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape, b as each } from "../../../../chunks/ssr.js";
import { A as AuthCheck } from "../../../../chunks/AuthCheck.js";
import { u as user } from "../../../../chunks/firebase.js";
import "firebase/firestore";
import "firebase/storage";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => value);
  let numProcedure = 1;
  let numIngredient = 1;
  let menuName;
  let tagString;
  let ingredients = {};
  let precedures = {};
  $$unsubscribe_user();
  return `${validate_component(AuthCheck, "AuthCheck").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="p-6 md:px-8"><form class="card card-compact w-full h-full p-6 sm:p-10 border-2 bg-base-100 shadow-xl"><div class="form-control w-full max-w-xs mx-auto my-4"> <label class="label" data-svelte-h="svelte-1hnh5m2">Upload the photo of the menu</label> <img class="p-3"${add_attribute("src", "", 0)} alt="" width="256"> <input type="file" class="file-input file-input-bordered w-full max-w-xs" accept="image/png, image/jpeg"></div> <div class="form-control w-full max-w-sm mb-4"> <label class="label" data-svelte-h="svelte-1p1dqi1">Menu name</label> <div class="indicator"><span class="indicator-item badge badge-warning text-xs" data-svelte-h="svelte-yfich9">Required</span> <input type="text" placeholder="Name of your menu" class="input input-bordered w-full"${add_attribute("value", menuName, 0)}></div></div> <div class="form-control w-full max-w-lg mb-4"> <label class="label" data-svelte-h="svelte-1o89tvr">Tag</label> <input type="text" placeholder="please separate each tag with a space e.g. #tag1 #tag2 #..." class="input input-bordered w-full"${add_attribute("value", tagString, 0)}></div> <div class="form-control mb-4"> <label class="label" data-svelte-h="svelte-88p5d6">About</label> <textarea class="textarea textarea-bordered h-24" placeholder="About your menu">${escape("")}</textarea></div> <div class="form-control mb-4"> <label class="label" data-svelte-h="svelte-gz0him">Ingredient</label>  <div class="px-2 mb-2"><label class="inline-flex text-sm" data-svelte-h="svelte-19nza0g">How many ingredients are there?</label> <input type="number" class="inline-flex ml-2 input input-bordered w-20 h-8" min="0"${add_attribute("value", numIngredient, 0)}></div> <div class="grid gap-1.5 px-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">${each(Array(numIngredient), (_, index) => {
        return ` <input type="text" placeholder="what & how much?" class="input input-bordered w-full" min="0"${add_attribute("value", ingredients[index + 1], 0)}>`;
      })}</div></div> <div class="form-control mb-4"> <label class="label" data-svelte-h="svelte-69iasy">Procedure</label>  <div class="px-2 mb-2"><label class="inline-flex text-sm" data-svelte-h="svelte-1r1685v">How many steps are there?</label> <input type="number" class="inline-flex ml-2 input input-bordered w-20 h-8"${add_attribute("value", numProcedure, 0)}></div> ${each(Array(numProcedure), (_, index) => {
        return ` <label class="inline-flex text-sm mt-3 mb-1 ml-3">${escape(index + 1)})</label> <textarea class="textarea textarea-bordered h-20 ml-4" placeholder="How to cook your menu">${escape(precedures[index + 1] || "")}</textarea>`;
      })}</div> <button class="form-control btn btn-success mx-auto mt-6" data-svelte-h="svelte-nbo87n">publish</button></form></div>`;
    }
  })}`;
});
export {
  Page as default
};
