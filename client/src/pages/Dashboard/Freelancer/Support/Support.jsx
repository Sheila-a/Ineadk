import { useState, useRef, useEffect } from 'react';
import Sidebar from '../../../../layout/Sidebar/FreeSidebar';
import MetaBtn from '../../../../components/Button/MetaBtn';
import design from './support.module.css';
import DashNav from '../../../../components/DashNav/DashNav';
import DashIntro from '../../../../components/DashIntro/DashIntro';

const Support = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedPerson, setSelectedPerson] = useState('');
  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);

  const handleStartTyping = () => {
    // Focus on the input field when DashIntro is clicked
    inputRef.current.focus();
  };

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 0 && currentHour < 12) {
      return 'Good morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  };

  const botResponse = (userInput) => {
    const lowerCaseInput = userInput.toLowerCase();
    const currentHour = new Date().getHours();

    if (
      lowerCaseInput.includes('hello') ||
      lowerCaseInput.includes('hi') ||
      lowerCaseInput.includes('hey')
    ) {
      const greeting = getGreeting();
      return `${greeting}, let me know what you need help with, and I'll provide the information you're looking for.`;
    } else if (lowerCaseInput.includes('bye')) {
      return 'Goodbye! Have a great day!';
    } else if (lowerCaseInput.includes('lol')) {
      return 'Haha, what is funny friend?';
    } else if (lowerCaseInput.includes('no')) {
      return 'Alright. Do have a good day';
    } else if (lowerCaseInput.includes('hoe')) {
      return "I'm sorry, but I can't assist with that. Please check the sidebar for more information.";
    } else if (lowerCaseInput.includes('set')) {
      return 'Go to the settings section of the sidebar to changed your desired settings.';
    } else {
      return "I'm here to help. How can I assist you today?";
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages((prevMsg) => [
        ...prevMsg,
        { text: newMessage, sender: 'user' },
      ]);
      // Simulate response from the server after a short delay
      setTimeout(() => {
        const botReply = botResponse(newMessage);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botReply, sender: 'bot' },
        ]);
      }, 1000);

      // Clear the input field after sending the message
      setNewMessage('');
    }
  };

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  useEffect(() => {
    // Scroll to the bottom of the chat container when new messages are added
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  const handlePersonSelect = (event) => {
    setSelectedPerson(event.target.value);
  };

  const showChatContainer = () => {
    return selectedPerson === 'IT personnel' ? true : false;
  };

  return (
    <div className={design.projects}>
      <div className={design.project_body}>
        <Sidebar />
        <div className={design.project_main}>
          <DashNav title='SUPPORT' />
          <div className={design.Message_inner}>
            <DashIntro
              title='Talk to one of our talented IT Support staff'
              text='Welcome to our interactive support chat. Whether you are facing technical challenges, need guidance, or simply have questions, our dedicated IT Support team is here to assist you. Initiate a conversation and tap into the expertise of our professionals. Do not hesitate to reach out – we are just a message away!'
              btn='Send Message'
              onClick={handleStartTyping}
            />
            <div
              className={design.chat_container}
              //   style={showChatContainer()}
            >
              <div className={design.chat_messages} ref={chatContainerRef}>
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`${design.message} ${
                      message.sender === 'user'
                        ? design.user_message
                        : design.bot_message
                    }`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>
              <div className={design.input_container}>
                <input
                  type='text'
                  value={newMessage}
                  onChange={handleInputChange}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleSendMessage();
                    }
                  }}
                  className={design.input}
                  ref={inputRef}
                  placeholder='Type your message...'
                />

                <MetaBtn
                  content='Send'
                  onClick={handleSendMessage}
                  style={{ width: '30%', borderRadius: '0 5px 5px 0' }}
                />
              </div>
            </div>{' '}
            {/* <select
            name='person'
            id='person'
            onChange={handlePersonSelect}
            value={selectedPerson}
          >
            <option value='IT personnel'>IT personnel</option>
            <option value='Company'>Company</option>
          </select> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
