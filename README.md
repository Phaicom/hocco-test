# hocco-test

[![Netlify Status](https://api.netlify.com/api/v1/badges/6d799796-1c5f-424d-b921-db25cb02ade8/deploy-status)](https://app.netlify.com/sites/objective-boyd-73dc75/deploys)

## Prerequisites

- [Nodejs](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

## Built with

- [Nuxtjs](https://nuxtjs.org/guide/)
- [Storybook](https://storybook.js.org/)
- [Vuetifyjs](https://vuetifyjs.com/en/)

## Installing

1. Nuxtjs
- install dependencies
```
$ yarn
```
- start development
```
$ yarn dev
```

2. storybook
   There is some ploblem with vuetify^2.3.5 so we need to downgrade to v2.3.4
   https://github.com/vuetifyjs/vuetify/issues/11903

```
$ yarn upgrade vuetify@2.3.4
```

- start storybook
```
$ yarn storybook
```

## Author

By [Reawpai Chunsoi](https://github.com/phaicom/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
