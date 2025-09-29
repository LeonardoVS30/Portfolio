import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      // Solo mantén el alias esencial para src
      '@': path.resolve(__dirname, './src'),
      
      // ELIMINA TODOS los aliases con versiones específicas
      // Vite y npm ya manejan estas dependencias automáticamente
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
    // Añade esta configuración para mejor manejo de dependencias
    rollupOptions: {
      external: [],
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});