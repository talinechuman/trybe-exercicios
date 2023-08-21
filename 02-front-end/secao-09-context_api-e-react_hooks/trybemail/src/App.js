import './App.css';
import { useState, UseEffect, useEffect } from 'react';
import messagesList from './data/messagesList';
import List from './components/List';
import Constrols from './components/Constrols';
import { READ, UNREAD } from './constants';


function App() {
  const [messages, setMessages] = useState(messagesList);
  const setMessageStatus = (messageId, newStatus) => { const updateMessages = messages.map((currentyMessage) => {
    if (currentyMessage.id === messageId) {
      return {...currentyMessage, status:newStatus}
    }
    return currentyMessage;
  });
  setMessages(updateMessages)
}

  const markAllRead = () => {
    const allRead = messages.map((message) => ({...message, status: READ  }));  
    setMessages(allRead)
  }

  const markAllUnread = () => {
    const allUnread = messages.map((message) => ({...message, status: UNREAD  }));  
    setMessages(allUnread)
  }

  useEffect (() => {
    const isAllMessagesRead = messages.every(({ status }) => status === READ);
    if (isAllMessagesRead) {
      alert("Parabéns! Você leu todas as mensagens!")
    }
  
  }, [messages])


  return (
    <div className="App">
      <header>
        <h1>TrybeMail</h1>
      </header>
      <List 
      messages={ messages } 
      setMessageStatus={ setMessageStatus }      
      />
      <Constrols 
      markAllRead={ markAllRead }
      markAllUnread={ markAllUnread }
      
      />
    </div>
  );
}

export default App;