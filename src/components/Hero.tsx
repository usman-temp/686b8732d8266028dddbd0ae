export default function Hero() {
  return (
    <section className="relative h-[600px] bg-gradient-to-r from-orange-100 to-amber-50">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Discover Culinary Magic<br />
            <span className="text-orange-600">One Recipe at a Time</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join our community of food enthusiasts and transform your cooking journey
          </p>
          <div className="flex gap-4">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-all">
              Explore Recipes
            </button>
            <button className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50 transition-all">
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}