import { useEffect, useState } from "react";

function StatusBar() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  
  useEffect(() => {
    function handleOnline(){
      setIsOnline(true)
    }
    function handleOffline(){
      setIsOnline(false)
    }
    
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    };
  }, []);

  // Effect 2: sync document.title when isOnline changes
  useEffect(() => {
    document.title = isOnline ? 'Online': 'Offline'
  }, [isOnline]);

  return (
    <div>
      <h1>{isOnline ? 'ONLINE' : 'OFFLINE'}</h1>
    </div>
  );
}

export default StatusBar;
