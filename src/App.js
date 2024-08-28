import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './Components/ChatFeed'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <ChatEngine 
      height = "100vh"
      projectID = "c853ceff-c775-49cb-88a7-f79fac02f1c9"
      userName = "Raghul"
      userSecret = "qwerty"
      renderChatFeed = { (chatAppProps) => <ChatFeed {...chatAppProps}/>}
      onNewMessage = { () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    </div>
  );
}

export default App;
