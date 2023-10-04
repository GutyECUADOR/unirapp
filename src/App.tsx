
import { AuthProvider } from './Auth/context/AuthProvider';
import { MainRouter } from './router/MainRouter';

function App() {
  return (
    <AuthProvider>
      <MainRouter></MainRouter>
    </AuthProvider>
  );
}

export default App;
