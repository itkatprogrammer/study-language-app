import { defineConfig } from 'vite';   
import VitePluginGhPages from 'vite-plugin-gh-pages';
   
   export default defineConfig({
       plugins: [
           new VitePluginGhPages()
       ]
   });