// utils/cookieUtils.js

/**
 * Cookie management utilities for consent and preferences
 */

// Cookie consent management
export const CookieConsent = {
  // Check if user has given consent
  hasConsent: () => {
    return localStorage.getItem('cookieConsent') === 'true';
  },

  // Get user's cookie preferences
  getPreferences: () => {
    const defaultPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    
    try {
      const saved = localStorage.getItem('cookiePreferences');
      return saved ? { ...defaultPreferences, ...JSON.parse(saved) } : defaultPreferences;
    } catch (error) {
      console.error('Error reading cookie preferences:', error);
      return defaultPreferences;
    }
  },

  // Set cookie preferences
  setPreferences: (preferences) => {
    try {
      localStorage.setItem('cookieConsent', 'true');
      localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
      localStorage.setItem('cookieConsentDate', new Date().toISOString());
      
      // Trigger cookie setup based on preferences
      CookieConsent.setupCookies(preferences);
      
      return true;
    } catch (error) {
      console.error('Error saving cookie preferences:', error);
      return false;
    }
  },

  // Setup cookies based on user preferences
  setupCookies: (preferences) => {
    if (preferences.analytics) {
      CookieConsent.enableAnalytics();
    } else {
      CookieConsent.disableAnalytics();
    }

    if (preferences.marketing) {
      CookieConsent.enableMarketing();
    } else {
      CookieConsent.disableMarketing();
    }

    if (preferences.functional) {
      CookieConsent.enableFunctional();
    } else {
      CookieConsent.disableFunctional();
    }
  },

  // Enable analytics cookies
  enableAnalytics: () => {
    // Google Analytics setup
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
    
    // Your analytics setup code here
    console.log('Analytics cookies enabled');
  },

  // Disable analytics cookies
  disableAnalytics: () => {
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
    
    console.log('Analytics cookies disabled');
  },

  // Enable marketing cookies
  enableMarketing: () => {
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'ad_storage': 'granted'
      });
    }
    
    // Facebook Pixel or other marketing tools setup
    console.log('Marketing cookies enabled');
  },

  // Disable marketing cookies
  disableMarketing: () => {
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'ad_storage': 'denied'
      });
    }
    
    console.log('Marketing cookies disabled');
  },

  // Enable functional cookies
  enableFunctional: () => {
    console.log('Functional cookies enabled');
    // Setup for chat widgets, video players, etc.
  },

  // Disable functional cookies
  disableFunctional: () => {
    console.log('Functional cookies disabled');
    // Disable or remove functional features
  },

  // Reset all consent data
  resetConsent: () => {
    localStorage.removeItem('cookieConsent');
    localStorage.removeItem('cookiePreferences');
    localStorage.removeItem('cookieConsentDate');
  },

  // Check if consent is expired (optional - for GDPR compliance)
  isConsentExpired: (expiryMonths = 12) => {
    const consentDate = localStorage.getItem('cookieConsentDate');
    if (!consentDate) return true;
    
    const consent = new Date(consentDate);
    const expiry = new Date();
    expiry.setMonth(expiry.getMonth() - expiryMonths);
    
    return consent < expiry;
  }
};

// Helper function to set cookies (if you need to set custom cookies)
export const setCookie = (name, value, days = 30) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
};

// Helper function to get cookie value
export const getCookie = (name) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

// Helper function to delete a cookie
export const deleteCookie = (name) => {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

// Function to initialize Google Analytics with consent
export const initializeGoogleAnalytics = (measurementId) => {
  if (!measurementId) return;

  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  
  // Initialize with consent state
  const preferences = CookieConsent.getPreferences();
  gtag('consent', 'default', {
    'analytics_storage': preferences.analytics ? 'granted' : 'denied',
    'ad_storage': preferences.marketing ? 'granted' : 'denied',
  });

  gtag('config', measurementId);
};

// Function to track page views (use this in route changes)
export const trackPageView = (page) => {
  const preferences = CookieConsent.getPreferences();
  if (preferences.analytics && typeof gtag !== 'undefined') {
    gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: page,
    });
  }
};

// Function to track custom events
export const trackEvent = (eventName, parameters = {}) => {
  const preferences = CookieConsent.getPreferences();
  if (preferences.analytics && typeof gtag !== 'undefined') {
    gtag('event', eventName, parameters);
  }
};