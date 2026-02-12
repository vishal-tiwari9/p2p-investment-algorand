// src/components/Home.tsx
import { useWallet } from '@txnlab/use-wallet-react'
import React, { useState } from 'react'
import ConnectWallet from './components/ConnectWallet'

const Home: React.FC = () => {
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
  const { activeAddress } = useWallet()

  // Senior Tip: Move admin check to a helper/constant
  const ADMIN_ADDRESS = "YOUR_KMD_ADDRESS_HERE" 
  const isAdmin = activeAddress === ADMIN_ADDRESS

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      {/* --- Navbar --- */}
      <nav className="border-b border-slate-800 p-4 flex justify-between items-center bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-teal-500 p-2 rounded-lg">🚀</div>
          <span className="text-xl font-bold tracking-tight">AlgoCampus</span>
        </div>
        <button 
          className="btn btn-outline border-teal-500 text-teal-500 hover:bg-teal-500 hover:border-teal-500 px-8"
          onClick={() => setOpenWalletModal(true)}
        >
          {activeAddress ? `${activeAddress.substring(0, 6)}...${activeAddress.substring(38)}` : "Connect Wallet"}
        </button>
        <ConnectWallet openModal={openWalletModal} closeModal={() => setOpenWalletModal(false)} />
      </nav>

      {/* --- Hero Section --- */}
      <main className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-extrabold leading-tight mb-6">
              Track & Monitor <br />
              <span className="text-teal-400">Campus Events</span> <br />
              on Algorand
            </h1>
            <p className="text-slate-400 text-lg mb-10 max-w-lg">
              The first decentralized event management system for students. Secure registration, instant split payments, and real-time QR verification.
            </p>

            <div className="flex gap-4">
              {activeAddress ? (
                isAdmin ? (
                  <div className="flex flex-col gap-4 w-full">
                    <div className="badge badge-accent">Admin Mode Active</div>
                    <div className="grid grid-cols-2 gap-4">
                       <button className="btn btn-primary h-16 text-lg">Create Single Event</button>
                       <button className="btn btn-secondary h-16 text-lg">Create Group Event</button>
                    </div>
                  </div>
                ) : (
                  <button className="btn btn-teal-500 bg-teal-500 border-none text-slate-900 hover:bg-teal-400 px-10 h-14 text-lg">
                    Explore All Events
                  </button>
                )
              ) : (
                <button onClick={() => setOpenWalletModal(true)} className="btn btn-wide btn-primary h-14 text-lg">
                  Get Started Now
                </button>
              )}
            </div>
          </div>

          {/* --- Monitor Preview --- */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-8xl">📊</div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
               <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
               Live Platform Stats
            </h3>
            <div className="space-y-6">
              {[
                { label: 'Active Events', val: '12', color: 'bg-teal-500' },
                { label: 'Total Participants', val: '450+', color: 'bg-blue-500' },
                { label: 'Payments Verified', val: '100%', color: 'bg-purple-500' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-400">{stat.label}</span>
                    <span className="font-bold">{stat.val}</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2 rounded-full">
                    <div className={`${stat.color} h-2 rounded-full w-2/3`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* --- Features --- */}
      <section className="bg-slate-800/20 py-20 border-t border-slate-800">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
           <div className="p-6 rounded-2xl border border-slate-800 hover:border-teal-500/50 transition-all">
              <div className="text-3xl mb-4">🎟️</div>
              <h4 className="font-bold text-xl mb-2">NFT Tickets</h4>
              <p className="text-slate-400">Every registration is a verifiable asset on the Algorand blockchain.</p>
           </div>
           <div className="p-6 rounded-2xl border border-slate-800 hover:border-teal-500/50 transition-all">
              <div className="text-3xl mb-4">💰</div>
              <h4 className="font-bold text-xl mb-2">Split Payments</h4>
              <p className="text-slate-400">Register as a group and let the contract handle the split instantly.</p>
           </div>
           <div className="p-6 rounded-2xl border border-slate-800 hover:border-teal-500/50 transition-all">
              <div className="text-3xl mb-4">🔍</div>
              <h4 className="font-bold text-xl mb-2">Instant QR Scan</h4>
              <p className="text-slate-400">One-second verification at the event gate using mobile wallets.</p>
           </div>
        </div>
      </section>

      
    </div>
  )
}

export default Home