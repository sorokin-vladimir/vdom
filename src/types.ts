type TagName = string;
type PropValue = string | number | boolean | null | undefined;
type Props<K extends string> = Partial<{ readonly [key in K]: PropValue }>;
type Child = VNode | string;
type Children = readonly Child[];
type ResultDOMNode = HTMLElement | Text;
type VNode = {
  tagName: TagName;
  props: Props<any>;
  children: Children;
};

type CreateVNode = (
  tagName?: TagName,
  props?: Props<any>,
  children?: Children,
) => VNode;

type CreateDOMNode = (vNode: VNode | string) => ResultDOMNode;

type Mount = (
  node: ResultDOMNode,
  target: HTMLElement
) => ResultDOMNode;

type ReplaceNode = (node: ResultDOMNode, vNode: Child) => ResultDOMNode;

type PatchProps = (
  node: HTMLElement,
  props: Props<any>,
  nextProps: Props<any>,
) => void;

type PatchProp = (
  node: HTMLElement,
  key: string,
  nextProp: PropValue,
) => void;

type PatchNode = (
  node: ResultDOMNode,
  vNode: Child,
  nextVNode: Child,
) => ResultDOMNode | undefined;

type PatchChildren = (
  parent: ResultDOMNode,
  vChildren: Children,
  nextVChildren: Children,
) => void;

export {
  TagName,
  Props,
  Children,
  ResultDOMNode,
  VNode,
  CreateVNode,
  CreateDOMNode,
  Mount,
  PatchNode,
  ReplaceNode,
  PatchProps,
  PatchProp,
  PatchChildren,
};
