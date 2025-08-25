import React, { useState, useEffect } from 'react';
import { Settings, Cookie, Shield, Info } from 'lucide-react';

const CookiePolicy = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    const savedPreferences = JSON.parse(localStorage.getItem('cookiePreferences') || '{}');
    setCookiePreferences(prev => ({ ...prev, ...savedPreferences }));
  }, []);

  const updateCookiePreference = (type) => {
    if (type === 'necessary') return;
    
    const newPreferences = {
      ...cookiePreferences,
      [type]: !cookiePreferences[type]
    };
    
    setCookiePreferences(newPreferences);
    localStorage.setItem('cookiePreferences', JSON.stringify(newPreferences));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto ">
        {/* Header */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-2xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Cookie className="text-blue-400" size={32} />
            <h1 className="text-3xl font-bold text-white">Cookie Policy</h1>
          </div>
          <p className="text-gray-300 text-lg">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Cookie Manager */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-2xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Settings className="text-blue-400" size={24} />
            <h2 className="text-xl font-semibold text-white">Manage Your Cookie Preferences</h2>
          </div>
          
          <div className="grid gap-4">
            {/* Necessary Cookies */}
            <div className="border border-gray-600 bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-white">Necessary Cookies</h3>
                <div className="bg-green-600 text-green-100 px-3 py-1 rounded-full text-sm font-medium">
                  Always Active
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-3">
                These cookies are essential for the website to function properly and cannot be disabled.
              </p>
              <p className="text-xs text-gray-400">
                Examples: Session management, security, load balancing, form submissions
              </p>
            </div>

            {/* Analytics Cookies */}
            <div className="border border-gray-600 bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-white">Analytics Cookies</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={cookiePreferences.analytics}
                    onChange={() => updateCookiePreference('analytics')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <p className="text-sm text-gray-300 mb-3">
                Help us understand how visitors interact with our website by collecting and reporting information.
              </p>
              <p className="text-xs text-gray-400">
                Examples: Google Analytics, page views, bounce rate, traffic sources
              </p>
            </div>

            {/* Marketing Cookies */}
            <div className="border border-gray-600 bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-white">Marketing Cookies</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={cookiePreferences.marketing}
                    onChange={() => updateCookiePreference('marketing')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <p className="text-sm text-gray-300 mb-3">
                Used to track visitors across websites to display relevant advertisements.
              </p>
              <p className="text-xs text-gray-400">
                Examples: Facebook Pixel, Google Ads, retargeting campaigns
              </p>
            </div>

            {/* Functional Cookies */}
            <div className="border border-gray-600 bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-white">Functional Cookies</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={cookiePreferences.functional}
                    onChange={() => updateCookiePreference('functional')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <p className="text-sm text-gray-300 mb-3">
                Enable enhanced functionality and personalization, such as videos and live chats.
              </p>
              <p className="text-xs text-gray-400">
                Examples: Chat widgets, video players, social media integration, language preferences
              </p>
            </div>
          </div>
        </div>

        {/* Policy Content */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-2xl p-8">
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <Info className="text-blue-400" size={24} />
                What Are Cookies?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Cookies allow us to recognize your device and store some information about your preferences or past actions 
                to enhance your browsing experience.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Cookies</h2>
              <div className="space-y-4">
                <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-white mb-2">Essential Cookies</h3>
                  <p className="text-gray-300">
                    These cookies are necessary for the website to function and cannot be switched off. 
                    They enable core functionality such as security, network management, and accessibility.
                  </p>
                </div>
                <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-white mb-2">Performance and Analytics</h3>
                  <p className="text-gray-300">
                    These cookies help us understand how visitors use our website by collecting and 
                    reporting information anonymously. This helps us improve our website's performance.
                  </p>
                </div>
                <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-white mb-2">Functionality Cookies</h3>
                  <p className="text-gray-300">
                    These cookies enable enhanced functionality and personalization features, 
                    such as remembering your preferences and providing customized content.
                  </p>
                </div>
                <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-white mb-2">Marketing and Advertising</h3>
                  <p className="text-gray-300">
                    These cookies are used to make advertising messages more relevant to you and your interests. 
                    They also perform functions like preventing the same ad from continuously reappearing.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Some of our pages may contain content from third-party services like YouTube, Facebook, or Google Maps. 
                These services may set their own cookies over which we have no control.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We recommend reviewing the privacy policies of these third-party services to understand 
                how they use cookies and other tracking technologies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Managing Your Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You can control and manage cookies in several ways:
              </p>
              <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Use the cookie preference center above to enable or disable specific types of cookies</li>
                  <li>Modify your browser settings to accept, reject, or delete cookies</li>
                  <li>Use browser extensions that block tracking cookies</li>
                  <li>Visit opt-out pages provided by advertising networks</li>
                </ul>
              </div>
              <p className="text-gray-300 leading-relaxed mt-4">
                Please note that disabling certain cookies may impact the functionality of our website 
                and your user experience.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Cookie Retention</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Cookies may be stored for different periods depending on their purpose:
              </p>
              <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><strong className="text-white">Session cookies:</strong> Deleted when you close your browser</li>
                  <li><strong className="text-white">Persistent cookies:</strong> Remain on your device for a specified period or until manually deleted</li>
                  <li><strong className="text-white">Analytics cookies:</strong> Typically retained for 2 years</li>
                  <li><strong className="text-white">Marketing cookies:</strong> Usually retained for 30 days to 2 years</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Updates to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. We encourage you to review this 
                policy periodically to stay informed about our use of cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
                <p className="text-gray-300"><strong className="text-white">Email:</strong> info@hayleysfentons.com</p>
                <p className="text-gray-300"><strong className="text-white">Phone:</strong> +94 112 102 102</p>
                <p className="text-gray-300"><strong className="text-white">Address:</strong> [Your Company Address]</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;