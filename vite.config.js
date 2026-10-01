import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import os from 'os';

function getLocalIp() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name] || []) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return '127.0.0.1';
}

function satarupaBannerPlugin() {
  return {
    name: 'satarupa-banner-plugin',
    configureServer(server) {
      server.httpServer?.once('listening', () => {
        const localIp = getLocalIp();
        const port = server.config.server.port || 3000;
        setTimeout(() => {
          console.log('\n');
          console.log('\x1b[33m%s\x1b[0m', '  ┌─────────────────────────────────────────────────────────────┐');
          console.log('\x1b[33m%s\x1b[0m', '  │                                                             │');
          console.log('\x1b[1m\x1b[37m%s\x1b[0m', '  │                      SATARUPA DUTTA                         │');
          console.log('\x1b[36m%s\x1b[0m', '  │              BBA + B.A. LL.B. 3D PORTFOLIO                 │');
          console.log('\x1b[33m%s\x1b[0m', '  │                                                             │');
          console.log('\x1b[32m%s\x1b[0m', `  │  ➜ Opening Link:  http://localhost:${port}/                   │`);
          console.log('\x1b[32m%s\x1b[0m', `  │  ➜ Local IP:      http://${localIp}:${port}/               │`);
          console.log('\x1b[33m%s\x1b[0m', '  │                                                             │');
          console.log('\x1b[33m%s\x1b[0m', '  └─────────────────────────────────────────────────────────────┘');
          console.log('\n');
        }, 100);
      });
    }
  };
}

export default defineConfig({
  base: '/ SATARUPA-DUTTA-3D-PORTFOLIO /',
  plugins: [react(), satarupaBannerPlugin()],
  server: {
    host: true, // Exposes Network / Local IP address (e.g. 192.168.1.3)
    port: 3000,
    open: true
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          vendor: ['react', 'react-dom', 'lucide-react']
        }
      }
    }
  }
});
