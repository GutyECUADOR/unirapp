
import { UserProvider } from './context/UserProvider';
import { MainRouter } from './router/MainRouter';

function App() {
  return (
    <UserProvider>
      <MainRouter></MainRouter>
    </UserProvider>
  );
}

export default App;
