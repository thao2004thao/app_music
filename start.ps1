$env:NODE_OPTIONS = ""
$process = Start-Process -FilePath "node" -ArgumentList "--openssl-legacy-provider", "node_modules/@vue/cli-service/bin/vue-cli-service.js", "electron:serve" -NoNewWindow -PassThru -Wait
$process.WaitForExit()