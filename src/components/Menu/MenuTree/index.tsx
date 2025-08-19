import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Tree } from 'primereact/tree';

import { convertMenuToTree } from '../../../utils/convertToTreeNodes';
import menuItems from '../module/menuItems.json';
import styled from './index.module.css';
import { Button } from 'primereact/button';

interface MenuTreeProps {
  collapsed?: boolean;
  onExpand?: () => void; // Callback para expandir o menu
}

const MenuTree: React.FC<MenuTreeProps> = ({ collapsed = false, onExpand }) => {
  const navigate = useNavigate();
  const nodes = convertMenuToTree(menuItems);
  const [expandedKeys, setExpandedKeys] = useState<{ [key: string]: boolean }>(
    {},
  );

  const onSelect = (e: any): void => {
    if (e.node.children && e.node.children.length > 0) {
      setExpandedKeys((prevKeys) => {
        const isExpanded = !!prevKeys[e.node.key];
        const newKeys = { ...prevKeys };

        if (isExpanded) {
          // Se já estava expandido, fecha removendo do expandedKeys
          delete newKeys[e.node.key];
        } else {
          // Se estava fechado, abre adicionando ao expandedKeys
          newKeys[e.node.key] = true;
        }

        return newKeys;
      });
    }

    const route = e.node.data;
    if (route) {
      navigate(route);
    }
  };

  return (
    <div className="relative h-full">
      {/* Botão fixo no canto superior */}
      <div className={styled.btnSideBar}>
        <Button
          icon={collapsed ? 'pi pi-bars' : 'pi pi-times'}
          className={`${collapsed ? styled.btnBars : styled.btnTimes}`}
          rounded
          text
          aria-label="Menu"
          onClick={(e) => {
            e.stopPropagation(); // não propaga para o container
            onExpand?.(); // delega para o pai (DashboardLayout)
          }}
        />
      </div>
      {/* Lista de itens do menu */}
      <div className="pt-12">
        {collapsed ? (
          <ul className="space-y-4 w-full">
            {nodes.map((item) => (
              <li className={styled.menuList} key={item.key}>
                <div
                  onClick={(e) => {
                    e.stopPropagation(); // ⚠️ bloqueia clique no container pai
                    onExpand?.(); // ⚡ expande sidebar
                  }}
                  className={styled.menuItem}
                >
                  <i className={item.icon}></i>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <Tree
            value={nodes}
            selectionMode="single"
            onSelect={onSelect}
            className="text-sm"
            expandedKeys={expandedKeys} // estado controlado
            onToggle={(e) => setExpandedKeys(e.value)}
          />
        )}
      </div>
    </div>
  );
};

export default MenuTree;
