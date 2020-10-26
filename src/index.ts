export * from './types';
export * from './vdom';

/* import { createVNode, createDOMNode, mount, patchNode } from './vdom';
import { ResultDOMNode } from './types';

const createVApp = (state: { count: number }) => {
  const { count } = state;
  return createVNode('div', { class: 'container', 'data-count': count }, [
    createVNode('h1', {}, ['Hello, Virtual DOM']),
    createVNode('div', {}, [`Count: ${count}`]),
    'Text without tags',
    createVNode('img', { src: 'https://i.ibb.co/M6LdN5m/2.png', width: 200 }),
  ]);
}

const state = { count: 0 };
const root = document.getElementById('root');

let vApp = createVApp(state);
let app = mount(createDOMNode(vApp), root as HTMLElement);

setInterval(() => {
  state.count++;
  const nextVApp = createVApp(state);
  app = patchNode(app, vApp, nextVApp) as ResultDOMNode;
  vApp = nextVApp;
}, 1000); */
