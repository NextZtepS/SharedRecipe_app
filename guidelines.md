# Guidelines for contributing to SharedRecipe

## Missions of SharedRecipe
- SharedRecipe development team promises to serve a safe and accessible web application experience to every user.
- SharedRecipe welcomes anyone who wants to share their passion in food and cooking with the others.
- SharedRecipe does not accept discriminated content of any form, for example: hatred, racism, etc.

## Development Team
- The development team is an open-minded community which emphasizes on freedom of ideas and collaboration.
- Every member of the development team is responsible to support one another in a positive manner.

### Fundamental steps to start contributing to SharedRecipe
- fork the _feature_ branch of SharedRecipe_app repository [guide](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
- install _node v18.17.0_ and _npm v9.6.7_ (using _nvm_ is recommended) [guide](https://www.youtube.com/watch?v=AEuI0PBvgfM)
- run `npm install` in the root directory of the project to download the project dependencies
- install the latest version of the Firebase command line tools [guide](https://firebase.google.com/docs/cli#mac-linux-npm)
- ensure that `usingEmulators` is set to `true` by default in [lib/firebase.ts](src/lib/firebase.ts)
- run `firebase init emulators` to setup Firebase emulators for auth, functions, firestore, and storage [guide](https://www.youtube.com/watch?v=pkgvFNPdiEs&t=26s)
- run `firebase emulators:start --only firestore,storage,auth,functions` to start developing locally with Firebase
- run `npm run dev` to serve the application on your localhost
- once the contribution is completed, submit a pull request to the SharedRecipe_app repository

### Related Tool Documentations
- https://svelte.dev
- https://firebase.google.com/docs
- https://tailwindcss.com/docs/
- https://daisyui.com/docs/use/

## Mischievous Action
The infrastructure of this application is tied to the account belonged to Natdanai (Next) Ongarjvaja, "NextZtepS."  
With that being said, any deleterious action caused by mistake or any other means shall be prone to a direct lost of benefit of the owner.  
Anyone who intentionally causes deleterious action will be held responsible. Other minor mistakes with no negative intention shall be considered case by case.  