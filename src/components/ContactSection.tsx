"use client";

import { useState } from "react";
import { Send, CheckCircle2, Mail, Phone } from "lucide-react";
import { site } from "@/config/site";

const categories = [
  "ケータリングのご相談",
  "商品開発・製造のご依頼",
  "事業開発・支援のご相談",
  "取材・協業・その他",
];

export function ContactSection() {
  const [category, setCategory] = useState(categories[0]);
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const endpoint = site.contact.formEndpoint;
  const formEnabled = endpoint.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    if (!formEnabled) return;

    setSending(true);
    setError("");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category, ...formData }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setSubmitted(true);
    } catch {
      setError(
        `送信に失敗しました。お手数ですが ${site.contact.email} または ${site.contact.tel} へ直接ご連絡ください。`,
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-28 sm:py-40 px-6 sm:px-8 lg:px-12 bg-[#FAF8F3] border-t border-[#EFE8D8] relative"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-[12px] font-semibold tracking-[0.35em] text-[#EFA00B] uppercase">
            CONTACT
          </span>
          <h2 className="font-mincho text-3xl sm:text-4xl lg:text-5xl text-ink mt-3 tracking-wider font-medium">
            「一緒につくる。」
          </h2>
          <div className="w-8 h-[1.5px] bg-[#EFA00B] mx-auto mt-5 mb-4" />
          <p className="text-sm sm:text-base text-[#63636B] font-sans-jp font-light leading-relaxed">
            食を通じた場づくり、商品の開発、新しい事業の構想など、
            <br className="hidden sm:inline" />
            どんなことでもお気軽にご相談ください。
          </p>
        </div>

        {/* 直接の連絡先（フォーム送信先が未設定でも確実に届く導線） */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <a
            href={`mailto:${site.contact.email}`}
            className="flex items-center gap-3 p-4 bg-white border border-[#ECE5D8] rounded-xl hover:border-[#EFA00B]/60 transition-colors"
          >
            <span className="w-9 h-9 rounded-full bg-[#FAF8F3] border border-[#E5DFD0] flex items-center justify-center shrink-0">
              <Mail size={16} className="text-[#EFA00B]" />
            </span>
            <span className="text-xs sm:text-sm text-[#2C2C30] font-sans-jp break-all">
              {site.contact.email}
            </span>
          </a>
          <a
            href={`tel:${site.contact.tel.replace(/-/g, "")}`}
            className="flex items-center gap-3 p-4 bg-white border border-[#ECE5D8] rounded-xl hover:border-[#EFA00B]/60 transition-colors"
          >
            <span className="w-9 h-9 rounded-full bg-[#FAF8F3] border border-[#E5DFD0] flex items-center justify-center shrink-0">
              <Phone size={16} className="text-[#EFA00B]" />
            </span>
            <span className="text-xs sm:text-sm text-[#2C2C30] font-sans-jp">{site.contact.tel}</span>
          </a>
        </div>

        <div className="bg-white border border-[#ECE5D8] rounded-2xl p-8 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#FAF8F3] border border-[#E5DFD0] flex items-center justify-center mx-auto text-[#EFA00B]">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="font-mincho text-2xl text-ink font-medium">
                お問い合わせを受け付けました
              </h3>
              <p className="text-xs sm:text-sm text-[#66666E] font-sans-jp max-w-md mx-auto leading-relaxed">
                内容を確認の上、担当より原則{site.contact.replyWithin}にご連絡いたします。
                お急ぎの場合はお電話（{site.contact.tel}）でも承っております。
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ company: "", name: "", email: "", phone: "", message: "" });
                }}
                className="mt-6 text-xs text-[#EFA00B] hover:underline font-medium"
              >
                新しいお問い合わせを入力する
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
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
                      className={`py-2.5 px-4 rounded-lg text-xs font-medium text-left border transition-all ${
                        category === cat
                          ? "border-[#EFA00B] bg-[#FFFBF0] text-ink shadow-xs"
                          : "border-[#EAE3D4] bg-canvas text-[#63636B] hover:border-[#D8D0C0]"
                      }`}
                    >
                      <span className="flex items-center justify-between">
                        <span>{cat}</span>
                        {category === cat && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#EFA00B]" />
                        )}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-[#4A4A52] font-sans-jp mb-2">
                    貴社名・組織名{" "}
                    <span className="text-[10px] text-[#9A9AA2] font-normal">（法人の場合）</span>
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="例）株式会社〇〇"
                    className="w-full px-4 py-2.5 text-sm bg-canvas border border-[#EAE3D4] rounded-lg focus:outline-hidden focus:border-[#EFA00B] focus:bg-white transition-colors"
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
                    className="w-full px-4 py-2.5 text-sm bg-canvas border border-[#EAE3D4] rounded-lg focus:outline-hidden focus:border-[#EFA00B] focus:bg-white transition-colors"
                  />
                </div>
              </div>

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
                    className="w-full px-4 py-2.5 text-sm bg-canvas border border-[#EAE3D4] rounded-lg focus:outline-hidden focus:border-[#EFA00B] focus:bg-white transition-colors"
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
                    className="w-full px-4 py-2.5 text-sm bg-canvas border border-[#EAE3D4] rounded-lg focus:outline-hidden focus:border-[#EFA00B] focus:bg-white transition-colors"
                  />
                </div>
              </div>

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
                  className="w-full px-4 py-3 text-sm bg-canvas border border-[#EAE3D4] rounded-lg focus:outline-hidden focus:border-[#EFA00B] focus:bg-white transition-colors resize-y leading-relaxed"
                />
              </div>

              {error && (
                <p className="text-xs text-[#C0392B] font-sans-jp leading-relaxed">{error}</p>
              )}

              {!formEnabled && (
                <p className="text-[11px] text-[#A8A29A] font-sans-jp leading-relaxed">
                  ※ 送信フォームは準備中です。お手数ですが上記のメール・お電話よりご連絡ください。
                </p>
              )}

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[11px] text-[#8A8A92] font-sans-jp">
                  ご入力いただいた情報は、お問い合わせ対応のみに使用いたします。
                </p>
                <button
                  type="submit"
                  disabled={!formEnabled || sending}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-ink text-white rounded-lg text-xs font-medium tracking-widest hover:bg-[#333338] transition-colors group cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <span>{sending ? "送信中…" : "送信する"}</span>
                  <Send
                    size={13}
                    className="text-[#EFA00B] group-hover:translate-x-0.5 transition-transform"
                  />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
