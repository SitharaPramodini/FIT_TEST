import React, { useState, useEffect } from 'react';
import { X, Cookie, Settings } from 'lucide-react';

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  });

useEffect(() => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) {
        setShowBanner(true);
      } else {
        const savedPreferences = JSON.parse(localStorage.getItem('cookiePreferences') || '{}');
        setCookiePreferences(prev => ({ ...prev, ...savedPreferences }));
      }
    });
  } else {
    setTimeout(() => {
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) {
        setShowBanner(true);
      } else {
        const savedPreferences = JSON.parse(localStorage.getItem('cookiePreferences') || '{}');
        setCookiePreferences(prev => ({ ...prev, ...savedPreferences }));
      }
    }, 1000);
  }
}, []);



  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    setCookiePreferences(allAccepted);
    saveConsent(allAccepted);
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    setCookiePreferences(onlyNecessary);
    saveConsent(onlyNecessary);
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    saveConsent(cookiePreferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const saveConsent = (preferences) => {
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());

    if (preferences.analytics) {
      console.log('Analytics cookies accepted');
    }
    if (preferences.marketing) {
      console.log('Marketing cookies accepted');
    }
  };

  const handlePreferenceChange = (type) => {
    if (type === 'necessary') return;
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!showBanner) return null;

  return (
<div className="fixed bottom-0 left-0 right-0  z-50 shadow-2xl p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {!showSettings ? (
          // Main Banner
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Cookie className="text-blue-400" size={24} />
              <h3 className="text-lg font-semibold text-white">We use cookies</h3>
            </div>

              <p className="text-white text-base mb-6 leading-relaxed">
                We use cookies and similar technologies to enhance your browsing experience,
                analyze site traffic, and provide personalized content. By clicking "Accept All",
                you consent to our use of cookies.
              </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAcceptAll}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex-1"
              >
                Accept All
              </button>
              <button
                onClick={handleRejectAll}
                className="bg-gray-700 hover:bg-gray-600 text-gray-200 px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex-1"
              >
                Reject All
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="border border-gray-600 hover:border-gray-500 bg-gray-800 hover:bg-gray-700 text-gray-200 px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 justify-center"
              >
                <Settings size={16} />
                Settings
              </button>
            </div>

            <p className="text-xs text-gray-400 mt-4 text-center">
              Read our{' '}
              <a href="/cookie-policy" className="text-blue-400 hover:text-blue-300 hover:underline">
                Cookie Policy
              </a>{' '}
              and{' '}
              <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300 hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        ) : (
          // Settings Panel
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Cookie Settings</h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-6">
              {/* Necessary Cookies */}
              <div className="border border-gray-700 bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white">Necessary Cookies</h4>
                  <div className="bg-green-600 text-green-100 px-2 py-1 rounded text-xs font-medium">
                    Always Active
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  These cookies are essential for the website to function properly and cannot be disabled.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="border border-gray-700 bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white">Analytics Cookies</h4>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={cookiePreferences.analytics}
                      onChange={() => handlePreferenceChange('analytics')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <p className="text-sm text-gray-300">
                  Help us understand how visitors interact with our website by collecting and reporting information.
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="border border-gray-700 bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white">Marketing Cookies</h4>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={cookiePreferences.marketing}
                      onChange={() => handlePreferenceChange('marketing')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <p className="text-sm text-gray-300">
                  Used to track visitors across websites to display relevant advertisements.
                </p>
              </div>

              {/* Functional Cookies */}
              <div className="border border-gray-700 bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white">Functional Cookies</h4>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={cookiePreferences.functional}
                      onChange={() => handlePreferenceChange('functional')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <p className="text-sm text-gray-300">
                  Enable enhanced functionality and personalization, such as videos and live chats.
                </p>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSavePreferences}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex-1"
              >
                Save Preferences
              </button>
              <button
                onClick={handleAcceptAll}
                className="border border-gray-600 hover:border-gray-500 bg-gray-800 hover:bg-gray-700 text-gray-200 px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex-1"
              >
                Accept All
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsentBanner;