'use client'

import { useState } from 'react';

const CookieNotice = () => {
  const [showCookieNotice, setShowCookieNotice] = useState(true);

  const acceptCookies = () => {
    setShowCookieNotice(false);
    // Add logic to set cookies or save user preference (e.g., in local storage)
  };

  const declineCookies = () => {
    setShowCookieNotice(false);
    // Add logic to handle if user declines cookies (e.g., do not set cookies)
  };

  return (
    <>
      {showCookieNotice && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-100 p-4">
          <div className="container mx-auto flex items-center justify-between">
            <p className="text-sm">
              We use cookies to enhance your experience.{' '}
              <a href="/privacy-policy" className="text-blue-500 hover:underline">
                Learn more
              </a>
            </p>
            <div>
              <button
                onClick={acceptCookies}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mr-4 rounded"
              >
                Accept
              </button>
              <button onClick={declineCookies} className="text-gray-600 hover:text-gray-800 font-semibold">
                No, thanks
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieNotice;
