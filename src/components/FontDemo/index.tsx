import React from 'react';
import './index.module.css';

const FontDemo: React.FC = () => {
  return (
    <div className="font-demo">
      <h1 className="font-bold">Título em Bold (700)</h1>
      <h2 className="font-medium">Subtítulo em Medium (500)</h2>
      <p className="font-regular">Texto em Regular (400) - Esta é a fonte padrão do sistema.</p>
      <p className="font-italic">Texto em Italic (400) - Para destacar informações importantes.</p>
      
      <div className="font-examples">
        <h3 className="font-bold">Exemplos de Uso:</h3>
        <ul>
          <li className="font-medium">• Títulos de seção: font-medium (500)</li>
          <li className="font-regular">• Corpo do texto: font-regular (400)</li>
          <li className="font-bold">• Destaques importantes: font-bold (700)</li>
          <li className="font-italic">• Citações e notas: font-italic</li>
        </ul>
      </div>
    </div>
  );
};

export default FontDemo;
