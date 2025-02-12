
import { useState } from 'react';
import { Send } from 'lucide-react';

const ChatView = ({ activeChat }) => {
  const [message, setMessage] = useState('');

  if (!activeChat) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900">Welcome to Chat</h3>
          <p className="mt-1 text-sm text-gray-500">Select a conversation to start messaging</p>
        </div>
      </div>
    );
  }

  const messages = [
    {
      id: 1,
      content: "Hey, how are you?",
      sender: "other",
      time: "10:00 AM"
    },
    {
      id: 2,
      content: "I'm good, thanks! How about you?",
      sender: "me",
      time: "10:01 AM"
    },
    {
      id: 3,
      content: "Doing great! Want to catch up later?",
      sender: "other",
      time: "10:02 AM"
    }
  ];

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle sending message
      setMessage('');
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Chat Header */}
      <div className="px-6 py-4 border-b flex items-center gap-3">
        <div className="relative">
          <img
            src={activeChat.avatar}
            alt={activeChat.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        <div>
          <h2 className="font-medium text-gray-900">{activeChat.name}</h2>
          <p className="text-sm text-gray-500">
            {activeChat.type === 'group' ? '12 members' : 'Active now'}
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                  msg.sender === 'me'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p>{msg.content}</p>
                <p className={`text-xs mt-1 ${
                  msg.sender === 'me' ? 'text-gray-300' : 'text-gray-500'
                }`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <form onSubmit={handleSend} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors"
          />
          <button
            type="submit"
            className="p-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatView;
