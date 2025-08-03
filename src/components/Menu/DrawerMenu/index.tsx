// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// import { Button } from 'primereact/button';
// import { Sidebar } from 'primereact/sidebar';

// import MenuTree from '../MenuTree';
// import menuItems from '../module/menuItems.json';

// const DrawerMenu: React.FC = () => {
//   const [visible, setVisible] = useState(false);
//   const navigate = useNavigate();

//   const handleIconClick = (item: any): void => {
//     if (item.route) {
//       navigate(item.route);
//     } else if (item.children) {
//       setVisible(true);
//     }
//   };

//   return (
//     <>
//       {/* 🔒 Menu lateral fixo minimizado */}
//       <div className="fixed top-0 left-0 h-screen w-[4rem] bg-surface-100 shadow-md z-40 flex flex-col items-center py-4 gap-3 border-r border-gray-200">
//         {menuItems.map((item: any) => (
//           <Button
//             key={item.key}
//             icon={item.icon}
//             className="p-button-text p-button-rounded hover:bg-surface-200 w-10 h-10"
//             tooltip={item.label}
//             tooltipOptions={{ position: 'right' }}
//             onClick={() => handleIconClick(item)}
//           />
//         ))}
//       </div>

//       {/* 📂 Sidebar Tree ao lado do dock */}
//       <Sidebar
//         visible={visible}
//         onHide={() => setVisible(false)}
//         position="left"
//         style={{ left: '4rem' }}
//         className="w-[16rem] z-50"
//       >
//         <MenuTree />
//       </Sidebar>
//     </>
//   );
// };

// export default DrawerMenu;
