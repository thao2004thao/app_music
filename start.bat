@echo off
setlocal
set NODE_OPTIONS=
node --openssl-legacy-provider node_modules/@vue/cli-service/bin/vue-cli-service.js electron:serve
endlocal