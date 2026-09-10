import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Bot, User, Loader2, PhoneCall } from 'lucide-react';
import { AiChatMessage } from '../types';
import { SITE_PHONE_RAW, SITE_PHONE_DISPLAY, SITE_WHATSAPP_RAW, BRAND_NAME } from '../config/siteConfig';

interface AiConciergeProps {
  onOpenRfp: () => void;
}

export const AiConcierge: React.FC<AiConciergeProps> = ({ onOpenRfp }) => {
  const [messages, setMessages] = useState<AiChatMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'assistant',
      text: "Namaste! I am your AI Host Advisor. Ask me anything about connecting with local hosts, scheduling online voice calls, meeting up for coffee/tours, or messaging hosts directly on WhatsApp!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    const userMsg: AiChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Client-side static AI advisor matching response
      const query = userText.toLowerCase();
      let responseText = "";

      if (query.includes('heritage') || query.includes('tour') || query.includes('guide') || query.includes('fort') || query.includes('city')) {
        responseText = `✨ **Heritage & Tour Hosts**\n\nWe have verified local hosts like **Ananya Sharma** and **Simran Kaur** available for city tours, landmark strolls, fort visits, and bazaar walks.\n\n• **Languages**: English (Fluent), Hindi, French\n• **Connect**: Click 'Connect With Host' or ping us directly on WhatsApp (${SITE_PHONE_DISPLAY}).`;
      } else if (query.includes('cafe') || query.includes('coffee') || query.includes('c-scheme') || query.includes('malviya') || query.includes('dining')) {
        responseText = "☕ **Cafe & Dining Meetup Companions**\n\nOur top-rated companion hosts meet in premium public locations in C-Scheme, Malviya Nagar, and JLN Marg (such as Curious Life Coffee Roasters, Tapri Central, and The Town House).\n\n• **Hosts Available**: Ananya Sharma, Priya Rathore, Neha Gupta\n• **Safety Guarantee**: 100% Aadhaar & Government ID verified hosts in public cafe settings.";
      } else if (query.includes('online') || query.includes('call') || query.includes('voice') || query.includes('talk') || query.includes('phone')) {
        responseText = "📞 **Online Voice Calls & Audio Chat**\n\nConnect over private, secure audio calls for friendly chats, language practice, or casual evening conversations.\n\n• **Featured Hosts**: Roshni Roy, Isha Merchant\n• **Availability**: 24/7 online connect, instant phone dialer or direct audio call.";
      } else if (query.includes('whatsapp') || query.includes('chat') || query.includes('message')) {
        responseText = `💬 **Direct WhatsApp Messaging**\n\nTo chat directly with our verified hosts or main desk:\n\n1. Tap the green **WhatsApp Direct** button on any host card.\n2. Or message our desk at **${SITE_PHONE_DISPLAY}** for instant matching in under 5 minutes!`;
      } else if (query.includes('safety') || query.includes('verify') || query.includes('id') || query.includes('security')) {
        responseText = `🛡️ **Safety & Verification Standards**\n\nEvery host listed on ${BRAND_NAME} completes strict background verification:\n\n1. **Aadhaar & Govt Photo ID Verification**\n2. **Police Verification Certificate**\n3. **Public Meetup Policy** (Public cafes, galleries, and curated heritage sites only)\n4. **24/7 Support Desk** via direct call or WhatsApp.`;
      } else {
        responseText = `Namaste! Thank you for reaching out. Based on your request ("${userText}"), we have several verified hosts available for online calls, cafe meetups, or tour companions.\n\n• **Top Recommendation**: Browse our verified host directory above or call our Desk (${SITE_PHONE_DISPLAY}) to match with an available host in your preferred zone!`;
      }

      // Simulate a brief natural thinking pause
      await new Promise((resolve) => setTimeout(resolve, 600));

      const assistantMsg: AiChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error('AI Host Advisor Error:', err);
      const fallbackMsg: AiChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: "I am ready to help you find verified hosts. You can browse our directory or message us directly on WhatsApp for instant assistance!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const samplePrompts = [
    "Find an English-speaking heritage tour guide",
    "Recommend top cafes in C-Scheme for an afternoon meetup",
    "How do I talk online or WhatsApp a host directly?",
    "What safety measures and ID checks are conducted on hosts?",
  ];

  return (
    <section id="concierge" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-950/40 backdrop-blur-sm text-slate-100 border-b border-pink-500/20">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>AI Find! Assistant</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Find Perfect Pair
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
            Get instant assistance to match with local verified hosts, organize cafe meetups, or schedule online voice calls.
          </p>
        </div>

        {/* Chat Card Box */}
        <div className="bg-slate-900 border border-pink-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[550px]">
          {/* Chat Header */}
          <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-pink-300">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-white text-base">
                  Find Perfect Pair
                </h3>
                <span className="text-[10px] text-pink-400 font-semibold flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online • Find! Desk</span>
                </span>
              </div>
            </div>

            <a
              href={`tel:+${SITE_PHONE_RAW}`}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold text-xs shadow-md shadow-pink-500/20 flex items-center space-x-1"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call Desk</span>
            </a>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-slate-950/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start space-x-3 ${
                  msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                    msg.sender === 'user'
                      ? 'bg-pink-500 text-slate-950'
                      : 'bg-slate-900 border border-pink-500/30 text-pink-300'
                  }`}
                >
                  {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                <div
                  className={`max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-pink-500 text-slate-950 font-medium shadow-md shadow-pink-500/10'
                      : 'bg-slate-900 border border-slate-800 text-slate-200'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                  <span
                    className={`block text-[10px] mt-2 text-right ${
                      msg.sender === 'user' ? 'text-pink-950/70' : 'text-slate-500'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-xl bg-slate-900 border border-pink-500/30 text-pink-300 flex items-center justify-center">
                  <Loader2 className="w-4 h-4 animate-spin" />
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-xs text-slate-400">
                  Searching Jaipur host directory and meetup availability...
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Sample Prompts Row */}
          <div className="px-4 py-2 bg-slate-950 border-t border-slate-800 flex space-x-2 overflow-x-auto scrollbar-none">
            {samplePrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => setInput(prompt)}
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-pink-500/40 text-[11px] text-slate-300 hover:text-pink-300 transition-all whitespace-nowrap flex-shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-4 bg-slate-950 border-t border-slate-800 flex space-x-2">
            <input
              type="text"
              placeholder="Ask about local hosts, online audio calls, C-Scheme cafes, WhatsApp..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-slate-900 border border-slate-800 focus:border-pink-500 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="px-5 py-3 bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-600 hover:from-rose-400 hover:to-pink-500 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md shadow-pink-500/20 disabled:opacity-50 transition-all flex items-center justify-center space-x-1"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
