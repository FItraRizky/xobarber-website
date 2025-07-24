import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Scissors, Star, Users, Award, ArrowRight } from 'lucide-react';
import ParallaxBackground from '../components/ParallaxBackground';

const Home = () => {
  const stats = [
    { icon: Users, number: '1000+', label: 'Pelanggan Puas' },
    { icon: Scissors, number: '5000+', label: 'Potong Rambut' },
    { icon: Star, number: '4.9', label: 'Rating Google' },
    { icon: Award, number: '3+', label: 'Tahun Pengalaman' },
  ];

  const services = [
    {
      title: 'Potong Rambut',
      description: 'Gaya rambut modern sesuai bentuk wajah',
      price: 'Mulai 35K',
      image: 'https://images.unsplash.com/photo-1622286346003-c8b4473c0ca2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Cukur Jenggot',
      description: 'Cukur bersih dengan teknik profesional',
      price: 'Mulai 25K',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Hair Styling',
      description: 'Styling rambut untuk acara spesial',
      price: 'Mulai 45K',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Facial Treatment',
      description: 'Perawatan wajah untuk kulit sehat',
      price: 'Mulai 50K',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
  ];

  const testimonials = [
    {
      name: 'Ahmad Rizki',
      rating: 5,
      comment: 'Pelayanan sangat memuaskan! Barberman profesional dan hasil potongan rambut sesuai keinginan.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Budi Santoso',
      rating: 5,
      comment: 'Tempat favorit untuk grooming. Suasana nyaman dan harga terjangkau.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Deni Pratama',
      rating: 5,
      comment: 'Booking online mudah, pelayanan cepat. Recommended banget!',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <ParallaxBackground
        backgroundImage="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        speed={0.5}
        className="min-h-screen flex items-center justify-center"
        overlay={true}
        overlayClass="bg-gradient-to-br from-black/70 via-black/50 to-amber-900/30"
      >
        <div className="text-center px-4 max-w-6xl mx-auto text-white">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-300 font-medium text-sm mb-4">
              ✨ Premium Barbershop Experience
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-barlow leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
              XoBarber
            </span>
            <br />
            <span className="text-white text-4xl md:text-5xl lg:text-6xl font-normal">
              Premium
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Barbershop Modern dengan Pelayanan Terbaik di Kota
            <br className="hidden md:block" />
            <span className="text-amber-300 font-medium">Profesional • Berkualitas • Terpercaya</span>
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              to="/booking" 
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-amber-500/25 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Booking Sekarang
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link 
              to="/services" 
              className="group inline-flex items-center px-8 py-4 border-2 border-white/30 backdrop-blur-sm text-white font-semibold text-lg rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Lihat Layanan
                <Scissors className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </Link>
          </motion.div>
          
          {/* Floating Stats */}
          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/20"
                >
                  <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl text-white mb-2">{stat.number}</h3>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </div>
              );
            })}
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </div>
          </motion.div>
        </div>
      </ParallaxBackground>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="text-center gpu-accelerated smooth-hover"
                >
                  <div className="bg-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-3xl text-dark mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-amber-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-20 gpu-accelerated"
          >
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
              🔥 Layanan Terpopuler
            </span>
            <h2 className="font-barlow font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
              <span className="text-gray-900">Layanan</span>
              <br />
              <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                Premium
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Berbagai layanan grooming profesional dengan teknologi modern
              <br className="hidden md:block" />
              untuk penampilan terbaik Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group relative bg-white rounded-3xl shadow-smooth overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 gpu-accelerated smooth-hover"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  <div className="absolute top-4 right-4">
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      {service.price}
                    </span>
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold shadow-xl hover:bg-amber-50 hover:scale-105 transition-all duration-300">
                      Pilih Layanan
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-dark hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center group"
            >
              Lihat Semua Layanan
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials with Parallax */}
      <ParallaxBackground
        backgroundImage="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        speed={0.3}
        className="py-24"
        overlay={true}
        overlayClass="bg-gradient-to-br from-gray-900/90 via-gray-800/85 to-black/90"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full text-sm font-semibold mb-4 border border-amber-500/30">
              ⭐ Testimoni Pelanggan
            </span>
            <h2 className="font-barlow font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
              <span className="text-white">Kata</span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                Pelanggan
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Lebih dari 1000+ pelanggan puas dengan layanan premium kami
              <br className="hidden md:block" />
              di seluruh Indonesia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/20 gpu-accelerated smooth-hover"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-white text-2xl font-bold">"</span>
                </div>
                
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-amber-400 fill-current mx-1 drop-shadow-lg" />
                  ))}
                </div>
                
                <p className="text-white text-lg leading-relaxed mb-8 text-center italic">
                  "{testimonial.comment}"
                </p>
                
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-amber-400 shadow-xl group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                  <div className="ml-4 text-center">
                    <h4 className="font-bold text-white text-lg group-hover:text-amber-400 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-300 text-sm">Pelanggan Setia</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxBackground>

      {/* CTA Section with Parallax */}
      <ParallaxBackground
        backgroundImage="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        speed={0.4}
        className="py-24"
        overlay={true}
        overlayClass="bg-gradient-to-br from-amber-500/95 via-amber-600/90 to-amber-700/95"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <span className="inline-block px-6 py-3 bg-white/20 text-white rounded-full text-sm font-semibold mb-6 border border-white/30 backdrop-blur-sm">
              🚀 Bergabung dengan 1000+ Pelanggan Puas
            </span>
            <h2 className="font-barlow font-bold text-5xl md:text-6xl lg:text-7xl mb-8 text-white drop-shadow-lg">
              Siap untuk
              <br />
              <span className="bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
                Tampil Beda?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-sm">
              Booking sekarang dan rasakan pengalaman grooming premium di XoBarber.
              <br className="hidden md:block" />
              Dapatkan potongan rambut yang sesuai dengan kepribadian dan gaya hidup Anda.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link
              to="/booking"
              className="group bg-white text-amber-600 px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center border-4 border-white hover:bg-amber-50"
            >
              <span className="mr-3">📅</span>
              Booking Sekarang
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            
            <Link
              to="/services"
              className="group bg-transparent text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center border-4 border-white hover:bg-white/10 backdrop-blur-sm"
            >
              <span className="mr-3">✂️</span>
              Lihat Layanan
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/15 backdrop-blur-lg rounded-3xl p-8 border border-white/30 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center mb-4">
              <span className="text-4xl mr-3">🎉</span>
              <h3 className="font-bold text-2xl text-white">Promo Spesial!</h3>
            </div>
            <p className="text-white/90 text-lg mb-4">
              Dapatkan diskon <span className="font-bold text-2xl text-white">20%</span> untuk booking pertama Anda
            </p>
            <p className="text-white/70 text-sm">
              *Berlaku hingga akhir bulan ini. Syarat dan ketentuan berlaku.
            </p>
          </motion.div>
        </div>
      </ParallaxBackground>
    </div>
  );
};

export default Home;