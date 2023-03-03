import { boot } from 'quasar/wrappers';

import FuiDouble from 'components/fui-double.vue';

const components = [FuiDouble];

export default boot(({ app }) => components.forEach(c => app.component(c.name, c)));
