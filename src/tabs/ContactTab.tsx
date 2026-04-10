import { useState } from 'react';
import type { LootItem } from '../types';
import { LOOT_ITEMS } from '../data';
import emailjs from '@emailjs/browser';

const RARITY_STYLES: Record<LootItem['rarity'], string> = {
  epic:   'text-purple-400',
  rare:   'text-blue-400',
  common: 'text-purple-600',
};

const RARITY_LABELS: Record<LootItem['rarity'], string> = {
  epic:   '◆ EPIC',
  rare:   '◆ RARE',
  common: '◆ COMMON',
};

export default function ContactTab() {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent]       = useState(false);

async function handleSend() {
  if (!name || !email || !message) {
    alert('Fill all fields, adventurer!');
    return;
  }

  try {
await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  { from_name: name, from_email: email, message },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
    setSent(true);
    setName(''); setEmail(''); setMessage('');
  } catch {
    alert('Failed to send. Try again!');
  }
}

  return (
    <div>
      {/* Loot box */}
      <div className="relative border-2 border-amber-500 bg-[#16112e] p-4 mb-5">
        <span className="absolute -top-[9px] left-1/2 -translate-x-1/2 font-pixel text-[6px]
          text-amber-400 bg-[#16112e] px-3 whitespace-nowrap">
          ✦ LOOT DROP ✦
        </span>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-2">
          {LOOT_ITEMS.map((item) => {
            const inner = (
              <div className="border border-[#3d2a6e] bg-[#110d28] p-3 flex items-center gap-3
                transition-colors hover:border-pink-500 cursor-pointer">
                <img src={item.icon} alt={item.platform} className="w-6 h-6 flex-shrink-0 object-contain" />
                <div>
                  <p className="font-pixel text-[6px] text-fuchsia-400 mb-1">{item.platform}</p>
                  <p className="font-pixel text-[6px] text-purple-400">{item.handle}</p>
                  <p className={`font-pixel text-[5px] mt-1 ${RARITY_STYLES[item.rarity]}`}>
                    {RARITY_LABELS[item.rarity]}
                  </p>
                </div>
              </div>
            );

            return item.href ? (
              <a key={item.platform} href={item.href} target="_blank" rel="noopener noreferrer"
                className="no-underline">
                {inner}
              </a>
            ) : (
              <div key={item.platform}>{inner}</div>
            );
          })}
        </div>
      </div>

      {/* Message form */}
      <div className="border border-[#3d2a6e] bg-[#16112e] p-4">
        <p className="font-pixel text-[7px] text-pink-400 tracking-widest mb-4">▸ SEND MESSAGE</p>

        <div className="flex flex-col gap-3">
          <label className="flex flex-col gap-1">
            <span className="font-pixel text-[6px] text-purple-400 tracking-widest">▸ PLAYER NAME</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name..."
              className="w-full bg-[#0a0818] border border-[#3d2a6e] text-purple-100 font-vt text-[15px]
                px-3 py-2 outline-none focus:border-fuchsia-500 transition-colors placeholder:text-purple-800"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="font-pixel text-[6px] text-purple-400 tracking-widest">▸ RETURN ADDRESS</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full bg-[#0a0818] border border-[#3d2a6e] text-purple-100 font-vt text-[15px]
                px-3 py-2 outline-none focus:border-fuchsia-500 transition-colors placeholder:text-purple-800"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="font-pixel text-[6px] text-purple-400 tracking-widest">▸ MESSAGE</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              rows={4}
              className="w-full bg-[#0a0818] border border-[#3d2a6e] text-purple-100 font-vt text-[15px]
                px-3 py-2 outline-none focus:border-fuchsia-500 transition-colors placeholder:text-purple-800
                resize-none"
            />
          </label>

          <button
            onClick={handleSend}
            className="w-full font-pixel text-[7px] py-3 bg-gradient-to-r from-violet-700 to-fuchsia-700
              text-white hover:opacity-90 transition-opacity tracking-widest"
          >
            ▸ SEND MESSAGE ✦
          </button>

          {sent && (
            <div className="font-pixel text-[6px] text-teal-400 text-center py-3
              border border-teal-500 bg-teal-900/20">
              ✓ MESSAGE SENT! I WILL RESPOND SOON.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
