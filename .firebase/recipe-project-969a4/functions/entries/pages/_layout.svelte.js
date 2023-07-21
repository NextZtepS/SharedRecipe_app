import { v as validate_store, s as subscribe } from "../../chunks/utils.js";
import { c as create_ssr_component, e as escape, a as add_attribute } from "../../chunks/ssr.js";
import { d as db, u as user } from "../../chunks/firebase.js";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import "firebase/auth";
const app = "";
async function writeUser(user2) {
  const docPath = doc(db, `users/${user2.uid}`);
  const docData = {
    uid: user2.uid,
    name: user2.displayName ?? "annonymous",
    email: user2.email,
    photoURL: user2.photoURL,
    lastestSignIn: serverTimestamp()
  };
  try {
    await setDoc(docPath, docData, { merge: true });
    console.log("Successfully writing user to the database!");
  } catch (err) {
    console.error("Error writing to the database:", err);
  }
}
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  {
    if ($user) {
      writeUser($user);
    }
  }
  $$unsubscribe_user();
  return `<div class="navbar bg-primary p-8"><div class="navbar-start"><a href="/" class="btn btn-ghost normal-case text-2xl lg:text-3xl" data-svelte-h="svelte-hy37u">Recipe</a></div> <div class="navbar-end">${$user ? `<h1 class="text-right text-base lg:text-lg my-auto mr-2 md:mr-3 lg:mr-4">${escape($user?.displayName)}</h1>` : ``} <div class="dropdown dropdown-end">  <label tabindex="0" class="btn btn-ghost btn-circle avatar top-1">${$user ? `<img class="rounded-full"${add_attribute("src", $user.photoURL, 0)}${add_attribute("alt", $user.displayName?.substring(0, 1), 0)}>` : `<img class="rounded-full opacity-80" src="/icons/user.png" alt="Profile">`}</label>  <ul tabindex="0" class="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-auto">${$user ? `<li><a href="${"/user/" + escape($user.uid, true)}" class="text-base">Your menu</a></li> <li><a href="/user/your-favorite" class="text-base" data-svelte-h="svelte-ef7hum">Your favorite</a></li> <li><button class="text-base" data-svelte-h="svelte-u8jr27">Sign out</button></li>` : `<li><button class="text-base" data-svelte-h="svelte-1akmxch">Sign in</button></li>`}</ul></div></div></div> <div class="p-2 sm:px-4 sm:py-6 lg:px-6 lg:py-8">${slots.default ? slots.default({}) : ``}</div> <footer class="footer footer-center p-8 bg-secondary text-primary-content"><div><p class="font-bold">created by NextZtepS <br>Developer, Harvey Mudd College &#39;26</p></div> <div><div class="grid grid-flow-col gap-4"><a href="mailto:natdanaiongarjvaja@gmail.com"><img alt="email" src="/icons/email.png" width="32"></a> <a href="https://github.com/NextZtepS"><img alt="github" src="/icons/github.png" width="32"></a> <a href="https://github.com/NextZtepS"><img alt="github" src="/icons/user.png" width="32"></a></div></div></footer>`;
});
export {
  Layout as default
};
