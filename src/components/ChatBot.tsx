import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Coffee } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatBotProps {
  className?: string;
}

const ChatBot: React.FC<ChatBotProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your friendly guide to Anita's FXB Cafe and Dessert Bar. I can share information about our coffee, desserts, hours, location, or answer any questions about our café. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // OpenAI integration with brand-specific context
  const getBotResponse = async (userMessage: string): Promise<string> => {
    console.log('🤖 ChatBot: Starting response generation for:', userMessage);
    
    try {
      // Get OpenAI API key from environment variables
      const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
      
      console.log('🔑 API Key status:', OPENAI_API_KEY ? `Found (${OPENAI_API_KEY.substring(0, 7)}...)` : 'Not found');
      console.log('🌍 All env vars:', import.meta.env);
      
      if (!OPENAI_API_KEY) {
        console.warn('⚠️ OpenAI API key not found, using fallback responses');
        return getFallbackResponse(userMessage);
      }

      console.log('🚀 Making request to OpenAI API...');

      const SYSTEM_PROMPT = `You are the friendly and knowledgeable chatbot for Anita's FXB Cafe and Dessert Bar in Fredericksburg, Virginia. You embody the warm, welcoming spirit of a neighborhood coffee shop and dessert bar.

Key Information:
- Name: Anita's FXB Cafe and Dessert Bar
- We are a downtown coffee shop and dessert bar
- Location: 620 Caroline St, Fredericksburg, VA 22401
- Hours: Monday-Thursday 7:00AM-9:00PM, Friday-Saturday 7:00AM-10:00PM, Sunday 8:00AM-9:00PM
- Email: hello@anitasfxbg.com
- We serve premium coffee, handcrafted desserts, and light fare
- We focus on being a welcoming neighborhood gathering place

RESPONSE STYLE:
- Use philosophical, contemplative language that matches the Nakashima aesthetic
- Include specific coffee knowledge when relevant
- Connect concepts to broader themes of art, time, patience, craft
- Keep responses 2-4 sentences, thoughtful but conversational
- Always end with an engaging question or invitation to visit
- Use "Olá" occasionally for authenticity

TOPICS YOU EXCEL AT:
- Brazilian coffee regions, processing methods, flavor profiles
- Coffee brewing techniques and their philosophical aspects
- Art history and movements, especially those connecting to craft and patience
- The intersection of coffee culture and artistic expression
- Sustainability and ethical sourcing practices
- The meditative aspects of coffee preparation and consumption
- Event programming and community building in café spaces

Remember: You are a bridge between the practical (café information) and the profound (coffee and art philosophy). Every interaction should leave the person feeling more connected to the deeper meanings behind coffee, art, and community.`;

      // Call OpenAI API directly
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user', content: userMessage }
          ],
          max_tokens: 250,
          temperature: 0.7,
        }),
      });

      console.log('📡 OpenAI API Response status:', response.status);

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status}`);
      }

      const data = await response.json();
      const botResponse = data.choices[0].message.content;
      console.log('✅ Received response from OpenAI:', botResponse);
      return botResponse;
      
    } catch (error) {
      console.error('❌ OpenAI API error:', error);
      console.log('🔄 Falling back to local responses');
      // Fallback to enhanced local responses
      return getFallbackResponse(userMessage);
    }
  };

  // Enhanced fallback responses when OpenAI is unavailable
  const getFallbackResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Coffee & Art intersection
    if ((message.includes('coffee') && message.includes('art')) || message.includes('intersection')) {
      return "Ah, the beautiful marriage of coffee and art! Both require patience, intention, and respect for process. In our gallery, we see how artists approach their craft with the same reverence we bring to brewing - understanding that transformation takes time, whether it's roasting beans or developing a vision. What draws you most to this intersection of creativity and coffee culture?";
    }
    
    // Philosophy and meaning
    if (message.includes('philosophy') || message.includes('meaning') || message.includes('purpose')) {
      return "Philosophy lives in every cup we serve. Coffee teaches us about patience - from the year it takes to grow, to the careful attention brewing demands. Like great art, great coffee cannot be rushed. It asks us to slow down, to be present, to find depth in simple moments. How does coffee create space for contemplation in your own life?";
    }
    
    // Brazilian coffee knowledge
    if (message.includes('brazilian') || message.includes('brazil') || message.includes('origin')) {
      return "Brazil carries coffee in its soul - from the fazendas of Minas Gerais to the highlands of Bahia. Each region speaks with its own voice: the chocolate notes of Cerrado, the fruity complexity of Chapada Diamantina. We source directly from farmers who treat coffee cultivation as an art form, honoring both tradition and innovation. Which Brazilian coffee region intrigues you most?";
    }
    
    // Art and gallery
    if (message.includes('art') || message.includes('gallery') || message.includes('exhibition')) {
      return "Our gallery reflects the same principles as our coffee program - curation, seasonality, and respect for the maker's journey. We feature artists who understand that creation, like coffee cultivation, is about transformation and time. Each exhibition dialogues with our coffee offerings, creating layered experiences for our community. What kind of artistic expression speaks to your soul?";
    }
    
    // Brewing and technique
    if (message.includes('brewing') || message.includes('pour over') || message.includes('espresso') || message.includes('how to make')) {
      return "Brewing is meditation in motion. Our V60 pour-overs require presence - feeling the water temperature, timing the bloom, watching the coffee dance. Each method reveals different aspects of the bean's character. Like an artist choosing their medium, we select brewing methods that honor the coffee's story. Would you like to join us for a brewing demonstration?";
    }
    
    // Events and workshops
    if (message.includes('event') || message.includes('workshop') || message.includes('class') || message.includes('cupping')) {
      return "Our events are designed for deep engagement rather than passive consumption. Whether it's a cupping session exploring terroir, an art workshop connecting creativity to coffee culture, or intimate artist talks, each gathering honors the contemplative nature of our space. We believe the best conversations happen when minds are open and senses are engaged. What kind of experience calls to you?";
    }
    
    // Summer specials
    if (message.includes('summer') || message.includes('special') || message.includes('seasonal')) {
      return "Summer brings its own rhythms to our menu. Our Summer Solstice Cold Brew captures the essence of Brazilian highlands in every cooling sip, while our Stone Fruit Gallery Plate celebrates the fleeting sweetness of the season. These offerings change with nature's calendar, reminding us that the best experiences are often temporary. Which summer flavor speaks to your current mood?";
    }
    
    // Hours and location
    if (message.includes('hours') || message.includes('location') || message.includes('address') || message.includes('where')) {
      return "Find us at 620 Caroline St in Fredericksburg, Virginia. Our hours: Monday-Thursday 7:00AM-9:00PM, Friday-Saturday 7:00AM-10:00PM, Sunday 8:00AM-9:00PM. We're your neighborhood coffee shop and dessert bar!";
    }
    
    // Greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('olá') || message.includes('good morning')) {
      return "Olá! Welcome to our contemplative corner of the digital world. I'm here to explore the rich tapestries of coffee, art, and philosophy that weave through our café's story. Whether you're curious about Brazilian terroir, artistic inspiration, or the meditative aspects of brewing, let's discover what sparks your imagination today.";
    }
    
    // Default contemplative response
    return "That's a great question that deserves a thoughtful conversation over a perfect cup of coffee. At Anita's, we believe every conversation is better with great coffee and sweet treats. I'd love to continue this chat at our welcoming space at 620 Caroline St, where every visit feels like coming home. What aspect of our café would you like to explore together?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    const messageText = inputValue;
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Get AI response
      const responseText = await getBotResponse(messageText);

      console.log(responseText);
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error getting bot response:', error);
      const fallbackResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getFallbackResponse(messageText),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, fallbackResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-neutral-900 hover:bg-neutral-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Open chat"
        >
          <Coffee className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white border border-neutral-200 shadow-2xl flex flex-col font-serif">
          {/* Header */}
          <div className="bg-neutral-900 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Coffee className="w-5 h-5" />
              <div>
                <h3 className="font-serif text-base font-normal">Coffee Sage</h3>
                <p className="text-xs text-neutral-300">Brazilian Coffee Guide</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 text-sm leading-relaxed ${
                    message.isBot
                      ? 'bg-white text-neutral-800 border border-neutral-200'
                      : 'bg-neutral-900 text-white'
                  }`}
                >
                  <p className="font-serif">{message.text}</p>
                  <p className={`text-xs mt-2 ${
                    message.isBot ? 'text-neutral-500' : 'text-neutral-300'
                  }`}>
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-neutral-200 p-3 text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-neutral-200 bg-white">
            <div className="flex space-x-2">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Brazilian coffee, our café, or brewing methods..."
                className="flex-1 resize-none border border-neutral-300 p-2 text-sm font-serif focus:outline-none focus:border-neutral-900 bg-neutral-50"
                rows={2}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-neutral-900 hover:bg-neutral-700 disabled:bg-neutral-300 text-white p-2 transition-colors duration-200"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot; 