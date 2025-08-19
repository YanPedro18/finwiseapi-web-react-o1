# Fontes InterDisplay

Este diretório contém as fontes InterDisplay em formato WOFF2 para uso na aplicação.

## Fontes Disponíveis

- **InterDisplay-Regular.woff2** - Peso 400 (Regular)
- **InterDisplay-Medium.woff2** - Peso 500 (Medium)
- **InterDisplay-Bold.woff2** - Peso 700 (Bold)
- **InterDisplay-Italic.woff2** - Peso 400 (Italic)

## Como Usar

### 1. Classes CSS Utilitárias

```css
.font-regular {
  font-weight: 400;
}
.font-medium {
  font-weight: 500;
}
.font-bold {
  font-weight: 700;
}
.font-italic {
  font-style: italic;
}
```

### 2. Uso Direto no CSS

```css
.titulo {
  font-family: 'InterDisplay', sans-serif;
  font-weight: 700; /* Bold */
}

.subtitulo {
  font-family: 'InterDisplay', sans-serif;
  font-weight: 500; /* Medium */
}

.texto {
  font-family: 'InterDisplay', sans-serif;
  font-weight: 400; /* Regular */
}

.destaque {
  font-family: 'InterDisplay', sans-serif;
  font-style: italic;
}
```

### 3. No React/TypeScript

```tsx
import React from 'react';

const MeuComponente: React.FC = () => {
  return (
    <div>
      <h1 style={{ fontFamily: 'InterDisplay', fontWeight: 700 }}>
        Título em Bold
      </h1>
      <p style={{ fontFamily: 'InterDisplay', fontWeight: 400 }}>
        Texto em Regular
      </p>
    </div>
  );
};
```

## Configuração

As fontes são automaticamente carregadas através do arquivo `src/assets/css/global.css` e aplicadas globalmente na aplicação.

## Fallbacks

A fonte InterDisplay é usada com fallbacks para garantir compatibilidade:

- InterDisplay
- -apple-system
- BlinkMacSystemFont
- Segoe UI
- Roboto
- Oxygen
- Ubuntu
- Cantarell
- sans-serif
