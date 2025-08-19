import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from 'primereact/sidebar';

import MenuTree from '../components/Menu/MenuTree';
import HeaderLayout from '../components/HeaderLayout';
import menuItems from '../components/Menu/module/menuItems.json';

const DashboardLayout: React.FC = () => {
  const [visible, setVisible] = useState(false);
  // const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  // const handleMenuClick = (item: any): void => {
  //   if (item.route) {
  //     navigate(item.route);
  //     setVisible(false); // fecha no mobile
  //   } else if (item.children) {
  //     setVisible(true);
  //   }
  // };

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
      {/* Sidebar overlay para mobile */}
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        position="left"
        className="w-64 md:hidden" // só aparece em mobile
        modal={true}
        dismissable={true}
        showCloseIcon={false}
      >
        <MenuTree collapsed={collapsed} onExpand={() => setCollapsed(false)} />
      </Sidebar>

      {/* Sidebar fixa para desktop */}
      <div
        style={{
          display: 'none',
          flexDirection: 'column',
          height: '100%',
          transition: 'all 0.3s',
          backgroundColor: '#f44336',
          borderRight: '1px solid #e0e0e0',
          width: collapsed ? '64px' : '256px'
        }}
        className="md:flex"
        onClick={() => {
          if (collapsed) {
            setCollapsed(false); // 👉 Abre
          } else {
            setCollapsed(true); // 👉 Fecha
          }
        }}
      >
        <div
          style={{ flex: 1, overflowY: 'auto' }}
          onClick={(e) => {
            if (!collapsed) {
              // 👉 Deixa o clique no Tree funcionar (navegar, expandir)
              // mas não impede o clique se for no fundo da sidebar
              const target = e.target as HTMLElement;
              const isTreeElement = target.closest('.p-tree');

              if (isTreeElement) {
                e.stopPropagation(); // só impede se for clique dentro do Tree
              }
            }
          }}
        >
          <MenuTree
            collapsed={collapsed}
            onExpand={() => setCollapsed((prev) => !prev)} // toggle
          />
        </div>
      </div>

      {/* Área de conteúdo principal */}
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, height: '100%', backgroundColor: 'white' }}>
        {/* Header no topo da área de conteúdo */}
        <HeaderLayout onMenuClick={() => setVisible(true)} />

        {/* Conteúdo principal */}
        <main style={{ flex: 1, padding: '16px', overflowY: 'auto' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
