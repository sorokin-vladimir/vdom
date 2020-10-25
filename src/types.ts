type TagName = string;
type Props<K extends string> = Partial<{ readonly [key in K]: (string | number) }>;
type Children = readonly (VNode | string)[];
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

type CreateDOMNode = (vNode: VNode | string) => HTMLElement | Text;

type Mount = (
  node: HTMLElement | Text,
  target: HTMLElement
) => HTMLElement | Text;

export {
  TagName,
  Props,
  Children,
  VNode,
  CreateVNode,
  CreateDOMNode,
  Mount,
};
