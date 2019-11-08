import { useEffect } from 'react';

const useScript = (url, callback) => {
  useEffect(() => {
    const script = document.createElement('script');

    document.body.appendChild(script);
    script.onload = callback;
    script.src = url;
    script.async = false;
    script.defer = false;

    return callback();
  }, []);
};

export default useScript;
