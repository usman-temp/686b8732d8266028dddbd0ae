'use client';
import { useEffect, useState } from 'react';
import ProfileForm from '@/components/ProfileForm';

export default function AboutPage() {
  const [profile, setProfile] = useState({ name: '' });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/profile');
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          About {profile.name || 'Us'}
        </h1>
        <div className="space-y-8">
          <section className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              We are {profile.name || 'a dedicated team'} committed to creating
              exceptional digital experiences. With a focus on innovation and
              user-centric design, we strive to deliver solutions that make a
              real difference.
            </p>
          </section>
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}
