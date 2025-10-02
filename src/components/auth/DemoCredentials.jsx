import { useState } from 'react'
import { FiX } from 'react-icons/fi'

function DemoCredentials() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 w-12 h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg transition-all duration-300 z-40 flex items-center justify-center"
        aria-label="Demo Credentials"
      >
        <span className="text-lg font-semibold">?</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="flex items-center justify-between p-6 border-b border-secondary-100">
              <h3 className="text-lg font-semibold text-secondary-900">Demo Credentials</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-secondary-500 hover:text-secondary-700"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              <p className="text-sm text-secondary-600 mb-4">
                Use these credentials to test the application:
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-secondary-50 rounded-lg">
                  <h4 className="font-semibold text-secondary-900 mb-2">Admin Account</h4>
                  <p className="text-sm text-secondary-700">
                    <strong>Email:</strong> admin@example.com<br />
                    <strong>Password:</strong> admin123
                  </p>
                </div>
                
                <div className="p-4 bg-secondary-50 rounded-lg">
                  <h4 className="font-semibold text-secondary-900 mb-2">Customer Account</h4>
                  <p className="text-sm text-secondary-700">
                    <strong>Email:</strong> user@example.com<br />
                    <strong>Password:</strong> user123
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default DemoCredentials