import { useNavigate } from 'react-router-dom';

import { Tree } from 'primereact/tree';

import { convertMenuToTree } from '../../../utils/convertToTreeNodes';
import menuItems from '../module/menuItems.json';

interface MenuTreeProps {
  collapsed?: boolean;
  onExpand?: () => void; // Callback para expandir o menu
}

const MenuTree: React.FC<MenuTreeProps> = ({ collapsed = false, onExpand }) => {
  const navigate = useNavigate();
  const nodes = convertMenuToTree(menuItems);

  const onSelect = (e: any): void => {
    const route = e.node.data;
    if (route) navigate(route);
  };

  return (
    <div className="p-2">
      {collapsed ? (
        <ul className="space-y-4">
          {nodes.map((item) => (
            <li key={item.key}>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // ⚠️ bloqueia clique no container pai
                  onExpand?.(); // ⚡ expande sidebar
                }}
                className="text-xl"
              >
                <i className={item.icon}></i>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <Tree
          value={nodes}
          selectionMode="single"
          onSelect={onSelect}
          className="text-sm"
        />
      )}
    </div>
  );
};

export default MenuTree;
