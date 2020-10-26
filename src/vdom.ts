import {
  CreateVNode,
  CreateDOMNode,
  VNode,
  Mount,
  PatchNode,
  ResultDOMNode,
  ReplaceNode,
  PatchProps,
  PatchProp,
  PatchChildren,
} from './types';

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

  patchProps(node, {}, props);

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
  // The way doesn't work
  // because at first time root node replace (remove from DOM) to node
  // target.replaceWith(node);
  target.innerHTML = '';
  target.appendChild(node);
  return node;
};






/**
 * Replace `Node` to `vNode` in DOM
 * @param node Node to replacing
 * @param vNode Virtual node what need replace
 */
const replaceNode: ReplaceNode = (node, vNode) => {
  const nextDOMNode = createDOMNode(vNode);
  node.replaceWith(nextDOMNode);
  return nextDOMNode;
};

/**
 * Update prop on DOM node
 * @param node Node for updating
 * @param key Name of attribute
 * @param nextValue New value of attribute
 */
const patchProp: PatchProp = (node, key, nextValue) => {
  if (nextValue === null || nextValue === false) {
    node.removeAttribute(key);
    return;
  }

  node.setAttribute(key, nextValue as string);
};

/**
 * Update props on DOM node
 * @param node Node for updating
 * @param props Current attributes
 * @param nextProps Next attributes
 */
const patchProps: PatchProps = (node, props, nextProps) => {
  const mergedProps = { ...props, ...nextProps };

  Object.keys(mergedProps).forEach((key) => {
    if (props[key] !== nextProps[key]) {
      patchProp(node, key, nextProps[key]);
    }
  });
};

/**
 * Update childrent on DOM node
 * @param parent Parent node
 * @param vChildren Current children list
 * @param nextVChildren Next children list
 */
const patchChildren: PatchChildren = (parent, vChildren, nextVChildren) => {
  parent.childNodes.forEach((childNode, i) => {
    patchNode(childNode as ResultDOMNode, vChildren[i], nextVChildren[i]);
  });

  nextVChildren.slice(vChildren.length).forEach(vChild => {
    parent.appendChild(createDOMNode(vChild));
  });
};

/**
 * Update node in DOM
 * @param node Node for update
 * @param vNode Current virtual node
 * @param nextVNode Next virtual node
 */
const patchNode: PatchNode = (node, vNode, nextVNode) => {
  if (nextVNode === undefined) {
    node.remove();
    return;
  }

  if (typeof vNode === 'string' || typeof nextVNode === 'string') {
    if (vNode === nextVNode) return node;

    return replaceNode(node, nextVNode);
  }

  if (vNode.tagName !== nextVNode.tagName) return replaceNode(node, nextVNode);

  patchProps(node as HTMLElement, vNode.props, nextVNode.props);

  patchChildren(node, vNode.children, nextVNode.children);

  return node;
};

export {
  createVNode,
  createDOMNode,
  mount,
  patchNode,
};
