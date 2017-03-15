# notes:
in the coming weeks vuetify should probably switch to babel. if they do not, I may make a fork of the project that uses babel instead of buble. That will allow me to use the _rest_ operator instead of object.assign, and to use _async/await_ instead of converting everything to _promises_. Currently there is a display bug in that after updating or adding a record, it does not appear in the list you are redirected to. reloading that page or navigating to it will show the change. the problem is I need to async/await from one module to another. I'm too lazy to do that promise structure tonight, so it will have to wait.

# person-vue

> front end for demo

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
