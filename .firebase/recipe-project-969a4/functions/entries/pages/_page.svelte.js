import { c as create_ssr_component, a as add_attribute, e as escape, b as each, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/firebase.js";
import "firebase/firestore";
const CardHome = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { uid } = $$props;
  let { menuId } = $$props;
  let { menuImg } = $$props;
  let { menuName } = $$props;
  let { userName } = $$props;
  let { tags = [] } = $$props;
  let { avgRating } = $$props;
  let { views } = $$props;
  let { about = "" } = $$props;
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
  return `<div class="card card-compact w-full h-full border-2 bg-base-100 shadow-xl overflow-auto"> ${menuImg ? `<img class="object-cover h-52 sm:h-1/2"${add_attribute("src", menuImg, 0)} loading="lazy" alt="">` : ``} <div class="card-body"><div class="flex items-center justify-between my-2"><div><a href="${"menu/" + escape(menuId, true)}" class="card-title">${escape(menuName)}</a> <a href="${"/user/" + escape(uid, true)}" class="card-normal block mb-1">By ${escape(userName)}</a> ${each(tags, (tag) => {
    return `<h3 class="badge badge-ghost mr-0.5 mt-0.5">#${escape(tag)}</h3>`;
  })}</div> <div class="text-center p-3 rounded-md ring-2 ring-inset ring-secondary-focus bg-secondary">${avgRating ? `<h3 class="text-xl">${escape(avgRating.toFixed(2))}</h3>` : `<h3 class="text-xl" data-svelte-h="svelte-cbkdda">-</h3>`} <h2 class="text-xs">views: ${escape(views)}</h2></div></div> <p class="text-xs">${escape(about.substring(0, 300))}</p></div> <div class="card-actions justify-center mx-auto mb-4"><a href="${"/menu/" + escape(menuId, true)}" class="btn btn-primary">explore</a></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { menus, lastDoc } = data;
  let searchKey;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="flex justify-center sm:mb-2 mt-3 sm:mt-2"><div class="bg-accent p-2.5 rounded-full flex justify-center sm:w-3/5"><input type="text" placeholder="Menu / User / Tag" class="input input-bordered w-44 sm:w-auto flex-grow"${add_attribute("value", searchKey, 0)}> <button class="btn btn-neutral ml-1.5" data-svelte-h="svelte-1c09yiy">Search</button></div></div> <div class="grid py-6 px-8 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">${`${each(menus, (menu) => {
    return `${validate_component(CardHome, "CardHome").$$render(
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
        about: menu.about
      },
      {},
      {}
    )}`;
  })}`}</div> ${`<button class="btn btn-accent flex mx-auto w-48 md:w-72 my-4" data-svelte-h="svelte-qeh6zd">Load More Menu</button>`}`;
});
export {
  Page as default
};
