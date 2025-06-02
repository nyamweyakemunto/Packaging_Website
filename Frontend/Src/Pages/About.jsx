import TeamMember from '../components/TeamMember.jsx';
import Stats from "../components/Stats.jsx";

export const About = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Stats Section - Placed at the top for better visibility */}
      <Stats />

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Boma Packaging</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering innovative packaging solutions since 2018
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative rounded-xl overflow-hidden h-80 md:h-auto">
            <img 
              src="/images/about/warehouse.jpg" 
              alt="Our facility" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To provide sustainable, cost-effective packaging solutions that help businesses
              reduce their environmental impact while maintaining product integrity.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TeamMember 
              name="Hellen Musunji"
              role="CEO & Founder"
              image="/images/team/ceo.jpg"
            />
            <TeamMember 
              name="Marion Kemunto"
              role="Operations Manager"
              image="/images/team/operations.jpg"
            />
            <TeamMember 
              name="Emma Wilson"
              role="Design Director"
              image="/images/team/design.jpg"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 p-8 rounded-xl mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">Eco-friendly materials and processes</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Cutting-edge packaging solutions</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">Premium materials & craftsmanship</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;