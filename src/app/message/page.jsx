"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Paperclip, Send, ChevronDown } from "lucide-react";
import avatar from '../../../public/heroImage.png'

const ChatInterface = () => {
  const [message, setMessage] = useState("");
  const [selectedChat, setSelectedChat] = useState("Ahamad Musa");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const recentChats = [
    {
      name: "Ahamad Musa",
      message: "Hello, how are you?",
      time: "6 minutes",
      avatar: avatar,
    },
    {
      name: "John Doe",
      message: "Let's catch up!",
      time: "10 minutes",
      avatar: avatar,
    },
    {
      name: "Sarah Connor",
      message: "Meeting at 5 PM.",
      time: "15 minutes",
      avatar: avatar,
    },
  ];

  const messages = [
    { id: 1, text: "Hi John, how can I help you?", sender: "them", time: "3:51 PM" },
    { id: 2, text: "I need some information.", sender: "me", time: "3:52 PM" },
    { id: 3, text: "Sure! What do you need?", sender: "them", time: "3:53 PM" },
    { id: 4, image: avatar, sender: "me", time: "3:55 PM" },
  ];

  return (
    <div className="flex h-[85vh] bg-white mx-auto w-2/3 border mt-5 border-blue-200 rounded-md">
      {/* Left Sidebar */}
      <div className="w-80 border-r border-blue-900 flex flex-col">
        {/* Profile Section */}
        <div className="p-4">
          <div className="flex items-center gap-3 mb-4">
            <Image src={avatar} alt="Profile" width={30} height={30} className="rounded-full" />
            <span className="font-medium text-sm">Mr. Jones</span>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input type="text" placeholder="Search" className="w-full pl-8 pr-4 py-2 border rounded-md text-sm border-blue-900" />
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Recent Chats Dropdown */}
        <motion.div
          className="px-4 py-2 flex items-center gap-2 text-blue-900 font-medium text-sm cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span>Recent Chats</span>
          <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </motion.div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          <AnimatePresence>
            {recentChats.map((chat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer ${
                  selectedChat === chat.name ? "bg-blue-100" : ""
                }`}
                onClick={() => setSelectedChat(chat.name)}
              >
                <Image src={chat.avatar} alt={chat.name} width={30} height={30} className="rounded-full" />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">{chat.name}</span>
                    <span className="text-xs text-gray-500">{chat.time}</span>
                  </div>
                  <p className="text-gray-500 truncate text-xs">{chat.message}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-blue-900 flex items-center gap-3">
          <Image src={avatar} alt="Ahamad Musa" width={30} height={30} className="rounded-full" />
          <div>
            <span className="font-medium text-sm">Ahamad Musa (Uncle)</span>
            <span className="block text-xs text-green-500">Online</span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[70%] ${msg.sender === "me" ? "bg-blue-100" : "bg-gray-100"} rounded-lg p-3`}>
                  {msg.text && <p className="text-sm">{msg.text}</p>}
                  {msg.image && <Image src={msg.image} alt="Shared" width={200} height={150} className="rounded-lg" />}
                  <span className="text-xs text-gray-500 mt-1">{msg.time}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-blue-900 flex items-center gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 border border-blue-900 rounded-md text-sm"
          />
          <motion.button whileHover={{ scale: 1.1 }} className="p-2 text-blue-600">
            <Paperclip className="h-5 w-5" />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className="p-2 text-blue-600">
            <Send className="h-5 w-5" />
          </motion.button>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 border-l border-blue-900 p-4">
        <h3 className="font-medium text-sm mb-2">Media (1)</h3>
        <Image src={avatar} alt="Media" width={80} height={80} className="rounded-lg object-cover" />

        <h3 className="font-medium text-sm mt-4 mb-2">Attachments (1)</h3>
        <div className="border border-blue-900 rounded-lg p-3">
          <p className="text-sm font-medium">document.pdf</p>
          <p className="text-xs text-gray-500">2.00 MB</p>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
