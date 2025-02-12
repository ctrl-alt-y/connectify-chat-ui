
import { useState } from 'react';
import { User, Users } from 'lucide-react';

const ChatList = ({ chatType, activeChat, setActiveChat }) => {
  const [chats] = useState([
    {
      id: 1,
      name: 'John Doe',
      lastMessage: 'Hey, how are you?',
      time: '2m ago',
      unread: 2,
      type: 'single',
      avatar: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Design Team',
      lastMessage: 'New updates for the project',
      time: '1h ago',
      unread: 0,
      type: 'group',
      avatar: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'Jane Smith',
      lastMessage: 'Sure, let\'s meet tomorrow',
      time: '3h ago',
      unread: 1,
      type: 'single',
      avatar: '/placeholder.svg'
    },
    {
      id: 4,
      name: 'Marketing Team',
      lastMessage: 'Campaign results are in!',
      time: '5h ago',
      unread: 0,
      type: 'group',
      avatar: '/placeholder.svg'
    }
  ]);

  const filteredChats = chats.filter(chat => chat.type === chatType);

  return (
    <div className="w-80 border-r overflow-y-auto">
      <div className="py-2">
        {filteredChats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setActiveChat(chat)}
            className={`flex items-start gap-3 p-4 cursor-pointer transition-all hover:bg-gray-50 ${
              activeChat?.id === chat.id ? 'bg-gray-50' : ''
            }`}
          >
            <div className="relative">
              <img
                src={chat.avatar}
                alt={chat.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-gray-900 truncate">{chat.name}</h3>
                <span className="text-xs text-gray-500">{chat.time}</span>
              </div>
              <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
            </div>
            {chat.unread > 0 && (
              <div className="flex-shrink-0 w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-xs text-white">{chat.unread}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
