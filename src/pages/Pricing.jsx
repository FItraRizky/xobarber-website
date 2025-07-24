import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Star, Crown, Zap, ArrowRight, Clock } from 'lucide-react';

const Pricing = () => {
  const services = [
    {
      category: 'Haircut Services',
      items: [
        { name: 'Classic Haircut', price: 35000, duration: '30 min', description: 'Potongan rambut klasik timeless' },
        { name: 'Modern Fade', price: 45000, duration: '45 min', description: 'Fade modern dengan gradasi halus' },
        { name: 'Kids Haircut', price: 30000, duration: '30 min', description: 'Potongan rambut khusus anak-anak' },
        { name: 'Hair Wash & Styling', price: 20000, duration: '25 min', description: 'Cuci rambut dan styling' }
      ]
    },
    {
      category: 'Grooming Services',
      items: [
        { name: 'Beard Grooming', price: 25000, duration: '20 min', description: 'Perawatan jenggot profesional' },
        { name: 'Facial Treatment', price: 50000, duration: '45 min', description: 'Perawatan wajah lengkap' },
        { name: 'Hair Tattoo', price: 75000, duration: '60 min', description: 'Desain artistik pada rambut' },
        { name: 'Complete Grooming', price: 85000, duration: '90 min', description: 'Paket grooming lengkap' }
      ]
    }
  ];

  const packages = [
    {
      name: 'Paket Hemat',
      subtitle: 'Perfect for Regular Care',
      icon: Zap,
      originalPrice: 60000,
      price: 50000,
      savings: 10000,
      duration: '50 min',
      popular: false,
      features: [
        'Classic Haircut',
        'Beard Grooming',
        'Hair Tonic',
        'Basic Styling'
      ],
      description: 'Kombinasi sempurna untuk perawatan rutin dengan harga hemat'
    },
    {
      name: 'Paket Premium',
      subtitle: 'Most Popular Choice',
      icon: Star,
      originalPrice: 105000,
      price: 85000,
      savings: 20000,
      duration: '75 min',
      popular: true,
      features: [
        'Modern Fade Haircut',
        'Facial Treatment',
        'Hair Styling',
        'Premium Products',
        'Hot Towel Service'
      ],
      description: 'Paket terpopuler dengan layanan premium untuk penampilan maksimal'
    },
    {
      name: 'Paket Ultimate',
      subtitle: 'Complete Experience',
      icon: Crown,
      originalPrice: 160000,
      price: 130000,
      savings: 30000,
      duration: '150 min',
      popular: false,
      features: [
        'Complete Grooming',
        'Hair Tattoo Design',
        'Premium Facial',
        'Luxury Products',
        'Photo Session',
        'Complimentary Drink'
      ],
      description: 'Pengalaman grooming terlengkap dengan layanan VIP'
    }
  ];

  const addOns = [
    { name: 'Hair Tonic Premium', price: 15000, description: 'Tonic rambut berkualitas tinggi' },
    { name: 'Hot Towel Service', price: 10000, description: 'Layanan handuk hangat relaksasi' },
    { name: 'Scalp Massage', price: 20000, description: 'Pijat kulit kepala 10 menit' },
    { name: 'Beard Oil Treatment', price: 25000, description: 'Perawatan jenggot dengan minyak khusus' },
    { name: 'Photo Session', price: 35000, description: 'Sesi foto profesional hasil grooming' }
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
              Daftar <span className="text-gold">Harga</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harga transparan dan terjangkau untuk layanan grooming berkualitas tinggi. Pilih sesuai kebutuhan Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="py-20 bg-gray-50">
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
              Dapatkan lebih banyak dengan harga lebih hemat melalui paket kombinasi layanan kami
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => {
              const IconComponent = pkg.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                    pkg.popular ? 'ring-4 ring-gold ring-opacity-50' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gold text-white text-center py-2 font-semibold">
                      PALING POPULER
                    </div>
                  )}
                  
                  <div className={`p-8 ${pkg.popular ? 'pt-16' : ''}`}>
                    <div className="text-center mb-6">
                      <div className="bg-gold bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-gold" />
                      </div>
                      <h3 className="font-bold text-2xl text-dark mb-2">{pkg.name}</h3>
                      <p className="text-gray-600 mb-4">{pkg.subtitle}</p>
                      
                      <div className="mb-4">
                        <div className="text-gray-400 line-through text-lg">
                          Rp {pkg.originalPrice.toLocaleString('id-ID')}
                        </div>
                        <div className="text-4xl font-bold text-dark">
                          Rp {pkg.price.toLocaleString('id-ID')}
                        </div>
                        <div className="text-green-600 font-semibold">
                          Hemat Rp {pkg.savings.toLocaleString('id-ID')}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-center text-gray-500 mb-6">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{pkg.duration}</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <Check className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-gray-600 text-sm mb-6">{pkg.description}</p>

                    <Link
                      to="/booking"
                      state={{ selectedPackage: pkg.name }}
                      className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center group ${
                        pkg.popular
                          ? 'bg-gold hover:bg-yellow-600 text-white'
                          : 'bg-dark hover:bg-gray-800 text-white'
                      }`}
                    >
                      Pilih Paket
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-barlow font-bold text-4xl text-dark mb-4">
              Layanan <span className="text-gold">Individual</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilih layanan sesuai kebutuhan spesifik Anda dengan harga yang transparan
            </p>
          </motion.div>

          <div className="space-y-12">
            {services.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3 className="font-bold text-2xl text-dark mb-6 text-center">{category.category}</h3>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Layanan</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Deskripsi</th>
                          <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Durasi</th>
                          <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Harga</th>
                          <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Aksi</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {category.items.map((service, serviceIndex) => (
                          <tr key={serviceIndex} className="hover:bg-gray-50 transition-colors duration-200">
                            <td className="px-6 py-4">
                              <div className="font-semibold text-dark">{service.name}</div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-gray-600">{service.description}</div>
                            </td>
                            <td className="px-6 py-4 text-center">
                              <div className="flex items-center justify-center">
                                <Clock className="h-4 w-4 text-gray-400 mr-1" />
                                <span className="text-gray-600">{service.duration}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-center">
                              <div className="font-bold text-xl text-dark">
                                Rp {service.price.toLocaleString('id-ID')}
                              </div>
                            </td>
                            <td className="px-6 py-4 text-center">
                              <Link
                                to="/booking"
                                state={{ selectedService: service.name }}
                                className="bg-gold hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 inline-flex items-center"
                              >
                                Booking
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-barlow font-bold text-4xl text-dark mb-4">
              Layanan <span className="text-gold">Tambahan</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tingkatkan pengalaman grooming Anda dengan layanan tambahan premium
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <h4 className="font-bold text-lg text-dark mb-2">{addon.name}</h4>
                <p className="text-gray-600 mb-4">{addon.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xl text-gold">
                    +Rp {addon.price.toLocaleString('id-ID')}
                  </span>
                  <span className="text-sm text-gray-500">Add-on</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
            <h3 className="font-bold text-2xl text-blue-900 mb-6 text-center">Informasi Harga</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Ketentuan Umum:</h4>
                <ul className="space-y-2 text-blue-800">
                  <li>• Harga sudah termasuk konsultasi gratis</li>
                  <li>• Pembayaran tunai atau transfer</li>
                  <li>• Harga dapat berubah sewaktu-waktu</li>
                  <li>• Promo khusus tersedia di hari tertentu</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Keuntungan Paket:</h4>
                <ul className="space-y-2 text-blue-800">
                  <li>• Hemat hingga Rp 30.000</li>
                  <li>• Layanan lebih lengkap</li>
                  <li>• Prioritas booking</li>
                  <li>• Produk premium included</li>
                </ul>
              </div>
            </div>
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
              Siap untuk <span className="text-gold">Grooming?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Pilih layanan atau paket yang sesuai dengan kebutuhan dan budget Anda. Kualitas terjamin dengan harga terjangkau.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Booking Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="https://wa.me/+6287878177527"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gold text-gold hover:bg-gold hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 text-center"
              >
                Tanya Harga
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;