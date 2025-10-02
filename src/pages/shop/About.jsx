import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight, FiUsers, FiAward, FiTruck, FiHeart } from 'react-icons/fi'

function About() {
  useEffect(() => {
    document.title = 'About Us - MaleFashion'
  }, [])

  return (
    <div className="pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="bg-secondary-50 py-5 mb-8">
        <div className="container">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-secondary-500 hover:text-primary-500">Home</Link>
            <FiChevronRight className="mx-2 text-secondary-400" />
            <span className="text-secondary-900">About Us</span>
          </div>
        </div>
      </div>
      
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-secondary-900 mb-6">About MaleFashion</h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            We are passionate about creating premium men's clothing that combines timeless style with modern comfort. 
            Our mission is to help every man look and feel his best.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img 
              src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Our Story" 
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-secondary-900 mb-6">Our Story</h2>
            <p className="text-secondary-700 mb-4">
              Founded with a vision to revolutionize men's fashion, MaleFashion has been at the forefront of creating 
              exceptional clothing that speaks to the modern man's lifestyle. We believe that great style should be 
              accessible, comfortable, and sustainable.
            </p>
            <p className="text-secondary-700 mb-4">
              From our humble beginnings to becoming a trusted name in men's fashion, we've maintained our commitment 
              to quality craftsmanship, innovative design, and customer satisfaction.
            </p>
            <p className="text-secondary-700">
              Every piece in our collection is carefully curated and designed to help you express your unique style 
              while ensuring maximum comfort and durability.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-secondary-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiAward className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Quality</h3>
              <p className="text-secondary-600">
                We use only the finest materials and employ skilled craftsmen to ensure every product meets our high standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Community</h3>
              <p className="text-secondary-600">
                We believe in building a community of style-conscious men who appreciate quality and craftsmanship.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiTruck className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Service</h3>
              <p className="text-secondary-600">
                From fast shipping to exceptional customer support, we're committed to providing an outstanding experience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiHeart className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Passion</h3>
              <p className="text-secondary-600">
                Fashion is our passion, and we pour our heart into every design, ensuring you get clothing you'll love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
