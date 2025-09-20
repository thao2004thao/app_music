const path = require('path');
const WebpackBar = require('webpackbar');

const mainDir = (...args) => path.join(__dirname, 'src', 'main', ...args);
const rendererDir = (...args) =>
  path.join(__dirname, 'src', 'renderer', ...args);

module.exports = {
  devServer: {
    progress: false
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@vue': rendererDir('components'),
        '@img': rendererDir('assets', 'images'),
        '@icon': rendererDir('assets', 'icons'),
        '@scss': rendererDir('assets', 'styles'),
        '@fonts': rendererDir('assets', 'fonts')
      }
    },
    plugins: [
      new WebpackBar({
        name: 'Building FLB Music Player',
        color: '#0389ff'
      })
    ],
    output: {
      hashFunction: 'sha256'
    }
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      mainProcessFile: 'src/background.ts',
      rendererProcessFile: 'src/main.ts',
      builderOptions: {
        productName: 'Music Player',
        appId: 'com.ltam.music.player',
        productName: 'Music Player',
        copyright: 'MIT',
        publish: [
          {
            provider: 'github',
            owner: 'Music-Player',
            repo: 'Music-Player'
          }
        ],
        snap: {
          title: 'Music Player',
          summary: 'Music Player',
          grade: 'stable'
        }
      },
      chainWebpackMainProcess: (config) => {
        config.output.hashFunction('sha256');
      }
    }
  }
};
