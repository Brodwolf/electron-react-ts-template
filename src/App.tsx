import { Home } from './pages/Home/Home';
import { ToastContainer } from 'react-toastify';
import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { MainContent } from './components/MainContent/MainContent';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useGlobalState } from './store/GlobalStore';
import { Login } from './pages/Authentication/Login';
import { AuthenticationContainer } from './components/Authentication/AuthenticationContainer';

function App() {
  const [isAuthenticated] = useGlobalState("isAuthenticated");

  const [isOpen, setOpen] = useState(false);
  const [isSent, setSent] = useState(false);
  const [fromMain, setFromMain] = useState<string | null>(null);

  const handleToggle = () => {
    if (isOpen) {
      setOpen(false);
      setSent(false);
    } else {
      setOpen(true);
      setFromMain(null);
    }
  };
  const sendMessageToElectron = () => {
    if (window.Main) {
      window.Main.sendMessage("Hello I'm from React World");
    } else {
      setFromMain('You are in a Browser, so no Electron functions are available');
    }
    setSent(true);
  };

  useEffect(() => {
    if (isSent && window.Main)
      window.Main.on('message', (message: string) => {
        setFromMain(message);
      });
  }, [fromMain, isSent]);

  return (
    <div className="flex flex-col h-screen w-screen bg-dark-400 overflow-y-auto rounded-2xl">
      <div className="flex-none">
        <Navbar />
      </div>
      <Router>
        {!isAuthenticated ? (
          <AuthenticationContainer>
            <ToastContainer closeOnClick={true} pauseOnFocusLoss={false} pauseOnHover={true} newestOnTop={true} />
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </AuthenticationContainer>
        ) : (
          <MainContent>
            <ToastContainer closeOnClick={true} pauseOnFocusLoss={false} pauseOnHover={true} newestOnTop={true} />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </MainContent>
        )}
      </Router>
    </div>
  );
}

export default App;