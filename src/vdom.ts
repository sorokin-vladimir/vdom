import { CreateVNode, CreateDOMNode, VNode, Mount } from './types';

/**
 * Creacte virtual node
 * @param tagName Tag name of virtual node
 * @param props Attributes of node
 * @param children Children of node
 */
const createVNode: CreateVNode = (
  tagName = 'div', props = {}, children = []
) => ({
  tagName,
  props,
  children,
});

/**
 * Create DOM node from virtual node
 * @param vNode Virtual node
 */
const createDOMNode: CreateDOMNode = vNode => {
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode);
  }

  const { tagName, props, children } = vNode;

  const node = document.createElement(tagName);

  Object.entries(props).forEach(([key, value]) => {
    node.setAttribute(key, value as string);
  });

  children.forEach((child) => {
    node.appendChild(createDOMNode(child as VNode));
  });

  return node;
};

/**
 * Mount node into DOM
 * @param node Node for mount
 * @param target Root place of DOM to mount node
 */
const mount: Mount = (node, target) => {
  target.replaceWith(node);
  return node;
};

export {
  createVNode,
  createDOMNode,
  mount,
};
