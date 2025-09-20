// Clear NODE_OPTIONS and spawn a new process with the legacy provider
const { spawn } = require('child_process');

// Clear any existing NODE_OPTIONS
delete process.env.NODE_OPTIONS;

// Spawn a new node process with the legacy provider flag
const child = spawn('node', [
  '--openssl-legacy-provider',
  'node_modules/@vue/cli-service/bin/vue-cli-service.js',
  'electron:serve'
], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NODE_OPTIONS: '' // Explicitly clear NODE_OPTIONS
  }
});

child.on('close', (code) => {
  process.exit(code);
});