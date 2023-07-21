import { v as validate_store, s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, b as each, v as validate_component } from "../../../../chunks/ssr.js";
import { C as CardUser } from "../../../../chunks/CardUser.js";
import { u as user } from "../../../../chunks/firebase.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let { data } = $$props;
  const { uid, menus } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_user();
  return `${$user?.uid == uid ? `<a href="/menu/create" class="btn btn-accent flex mx-auto w-48 md:w-72 my-2" data-svelte-h="svelte-yz7e0q">Add New Menu</a>` : ``} <div class="grid py-6 px-8 gap-6 sm:grid-cols-1 xl:grid-cols-2">${each(menus, (menu) => {
    return `${validate_component(CardUser, "CardUser").$$render(
      $$result,
      {
        uid: menu.uid,
        menuId: menu.menuId,
        menuImg: menu.menuImg,
        menuName: menu.menuName,
        tags: menu.tags,
        avgRating: menu.avgRating,
        views: menu.views,
        about: menu.about
      },
      {},
      {}
    )}`;
  })}</div>`;
});
export {
  Page as default
};
