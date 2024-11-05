import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#020617', // Exemplo de cor Tailwind (azul)
    },
    secondary: {
      main: '#ff6b6b', // Exemplo de cor Tailwind (vermelho)
    },
    background: {
      default: '#020617', // Cor de fundo
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Defina a fonte, se necessário
  },
});

export default theme;
