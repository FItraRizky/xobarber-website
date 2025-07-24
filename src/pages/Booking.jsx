import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Calendar, Clock, User, Phone, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';

const Booking = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    barberman: '',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const services = [
    { name: 'Classic Haircut', price: 35000 },
    { name: 'Modern Fade', price: 45000 },
    { name: 'Beard Grooming', price: 25000 },
    { name: 'Hair Tattoo', price: 75000 },
    { name: 'Facial Treatment', price: 50000 },
    { name: 'Hair Wash & Styling', price: 20000 },
    { name: 'Complete Grooming', price: 85000 },
    { name: 'Kids Haircut', price: 30000 },
    { name: 'Paket Hemat', price: 50000 },
    { name: 'Paket Premium', price: 85000 },
    { name: 'Paket Ultimate', price: 130000 }
  ];

  const barbermen = [
    { name: 'Andi Pratama', specialty: 'Classic & Modern Cut', rating: 4.9 },
    { name: 'Budi Santoso', specialty: 'Fade & Hair Tattoo', rating: 4.8 },
    { name: 'Candra Wijaya', specialty: 'Beard & Facial', rating: 4.9 },
    { name: 'Deni Rahman', specialty: 'Kids & Family', rating: 4.7 }
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
    '19:00', '19:30', '20:00', '20:30'
  ];

  // Set default service from navigation state
  useEffect(() => {
    if (location.state?.selectedService) {
      setFormData(prev => ({ ...prev, service: location.state.selectedService }));
    }
    if (location.state?.selectedPackage) {
      setFormData(prev => ({ ...prev, service: location.state.selectedPackage }));
    }
  }, [location.state]);

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  // Get maximum date (30 days from now)
  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    return maxDate.toISOString().split('T')[0];
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nama harus diisi';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Nomor WhatsApp harus diisi';
    } else if (!/^[0-9+\-\s()]+$/.test(formData.phone)) {
      newErrors.phone = 'Format nomor WhatsApp tidak valid';
    }

    if (!formData.date) {
      newErrors.date = 'Tanggal harus dipilih';
    }

    if (!formData.time) {
      newErrors.time = 'Jam harus dipilih';
    }

    if (!formData.service) {
      newErrors.service = 'Layanan harus dipilih';
    }

    if (!formData.barberman) {
      newErrors.barberman = 'Barberman harus dipilih';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Create WhatsApp message
    const selectedService = services.find(s => s.name === formData.service);
    const selectedBarberman = barbermen.find(b => b.name === formData.barberman);
    
    const message = `Halo XoBarber! Saya ingin booking:

` +
      `👤 Nama: ${formData.name}\n` +
      `📱 WhatsApp: ${formData.phone}\n` +
      `📅 Tanggal: ${new Date(formData.date).toLocaleDateString('id-ID')}\n` +
      `🕐 Jam: ${formData.time}\n` +
      `✂️ Layanan: ${formData.service}\n` +
      `💰 Harga: Rp ${selectedService?.price.toLocaleString('id-ID')}\n` +
      `👨‍💈 Barberman: ${formData.barberman}\n` +
      `📝 Catatan: ${formData.notes || 'Tidak ada'}\n\n` +
      `Mohon konfirmasi ketersediaan jadwal. Terima kasih!`;

    const whatsappUrl = `https://wa.me/+62 878-7817-7527?text=${encodeURIComponent(message)}`;
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Redirect to WhatsApp after showing success message
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 2000);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen pt-16 bg-gray-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 shadow-xl text-center max-w-md mx-4"
        >
          <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="font-bold text-2xl text-dark mb-4">Booking Berhasil!</h2>
          <p className="text-gray-600 mb-6">
            Permintaan booking Anda telah dikirim. Anda akan diarahkan ke WhatsApp untuk konfirmasi.
          </p>
          <div className="bg-gold text-white px-4 py-2 rounded-lg inline-flex items-center">
            <MessageCircle className="h-4 w-4 mr-2" />
            Mengarahkan ke WhatsApp...
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dark via-gray-900 to-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-barlow font-bold text-4xl md:text-5xl mb-4">
              Booking <span className="text-gold">Online</span>
            </h1>
            <p className="text-xl text-gray-300">
              Reservasi mudah dan cepat untuk pengalaman grooming terbaik
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">
                    <User className="inline h-4 w-4 mr-2" />
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Masukkan nama lengkap"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">
                    <Phone className="inline h-4 w-4 mr-2" />
                    Nomor WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="08123456789"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">
                    <Calendar className="inline h-4 w-4 mr-2" />
                    Tanggal *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={getMinDate()}
                    max={getMaxDate()}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 ${
                      errors.date ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.date && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.date}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">
                    <Clock className="inline h-4 w-4 mr-2" />
                    Jam *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 ${
                      errors.time ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Pilih jam</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                  {errors.time && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.time}
                    </p>
                  )}
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">
                  Pilih Layanan *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 ${
                    errors.service ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Pilih layanan</option>
                  {services.map(service => (
                    <option key={service.name} value={service.name}>
                      {service.name} - Rp {service.price.toLocaleString('id-ID')}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.service}
                  </p>
                )}
              </div>

              {/* Barberman Selection */}
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">
                  Pilih Barberman *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {barbermen.map(barberman => (
                    <label
                      key={barberman.name}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                        formData.barberman === barberman.name
                          ? 'border-gold bg-gold bg-opacity-10'
                          : 'border-gray-300 hover:border-gold'
                      }`}
                    >
                      <input
                        type="radio"
                        name="barberman"
                        value={barberman.name}
                        checked={formData.barberman === barberman.name}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-dark">{barberman.name}</h4>
                          <p className="text-sm text-gray-600">{barberman.specialty}</p>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gold font-semibold">{barberman.rating}</span>
                          <span className="text-gold ml-1">★</span>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.barberman && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.barberman}
                  </p>
                )}
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">
                  Catatan Tambahan
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                  placeholder="Permintaan khusus atau catatan tambahan..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-yellow-600 disabled:bg-gray-400 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Memproses...
                    </>
                  ) : (
                    <>
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Kirim via WhatsApp
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-lg text-blue-900 mb-3">Informasi Penting:</h3>
            <ul className="space-y-2 text-blue-800">
              <li>• Konfirmasi booking akan dikirim melalui WhatsApp</li>
              <li>• Harap datang 10 menit sebelum jadwal yang ditentukan</li>
              <li>• Pembatalan dapat dilakukan maksimal 2 jam sebelum jadwal</li>
              <li>• Pembayaran dapat dilakukan secara tunai atau transfer</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;