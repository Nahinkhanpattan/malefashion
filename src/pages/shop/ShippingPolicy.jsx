import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight, FiTruck, FiClock, FiMapPin } from 'react-icons/fi'

function ShippingPolicy() {
  useEffect(() => {
    document.title = 'Shipping Policy - MaleFashion'
  }, [])

  return (
    <div className="pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="bg-secondary-50 py-5 mb-8">
        <div className="container">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-secondary-500 hover:text-primary-500">Home</Link>
            <FiChevronRight className="mx-2 text-secondary-400" />
            <span className="text-secondary-900">Shipping Policy</span>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-secondary-900 mb-8">Shipping Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-secondary-600 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Shipping & Delivery Policy</h2>
                <p className="text-secondary-700 mb-2">Last updated on Sep 25 2025</p>
                <p className="text-secondary-700 mb-4">
                  For International buyers, orders are shipped and delivered through registered international courier companies and/or International speed post only. For domestic buyers, orders are shipped through registered domestic courier companies and/or speed post only. Orders are shipped within 0-7 days or as per the delivery date agreed at the time of order confirmation and delivering of the shipment subject to Courier Company / post office norms. We are not liable for any delay in delivery by the courier company / postal authorities and only guarantee to hand over the consignment to the courier company or postal authorities within 0-7 days from the date of the order and payment or as per the delivery date agreed at the time of order confirmation. Delivery of all orders will be to the address provided by the buyer. Delivery of our services will be confirmed on your mail ID as specified during registration. For any issues in utilizing our services you may contact our helpdesk on 6305260604 or nahinkhanpattan@gmail.com
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">1. Shipping Methods & Delivery Times</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="border border-secondary-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <FiTruck className="w-8 h-8 text-primary-500 mr-3" />
                      <h3 className="text-lg font-semibold text-secondary-900">Standard Shipping</h3>
                    </div>
                    <p className="text-secondary-700 mb-2">₹99 - Free on orders over ₹999</p>
                    <p className="text-secondary-600">3-5 business days</p>
                  </div>
                  
                  <div className="border border-secondary-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <FiClock className="w-8 h-8 text-accent-500 mr-3" />
                      <h3 className="text-lg font-semibold text-secondary-900">Express Shipping</h3>
                    </div>
                    <p className="text-secondary-700 mb-2">₹199</p>
                    <p className="text-secondary-600">1-2 business days</p>
                  </div>
                  
                  <div className="border border-secondary-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <FiMapPin className="w-8 h-8 text-success-500 mr-3" />
                      <h3 className="text-lg font-semibold text-secondary-900">Same Day Delivery</h3>
                    </div>
                    <p className="text-secondary-700 mb-2">₹299</p>
                    <p className="text-secondary-600">Available in select cities</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">2. Processing Time</h2>
                <p className="text-secondary-700 mb-4">
                  All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays.
                </p>
                <p className="text-secondary-700">
                  If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">3. Shipping Locations</h2>
                <p className="text-secondary-700 mb-4">
                  We currently ship to all locations within India. International shipping is not available at this time.
                </p>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Serviceable Areas:</h3>
                <ul className="list-disc pl-6 text-secondary-700 space-y-2">
                  <li>All major cities and towns across India</li>
                  <li>Remote areas (additional 2-3 days for delivery)</li>
                  <li>Pin codes covered by our logistics partners</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">4. Shipping Costs</h2>
                <div className="bg-secondary-50 p-6 rounded-lg mb-4">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-3">Free Shipping Eligibility:</h3>
                  <p className="text-secondary-700">
                    Enjoy free standard shipping on all orders above ₹999. For orders below ₹999, standard shipping charges of ₹99 apply.
                  </p>
                </div>
                
                <p className="text-secondary-700">
                  Shipping costs are calculated based on the weight and dimensions of your order, as well as your delivery location. The exact shipping cost will be displayed at checkout before you complete your purchase.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">5. Order Tracking</h2>
                <p className="text-secondary-700 mb-4">
                  Once your order has shipped, you will receive a shipping confirmation email with a tracking number. You can track your package using this number on our website or the carrier's website.
                </p>
                <p className="text-secondary-700">
                  Please allow 24 hours for tracking information to become available after receiving your shipping confirmation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">6. Delivery Issues</h2>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Failed Delivery Attempts:</h3>
                <ul className="list-disc pl-6 text-secondary-700 space-y-2 mb-4">
                  <li>Our delivery partner will attempt delivery 3 times</li>
                  <li>If delivery fails, the package will be returned to our warehouse</li>
                  <li>You will be notified via SMS/email about failed delivery attempts</li>
                  <li>Redelivery charges may apply for subsequent delivery attempts</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Damaged or Lost Packages:</h3>
                <p className="text-secondary-700">
                  If your package arrives damaged or is lost in transit, please contact our customer service team within 48 hours of delivery (or expected delivery date for lost packages). We will investigate and provide a replacement or refund as appropriate.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">7. Undeliverable/RTO (Return to Origin)</h2>
                <p className="text-secondary-700 mb-4">
                  If an order is returned to us due to an incorrect address, unreachable customer, or repeated failed delivery attempts, it will be marked as RTO. We can reship the order upon request after collecting applicable re-shipping charges.
                </p>
                <p className="text-secondary-700">
                  If you prefer a refund for an RTO order, the refund will be issued to the original payment method via Razorpay, excluding shipping charges.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">7. Address Changes</h2>
                <p className="text-secondary-700 mb-4">
                  Address changes can only be made before your order has been shipped. Once shipped, we cannot modify the delivery address.
                </p>
                <p className="text-secondary-700">
                  Please ensure your shipping address is correct at the time of purchase. We are not responsible for packages delivered to incorrect addresses provided by the customer.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">8. Address Accuracy & Customer Responsibility</h2>
                <p className="text-secondary-700 mb-4">
                  Please ensure that your shipping address and contact number are accurate and complete at checkout. We are not responsible for non-delivery due to errors or omissions in the address provided by the customer.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">9. Special Circumstances</h2>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Weather and Natural Disasters:</h3>
                <p className="text-secondary-700 mb-4">
                  Delivery times may be extended due to severe weather conditions, natural disasters, or other circumstances beyond our control.
                </p>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Peak Season:</h3>
                <p className="text-secondary-700">
                  During peak shopping seasons (festivals, sales events), delivery times may be extended due to high order volumes. We will notify customers of any expected delays.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">10. Contact Information</h2>
                <p className="text-secondary-700">
                  For any shipping-related questions or concerns, please contact us:
                </p>
                <div className="mt-4 p-4 bg-secondary-50 rounded-lg">
                  <p className="text-secondary-700">
                    <strong>Email:</strong> nahinkhanpattan@gmail.com<br />
                    <strong>Phone:</strong> (+91) 63052 60604<br />
                    <strong>Customer Service Hours:</strong> Monday - Saturday, 9:00 AM - 6:00 PM IST<br />
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

export default ShippingPolicy