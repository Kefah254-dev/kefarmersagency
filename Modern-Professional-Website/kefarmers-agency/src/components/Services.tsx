import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Leaf,
  GraduationCap,
  ShoppingBag,
  Smartphone,
  Wallet
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'input-supply',
      icon: <Leaf className="h-10 w-10 text-green-600" />,
      title: "Affordable Input Supply",
      description: "Supply high-quality, climate-resilient seedlings and subsidized fertilizers with strict quality controls. We offer flexible payment plans and microcredit options to make inputs accessible."
    },
    {
      id: 'training',
      icon: <GraduationCap className="h-10 w-10 text-green-600" />,
      title: "Agricultural Training & Extension",
      description: "Deliver hands-on workshops in modern, sustainable farming practices using a village-based advisor model. We leverage mobile platforms to provide ongoing digital training and support."
    },
    {
      id: 'market-access',
      icon: <ShoppingBag className="h-10 w-10 text-green-600" />,
      title: "Market Access & Logistics",
      description: "Facilitate direct market linkages to secure fair prices and reduce intermediaries. We establish collection hubs to consolidate produce and enhance bargaining power."
    },
    {
      id: 'technology',
      icon: <Smartphone className="h-10 w-10 text-green-600" />,
      title: "Technology Integration",
      description: "Launch a user-friendly mobile application that provides real-time market data, weather updates, and expert agricultural advice. We provide continuous technical support to accommodate varying levels of digital literacy."
    },
    {
      id: 'financial',
      icon: <Wallet className="h-10 w-10 text-green-600" />,
      title: "Financial Empowerment",
      description: "Offer microloans, financial literacy training, and flexible credit schemes that improve financial independence for farmers."
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-green-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-green-100 max-w-3xl mx-auto">
            We offer a comprehensive suite of services designed to address the challenges faced by smallholder farmers in Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="bg-white/10 backdrop-blur-sm border-green-800 hover:bg-white/15 transition-colors">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-green-100">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-green-800 p-8 rounded-lg">
          <div>
            <h3 className="text-2xl font-bold mb-4">Targeted Farmer Reach</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-300" />
                <span>Approximately 35,000 farming households in Nairobi County</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-300" />
                <span>Target to reach at least 2,500 smallholder farmers by 2025</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-300" />
                <span>Pilot programs have recorded yield improvements of 40–60%</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-300" />
                <span>Income boosts of 30–50% for participating farmers</span>
              </li>
            </ul>
          </div>
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <Image
              src="/images/farmer-mobile.jpg"
              alt="Farmer using mobile technology"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
