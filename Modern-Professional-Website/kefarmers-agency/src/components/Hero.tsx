import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-image.jpg"
          alt="Kenyan agriculture landscape"
          fill
          priority
          className="object-cover brightness-75"
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Pioneering a New Era in
            <span className="text-green-300"> Agriculture</span> in Kenya
          </h1>

          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Transforming Kenya's agricultural landscape by empowering smallholder farmers with quality inputs, modern technology, and direct market linkages.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Learn More
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20">
              Support Our Mission
            </Button>
          </div>

          <div className="mt-12 p-4 bg-black/30 backdrop-blur-sm rounded-lg">
            <p className="text-green-200 font-medium">
              Smallholder farmers account for over 85% of Kenya's food production and serve approximately 35,000 farming households in Nairobi County.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
