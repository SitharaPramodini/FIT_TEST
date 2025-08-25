import React from 'react';
import { Shield, Mail, FileText, Clock, ArrowUp } from 'lucide-react';

const PrivacyPolicy = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-10 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Shield className="w-8 h-8 text-orange-400" />
              <div>
                <h1 className="text-3xl font-bold text-white">FentonsIT</h1>
                <p className="text-gray-300 mt-1">Privacy Policy</p>
              </div>
            </div>
            <div className="hidden md:flex items-center text-sm text-gray-300">
              <Clock className="w-4 h-4 mr-2" />
              <span>Last updated: 2025/06/18</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Introduction */}
        <div className="bg-gray-800 rounded-lg p-8 mb-8 border border-gray-700">
          <div className="flex items-start space-x-4">
            <FileText className="w-8 h-8 text-orange-400 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You respond to our advertisements and tells You about Your privacy rights and how the law protects You. We use Your Personal Data to contact and support you, as well as to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Table of Contents</h3>
          <nav className="space-y-2">
            <a href="#interpretation" className="block text-orange-400 hover:text-orange-300 transition-colors">1. Interpretation and Definitions</a>
            <a href="#collecting" className="block text-orange-400 hover:text-orange-300 transition-colors">2. Collecting and Using Your Personal Data</a>
            <a href="#retention" className="block text-orange-400 hover:text-orange-300 transition-colors">3. Retention of Your Personal Data</a>
            <a href="#transfer" className="block text-orange-400 hover:text-orange-300 transition-colors">4. Transfer of Your Personal Data</a>
            <a href="#disclosure" className="block text-orange-400 hover:text-orange-300 transition-colors">5. Disclosure of Your Personal Data</a>
            <a href="#security" className="block text-orange-400 hover:text-orange-300 transition-colors">6. Security of Your Personal Data</a>
            <a href="#links" className="block text-orange-400 hover:text-orange-300 transition-colors">7. Links to Other Websites</a>
            <a href="#changes" className="block text-orange-400 hover:text-orange-300 transition-colors">8. Changes to this Privacy Policy</a>
            <a href="#contact" className="block text-orange-400 hover:text-orange-300 transition-colors">9. Contact Us</a>
          </nav>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          
          {/* Interpretation and Definitions */}
          <section id="interpretation" className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Interpretation and Definitions</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">Interpretation</h3>
              <p className="text-gray-300 leading-relaxed">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Definitions</h3>
              <p className="text-gray-300 mb-4">For the purposes of this Privacy Policy:</p>
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-300"><strong className="text-white">Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Hayleys Fentons Limited.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-300"><strong className="text-white">Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-300"><strong className="text-white">Personal Data</strong> is any information that relates to an identified or identifiable individual.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-300"><strong className="text-white">Service</strong> refers to the advertisement, website, or application.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-300"><strong className="text-white">Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-300"><strong className="text-white">Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-300"><strong className="text-white">You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Collecting and Using Your Personal Data */}
          <section id="collecting" className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Collecting and Using Your Personal Data</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">Types of Data Collected</h3>
              <h4 className="text-lg font-semibold text-orange-400 mb-3">Personal Data</h4>
              <p className="text-gray-300 mb-4">
                While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
              </p>
              <ul className="space-y-2 text-gray-300 ml-6">
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>First name and last name</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Email address</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Phone number</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Location details such as your address, city, or country</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Any other data such as personal preferences, requirements, or comments</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">Use of Your Personal Data</h3>
              <p className="text-gray-300 mb-4">The Company may use Personal Data for the following purposes:</p>
              <div className="space-y-3">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-300"><strong className="text-orange-400">To provide and maintain our Service:</strong> including to monitor the usage of our Service.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-300"><strong className="text-orange-400">To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-300"><strong className="text-orange-400">For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-300"><strong className="text-orange-400">To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-300"><strong className="text-orange-400">To provide You with news and offers:</strong> To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-300"><strong className="text-orange-400">To manage Your requests:</strong> To attend and manage Your requests to Us.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-300"><strong className="text-orange-400">For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-300"><strong className="text-orange-400">For other purposes:</strong> We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Sharing Your Personal Information</h3>
              <p className="text-gray-300 mb-4">We may share Your personal information in the following situations:</p>
              <div className="space-y-3">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-300"><strong className="text-orange-400">With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-300"><strong className="text-orange-400">For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-300"><strong className="text-orange-400">With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-300"><strong className="text-orange-400">With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-300"><strong className="text-orange-400">With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-300"><strong className="text-orange-400">With Your consent:</strong> We may disclose Your personal information for any other purpose with Your consent.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Retention */}
          <section id="retention" className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Retention of Your Personal Data</h2>
            <p className="text-gray-300 leading-relaxed">
              The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies. The Company will also retain Usage Data for internal analysis purposes.
            </p>
          </section>

          {/* Transfer */}
          <section id="transfer" className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Transfer of Your Personal Data</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
            </p>
          </section>

          {/* Disclosure */}
          <section id="disclosure" className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Disclosure of Your Personal Data</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">Law Enforcement</h3>
              <p className="text-gray-300 leading-relaxed">
                Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Other Legal Requirements</h3>
              <p className="text-gray-300 mb-4">The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
              <ul className="space-y-2 text-gray-300 ml-6">
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Comply with a legal obligation</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Protect and defend the rights or property of the Company</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Prevent or investigate possible wrongdoing in connection with the Service</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Protect the personal safety of Users of the Service or the public</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Protect against legal liability</li>
              </ul>
            </div>
          </section>

          {/* Security */}
          <section id="security" className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Security of Your Personal Data</h2>
            <div className="bg-amber-900 border border-amber-700 rounded-lg p-4 mb-4">
              <p className="text-amber-200">
                <strong>Important:</strong> The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure.
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed">
              While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
            </p>
          </section>

          {/* Links */}
          <section id="links" className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Links to Other Websites</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
            </p>
          </section>

          {/* Changes */}
          <section id="changes" className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Changes to this Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
            <div className="bg-orange-900 border border-orange-700 rounded-lg p-4">
              <p className="text-orange-200">
                <strong>Last Updated:</strong> This Privacy Policy was last updated on 2025/06/18 10:17:04
              </p>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="bg-gray-700 rounded-lg p-8 border border-gray-700">
            <div className="flex items-start space-x-4">
              <Mail className="w-8 h-8 text-orange-400 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-200 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, You can contact us via email at:
                </p>
                <a href="mailto:info@hayleysfentons.com" className="inline-flex items-center bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  <Mail className="w-4 h-4 mr-2" />
                  info@hayleysfentons.com
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Scroll to Top Button */}
        {/* <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-400 text-white p-3 rounded-full shadow-lg transition-colors z-10"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button> */}

      </main>

      
    </div>
  );
};

export default PrivacyPolicy;