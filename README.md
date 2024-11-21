# Our Game Bytes Website

welcome to game bytes! an application that provides real-life recipes inspired by video game eats. users can explore recipes of food found in games and submit their own.

## Current Key Features for MVP Deadline (11/14)

- User account database established/Proper working user authentication system: Logging in/out and saving users that have already made an account before.
- Database for recipes: Creates the DB, can add/delete/access the recipes
- Searching: Find recipes based off of name of the dish
- Home Page: Central hub of the website
- Recipe Page: See the details of a recipe that is clicked on
- User Page: See a user profile, not yet connected to auth database
- Rating / 'like' system: A user can like a recipe
- Domain/Server Connection: Live website for people to start looking at
- Mascot: You can find him as a png on the repo

## Navigating and starting project

To start using the website, please click on the link right under the About section on this page.

You should be routed to our website starting with the sign in page. If not, we apologize for this inconvenience. This has something to do with the cookies that the TAs were also not able to give a clear answer to. To get to the sign in page please add to the search call of the website '/signin' at the end to go to the page. 

Once at the sign in page, if you don't have an account please sign up. To confirm you have an account, please enter the inspect portion of your browser and check the console for it to say that you have successfully created an account.

Look up how to get to the inspect portion of the browser if you don't know how.

# Extra Astro Starter Kit Resources for the Dev Team

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
