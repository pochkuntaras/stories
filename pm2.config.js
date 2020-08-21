const cwd = {
  production: '/home/deploy/stories/current',
  staging: '/home/staging/stories/current'
};

module.exports = {
  'apps': [
    {
      'name': 'stories',
      'script': './initializers/server/index.js',
      'cwd': cwd[process.env.NODE_ENV],
      'env': {
        'NODE_ENV': 'development'
      },
      'env_production': {
        'NODE_ENV': 'production',
        'PORT': 3005
      },
      'env_staging': {
        'NODE_ENV': 'staging',
        'PORT': 3008
      }
    }
  ],
  'deploy': {
    'production': {
      'key': '~/.ssh/id_rsa.pub',
      'user': 'deploy',
      'port': '22',
      'host': 'stories.pochkun.net',
      'ref': 'origin/master',
      'repo': 'git@github.com:pochkuntaras/stories.git',
      'path': '/home/deploy/stories',
      'ssh_options': 'StrictHostKeyChecking=no',
      'post-deploy': 'ln -snf ~/shared/.env ~/stories/current/.env && npm install && npm run build:production && pm2 startOrRestart pm2.config.js --env production'
    },
    // 'staging': {
    //   'key': '~/.ssh/id_rsa.pub',
    //   'user': 'staging',
    //   'port': '22',
    //   'host': 'stories.pochkun.net',
    //   'ref': 'origin/dev',
    //   'repo': 'git@github.com:pochkuntaras/stories.git',
    //   'path': '/home/staging/stories',
    //   'ssh_options': 'StrictHostKeyChecking=no',
    //   'post-deploy': 'ln -snf ~/shared/.env ~/stories/source/.env && npm install && npm run build:staging && pm2 startOrRestart pm2.config.js --env staging'
    // }
  }
}
