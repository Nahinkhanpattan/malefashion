import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy - MaleFashion'
  }, [])

  return (
    <div className="pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="bg-secondary-50 py-5 mb-8">
        <div className="container">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-secondary-500 hover:text-primary-500">Home</Link>
            <FiChevronRight className="mx-2 text-secondary-400" />
            <span className="text-secondary-900">Privacy Policy</span>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-secondary-900 mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-secondary-600 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Privacy Policy</h2>
                <p className="text-secondary-700 mb-2">Last updated on Sep 25 2025</p>
                <p className="text-secondary-700 mb-4">
                  This privacy policy sets out how we use and protect any information that you give us when you visit our website and/or agree to purchase from us.
                </p>
                <p className="text-secondary-700 mb-4">
                  MaleFashion is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.
                </p>
                <p className="text-secondary-700 mb-4">
                  We may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you adhere to these changes.
                </p>

                <h3 className="text-xl font-semibold text-secondary-900 mb-3">We may collect the following information:</h3>
                <ul className="list-disc pl-6 text-secondary-700 space-y-2 mb-4">
                  <li>Name</li>
                  <li>Contact information including email address</li>
                  <li>Demographic information such as postcode, preferences and interests, if required</li>
                  <li>Other information relevant to customer surveys and/or offers</li>
                </ul>

                <h3 className="text-xl font-semibold text-secondary-900 mb-3">What we do with the information we gather</h3>
                <ul className="list-disc pl-6 text-secondary-700 space-y-2 mb-4">
                  <li>Internal record keeping.</li>
                  <li>We may use the information to improve our products and services.</li>
                  <li>We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.</li>
                  <li>From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customise the website according to your interests.</li>
                  <li>We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure we have put in suitable measures.</li>
                </ul>

                <h3 className="text-xl font-semibold text-secondary-900 mb-3">How we use cookies</h3>
                <p className="text-secondary-700 mb-4">
                  A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.
                </p>
                <p className="text-secondary-700 mb-4">
                  We use traffic log cookies to identify which pages are being used. This helps us analyze data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.
                </p>
                <p className="text-secondary-700 mb-4">
                  Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.
                </p>
                <p className="text-secondary-700 mb-4">
                  You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
                </p>

                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Controlling your personal information</h3>
                <ul className="list-disc pl-6 text-secondary-700 space-y-2 mb-4">
                  <li>Whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes.</li>
                  <li>If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at <strong>nahinkhanpattan@gmail.com</strong>.</li>
                </ul>
                <p className="text-secondary-700 mb-4">
                  We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
                </p>
                <p className="text-secondary-700">
                  If you believe that any information we are holding on you is incorrect or incomplete, please write to <strong>Nallacheruvu Guntur ANDHRA PRADESH 522003</strong> or contact us at <strong>6305260604</strong> or <strong>nahinkhanpattan@gmail.com</strong> as soon as possible. We will promptly correct any information found to be incorrect.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">1. Introduction</h2>
                <p className="text-secondary-700 mb-4">
                  MaleFashion ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by MaleFashion.
                </p>
                <p className="text-secondary-700">
                  This Privacy Policy applies to our website, and its associated subdomains (collectively, our "Service") alongside our application, MaleFashion. By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Information you provide to us</h3>
                <ul className="list-disc pl-6 text-secondary-700 space-y-2 mb-4">
                  <li>Account information (name, email address, password)</li>
                  <li>Profile information (phone number, address, preferences)</li>
                  <li>Payment information (credit card details, billing address)</li>
                  <li>Communication data (messages, feedback, support requests)</li>
                  <li>Order information (purchase history, shipping details)</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Information we collect automatically</h3>
                <ul className="list-disc pl-6 text-secondary-700 space-y-2">
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Usage data (pages visited, time spent, click patterns)</li>
                  <li>Location information (general geographic location)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-secondary-700 mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-secondary-700 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices, updates, security alerts</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Communicate with you about products, services, offers, and events</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, investigate and prevent fraudulent transactions</li>
                  <li>Personalize and improve your experience</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-secondary-700 mb-4">We may share your information in the following situations:</p>
                <ul className="list-disc pl-6 text-secondary-700 space-y-2">
                  <li><strong>With service providers:</strong> We share information with third-party vendors who perform services on our behalf</li>
                  <li><strong>For legal reasons:</strong> We may disclose information if required by law or to protect our rights</li>
                  <li><strong>Business transfers:</strong> Information may be transferred in connection with a merger or acquisition</li>
                  <li><strong>With your consent:</strong> We may share information with your explicit consent</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">5. Data Security</h2>
                <p className="text-secondary-700 mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p className="text-secondary-700">
                  However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">6. Data Retention</h2>
                <p className="text-secondary-700">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">7. Your Rights</h2>
                <p className="text-secondary-700 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-secondary-700 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Delete your personal information</li>
                  <li>Object to processing of your information</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">8. Cookies</h2>
                <p className="text-secondary-700 mb-4">
                  We use cookies and similar tracking technologies to collect and use personal information about you. You can control cookies through your browser settings and other tools.
                </p>
                <p className="text-secondary-700">
                  For more detailed information about the cookies we use, please refer to our Cookie Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">9. Children's Privacy</h2>
                <p className="text-secondary-700">
                  Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">10. Changes to This Privacy Policy</h2>
                <p className="text-secondary-700">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">11. Grievance Officer (India)</h2>
                <p className="text-secondary-700 mb-4">
                  In accordance with the Information Technology Act, 2000 and the rules made thereunder, our Grievance Officer is:
                </p>
                <div className="mt-4 p-4 bg-secondary-50 rounded-lg">
                  <p className="text-secondary-700">
                    <strong>Name:</strong> Nahin Khan Pattan<br />
                    <strong>Email:</strong> nahinkhanpattan@gmail.com<br />
                    <strong>Phone:</strong> (+91) 63052 60604<br />
                    <strong>Address:</strong> Guntur, Andhra Pradesh, India
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">12. Contact Us</h2>
                <p className="text-secondary-700">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="mt-4 p-4 bg-secondary-50 rounded-lg">
                  <p className="text-secondary-700">
                    <strong>Email:</strong> nahinkhanpattan@gmail.com<br />
                    <strong>Phone:</strong> (+91) 63052 60604<br />
                    <strong>Address:</strong> Guntur, Andhra Pradesh, India
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy