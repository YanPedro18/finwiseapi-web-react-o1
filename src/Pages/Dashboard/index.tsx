import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import FontDemo from '../../components/FontDemo/index.tsx';

const Dashboard: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Janeiro2024');

  // Opções de período
  const periods = [
    { label: 'Janeiro 2024', value: 'Janeiro2024' },
    { label: 'Fevereiro 2024', value: 'Fevereiro2024' },
    { label: 'Março 2024', value: 'Marco2024' },
    { label: 'Abril 2024', value: 'Abril2024' },
    { label: 'Maio 2024', value: 'Maio2024' },
    { label: 'Junho 2024', value: 'Junho2024' },
    { label: 'Julho 2024', value: 'Julho2024' },
    { label: 'Agosto 2024', value: 'Agosto2024' },
    { label: 'Setembro 2024', value: 'Setembro2024' },
    { label: 'Outubro 2024', value: 'Outubro2024' },
    { label: 'Novembro 2024', value: 'Novembro2024' },
    { label: 'Dezembro 2024', value: 'Dezembro2024' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      {/* Box principal do dashboard */}
      <div style={{
        background: 'linear-gradient(135deg, #5DBD4C 0%, #69cf57 100%)',
        borderRadius: '16px',
        padding: '32px',
        boxShadow: '0 10px 30px rgba(93,189,76,0.2)',
        marginBottom: '24px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Elemento decorativo */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
          zIndex: 1
        }} />
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          position: 'relative',
          zIndex: 2
        }}>
          {/* Lado esquerdo - Nome do sistema e data */}
          <div>
            <h1 style={{
              fontSize: '32px',
              fontWeight: '800',
              color: 'white',
              margin: '0 0 8px 0',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              letterSpacing: '1px'
            }}>
              FinWise
            </h1>
            <p style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.9)',
              margin: '0',
              fontWeight: '500'
            }}>
              Janeiro 2024
            </p>
          </div>

          {/* Lado direito - Dropdown e botão */}
          <div style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'flex-end'
          }}>
            {/* Dropdown de período */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: 'white',
                marginBottom: '8px',
                textShadow: '0 1px 2px rgba(0,0,0,0.3)'
              }}>
                PERÍODO
              </label>
              <Dropdown
                value={selectedPeriod}
                options={periods}
                onChange={(e) => setSelectedPeriod(e.value)}
                placeholder="Selecione o período"
                style={{
                  minWidth: '180px',
                  backgroundColor: 'rgba(255,255,255,0.95)',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }}
                className="p-inputtext"
              />
            </div>

            {/* Botão Nova Transaction */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '600',
                color: 'white',
                marginBottom: '8px',
                textShadow: '0 1px 2px rgba(0,0,0,0.3)'
              }}>
                NOVA TRANSACTION
              </label>
              <Button
                label="Nova Transaction"
                icon="pi pi-plus"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.95)',
                  color: '#5DBD4C',
                  border: 'none',
                  minWidth: '180px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  fontWeight: '600'
                }}
                onClick={() => {
                  // TODO: implementar funcionalidade de nova transação
                  console.log('Nova transação clicada');
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Container para todas as boxes */}
      <div style={{
        display: 'flex',
        gap: '20px'
      }}>
        {/* Boxes de Entradas e Saídas */}
        <div style={{
          display: 'flex',
          gap: '20px',
          flex: '0 0 auto' // Não cresce, não encolhe
        }}>
          {/* Box de Entradas */}
          <div style={{
            width: '300px',
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 4px 20px rgba(93,189,76,0.08)',
            border: '1px solid #f0f0f0'
          }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#5DBD4C',
              margin: '0 0 16px 0',
              textAlign: 'center'
            }}>
              Entradas
            </h2>
            <div style={{
              textAlign: 'center',
              padding: '40px 20px'
            }}>
              <p style={{
                color: '#666',
                margin: '0',
                fontSize: '16px'
              }}>
                Conteúdo das entradas será exibido aqui
              </p>
            </div>
          </div>

          {/* Box de Saídas */}
          <div style={{
            width: '300px',
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 4px 20px rgba(93,189,76,0.08)',
            border: '1px solid #f0f0f0'
          }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#5DBD4C',
              margin: '0 0 16px 0',
              textAlign: 'center'
            }}>
              Saídas
            </h2>
            <div style={{
              textAlign: 'center',
              padding: '40px 20px'
            }}>
              <p style={{
                color: '#666',
                margin: '0',
                fontSize: '16px'
              }}>
                Conteúdo das saídas será exibido aqui
              </p>
            </div>
          </div>
        </div>

        {/* Espaço reservado para futuras boxes */}
        <div style={{
          flex: 1,
          minHeight: '200px'
        }}>
          {/* Aqui você pode adicionar futuras boxes */}
        </div>
      </div>

      {/* Demonstração das Fontes InterDisplay */}
      <div style={{ marginTop: '40px' }}>
        <FontDemo />
      </div>
    </div>
  );
};

export default Dashboard;
