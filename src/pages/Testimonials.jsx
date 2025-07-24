import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, ThumbsUp, Calendar } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const testimonials = [
    {
      id: 1,
      name: 'Ahmad Rizki',
      avatar: '👨‍💼',
      rating: 5,
      service: 'Classic Haircut',
      barberman: 'Andi Pratama',
      date: '2 minggu lalu',
      comment: 'Pelayanan sangat memuaskan! Barberman profesional dan hasil potongan rambut sesuai keinginan. Tempatnya juga bersih dan nyaman.',
      category: 'haircut',
      helpful: 24
    },
    {
      id: 2,
      name: 'Budi Santoso',
      avatar: '👨‍🎓',
      rating: 5,
      service: 'Modern Fade',
      barberman: 'Budi Santoso',
      date: '1 minggu lalu',
      comment: 'Fade cut yang sangat rapi dan presisi. Budi sangat detail dalam pekerjaannya. Hasil akhir melebihi ekspektasi!',
      category: 'haircut',
      helpful: 18
    },
    {
      id: 3,
      name: 'Deni Pratama',
      avatar: '👨‍💻',
      rating: 5,
      service: 'Complete Grooming',
      barberman: 'Candra Wijaya',
      date: '3 hari lalu',
      comment: 'Paket grooming lengkap yang worth it banget! Facial treatment-nya juga bagus, kulit jadi lebih bersih dan segar.',
      category: 'grooming',
      helpful: 31
    },
    {
      id: 4,
      name: 'Fajar Nugroho',
      avatar: '👨‍🎨',
      rating: 5,
      service: 'Hair Tattoo',
      barberman: 'Budi Santoso',
      date: '5 hari lalu',
      comment: 'Hair tattoo design yang keren banget! Budi sangat kreatif dan hasil akhirnya sesuai dengan yang saya mau. Recommended!',
      category: 'special',
      helpful: 27
    },
    {
      id: 5,
      name: 'Rudi Hermawan',
      avatar: '👨‍⚕️',
      rating: 5,
      service: 'Beard Grooming',
      barberman: 'Candra Wijaya',
      date: '1 minggu lalu',
      comment: 'Cukur jenggot terbaik yang pernah saya alami. Tekniknya sangat halus dan hasilnya rapi. Pasti akan kembali lagi.',
      category: 'grooming',
      helpful: 22
    },
    {
      id: 6,
      name: 'Sari Dewi',
      avatar: '👩‍💼',
      rating: 5,
      service: 'Kids Haircut',
      barberman: 'Deni Rahman',
      date: '4 hari lalu',
      comment: 'Anak saya senang sekali dipotong rambutnya di sini. Mas Deni sangat sabar dan ramah dengan anak-anak. Terima kasih!',
      category: 'kids',
      helpful: 35
    },
    {
      id: 7,
      name: 'Eko Prasetyo',
      avatar: '👨‍🏫',
      rating: 5,
      service: 'Facial Treatment',
      barberman: 'Candra Wijaya',
      date: '6 hari lalu',
      comment: 'Facial treatment untuk pria yang sangat bagus. Produk yang digunakan berkualitas dan hasilnya langsung terasa.',
      category: 'grooming',
      helpful: 19
    },
    {
      id: 8,
      name: 'Agus Setiawan',
      avatar: '👨‍🔧',
      rating: 5,
      service: 'Paket Premium',
      barberman: 'Andi Pratama',
      date: '1 minggu lalu',
      comment: 'Paket premium sangat worth it! Dapat haircut, facial, dan styling dengan harga yang reasonable. Pelayanan top!',
      category: 'package',
      helpful: 28
    },
    {
      id: 9,
      name: 'Hendra Wijaya',
      avatar: '👨‍💼',
      rating: 4,
      service: 'Hair Wash & Styling',
      barberman: 'Deni Rahman',
      date: '3 hari lalu',
      comment: 'Cuci rambut dan styling yang memuaskan. Produk shampo yang digunakan berkualitas dan hasilnya rambut jadi lebih sehat.',
      category: 'haircut',
      helpful: 15
    },
    {
      id: 10,
      name: 'Yoga Pratama',
      avatar: '👨‍🎯',
      rating: 5,
      service: 'Paket Ultimate',
      barberman: 'Budi Santoso',
      date: '2 minggu lalu',
      comment: 'Pengalaman grooming terlengkap! Dari haircut, hair tattoo, sampai facial semua dikerjakan dengan sempurna. Amazing!',
      category: 'package',
      helpful: 42
    }
  ];

  const categories = [
    { id: 'all', name: 'Semua', count: testimonials.length },
    { id: 'haircut', name: 'Haircut', count: testimonials.filter(t => t.category === 'haircut').length },
    { id: 'grooming', name: 'Grooming', count: testimonials.filter(t => t.category === 'grooming').length },
    { id: 'package', name: 'Paket', count: testimonials.filter(t => t.category === 'package').length },
    { id: 'special', name: 'Special', count: testimonials.filter(t => t.category === 'special').length },
    { id: 'kids', name: 'Kids', count: testimonials.filter(t => t.category === 'kids').length }
  ];

  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;
  const totalReviews = testimonials.length;
  const fiveStarCount = testimonials.filter(t => t.rating === 5).length;
  const fiveStarPercentage = (fiveStarCount / totalReviews) * 100;

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
              Testimoni <span className="text-gold">Pelanggan</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Dengarkan pengalaman nyata dari pelanggan yang telah merasakan layanan premium XoBarber.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">{averageRating.toFixed(1)}</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-gray-300">Rating Rata-rata</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">{totalReviews}+</div>
                <p className="text-gray-300">Total Review</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">{fiveStarPercentage.toFixed(0)}%</div>
                <p className="text-gray-300">Rating 5 Bintang</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setCurrentIndex(0);
                }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gold text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-barlow font-bold text-4xl text-dark mb-4">
              Review <span className="text-gold">Terpilih</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Testimoni pilihan dari pelanggan yang puas dengan layanan kami
            </p>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative"
              >
                <Quote className="h-16 w-16 text-gold opacity-20 absolute top-6 left-6" />
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="text-center md:text-left">
                      <div className="text-6xl mb-4">{filteredTestimonials[currentIndex]?.avatar}</div>
                      <h3 className="font-bold text-2xl text-dark mb-2">
                        {filteredTestimonials[currentIndex]?.name}
                      </h3>
                      <div className="flex justify-center md:justify-start mb-2">
                        {[...Array(filteredTestimonials[currentIndex]?.rating || 0)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-gold fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-2">
                        {filteredTestimonials[currentIndex]?.service}
                      </p>
                      <p className="text-sm text-gray-500">
                        oleh {filteredTestimonials[currentIndex]?.barberman}
                      </p>
                    </div>
                    
                    <div className="flex-1">
                      <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                        "{filteredTestimonials[currentIndex]?.comment}"
                      </blockquote>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="text-sm">{filteredTestimonials[currentIndex]?.date}</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <ThumbsUp className="h-4 w-4 mr-2" />
                          <span className="text-sm">{filteredTestimonials[currentIndex]?.helpful} helpful</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300 z-10"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300 z-10"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {filteredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-gold' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-barlow font-bold text-4xl text-dark mb-4">
              Semua <span className="text-gold">Review</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Baca semua testimoni dari pelanggan yang telah merasakan layanan XoBarber
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-dark">{testimonial.name}</h4>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-gold fill-current" />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">{testimonial.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gold font-semibold mb-1">{testimonial.service}</p>
                  <p className="text-xs text-gray-500">oleh {testimonial.barberman}</p>
                </div>
                
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="bg-gray-200 px-2 py-1 rounded-full text-xs">
                    {categories.find(c => c.id === testimonial.category)?.name}
                  </span>
                  <div className="flex items-center">
                    <ThumbsUp className="h-3 w-3 mr-1" />
                    <span>{testimonial.helpful}</span>
                  </div>
                </div>
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
              Bergabunglah dengan <span className="text-gold">Pelanggan Puas</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Rasakan sendiri pengalaman grooming premium yang telah dipercaya oleh ribuan pelanggan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/booking"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 inline-block"
              >
                Booking Sekarang
              </motion.a>
              <motion.a
                href="https://wa.me/+6287878177527"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gold text-gold hover:bg-gold hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 inline-block"
              >
                Tanya Lebih Lanjut
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;