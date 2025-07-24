import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Instagram, MessageCircle, Car, Bus, Train, Star, Users, Award, Calendar } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat',
      details: [
        'Jl. Sudirman No. 123',
        'Jakarta Pusat 10220',
        'Indonesia'
      ],
      color: 'text-red-500'
    },
    {
      icon: Clock,
      title: 'Jam Buka',
      details: [
        'Senin - Jumat: 09:00 - 21:00',
        'Sabtu - Minggu: 08:00 - 22:00',
        'Hari Libur: 10:00 - 20:00'
      ],
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      title: 'Telepon',
      details: [
        '+62 812-3456-7890',
        '+62 21-1234-5678',
        'Emergency: +62 811-9999-8888'
      ],
      color: 'text-green-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'info@xobarber.com',
        'booking@xobarber.com',
        'support@xobarber.com'
      ],
      color: 'text-purple-500'
    }
  ];

  const socialMedia = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/087878177527',
      color: 'bg-green-500 hover:bg-green-600',
      description: 'Chat langsung untuk booking'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/xobarber',
      color: 'bg-pink-500 hover:bg-pink-600',
      description: 'Follow untuk update terbaru'
    }
  ];

  const transportation = [
    {
      icon: Car,
      title: 'Mobil Pribadi',
      description: 'Parkir gratis tersedia di basement gedung'
    },
    {
      icon: Bus,
      title: 'Bus TransJakarta',
      description: 'Halte Dukuh Atas (5 menit jalan kaki)'
    },
    {
      icon: Train,
      title: 'MRT/KRL',
      description: 'Stasiun Sudirman (3 menit jalan kaki)'
    }
  ];

  const stats = [
    {
      icon: Users,
      number: '5000+',
      label: 'Pelanggan Puas'
    },
    {
      icon: Star,
      number: '4.9',
      label: 'Rating Google'
    },
    {
      icon: Award,
      number: '3',
      label: 'Tahun Berpengalaman'
    },
    {
      icon: Calendar,
      number: '365',
      label: 'Hari Melayani'
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
              Hubungi <span className="text-gold">Kami</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Temukan lokasi kami, jam operasional, dan berbagai cara untuk menghubungi XoBarber.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <IconComponent className="h-8 w-8 text-gold mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gold mb-1">{stat.number}</div>
                    <p className="text-gray-300 text-sm">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-barlow font-bold text-4xl text-dark mb-4">
              Informasi <span className="text-gold">Kontak</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Berbagai cara untuk menghubungi dan mengunjungi XoBarber
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <IconComponent className={`h-12 w-12 ${info.color} mx-auto mb-4`} />
                  <h3 className="font-semibold text-xl text-dark mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-barlow font-bold text-4xl text-dark mb-4">
              Lokasi <span className="text-gold">Kami</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Temukan XoBarber di jantung kota Jakarta dengan akses transportasi yang mudah
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.1944491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sSudirman%20Central%20Business%20District%20(SCBD)!5e0!3m2!1sen!2sid!4v1635724000000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="XoBarber Location"
                ></iframe>
              </div>
            </motion.div>

            {/* Transportation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-semibold text-xl text-dark mb-4">Akses Transportasi</h3>
                <div className="space-y-4">
                  {transportation.map((transport, index) => {
                    const IconComponent = transport.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <IconComponent className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-dark">{transport.title}</h4>
                          <p className="text-gray-600 text-sm">{transport.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-semibold text-xl text-dark mb-4">Landmark Terdekat</h3>
                <div className="space-y-2 text-gray-600">
                  <p>• Plaza Indonesia (2 menit)</p>
                  <p>• Grand Indonesia (3 menit)</p>
                  <p>• Hotel Indonesia Kempinski (1 menit)</p>
                  <p>• Bundaran HI (5 menit)</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media & Quick Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-barlow font-bold text-4xl text-dark mb-4">
              Hubungi Kami <span className="text-gold">Sekarang</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilih cara yang paling nyaman untuk menghubungi kami
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {socialMedia.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${social.color} text-white rounded-xl p-8 text-center transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl`}
                >
                  <IconComponent className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="font-semibold text-2xl mb-2">{social.name}</h3>
                  <p className="text-white/90">{social.description}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-barlow font-bold text-4xl text-dark mb-4">
              Pertanyaan <span className="text-gold">Umum</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jawaban untuk pertanyaan yang sering ditanyakan
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'Apakah perlu booking terlebih dahulu?',
                answer: 'Kami sangat menyarankan untuk booking terlebih dahulu untuk memastikan slot waktu yang diinginkan tersedia. Namun, kami juga melayani walk-in customer jika ada slot kosong.'
              },
              {
                question: 'Berapa lama waktu yang dibutuhkan untuk setiap layanan?',
                answer: 'Waktu layanan bervariasi: Haircut (30-45 menit), Cukur (20-30 menit), Facial (45-60 menit), Hair Tattoo (60-90 menit). Paket lengkap bisa memakan waktu 2-3 jam.'
              },
              {
                question: 'Apakah ada diskon untuk member atau paket?',
                answer: 'Ya, kami memiliki program membership dengan berbagai benefit dan diskon. Kami juga menawarkan paket hemat untuk kombinasi layanan.'
              },
              {
                question: 'Bagaimana cara pembayaran yang diterima?',
                answer: 'Kami menerima pembayaran tunai, kartu debit/kredit, dan e-wallet (GoPay, OVO, DANA, ShopeePay).'
              },
              {
                question: 'Apakah ada layanan untuk anak-anak?',
                answer: 'Tentu! Kami memiliki barberman yang berpengalaman menangani anak-anak dengan sabar dan ramah. Tersedia juga kursi khusus anak.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="font-semibold text-lg text-dark mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
              Siap untuk <span className="text-gold">Transformasi</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Kunjungi XoBarber sekarang dan rasakan pengalaman grooming premium yang tak terlupakan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/booking"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 inline-block"
              >
                Booking Online
              </motion.a>
              <motion.a
                href="https://wa.me/087878177527"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gold text-gold hover:bg-gold hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 inline-block"
              >
                Chat WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;