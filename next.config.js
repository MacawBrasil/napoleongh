const withPWA = require("next-pwa");
const isProd = process.env.NODE_ENV === "production";

module.exports = withPWA({
  pwa: {
    dest: "public",
  },
  images: {
    //domains: ["localhost"],
    domains: ["res.cloudinary.com"],
  },
});

// module.exports = {
//   images: {
//     domains: ['res.cloudinary.com'],
//   },
// }