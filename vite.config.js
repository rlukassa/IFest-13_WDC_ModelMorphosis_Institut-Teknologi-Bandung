import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/IFest-13_WDC_ModelMorphosis_Institut-Teknologi-Bandung/', // Sesuai nama repo
});