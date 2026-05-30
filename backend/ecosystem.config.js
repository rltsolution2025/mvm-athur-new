module.exports = {

  apps: [

    {

      name: 'mvm-school-api',

      script: './server.js',

      instances: 2,

      exec_mode: 'cluster',

      watch: false,

      env: {

        NODE_ENV: 'production'

      }

    }

  ]

}