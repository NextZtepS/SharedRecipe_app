# SharedRecipe [link](https://shared-recipe.web.app)

SharedRecipe is an online web application in which cooking enthusiasts come and share their beloved recipes.  
  
The key features on this application include:
- building personal profile that can be visited by other users
- creating & editing blog-post-like recipes that can be shared with other users
- rating the recipes that other users have shared
- searching for any recipe that might suit your interest
- enjoying an immersive UI experience both on mobile and desktop

### Latest release (1.0.3)
- optimized image url and improved loading performance
- improved database security (access-control and data validation via cloud function)
- new processing state indicator for more declarative UI experience
- fly-in and fade-out transition between pages
- more instantaneous reative UI experience (remove unnecessary full-page reload on multiple site actions)

### Upcoming release (1.0.4)
- sort options (date, views, rating, ...) for menu search
- email & password sign in option
- email notification on sign in

## Technology

SharedRecipe is the web application built on the Svelte and Firebase infrastructure.  
The codebase is implemented in Svelte and Typescripts.  
Back-end infrastructure is supported by Firebase services, including: Authentication, Firestore Database, Storage, Hosting, and Functions.  
Styling in this app is implemented using Tailwind CSS with DaisyUI plugin.  