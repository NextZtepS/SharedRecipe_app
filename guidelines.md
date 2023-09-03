# Guidelines for contributing to SharedRecipe

## Mischevious Action

The infrastructure of this application is tied to the account belonged to Natdanai (Next) Ongarjvaja, "NextZtepS".  
With that being said, a deleterious action caused by mistake any other means shall be prone to direct lost of benifit of the owner.  
A contributor who intentionally causes deleterious action will be hold responsible. Other minor mistakes shall be considered case by case.  

## Missions of SharedRecipe

- SharedRecipe development team promises to serve a safe and accessible web application experince to every user.
- SharedRecipe welcomes anyone who wants to share their passion in food and cooking with the other.
- SharedRecipe does not accept discriminated content of any form, including hatred, racism, etc.

## Developemnt Team

- The development team is a open-minded community which emphasizes on freedom of ideas.
- Every member of the development team promises to support one another in a positive manner.

### Fundamental steps to start contributing to SharedRecipe
- fork the SharedRecipe_app repository to submit a pull request later on [guide](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
- install node v18.17.0 and npm v9.6.7 (using nvm is recommended) [guide](https://www.youtube.com/watch?v=AEuI0PBvgfM)
- run "npm install" in the root directory of the project to download the dependencies
- install the lastest verion of Firebase command line tools [guide](https://firebase.google.com/docs/cli#mac-linux-npm)
- ensure that "usingEmulators" is set to "true" in [firebase.ts](src/lib/firebase.ts)
- run "firebase init emulators" to setup Firebase emulators for auth, functions, firestore, and storage [guide](https://www.youtube.com/watch?v=pkgvFNPdiEs&t=26s)
- run "firebase emulators:start --only firestore,storage,auth,functions" to start working locally with Firebase
- run "npm run dev" to develop the app on localhost

### Related Tool Documentations
- https://svelte.dev
- https://firebase.google.com/docs
- https://tailwindcss.com/docs/
- https://daisyui.com/docs/use/
