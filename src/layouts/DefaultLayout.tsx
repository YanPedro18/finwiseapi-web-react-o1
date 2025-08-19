import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';

import MenuTree from '../components/Menu/MenuTree';

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
    <div className="flex min-h-screen w-full ">
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
        className={`hidden md:flex flex-col h-screen transition-all duration-300 bg-red border-r ${
          collapsed ? 'w-16' : 'w-64'
        }`}
        onClick={() => {
          if (collapsed) {
            setCollapsed(false); // 👉 Abre
          } else {
            setCollapsed(true); // 👉 Fecha
          }
        }}
      >
        <div
          className="flex-1 overflow-y-auto w-full"
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
      {/* Conteúdo principal com margin no desktop para abrir espaço para sidebar fixa */}
      <div className="w-full">
        <header className="flex justify-content-center  bg-red shadow px-2 py-3 border-b">
          <h1 className="text-lg font-medium">Meu Sistema</h1>
          {/* Botão do menu só aparece no mobile */}
          <Button
            icon="pi pi-bars"
            className="p-button-text md:hidden"
            onClick={() => setVisible(true)}
          />
        </header>

        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
