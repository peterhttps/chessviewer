import { ThemeProvider } from "styled-components";
import Routes from "./routes";
import './styles.css';
import theme from './themes/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
