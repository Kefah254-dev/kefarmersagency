import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { RocketIcon, BarChart3Icon, ZapIcon } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">About KEFARMERS AGENCY LTD</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a forward-thinking startup dedicated to transforming Kenya's agricultural landscape by empowering smallholder farmers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-green-700 mb-4">Our Vision</h3>
            <p className="text-gray-700 mb-6">
              To bridge the gap between rural farms and urban markets—driving yield improvements, increasing incomes, and bolstering food security across Kenya.
            </p>

            <h3 className="text-2xl font-bold text-green-700 mb-4">Our Approach</h3>
            <p className="text-gray-700 mb-6">
              We integrate modern technology, capacity building, and robust market access to uplift smallholder farmers who are responsible for roughly 85% of the nation's food supply.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <Card className="border-green-100">
                <CardContent className="pt-6">
                  <div className="mb-4 bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <RocketIcon className="h-6 w-6 text-green-700" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">45%</h4>
                  <p className="text-gray-600 text-sm">Average yield improvement in our pilot initiatives</p>
                </CardContent>
              </Card>

              <Card className="border-green-100">
                <CardContent className="pt-6">
                  <div className="mb-4 bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <BarChart3Icon className="h-6 w-6 text-green-700" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">30-50%</h4>
                  <p className="text-gray-600 text-sm">Income boosts for participating farmers</p>
                </CardContent>
              </Card>

              <Card className="border-green-100">
                <CardContent className="pt-6">
                  <div className="mb-4 bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <ZapIcon className="h-6 w-6 text-green-700" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">35,000</h4>
                  <p className="text-gray-600 text-sm">Farming households served in Nairobi County</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/tech-woman.jpg"
              alt="Woman using agricultural technology in Kenya"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
