module.exports = {
    apps: [{
      name: 'server',
      script: './server/server.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: '18.218.238.147',
        key: '~/.ssh/jksdc.pem',
        ref: 'origin/master',
        repo: 'https://github.com/ten-7/jk-navbar.git',
        path: '/home/ubuntu/navbar',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }