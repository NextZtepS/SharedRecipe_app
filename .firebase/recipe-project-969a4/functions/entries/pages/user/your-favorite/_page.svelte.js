import { c as create_ssr_component, v as validate_component, b as each } from "../../../../chunks/ssr.js";
import { C as CardUser } from "../../../../chunks/CardUser.js";
import { A as AuthCheck } from "../../../../chunks/AuthCheck.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { menus } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(AuthCheck, "AuthCheck").$$render($$result, {}, {}, {
    default: () => {
      return `${menus.length === 0 ? `<h1 class="text-center text-xl m-6" data-svelte-h="svelte-6ivdm3">You don&#39;t have any favorite menu yet!</h1>` : `<div class="grid py-6 px-8 gap-6 sm:grid-cols-1 xl:grid-cols-2">${each(menus, (menu) => {
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
      })}</div>`}`;
    }
  })}`;
});
export {
  Page as default
};
