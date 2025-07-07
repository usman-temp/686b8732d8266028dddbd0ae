import { ReactNode } from 'react';

export default function ResponsiveContainer({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full overflow-hidden transition-all duration-300 ease-in-out transform-gpu hover:scale-[0.98] hover:saturate-[0.9] lg:hover:scale-100">
      <div className="max-w-[100vw] mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}