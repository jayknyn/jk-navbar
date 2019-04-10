


module.exports = {
    apps: [{
      name: 'server',
      script: './server/server.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-52-14-74-144.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/FEC_Navbar.pem',
        ref: 'origin/master',
        repo: 'https://github.com/axe-center/AAnderson_Navbar_carousel_service.git',
        path: '/home/ubuntu/AAnderson_Navbar_Service',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }