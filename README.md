
## Built With

- [Vue 2](https://vuejs.org/)
- [Vuetify 2.6.2](https://vuetifyjs.com/)
- [Nuxt 2.15.8](https://nuxtjs.org/)

## Getting Started

### Prerequisites
- node 16.13.0
- npm 8.1.0


## Installation

```bash
# install dependencies
$ yarn install
$ npm install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Usage

http://localhost:3000/

### Development

Run lint

```sh
yarn lint
```

Run lint fix

```sh
yarn lint-fix
```

Run lint style

```sh
yarn lint:style
```

Run lint style fix

```sh
yarn lint:style-fix
```

## Environment

### Develop

`.env.development`

```
VUE_APP_API_URL = {DEV_API_URL}
```

### Production

`.env.production`

```
VUE_APP_API_URL = {PRODUCTION_API_URL}
```

## Folder Structure Conventions


### Directory layout

    .
    ├── assets                  # Compiled files 
    ├── commons                 # Common data
    │   ├── tables              # Define page table structure
    │   │   ├── user.js         # Table list user
    │   │   └── permission.js   # Table permission
    │   ├── constant.js         # Define constant: api path, ...
    │   └── menu.js             # Define navigation structure
    ├── components              # Source files 
    ├── layouts                 # Layout template. See (https://nuxtjs.org/docs/directory-structure/layouts)
    ├── mixins                  # Vue mixin global
    ├── pages                   # Aplication view. See (https://nuxtjs.org/docs/directory-structure/pages)
    ├── plugins                 # NuxtJs plugin. See (https://nuxtjs.org/docs/directory-structure/plugins/)
    ├── services                # Service call api
    │   ├── user.js
    │   ├── auth.js
    │   └── layout.js
    ├── static                  # Static content: icon, image, logo, font, ...
    ├── store                   # State management. See (https://nuxtjs.org/docs/directory-structure/store)
    │   ├── auth.js
    │   └── layout.js
    ├── utils                   # Util & helper functions
    └── README.md               # Source document
