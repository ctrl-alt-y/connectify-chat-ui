
import { useState } from 'react';
import { User, Users } from 'lucide-react';

const ChatList = ({ chatType, activeChat, setActiveChat }) => {
  // TODO: Backend Integration - Replace static data with API calls
  // - Fetch user's conversations (both direct messages and group chats)
  // - Implement real-time updates using WebSocket or subscription
  // - Get unread message counts from the backend
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
    <div className="w-[320px] border-r bg-gray-50/30 overflow-y-auto">
      <div className="py-2 space-y-1">
        {filteredChats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setActiveChat(chat)}
            className={`flex items-start gap-3 px-4 py-3 cursor-pointer transition-all hover:bg-gray-100 ${
              activeChat?.id === chat.id ? 'bg-gray-100' : ''
            }`}
          >
            <div className="relative flex-shrink-0">
              <img
                src={chat.avatar}
                alt={chat.name}
                className="w-12 h-12 rounded-full object-cover border border-gray-200"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-0.5">
                <h3 className="font-semibold text-gray-900 truncate">{chat.name}</h3>
                <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{chat.time}</span>
              </div>
              <p className="text-sm text-gray-600 truncate leading-snug">{chat.lastMessage}</p>
            </div>
            {chat.unread > 0 && (
              <div className="flex-shrink-0 w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-white">{chat.unread}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
