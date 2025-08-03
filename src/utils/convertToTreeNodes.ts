// utils/convertToTreeNodes.js
interface MenuItem {
  key: string;
  label: string;
  icon?: string;
  route?: string;
  children?: MenuItem[];
}

interface TreeNode {
  key: string;
  label: string;
  icon?: string;
  data?: string;
  children?: TreeNode[];
}

export function convertMenuToTree(menuItems: MenuItem[]): TreeNode[] {
  return menuItems.map((item) => ({
    key: item.key,
    label: item.label,
    icon: item.icon,
    data: item.route,
    children: item.children ? convertMenuToTree(item.children) : undefined,
  }));
}
