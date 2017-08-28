module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [{
    'name': 'BerkeleyClock',
    'script': '/home/chris/projects/BerkeleyClock/app',
    'watch': ['views', 'app'],
    'ignore_watch': ['node_modules', 'logs'],
    'watch_options': {
      'cwd': '/home/chris/projects/BerkeleyClock'
    },
    'args': [
      '--color'
    ],
    'env': {
      COMMON_VARIABLE: true,
      NODE_ENV: 'production',
      DEBUG_COLORS: true
    }
  }, {
    'name': 'MagicGifs',
    'script': '/home/chris/projects/MagicGifs/magicgif.py',
    'watch': ['magicgif.py'],
    'ignore_watch': ['node_modules', 'logs'],
    'watch_options': {
      'cwd': '/home/chris/projects/MagicGifs'
    },
    'args': [
      '--color'
    ],
    'env': {
      COMMON_VARIABLE: true,
      NODE_ENV: 'production',
      DEBUG_COLORS: true
    }
  }, {
    'name': 'Website',
    'script': '/home/chris/projects/PersonalWebsite/server',
    'watch': ['server', 'public/build'],
    'ignore_watch': ['node_modules', 'logs'],
    'watch_options': {
      'cwd': '/home/chris/projects/PersonalWebsite'
    },
    'args': [
      '--color'
    ],
    'env': {
      COMMON_VARIABLE: true,
      NODE_ENV: 'production',
      DEBUG_COLORS: true,
      BUILD_MODE: 'prebuilt',
      SECRET_TOKEN: '677788637cb4ff9e52445ccd0859671b5cc78c53'
    }
  }, {
    'name': 'News',
    'script': '/home/chris/projects/Positive-News/app',
    'watch': ['views', 'app'],
    'ignore_watch': ['node_modules', 'logs'],
    'watch_options': {
      'cwd': '/home/chris/projects/Positive-News'
    },
    'args': [
      '--color'
    ],
    'env': {
      COMMON_VARIABLE: true,
      NODE_ENV: 'production',
      DEBUG_COLORS: true
    }
  }, {
    'name': 'Spotify',
    'script': '/home/chris/projects/spotifyPlaylists/server',
    'watch': ['views', 'server', 'public/builds'],
    'ignore_watch': ['node_modules', 'logs'],
    'watch_options': {
      'cwd': '/home/chris/projects/spotifyPlaylists'
    },
    'args': [
      '--color'
    ],
    'env': {
      COMMON_VARIABLE: true,
      NODE_ENV: 'production',
      DEBUG_COLORS: true
    }
  }]
};