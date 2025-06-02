import { useState } from 'react';
import  QuoteForm  from '../components/QuoteForm';
import  PriceCalculator  from '../components/PriceCalculator';

const initialQuoteData = {
  quantity: 1000,
  packagingType: 'boxes',
  dimensions: '',
  material: 'cardboard',
  specialRequirements: ''
};

export const RequestQuote = () => {
  const [quoteData, setQuoteData] = useState(initialQuoteData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuoteData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Get a Quote</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Receive a customized pricing estimate for your packaging needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Quote Details</h2>
            <QuoteForm 
              quoteData={quoteData}
              handleChange={handleChange}
            />
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Price Estimate</h2>
            <PriceCalculator quoteData={quoteData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;