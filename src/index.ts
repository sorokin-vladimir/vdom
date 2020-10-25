export * from './types';
export * from './vdom';

/* import { createVNode, createDOMNode, mount } from './vdom';

const vNode = createVNode('div', { class: 'container' }, [
  createVNode('h1', {}, ['Hello, Virtual DOM']),
  'Text without tags',
  createVNode('img', { src: 'https://i.ibb.co/M6LdN5m/2.png', width: 200 }),
]);

const domNode = createDOMNode(vNode);

mount(domNode, document.getElementById('root') as HTMLElement);

console.log(`index:11 | vNode`, vNode);
console.log(`index:13 | domNode`, domNode); */
