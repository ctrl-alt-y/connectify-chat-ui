
import { useState } from 'react';
import ChatLayout from '../components/ChatLayout';
import ChatList from '../components/ChatList';
import ChatView from '../components/ChatView';
import { MessageCircle, Users } from 'lucide-react';

const Index = () => {
  const [activeChat, setActiveChat] = useState(null);
  const [chatType, setChatType] = useState('single'); // 'single' or 'group'

  return (
    <div className="flex h-screen bg-gray-50">
      <ChatLayout>
        <div className="flex flex-col h-full">
          {/* Chat Type Toggle */}
          <div className="flex p-4 gap-4 border-b">
            <button
              onClick={() => setChatType('single')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                chatType === 'single'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <MessageCircle size={18} />
              <span>Chats</span>
            </button>
            <button
              onClick={() => setChatType('group')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                chatType === 'group'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Users size={18} />
              <span>Groups</span>
            </button>
          </div>

          {/* Chat List and View */}
          <div className="flex flex-1 overflow-hidden">
            <ChatList
              chatType={chatType}
              activeChat={activeChat}
              setActiveChat={setActiveChat}
            />
            <ChatView activeChat={activeChat} />
          </div>
        </div>
      </ChatLayout>
    </div>
  );
};

export default Index;
