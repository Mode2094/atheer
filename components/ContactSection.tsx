'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { useSiteLocale } from '@/components/SiteProvider';

export default function ContactSection() {
  const { content, isArabic } = useSiteLocale();
  const [formData, setFormData] = useState({
    name: '',
    store: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = formData.name.trim();
    const store = formData.store.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();

    if (!name || !store || !email || !phone) {
      alert(isArabic ? 'يرجى تعبئة جميع الحقول قبل الإرسال.' : 'Please fill in all fields before submitting.');
      return;
    }

    const message = isArabic
      ? `مرحباً، لدي طلب عرض تجريبي من موقع أثير.\n\nالاسم: ${name}\nاسم المتجر: ${store}\nالبريد الإلكتروني: ${email}\nرقم الهاتف: ${phone}`
      : `Hello, I would like to request a demo from Aatheer website.\n\nName: ${name}\nStore Name: ${store}\nEmail: ${email}\nPhone: ${phone}`;

    const whatsappNumber = '962793519944';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="pb-20 sm:pb-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 sm:p-12"
        >
          <h2 className="mb-3 text-center text-3xl font-extrabold sm:text-4xl">{content.contact.title}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-white/75">{content.contact.text}</p>

          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder={content.contact.placeholders.name}
              value={formData.name}
              onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/45 focus:border-cyan-300/50 focus:outline-none"
            />
            <input
              type="text"
              placeholder={content.contact.placeholders.store}
              value={formData.store}
              onChange={(event) => setFormData((prev) => ({ ...prev, store: event.target.value }))}
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/45 focus:border-cyan-300/50 focus:outline-none"
            />
            <input
              type="email"
              placeholder={content.contact.placeholders.email}
              value={formData.email}
              onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/45 focus:border-cyan-300/50 focus:outline-none"
            />
            <input
              type="tel"
              placeholder={content.contact.placeholders.phone}
              value={formData.phone}
              onChange={(event) => setFormData((prev) => ({ ...prev, phone: event.target.value }))}
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/45 focus:border-cyan-300/50 focus:outline-none"
            />
            <button
              type="submit"
              className="sm:col-span-2 rounded-xl bg-gradient-to-l from-cyan-400 to-blue-500 px-6 py-3 font-bold text-white transition hover:opacity-90"
            >
              {content.contact.submit}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
