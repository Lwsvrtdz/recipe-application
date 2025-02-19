module.exports = {
    apps: [{
      name: 'recipe-application',
      script: '.output/server/index.mjs',  // Path to your Nuxt server file after build
      instances: 'max',  // Or a number of instances
      exec_mode: 'cluster',
      watch: false,
      env: {
        PORT: 3000,
        NODE_ENV: 'production'
      }
    }]
  }