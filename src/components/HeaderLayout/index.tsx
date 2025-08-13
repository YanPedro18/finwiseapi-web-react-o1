import { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';

interface HeaderLayoutProps {
  onMenuClick: () => void;
}

const HeaderLayout: React.FC<HeaderLayoutProps> = ({ onMenuClick }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const dropdown = useRef<HTMLDivElement>(null);
  const languageTrigger = useRef<HTMLButtonElement>(null);
  const languageDropdown = useRef<HTMLDivElement>(null);
  const [selectedLanguage, setSelectedLanguage] = useState('PT-BR');

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target as Node) ||
        trigger.current?.contains(target as Node)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [dropdownOpen]);

  // close language dropdown on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!languageDropdown.current) return;
      if (
        !languageDropdownOpen ||
        languageDropdown.current.contains(target as Node) ||
        languageTrigger.current?.contains(target as Node)
      )
        return;
      setLanguageDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [languageDropdownOpen]);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen && !languageDropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
      setLanguageDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [dropdownOpen, languageDropdownOpen]);

  const languages = [
    { code: 'PT-BR', name: 'Português', flag: '🇧🇷' },
    { code: 'EN', name: 'English', flag: '🇺🇸' },
    { code: 'ES', name: 'Español', flag: '🇪🇸' }
  ];

  const handleLanguageChange = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    setLanguageDropdownOpen(false);
  };

  return (
    <header style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      backgroundColor: '#f5f6ff',
      boxShadow: '0 1px 2px rgba(0,0,0,0.1)', 
      padding: '12px 16px', 
      borderBottom: '1px solid #e0e0e0',
      flexShrink: 0
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <h1 style={{ fontSize: '18px', fontWeight: '500', margin: 0, color: '#333' }}>FinWise</h1>
        {/* Botão do menu só aparece no mobile */}
        <Button
          icon="pi pi-bars"
          className="p-button-text md:hidden"
          onClick={onMenuClick}
          style={{ color: '#333' }}
        />
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {/* Dropdown de idioma */}
        <div style={{ position: 'relative' }}>
          <button
            ref={languageTrigger}
            onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 12px',
              backgroundColor: 'transparent',
              border: '1px solid rgba(0,0,0,0.1)',
              borderRadius: '6px',
              color: '#333',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            <span style={{ fontSize: '16px' }}>
              {languages.find(lang => lang.code === selectedLanguage)?.flag || '🌐'}
            </span>
            <span>Idioma</span>
            <i 
              className={`pi ${languageDropdownOpen ? 'pi-chevron-up' : 'pi-chevron-down'}`} 
              style={{ fontSize: '12px', transition: 'transform 0.2s' }}
            ></i>
          </button>
          
          <div
            ref={languageDropdown}
            onFocus={() => setLanguageDropdownOpen(true)}
            onBlur={() => setLanguageDropdownOpen(false)}
            style={{
              position: 'absolute',
              right: 0,
              top: '100%',
              width: '200px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              border: '1px solid #e0e0e0',
              zIndex: 1000,
              display: languageDropdownOpen ? 'block' : 'none',
              marginTop: '4px'
            }}
          >
            {/* Opções de idioma */}
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                style={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: selectedLanguage === language.code ? '#5DBD4C' : '#333',
                  backgroundColor: selectedLanguage === language.code ? '#f0f9f0' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => {
                  if (selectedLanguage !== language.code) {
                    e.currentTarget.style.backgroundColor = '#f5f5f5';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedLanguage !== language.code) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '18px' }}>{language.flag}</span>
                  <span>{language.name}</span>
                </div>
                {selectedLanguage === language.code && (
                  <i className="pi pi-check" style={{ color: '#5DBD4C', fontSize: '14px' }}></i>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Dropdown de configurações */}
        <div style={{ position: 'relative' }}>
          <button
            ref={trigger}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 12px',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '6px',
              color: '#333',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            <i className="pi pi-user" style={{ fontSize: '16px' }}></i>
            <span>Configurações</span>
            <i 
              className={`pi ${dropdownOpen ? 'pi-chevron-up' : 'pi-chevron-down'}`} 
              style={{ fontSize: '12px', transition: 'transform 0.2s' }}
            ></i>
          </button>
          
          <div
            ref={dropdown}
            onFocus={() => setDropdownOpen(true)}
            onBlur={() => setDropdownOpen(false)}
            style={{
              position: 'absolute',
              right: 0,
              top: '100%',
              width: '240px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              border: '1px solid #e0e0e0',
              zIndex: 1000,
              display: dropdownOpen ? 'block' : 'none',
              marginTop: '4px'
            }}
          >
            {/* Informações do usuário */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              padding: '16px',
              borderBottom: '1px solid #f0f0f0'
            }}>
              <div style={{ position: 'relative' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#5DBD4C',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}>
                  U
                </div>
                <div style={{
                  position: 'absolute',
                  right: '-2px',
                  top: '-2px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#4caf50',
                  border: '2px solid white'
                }}></div>
              </div>
              <div>
                <p style={{ 
                  fontSize: '14px', 
                  fontWeight: '600', 
                  margin: '0 0 2px 0',
                  color: '#333'
                }}>
                  Usuário
                </p>
                <p style={{ 
                  fontSize: '12px', 
                  margin: 0,
                  color: '#666'
                }}>
                  usuario@email.com
                </p>
              </div>
            </div>

            {/* Seção de Perfil */}
            <div style={{ borderBottom: '1px solid #f0f0f0' }}>
              <a
                href="#profile"
                style={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#333',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Ver perfil
              </a>
              <a
                href="#settings"
                style={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#333',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Configurações
              </a>
              <a
                href="#shortcuts"
                style={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#333',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Atalhos do teclado
                <span style={{ fontSize: '12px', color: '#999' }}>⌘K</span>
              </a>
            </div>

            {/* Seção de Sistema */}
            <div style={{ borderBottom: '1px solid #f0f0f0' }}>
              <a
                href="#company"
                style={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#333',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Perfil da empresa
              </a>
              <a
                href="#team"
                style={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#333',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Equipe
              </a>
              <a
                href="#invite"
                style={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#333',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Convidar colegas
              </a>
            </div>

            {/* Seção de Suporte */}
            <div style={{ borderBottom: '1px solid #f0f0f0' }}>
              <a
                href="#changelog"
                style={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#333',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Changelog
              </a>
              <a
                href="#community"
                style={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#333',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Comunidade
              </a>
              <a
                href="#support"
                style={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#333',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Suporte
              </a>
              <a
                href="#api"
                style={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#333',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                API
              </a>
            </div>

            {/* Logout */}
            <div>
              <button
                onClick={() => {
                  // TODO: implementar logout
                  console.log('Logout clicked');
                }}
                style={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#d32f2f',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffebee'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderLayout; 