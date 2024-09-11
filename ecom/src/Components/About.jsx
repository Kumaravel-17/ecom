import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            About Our E-commerce Store
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We bring the best products from around the world right to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              Our mission is to provide customers with an exceptional shopping experience by offering a
              wide range of high-quality products at competitive prices. We are committed to delivering
              top-notch service and building lasting relationships with our customers.
            </p>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900">Our Story</h3>
            <p className="mt-4 text-gray-600">
              Founded in 2020, we started as a small online shop with the vision of making shopping
              accessible, convenient, and enjoyable for everyone. Since then, we have grown into a
              full-fledged e-commerce store that offers a diverse range of products, from fashion to
              electronics.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
       
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900">Customer Focus</h3>
            <p className="mt-4 text-gray-600">
              Our customers are at the heart of everything we do. We value your feedback and strive to
              continually improve our products and services to meet your evolving needs.
            </p>
          </div>

      
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900">Quality Guarantee</h3>
            <p className="mt-4 text-gray-600">
              We stand by the quality of the products we sell. If you're not satisfied with your
              purchase, we offer hassle-free returns and a dedicated customer support team ready to
              assist you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
