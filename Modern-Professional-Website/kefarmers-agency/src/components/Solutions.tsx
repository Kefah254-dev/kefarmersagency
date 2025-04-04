import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Smartphone,
  Users,
  TrendingUp,
  BarChart,
  Settings
} from 'lucide-react';

const Solutions = () => {
  return (
    <section id="solutions" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Comprehensive Solution</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We employ a multi-pronged strategy that integrates modern technology, capacity building, and robust market access to uplift smallholder farmers.
          </p>
        </div>

        <Tabs defaultValue="technology" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="technology" className="flex flex-col gap-2 py-4 data-[state=active]:bg-green-50">
              <Smartphone className="h-5 w-5" />
              <span className="text-xs md:text-sm">Technology</span>
            </TabsTrigger>
            <TabsTrigger value="communities" className="flex flex-col gap-2 py-4 data-[state=active]:bg-green-50">
              <Users className="h-5 w-5" />
              <span className="text-xs md:text-sm">Communities</span>
            </TabsTrigger>
            <TabsTrigger value="market" className="flex flex-col gap-2 py-4 data-[state=active]:bg-green-50">
              <TrendingUp className="h-5 w-5" />
              <span className="text-xs md:text-sm">Market Access</span>
            </TabsTrigger>
            <TabsTrigger value="economic" className="flex flex-col gap-2 py-4 data-[state=active]:bg-green-50">
              <BarChart className="h-5 w-5" />
              <span className="text-xs md:text-sm">Economic Impact</span>
            </TabsTrigger>
            <TabsTrigger value="tailored" className="flex flex-col gap-2 py-4 data-[state=active]:bg-green-50">
              <Settings className="h-5 w-5" />
              <span className="text-xs md:text-sm">Tailored Solutions</span>
            </TabsTrigger>
          </TabsList>

          <div className="mt-8 bg-green-50 p-6 rounded-lg">
            <TabsContent value="technology" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-green-700 mb-4">Technology Integration</h3>
                  <p className="text-gray-700 mb-6">
                    We deploy precision agriculture tools such as efficient irrigation systems, drones for crop monitoring, and mobile apps for real-time market and weather data.
                  </p>
                  <p className="text-gray-700">
                    Studies show such interventions can improve yields by 40–60%, transforming productivity and profitability for smallholder farmers.
                  </p>
                </div>
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/images/drone-crop.jpg"
                    alt="Agricultural drone technology"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="communities" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-green-700 mb-4">Empowering Communities</h3>
                  <p className="text-gray-700 mb-6">
                    Targeted training programs and microloan schemes empower youth and women—key drivers of agricultural innovation—while strengthening local economies.
                  </p>
                  <p className="text-gray-700">
                    Our community-based approach ensures that knowledge is shared and multiplied throughout farming communities.
                  </p>
                </div>
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/images/farmer-maize.jpg"
                    alt="Empowered farmer in maize field"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="market" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-green-700 mb-4">Market Access & Logistics</h3>
                  <p className="text-gray-700 mb-6">
                    We establish direct linkages between farmers and urban buyers to reduce post-harvest losses by up to 30% and boost farmers' realized prices by at least 20%.
                  </p>
                  <p className="text-gray-700">
                    Our logistics solutions include collection points and transportation networks that ensure produce reaches markets quickly and in optimal condition.
                  </p>
                </div>
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/images/farmer-tech.jpg"
                    alt="Farmer using digital technology"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="economic" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-green-700 mb-4">Government and Economic Impact</h3>
                  <p className="text-gray-700 mb-6">
                    Enhanced productivity not only improves farmer incomes but also contributes to increased tax revenues and export potential, supporting broader economic growth.
                  </p>
                  <p className="text-gray-700">
                    By strengthening food security, we reduce dependency on imports and create resilient agricultural systems.
                  </p>
                </div>
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/images/digital-farming.jpg"
                    alt="Digital farming solutions"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tailored" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-green-700 mb-4">Customized Interventions</h3>
                  <p className="text-gray-700 mb-6">
                    We tailor solutions to local contexts, ensuring that every community receives the specific support needed for sustainable impact.
                  </p>
                  <p className="text-gray-700">
                    Our approach recognizes the diversity of agricultural practices and challenges across Kenya, and adapts accordingly.
                  </p>
                </div>
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/images/solar-irrigation.jpg"
                    alt="Solar powered irrigation systems"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Solutions;
