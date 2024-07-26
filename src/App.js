import './App.css';
import { ChatProvider } from './components/Chat';
import ChatbotPage from './Pages';
function App() {
  return (
    <div className="App">
      <ChatProvider>
        <ChatbotPage/>
      </ChatProvider>
    </div>
  );
}

export default App;