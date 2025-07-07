import { useState } from 'react';
import FadeIn from '@/components/Animations/FadeIn';
import ResponsiveContainer from '@/components/Animations/ResponsiveContainer';

export default function AboutPage() {
  const [showName, setShowName] = useState(false);

  return (
    <ResponsiveContainer>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">About Us</h1>
        <button
          onClick={() => setShowName(!showName)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Reveal author information"
        >
          Meet the Author
        </button>

        <FadeIn isVisible={showName} className="mt-6">
          <div className="text-center">
            <p className="text-2xl font-semibold text-gray-800">
              Crafted with ❤️ by
              <span className="block mt-2 text-3xl text-blue-600" role="alert">
                John Doe
              </span>
            </p>
            <p className="mt-4 text-gray-600 max-w-md">
              Passionate developer creating meaningful web experiences
            </p>
          </div>
        </FadeIn>
      </div>
    </ResponsiveContainer>
  );
}
