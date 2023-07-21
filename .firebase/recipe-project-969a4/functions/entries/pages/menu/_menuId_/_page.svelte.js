import { v as validate_store, s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, a as add_attribute, e as escape, b as each, v as validate_component } from "../../../../chunks/ssr.js";
import { u as user } from "../../../../chunks/firebase.js";
import "firebase/firestore";
const CardMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let { uid } = $$props;
  let { menuId } = $$props;
  let { menuImg } = $$props;
  let { menuName } = $$props;
  let { userName } = $$props;
  let { tags = [] } = $$props;
  let { avgRating } = $$props;
  let { views } = $$props;
  let { about = "" } = $$props;
  let { ingredients = {} } = $$props;
  let { procedures = {} } = $$props;
  let { favoritedBy = [] } = $$props;
  let { givenRating } = $$props;
  if ($$props.uid === void 0 && $$bindings.uid && uid !== void 0)
    $$bindings.uid(uid);
  if ($$props.menuId === void 0 && $$bindings.menuId && menuId !== void 0)
    $$bindings.menuId(menuId);
  if ($$props.menuImg === void 0 && $$bindings.menuImg && menuImg !== void 0)
    $$bindings.menuImg(menuImg);
  if ($$props.menuName === void 0 && $$bindings.menuName && menuName !== void 0)
    $$bindings.menuName(menuName);
  if ($$props.userName === void 0 && $$bindings.userName && userName !== void 0)
    $$bindings.userName(userName);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  if ($$props.avgRating === void 0 && $$bindings.avgRating && avgRating !== void 0)
    $$bindings.avgRating(avgRating);
  if ($$props.views === void 0 && $$bindings.views && views !== void 0)
    $$bindings.views(views);
  if ($$props.about === void 0 && $$bindings.about && about !== void 0)
    $$bindings.about(about);
  if ($$props.ingredients === void 0 && $$bindings.ingredients && ingredients !== void 0)
    $$bindings.ingredients(ingredients);
  if ($$props.procedures === void 0 && $$bindings.procedures && procedures !== void 0)
    $$bindings.procedures(procedures);
  if ($$props.favoritedBy === void 0 && $$bindings.favoritedBy && favoritedBy !== void 0)
    $$bindings.favoritedBy(favoritedBy);
  if ($$props.givenRating === void 0 && $$bindings.givenRating && givenRating !== void 0)
    $$bindings.givenRating(givenRating);
  $$unsubscribe_user();
  return `<div class="card card-compact w-full h-full p-4 sm:p-10 border-2 bg-base-100 shadow-xl"><div class="flex items-center"> ${menuImg ? `<img class="object-cover w-44 sm:w-56 lg:w-64 pr-2 mr-2"${add_attribute("src", menuImg, 0)} loading="lazy" alt="">` : ``} <div class="mr-auto ml-2"><a href="${"/menu/" + escape(menuId, true)}" class="card-title">${escape(menuName)}</a> <a href="${"/user/" + escape(uid, true)}" class="card-normal block mb-1">By ${escape(userName)}</a> ${each(tags, (tag) => {
    return `<h3 class="badge badge-ghost mr-0.5 mt-0.5">#${escape(tag)}</h3>`;
  })}</div> <div class="flex flex-col space-y-5 mx-2 text-center items-center w-fit"><div class="text-center w-max p-3 rounded-md ring-2 ring-inset ring-secondary-focus bg-secondary">${avgRating ? `<h3 class="text-xl">${escape(avgRating.toFixed(2))}</h3>` : `<h3 class="text-xl" data-svelte-h="svelte-cbkdda">-</h3>`} <h3 class="text-xs">views: ${escape(views)}</h3></div> ${$user ? `${favoritedBy.includes($user.uid) ? `<button class="btn btn-primary w-full" data-svelte-h="svelte-1u1b7r8">remove from ♡</button>` : `<button class="btn btn-primary w-full" data-svelte-h="svelte-jt3qce">add to ♡</button>`}` : ``}</div></div> <div class="card-body"><h2 class="card-title mt-2" data-svelte-h="svelte-b3wnhb">About</h2> <p class="card-normal">${escape(about.substring(0, 300))}</p> <h2 class="card-title mt-2" data-svelte-h="svelte-1rt7qnz">Ingredient</h2> <div class="grid gap-1.5 px-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">${each(Object.entries(ingredients), ([key, ingredient]) => {
    return `<li>${escape(ingredient)}</li>`;
  })}</div> <h2 class="card-title mt-4" data-svelte-h="svelte-1u2jujx">Procedure</h2> <ul>${each(Object.entries(procedures), ([key, procedure]) => {
    return `<li class="mb-3">${escape(key)}) ${escape(procedure)}</li>`;
  })}</ul></div> ${$user ? `<div class="card-actions justify-center m-auto"><input type="number" class="inline-flex ml-2 input input-bordered w-20" min="0" max="10"${add_attribute("value", givenRating, 0)}> <button class="btn btn-primary px-6" data-svelte-h="svelte-1d4chmb">rate</button></div> <h2 class="text-sm text-center p-4" data-svelte-h="svelte-fm2t7n">Please help us rate this menu from 0 to 10</h2>` : ``}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let { data } = $$props;
  const { menu } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_user();
  return `<div class="p-6 md:px-8">${menu ? `${validate_component(CardMenu, "CardMenu").$$render(
    $$result,
    {
      uid: menu.uid,
      menuId: menu.menuId,
      menuImg: menu.menuImg,
      menuName: menu.menuName,
      userName: menu.userName,
      tags: menu.tags,
      avgRating: menu.avgRating,
      views: menu.views,
      about: menu.about,
      ingredients: menu.ingredients,
      procedures: menu.procedures,
      favoritedBy: menu.favoritedBy,
      givenRating: menu.ratings[$user?.uid ?? ""]
    },
    {},
    {}
  )}` : `<div class="alert-error text-center"><p class="text-error text-xl m-6" data-svelte-h="svelte-1e47dl8">Cannot find the menu!</p> <a class="btn btn-error mb-6" href="/" data-svelte-h="svelte-17eifp0">Return to Homepage</a></div>`}</div>`;
});
export {
  Page as default
};
