import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Award, Scissors, Users, Calendar, ArrowRight } from 'lucide-react';

const Barberman = () => {
  const barbermen = [
    {
      id: 1,
      name: 'Andi Pratama',
      title: 'Senior Barber',
      specialty: 'Classic & Modern Cut',
      experience: '5 tahun',
      rating: 4.9,
      totalReviews: 245,
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Spesialis dalam potongan rambut klasik dan modern. Berpengalaman menangani berbagai jenis rambut dan bentuk wajah.',
      skills: ['Classic Cut', 'Modern Styling', 'Beard Trim', 'Hair Consultation'],
      achievements: ['Best Barber 2023', 'Customer Choice Award', '1000+ Happy Clients'],
      workingDays: 'Senin - Sabtu',
      workingHours: '09:00 - 21:00'
    },
    {
      id: 2,
      name: 'Budi Santoso',
      title: 'Creative Barber',
      specialty: 'Fade & Hair Tattoo',
      experience: '4 tahun',
      rating: 4.8,
      totalReviews: 189,
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Ahli dalam teknik fade dan hair tattoo. Kreativitas tinggi dalam menciptakan desain rambut yang unik dan artistik.',
      skills: ['Fade Cut', 'Hair Tattoo', 'Creative Design', 'Precision Cutting'],
      achievements: ['Hair Artist Award', 'Innovation in Style', 'Social Media Favorite'],
      workingDays: 'Selasa - Minggu',
      workingHours: '10:00 - 20:00'
    },
    {
      id: 3,
      name: 'Candra Wijaya',
      title: 'Grooming Specialist',
      specialty: 'Beard & Facial',
      experience: '6 tahun',
      rating: 4.9,
      totalReviews: 312,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Spesialis grooming lengkap dengan keahlian khusus dalam perawatan jenggot dan facial treatment untuk pria.',
      skills: ['Beard Grooming', 'Facial Treatment', 'Skin Care', 'Traditional Shaving'],
      achievements: ['Grooming Expert', 'Skin Care Specialist', 'Traditional Barber Master'],
      workingDays: 'Senin - Sabtu',
      workingHours: '08:00 - 19:00'
    },
    {
      id: 4,
      name: 'Deni Rahman',
      title: 'Family Barber',
      specialty: 'Kids & Family',
      experience: '3 tahun',
      rating: 4.7,
      totalReviews: 156,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Berpengalaman menangani klien dari segala usia, terutama anak-anak. Sabar dan ramah dalam memberikan pelayanan.',
      skills: ['Kids Haircut', 'Family Service', 'Patient Approach', 'Fun Experience'],
      achievements: ['Family Favorite', 'Kids Choice Award', 'Patience Excellence'],
      workingDays: 'Rabu - Minggu',
      workingHours: '09:00 - 18:00'
    }
  ];

  const testimonials = [
    {
      barberman: 'Andi Pratama',
      customer: 'Ahmad Rizki',
      rating: 5,
      comment: 'Potongan rambut selalu rapi dan sesuai keinginan. Andi sangat profesional dan detail.',
      date: '2 minggu lalu'
    },
    {
      barberman: 'Budi Santoso',
      customer: 'Fajar Nugroho',
      rating: 5,
      comment: 'Hair tattoo yang dibuat Budi sangat keren! Desainnya unik dan presisi.',
      date: '1 minggu lalu'
    },
    {
      barberman: 'Candra Wijaya',
      customer: 'Rudi Hermawan',
      rating: 5,
      comment: 'Facial treatment terbaik! Candra sangat ahli dalam perawatan kulit pria.',
      date: '3 hari lalu'
    },
    {
      barberman: 'Deni Rahman',
      customer: 'Sari (Ibu dari Kevin)',
      rating: 5,
      comment: 'Anak saya senang sekali dipotong rambutnya sama Mas Deni. Sabar banget!',
      date: '5 hari lalu'
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
              Tim <span className="text-gold">Barberman</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Bertemu dengan barberman profesional kami yang berpengalaman dan berdedikasi untuk memberikan layanan terbaik.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Barbermen Profiles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {barbermen.map((barber, index) => (
              <motion.div
                key={barber.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-gold to-yellow-600 p-6 text-white">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <img 
                        src={barber.avatar} 
                        alt={barber.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-2xl mb-1">{barber.name}</h3>
                      <p className="text-yellow-100 mb-2">{barber.title}</p>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-current mr-1" />
                          <span className="font-semibold">{barber.rating}</span>
                          <span className="text-yellow-100 ml-1">({barber.totalReviews} review)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Specialty & Experience */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Scissors className="h-6 w-6 text-gold mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Spesialisasi</p>
                      <p className="font-semibold text-dark">{barber.specialty}</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Award className="h-6 w-6 text-gold mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Pengalaman</p>
                      <p className="font-semibold text-dark">{barber.experience}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">{barber.description}</p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-dark mb-3">Keahlian:</h4>
                    <div className="flex flex-wrap gap-2">
                      {barber.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-gold bg-opacity-10 text-gold px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-dark mb-3">Prestasi:</h4>
                    <ul className="space-y-1">
                      {barber.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <Star className="h-3 w-3 text-gold mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Working Schedule */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-gold mr-2" />
                        <div>
                          <p className="text-xs text-gray-500">Hari Kerja</p>
                          <p className="font-semibold text-dark text-sm">{barber.workingDays}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-gold mr-2" />
                        <div>
                          <p className="text-xs text-gray-500">Jam Kerja</p>
                          <p className="font-semibold text-dark text-sm">{barber.workingHours}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Book Button */}
                  <Link
                    to="/booking"
                    state={{ selectedBarberman: barber.name }}
                    className="w-full bg-gold hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
                  >
                    Booking dengan {barber.name.split(' ')[0]}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials for Barbermen */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-barlow font-bold text-4xl text-dark mb-4">
              Review <span className="text-gold">Pelanggan</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Apa kata pelanggan tentang barberman kami
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-dark">{testimonial.customer}</h4>
                    <p className="text-sm text-gray-500">untuk {testimonial.barberman}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-gold fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">{testimonial.date}</span>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl font-bold text-gold mb-2">4+</div>
              <p className="text-gray-300">Barberman Profesional</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-gold mb-2">18+</div>
              <p className="text-gray-300">Tahun Total Pengalaman</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-gold mb-2">900+</div>
              <p className="text-gray-300">Total Review Positif</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-gold mb-2">4.8</div>
              <p className="text-gray-300">Rating Rata-rata</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold to-yellow-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-barlow font-bold text-4xl md:text-5xl mb-6">
              Pilih Barberman Favorit Anda
            </h2>
            <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
              Setiap barberman memiliki keahlian khusus. Pilih yang sesuai dengan kebutuhan dan preferensi Anda.
            </p>
            <Link
              to="/booking"
              className="bg-white text-gold hover:bg-gray-100 px-10 py-4 rounded-full font-semibold text-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              Booking Sekarang
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Barberman;