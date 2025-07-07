import { useUserName } from '@/hooks/useUserName';

export default function AboutPage() {
  const { name, error } = useUserName();

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-gray-600 leading-relaxed">
          {name ? `Welcome, ${name}! ` : 'Welcome! '}
          We are a dedicated team committed to delivering exceptional digital
          experiences. Our mission is to create innovative solutions that
          empower businesses and individuals alike.
        </p>
        {error && (
          <p className="text-red-500 mt-4">Error loading personalized greeting</p>
        )}
      </section>
    </div>
  );
}
