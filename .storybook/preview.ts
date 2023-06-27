import type { Preview } from "@storybook/vue3";
import { setup } from '@storybook/vue3'; //I use Vue3
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { router } from '../src/router'

setup((app) => {
  app.use(ElementPlus);
  app.use(router);
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
