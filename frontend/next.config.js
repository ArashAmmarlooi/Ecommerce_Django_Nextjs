const path = require('path')
const withImages = require('next-images');
module.exports = withImages();

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        // prependData: `@import "global.module.scss";`
    },
    images: {
        domains: ["127.0.0.1"],
        // formats: ["image/webp"],

        // path: "/_next/image",
        loader: "default",
        // disableStaticImages: false,
    },
    env: {
        API_URL: 'http://127.0.0.1:8000/api'
    }
}