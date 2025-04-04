import { Card, CardContent } from '@/components/ui/card';

const Impact = () => {
  const keyMetrics = [
    {
      figure: '85%',
      label: 'Smallholder Contribution',
      description: "Kenya's food production sourced from smallholder farmers"
    },
    {
      figure: '3.2M+',
      label: 'People Affected',
      description: 'Kenyans affected by drought annually'
    },
    {
      figure: '$12.5B',
      label: 'Annual Losses',
      description: 'Due to drought and climate challenges'
    },
    {
      figure: '30%',
      label: 'Post-Harvest Reduction',
      description: 'Reduction in losses through our interventions'
    }
  ];

  return (
    <section id="impact" className="py-16 md:py-24 bg-green-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-lg text-green-100 max-w-3xl mx-auto">
            We're making a significant difference in Kenya's agricultural sector through data-driven approaches and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyMetrics.map((metric) => (
            <Card key={metric.label} className="bg-white/10 border-green-600 backdrop-blur-sm hover:bg-white/15 transition-colors">
              <CardContent className="p-6 text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{metric.figure}</p>
                <h3 className="text-xl font-semibold mb-2 text-green-100">{metric.label}</h3>
                <p className="text-green-200 text-sm">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-green-800 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Technological Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-300" />
                  <span>Mobile-based interventions have reduced post-harvest losses by 25–30%</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-300" />
                  <span>Increased market prices by up to 20% through direct market linkages</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-300" />
                  <span>Yield improvements averaging 45% through improved farming practices</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-300" />
                  <span>Income boosts of 30–50% for participating farmers</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Community Reach</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-300" />
                  <span>Serving approximately 35,000 farming households in Nairobi County</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-300" />
                  <span>Targeting at least 2,500 smallholder farmers by 2025</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-300" />
                  <span>Training over 1,200 farmers annually in climate-smart agriculture</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-300" />
                  <span>Empowering women and youth through targeted training programs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Looking Ahead</h3>
          <p className="text-green-100 max-w-3xl mx-auto">
            Our projections for 2023–2027 are based on current trends in Kenya's agricultural performance and reflect a realistic growth trajectory. With your support, we aim to expand our reach, enhance our technology platform, and further empower Kenya's smallholder farmers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Impact;
