import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const Skill = ({ name, percentage }) => {
  return (
    <div className="skill-item group relative">
      <div className="relative flex flex-col items-center justify-center">
        <div className="w-24 h-24 rounded-full border-2 border-gray-700 group-hover:border-amber-500 flex items-center justify-center transition-all duration-300 bg-gray-800 group-hover:bg-gray-700 relative overflow-hidden">
          <div 
            className="absolute bottom-0 left-0 w-full bg-amber-500 transition-all duration-300"
            style={{ height: `${percentage}%` }}
          ></div>
          <span className="relative z-10 font-semibold text-white">{percentage}%</span>
        </div>
        <span className="mt-3 text-sm font-medium text-gray-300 group-hover:text-amber-500 transition-colors duration-300">
          {name}
        </span>
      </div>
    </div>
  );
};

export const Skills = () => {
  const [skills, setSkills] = useState([
    { name: 'React', percentage: 25 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'HTML5', percentage: 95 },
    { name: 'SCSS', percentage: 80 },
    { name: 'Python', percentage: 75 },
    { name: 'Git', percentage: 95 },
  ]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchSkills = async () => {
      try {
        const { data, error: supabaseError } = await supabase
          .from('skills')
          .select('name, percentage')
          .order('created_at', { ascending: true });
          
        if (supabaseError) {
          throw supabaseError;
        }

        if (data && data.length > 0 && isMounted) {
          setSkills(data);
          setError(null);
        }
      } catch (err) {
        console.error('Error fetching skills:', err);
        if (isMounted) {
          setError('Failed to load skills. Using default data.');
        }
      }
    };

    fetchSkills();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            MY <span className="text-amber-500">SKILLS</span>
          </h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto mt-4"></div>
          {error && (
            <p className="text-amber-500 mt-4 text-sm">{error}</p>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <Skill key={index} name={skill.name} percentage={skill.percentage} />
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="#portfolio" 
            className="inline-block px-8 py-3 bg-amber-500 text-gray-900 font-medium rounded-lg hover:bg-amber-600 transition-colors duration-300"
          >
            See My Work
          </a>
        </div>
      </div>
    </section>
  );
};