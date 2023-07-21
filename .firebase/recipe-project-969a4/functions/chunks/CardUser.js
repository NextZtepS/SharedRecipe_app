import { v as validate_store, s as subscribe } from "./utils.js";
import { c as create_ssr_component, a as add_attribute, e as escape, b as each } from "./ssr.js";
import { u as user } from "./firebase.js";
import "firebase/firestore";
const CardUser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let { uid } = $$props;
  let { menuId } = $$props;
  let { menuImg } = $$props;
  let { menuName } = $$props;
  const userName = "";
  let { tags } = $$props;
  let { avgRating } = $$props;
  let { views } = $$props;
  let { about } = $$props;
  const ingredients = {};
  const procedures = {};
  const favoritedBy = [];
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
  $$unsubscribe_user();
  return `<div class="card card-compact w-full h-full p-3 border-2 bg-base-100 shadow-xl"><div class="sm:flex items-center text-sm">${menuImg ? ` <img class="object-cover w-52 p-2 mx-2"${add_attribute("src", menuImg, 0)} loading="lazy" alt="">` : ``} <div class="flex flex-auto items-center"><div class="mx-2"><h2 class="card-title">${escape(menuName)}</h2> ${each(tags, (tag) => {
    return `<h3 class="badge badge-ghost mr-0.5 mt-0.5">#${escape(tag)}</h3>`;
  })} <p class="text-xs mt-2">${escape(about.substring(0, 300) ?? "")}</p></div> <div class="flex flex-col space-y-5 p-2 ml-auto my-2 text-center"><div class="text-center w-max p-3 mx-auto rounded-md ring-2 ring-inset ring-secondary-focus bg-secondary">${avgRating ? `<h3 class="text-xl">${escape(avgRating.toFixed(2))}</h3>` : `<h3 class="text-xl" data-svelte-h="svelte-cbkdda">-</h3>`} <h2 class="text-xs">views: ${escape(views)}</h2></div> ${$user?.uid == uid ? `<a href="${"/menu/edit/" + escape(menuId, true)}" class="btn btn-primary">edit</a>` : `<a href="${"/menu/" + escape(menuId, true)}" class="btn btn-primary">explore</a>`}</div></div></div></div>`;
});
export {
  CardUser as C
};
