/** @type {import('next').Next} */
const next = {
  reactStrictMode: true,
  compiler:{
    styledComponents:true
  }
}

module.exports = next

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
