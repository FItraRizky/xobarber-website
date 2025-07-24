import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Scissors, Clock, Star, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Classic Haircut',
      description: 'Potongan rambut klasik yang timeless dan elegan. Cocok untuk berbagai acara formal maupun casual.',
      price: 35000,
      duration: '30 menit',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Konsultasi gaya', 'Shampooing', 'Styling', 'Hair tonic']
    },
    {
      id: 2,
      title: 'Modern Fade',
      description: 'Potongan fade modern dengan gradasi halus. Memberikan kesan fresh dan kekinian.',
      price: 45000,
      duration: '45 menit',
      image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Fade cut', 'Beard trim', 'Styling', 'Aftercare']
    },
    {
      id: 3,
      title: 'Beard Grooming',
      description: 'Perawatan jenggot profesional dengan teknik cukur tradisional dan modern.',
      price: 25000,
      duration: '20 menit',
      image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Beard shaping', 'Hot towel', 'Beard oil', 'Styling']
    },
    {
      id: 4,
      title: 'Hair Tattoo',
      description: 'Desain artistik pada rambut dengan pola unik sesuai keinginan Anda.',
      price: 75000,
      duration: '60 menit',
      image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Custom design', 'Precision cutting', 'Detailing', 'Photo session']
    },
    {
      id: 5,
      title: 'Facial Treatment',
      description: 'Perawatan wajah lengkap untuk kulit sehat dan bersih.',
      price: 50000,
      duration: '45 menit',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Deep cleansing', 'Exfoliation', 'Mask treatment', 'Moisturizing']
    },
    {
      id: 6,
      title: 'Hair Wash & Styling',
      description: 'Cuci rambut dengan shampo premium dan styling sesuai keinginan.',
      price: 20000,
      duration: '25 menit',
      image: 'https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Premium shampoo', 'Conditioning', 'Blow dry', 'Styling']
    },
    {
      id: 7,
      title: 'Complete Grooming',
      description: 'Paket lengkap grooming untuk penampilan maksimal.',
      price: 85000,
      duration: '90 menit',
      image: 'https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Haircut', 'Beard grooming', 'Facial', 'Hair styling']
    },
    {
      id: 8,
      title: 'Kids Haircut',
      description: 'Potongan rambut khusus untuk anak-anak dengan suasana yang menyenangkan.',
      price: 30000,
      duration: '30 menit',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      features: ['Kid-friendly approach', 'Fun atmosphere', 'Quick service', 'Styling']
    }
  ];

  const packages = [
    {
      name: 'Paket Hemat',
      description: 'Haircut + Beard Grooming',
      originalPrice: 60000,
      discountPrice: 50000,
      savings: 10000
    },
    {
      name: 'Paket Premium',
      description: 'Haircut + Facial + Styling',
      originalPrice: 105000,
      discountPrice: 85000,
      savings: 20000
    },
    {
      name: 'Paket Ultimate',
      description: 'Complete Grooming + Hair Tattoo',
      originalPrice: 160000,
      discountPrice: 130000,
      savings: 30000
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dark via-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-barlow font-bold text-5xl md:text-6xl mb-6">
              Layanan <span className="text-gold">Premium</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Berbagai layanan grooming profesional dengan teknologi modern dan teknik terbaik untuk penampilan maksimal Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-barlow font-bold text-4xl text-dark mb-4">
              Pilih Layanan Favorit Anda
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Setiap layanan dikerjakan oleh barberman berpengalaman dengan peralatan berkualitas tinggi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-center mb-6">
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-bold text-xl text-dark mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-gold mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-2xl text-dark">
                        Rp {service.price.toLocaleString('id-ID')}
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    to="/booking"
                    state={{ selectedService: service.title }}
                    className="w-full bg-gold hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 group-hover:bg-dark flex items-center justify-center"
                  >
                    Booking Sekarang
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-barlow font-bold text-4xl text-dark mb-4">
              Paket <span className="text-gold">Hemat</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kombinasi layanan dengan harga lebih hemat untuk pengalaman grooming yang lengkap
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gold to-yellow-600 rounded-2xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300"
              >
                <div className="absolute top-4 right-4 bg-white text-gold px-3 py-1 rounded-full text-sm font-bold">
                  Hemat Rp {pkg.savings.toLocaleString('id-ID')}
                </div>
                
                <h3 className="font-bold text-2xl mb-2">{pkg.name}</h3>
                <p className="text-yellow-100 mb-6">{pkg.description}</p>
                
                <div className="mb-6">
                  <div className="text-yellow-200 line-through text-lg">
                    Rp {pkg.originalPrice.toLocaleString('id-ID')}
                  </div>
                  <div className="font-bold text-3xl">
                    Rp {pkg.discountPrice.toLocaleString('id-ID')}
                  </div>
                </div>
                
                <Link
                  to="/booking"
                  state={{ selectedPackage: pkg.name }}
                  className="w-full bg-white text-gold hover:bg-gray-100 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
                >
                  Pilih Paket
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-barlow font-bold text-4xl md:text-5xl mb-6">
              Tidak Yakin Pilih <span className="text-gold">Layanan Apa?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Konsultasi gratis dengan barberman profesional kami untuk mendapatkan rekomendasi layanan yang sesuai dengan kebutuhan Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Booking Konsultasi
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="https://wa.me/+62 878-7817-7527"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gold text-gold hover:bg-gold hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 text-center"
              >
                Chat WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;