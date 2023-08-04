
import { UserProvider } from './context/UserProvider';
import { AppRouter } from './router/AppRouter';

function App() {
  return (
    <UserProvider>
      <AppRouter></AppRouter>
    </UserProvider>
  );
}

export default App;
