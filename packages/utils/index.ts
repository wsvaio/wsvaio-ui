import type { App, Component, Plugin } from "vue";

export function withInstall<T extends Component>(comp: T) {
  (comp as T & Plugin).install = (app: App) => {
    app.component(comp.name!, comp);
  };
  return comp as T & Plugin;
}

// const keys = new Set();
// export function generateKey() {

// }
