import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with us to learn more about our work, partnership opportunities, or how you can support our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-green-700 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                  Subject
                </label>
                <Input id="subject" placeholder="Subject of your message" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Write your message here..."
                  rows={6}
                />
              </div>

              <Button className="w-full bg-green-700 hover:bg-green-800">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-green-700 mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                We're dedicated to transforming Kenya's agricultural landscape. Whether you're a farmer, investor, or supporter, we'd love to hear from you.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Our Location</p>
                    <p className="text-gray-600">Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Phone Number</p>
                    <p className="text-gray-600">+254 700 000000</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Email Address</p>
                    <a href="mailto:kefarmersagency@gmail.com" className="text-green-600 hover:text-green-700">
                      kefarmersagency@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <h4 className="text-xl font-bold text-green-800 mb-4">Schedule a Meeting</h4>
              <p className="text-gray-600 mb-4">
                Want to learn more about our initiatives or discuss potential collaborations? Schedule a meeting with our team.
              </p>
              <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                Request a Meeting
              </Button>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <h4 className="text-xl font-bold text-green-800 mb-4">Visit Our Facilities</h4>
              <p className="text-gray-600 mb-4">
                Experience our impact firsthand by visiting our facilities and seeing our work in action.
              </p>
              <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                Arrange a Visit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
