"use client";

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [category, setCategory] = useState('ケータリングのご相談');
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    'ケータリングのご相談',
    '商品開発・製造のご依頼',
    '事業開発・支援のご相談',
    '取材・協業・その他',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 sm:py-40 px-6 sm:px-8 lg:px-12 bg-[#F3F3EB] relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header with generous negative space */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-[12px] font-semibold tracking-[0.35em] text-[#EFA00B] uppercase font-sans">
            CONTACT
          </span>
          <h2 className="font-mincho text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1C] mt-3 mb-5 tracking-wider font-medium">
            「一緒につくる。」
          </h2>
          <p className="text-sm sm:text-base text-[#63636B] font-sans-jp font-light leading-relaxed">
            食を通じた場づくり、商品の開発、新しい事業の構想など、
            <br className="hidden sm:inline" />
            どんなことでもお気軽にご相談ください。
          </p>
        </div>

        {/* Interactive Form Card */}
        <div className="bg-[#FAF9F5]/90 rounded-3xl p-8 sm:p-14 shadow-[0_4px_30px_rgba(0,0,0,0.015)]">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#EAEAE0] flex items-center justify-center mx-auto text-[#EFA00B]">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="font-mincho text-2xl text-[#1A1A1C] font-medium">
                お問い合わせを受け付けました
              </h3>
              <p className="text-xs sm:text-sm text-[#66666E] font-sans-jp max-w-md mx-auto leading-relaxed">
                内容を確認の上、担当より原則2営業日以内にご連絡させていただきます。
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ company: '', name: '', email: '', phone: '', message: '' });
                }}
                className="mt-6 text-xs text-[#EFA00B] hover:underline font-medium cursor-pointer"
              >
                新しいお問い合わせを入力する
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Category Selector Chips */}
              <div>
                <label className="block text-xs font-semibold text-[#4A4A52] font-sans-jp mb-3">
                  ご相談種別 <span className="text-[#EFA00B]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {categories.map((cat) => (
                    <button
                      type="button"
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`py-3 px-4 rounded-xl text-xs font-medium text-left transition-all cursor-pointer ${
                        category === cat
                          ? 'bg-[#FFF8E6] text-[#1A1A1C] shadow-xs ring-1.5 ring-[#EFA00B]'
                          : 'bg-[#EAEAE0]/50 text-[#63636B] hover:bg-[#EAEAE0]'
                      }`}
                    >
                      <span className="flex items-center justify-between">
                        <span>{cat}</span>
                        {category === cat && <span className="w-1.5 h-1.5 rounded-full bg-[#EFA00B]" />}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Company & Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-[#4A4A52] font-sans-jp mb-2">
                    貴社名・組織名 <span className="text-[10px] text-[#9A9AA2] font-normal">（法人の場合）</span>
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="例）株式会社〇〇"
                    className="w-full px-4 py-3 text-xs sm:text-sm bg-[#EAEAE0]/50 rounded-xl focus:outline-hidden focus:bg-white focus:ring-2 focus:ring-[#EFA00B]/30 transition-all placeholder:text-[#9E9EA6]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#4A4A52] font-sans-jp mb-2">
                    お名前 <span className="text-[#EFA00B]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="例）山田 太郎"
                    className="w-full px-4 py-3 text-xs sm:text-sm bg-[#EAEAE0]/50 rounded-xl focus:outline-hidden focus:bg-white focus:ring-2 focus:ring-[#EFA00B]/30 transition-all placeholder:text-[#9E9EA6]"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-[#4A4A52] font-sans-jp mb-2">
                    メールアドレス <span className="text-[#EFA00B]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 text-xs sm:text-sm bg-[#EAEAE0]/50 rounded-xl focus:outline-hidden focus:bg-white focus:ring-2 focus:ring-[#EFA00B]/30 transition-all placeholder:text-[#9E9EA6]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#4A4A52] font-sans-jp mb-2">
                    お電話番号
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="090-0000-0000"
                    className="w-full px-4 py-3 text-xs sm:text-sm bg-[#EAEAE0]/50 rounded-xl focus:outline-hidden focus:bg-white focus:ring-2 focus:ring-[#EFA00B]/30 transition-all placeholder:text-[#9E9EA6]"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-[#4A4A52] font-sans-jp mb-2">
                  ご相談・お問い合わせ内容 <span className="text-[#EFA00B]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="ご希望の日程、人数、ご予算、商品の企画内容など、お分かりの範囲でご自由にご記入ください。"
                  className="w-full px-4 py-3 text-xs sm:text-sm bg-[#EAEAE0]/50 rounded-xl focus:outline-hidden focus:bg-white focus:ring-2 focus:ring-[#EFA00B]/30 transition-all resize-y leading-relaxed placeholder:text-[#9E9EA6]"
                />
              </div>

              {/* Privacy Notice & Submit Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[11px] text-[#8A8A92] font-sans-jp">
                  ご入力いただいた情報は、お問い合わせ対応のみに使用いたします。
                </p>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-3.5 bg-[#1A1A1C] text-white rounded-full text-xs font-medium tracking-widest hover:bg-[#333338] transition-colors group cursor-pointer shadow-xs"
                >
                  <span>送信する</span>
                  <Send size={13} className="text-[#EFA00B] group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};