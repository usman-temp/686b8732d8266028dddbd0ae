import FadeIn from './Animations/FadeIn';
import SlideUp from './Animations/SlideUp';
import ResponsiveContainer from './Animations/ResponsiveContainer';

export default function Hero() {
  return (
    <ResponsiveContainer>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
        <FadeIn>
          <SlideUp>
            <h1 className="text-6xl font-bold text-white text-center">
              Smooth Animations
              <span className="block mt-4 text-2xl font-light">
                60 FPS Guaranteed
              </span>
            </h1>
          </SlideUp>
        </FadeIn>
      </div>
    </ResponsiveContainer>
  );
}