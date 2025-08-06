import React from 'react';
import logo from './Logo.png'; // adjust path if needed
import qrCode from './QRCode.png'; // Adjust the path if needed

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e0f2fe] to-[#bfdbfe] flex flex-col">
      {/* Hero Section */}
      <header className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          <img
            src={logo}
            alt="Mood Tracker Logo"
            className="w-54 h-32 mx-auto mb-6 transform transition-transform hover:scale-105"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Mood Tracker
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Capture your emotions daily and reflect on your mood journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://mood-tracker-download.vercel.app/MoodTracker.apk"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.4c-.7.9-1.5 1.6-2.5 2.1-1.6.8-3.3.3-4.5-.8-1.2 1.1-2.9 1.6-4.5.8-1-.5-1.8-1.2-2.5-2.1-2.3-3-2.4-7.1-.3-10.2.9-1.3 2.1-2.3 3.6-2.8 1.5-.5 3.1-.2 4.3.8v-.9c0-1.4.7-2.7 1.9-3.4.5-.3 1-.5 1.6-.5.4 0 .8.1 1.2.3.5.3.9.7 1.1 1.2.2.6.2 1.2 0 1.8-.4 1.1-1.3 1.9-2.4 2.3-.6.2-1.2.3-1.8.2v.9c1.2-1 2.8-1.3 4.3-.8 1.5.5 2.7 1.5 3.6 2.8 2.1 3.1 2 7.2-.3 10.2zm-5.1-16.9c-.3 0-.6.1-.8.3-.7.4-1.1 1.1-1.1 1.9v.9c.6-.1 1.2-.3 1.8-.5.8-.2 1.5-.7 1.9-1.4.1-.3.1-.6 0-.9-.2-.3-.5-.3-.8-.3z"/>
              </svg>
              Download Mood Tracker
            </a>
    
          </div>
          <div className="mt-8 text-center">
  <p className="text-gray-700 font-medium mb-2">Or Scan This :</p>
  <img
    src={qrCode}
    alt="QR Code"
    className="w-40 h-40 mx-auto rounded-md shadow-md hover:scale-105 transition-transform duration-300"
  />
</div>
        </div>
      </header>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} SoftWebElevation. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;