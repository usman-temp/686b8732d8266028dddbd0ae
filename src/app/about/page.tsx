export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Our Company</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our History</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2010, we started as a small team passionate about delivering
              quality content and recipes to food enthusiasts worldwide.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To empower home cooks and professional chefs alike with accessible,
              well-tested recipes and cooking resources.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}