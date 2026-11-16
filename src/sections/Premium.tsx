"use client";

/* --------------------------------------------------------------------------
   ひとのわ コーポレートサイト v3（2026-11-16）。
   ページ全体の見た目と本文はここが「正」。会社概要・展開ブランドは site.ts を描画する。
   スタイルは src/app/globals.css。AI Studio 同期は、この構成では使わない。
   方針: 実績のない具体（献立・規模・工程）は載せない。事実と約束できることだけを短く書く。
   -------------------------------------------------------------------------- */

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/config/site";
import heroArt from "@/assets/hero-illustration.png";
import anelloLogo from "@/assets/brands/anello-logo.png";

const NAV = [
  { label: "ABOUT", href: "#about", sub: "ひとのわについて" },
  { label: "BUSINESS", href: "#business", sub: "事業" },
  { label: "BRAND", href: "#brand", sub: "展開ブランド" },
  { label: "COMPANY", href: "#company", sub: "会社概要" },
];

const CATEGORIES = ["ケータリングのご相談", "商品開発・製造のご依頼", "事業開発・支援のご相談", "取材・協業・その他"];

const BUSINESS = [
  {
    en: "Catering",
    ja: "ケータリング",
    lead: "法人向けのオードブル・ケータリング。",
    d: "社内の懇親会、会議、お客様をお迎えする席へ。人数とご予算、お集まりの目的に合わせて、お料理を組み立ててお届けします。",
    cat: CATEGORIES[0],
  },
  {
    en: "Product",
    ja: "商品開発・製造",
    lead: "オリジナル食品・冷凍商品の企画開発と製造。",
    d: "自社のキッチンで、レシピの設計から試作、製造まで。小ロットからのご相談にも対応します。",
    cat: CATEGORIES[1],
  },
  {
    en: "Business Support",
    ja: "事業開発・支援",
    lead: "飲食・食品の新規事業づくりの支援。",
    d: "コンセプトの設計から、厨房と調理オペレーションの構築、運営の仕組みづくりまで。現場に立つ立場から、立ち上げに伴走します。",
    cat: CATEGORIES[2],
  },
];

function Arrow() {
  return <span className="arr" aria-hidden="true" />;
}

/** お問い合わせ種別を選んだ状態でフォームへ移動する */
function pickCategory(cat: string) {
  window.dispatchEvent(new CustomEvent("hw-category", { detail: cat }));
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <>
      <header className={`nav${scrolled ? " s" : ""}`}>
        <div className="wrap">
          <a className="logo" href="#top" aria-label="hitonowa トップへ" onClick={() => setOpen(false)}>
            <b>
              hitono<span>wa</span>
            </b>
            <small>合同会社ひとのわ</small>
          </a>
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
          <a className="cta" href="#contact">
            CONTACT
          </a>
          <button className={`burger${open ? " on" : ""}`} aria-label="メニューを開閉" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <i />
          </button>
        </div>
      </header>
      <nav className={`menu${open ? " on" : ""}`} aria-hidden={!open}>
        {NAV.map((n) => (
          <a key={n.href} href={n.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            <b>{n.label}</b>
            <span>{n.sub}</span>
          </a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
          <b>CONTACT</b>
          <span>お問い合わせ</span>
        </a>
      </nav>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <p className="hero-v" aria-label="食を通じて、人と人をつなぐ。">
        <span>食</span>を通じて、
        <br />
        人と人を<span>つなぐ</span>。
      </p>
      <div className="hero-in">
        <div className="wrap">
          <p className="hero-corp">合同会社ひとのわ</p>
          <h1 className="hero-word" aria-label="hitonowa">
            hitono<em>wa</em>
          </h1>
          <p className="hero-sub">
            食を起点に、人が集まり、
            <br />
            話し、つながる場をつくります。
          </p>
          <div className="hero-actions">
            <a className="btn" href="#contact">
              お問い合わせ <Arrow />
            </a>
            <a className="tlink" href="#business">
              事業を見る <Arrow />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <Image src={heroArt} alt="" priority sizes="(min-width: 900px) 70vw, 128vw" />
      </div>
      <div className="hero-scroll" aria-hidden="true">
        SCROLL
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="sec sec-light" id="about">
      <div className="wrap">
        <div className="sh">
          <span className="eyebrow">About</span>
          <h2>
            食べる時間は、
            <br />
            人と人の距離を、そっと近づけます。
          </h2>
        </div>
        <div className="about-grid">
          <div className="about-in">
            <div className="about-body body-txt rv">
              <p>
                ひとのわは、食を起点に、人が集まり、話し、つながる場をつくる会社です。法人向けのケータリングから、オリジナル商品の開発・製造、飲食・食品の新規事業の支援まで。
              </p>
              <p>食の現場で手を動かしながら、人と企業と社会のあいだに、小さな輪を増やしていきます。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Business() {
  return (
    <section className="sec sec-paper" id="business">
      <div className="wrap">
        <div className="sh">
          <span className="eyebrow">Business</span>
          <h2>食の現場から、三つのかたちで。</h2>
        </div>
        <ul className="biz">
          {BUSINESS.map((b) => (
            <li className="biz-row rv" key={b.en}>
              <div>
                <p className="biz-en">{b.en}</p>
                <h3 className="biz-t">{b.ja}</h3>
              </div>
              <p className="biz-lead">{b.lead}</p>
              <p className="body-txt biz-d-p">{b.d}</p>
              <a className="tlink" href="#contact" onClick={() => pickCategory(b.cat)}>
                相談する <Arrow />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Brand() {
  const b = site.brands[0];
  return (
    <section className="sec sec-ink" id="brand">
      <div className="wrap">
        <div className="sh">
          <span className="eyebrow">Brand</span>
          <h2>ひとのわが手がける、食のブランド。</h2>
        </div>
        <div className="brand-grid rv">
          <div className="brand-plate">
            <Image src={anelloLogo} alt={`${b.nameJa} ${b.nameLatin} のロゴ`} sizes="(min-width: 900px) 360px, 70vw" />
          </div>
          <div>
            <p className="brand-cat">{b.category}</p>
            <p className="brand-ja">{b.nameJa}</p>
            <p className="brand-la">{b.nameLatin}</p>
            <p className="brand-desc">{b.description}</p>
            <div className="brand-act">
              {b.url ? (
                <a className="btn on-dark" href={b.url} target="_blank" rel="noopener noreferrer">
                  公式サイトを見る <Arrow />
                </a>
              ) : (
                <p style={{ fontSize: 12, letterSpacing: "0.2em", color: "var(--brass-dk)" }}>ブランドサイトは準備中です</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Company() {
  const c = site.company;
  return (
    <section className="sec sec-light" id="company">
      <div className="wrap">
        <div className="sh">
          <span className="eyebrow">Company</span>
          <h2>会社概要</h2>
        </div>
        <div className="co-wrap">
          <dl className="co">
            <div className="co-row">
              <dt>会社名</dt>
              <dd>{c.legalLine}</dd>
            </div>
            <div className="co-row">
              <dt>事業内容</dt>
              <dd>
                <ul>
                  {c.businessLines.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </dd>
            </div>
            <div className="co-row">
              <dt>{c.locationLabel}</dt>
              <dd>{c.location}</dd>
            </div>
            <div className="co-row">
              <dt>法人番号</dt>
              <dd>{c.corporateNumber}</dd>
            </div>
            <div className="co-row">
              <dt>お問い合わせ</dt>
              <dd>{c.email}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [f, setF] = useState({ company: "", name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });

  useEffect(() => {
    const on = (e: Event) => {
      const d = (e as CustomEvent<string>).detail;
      if (CATEGORIES.includes(d)) setCategory(d);
    };
    window.addEventListener("hw-category", on);
    return () => window.removeEventListener("hw-category", on);
  }, []);

  // 送信先サーバーが無い静的サイトなので、入力内容を入れたメールを開く（送信はメールアプリで行う）
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.name || !f.email || !f.message) return;
    const subject = `【${category}】${f.company ? f.company + " " : ""}${f.name}`;
    const body = [`ご相談種別：${category}`, `貴社名・組織名：${f.company}`, `お名前：${f.name}`, `メールアドレス：${f.email}`, `お電話番号：${f.phone}`, "", f.message].join("\n");
    window.location.href = `mailto:${site.company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section className="sec sec-paper" id="contact">
      <div className="wrap">
        <div className="sh">
          <span className="eyebrow">Contact</span>
          <h2>
            ご相談は、
            <br />
            かたちになる前からで構いません。
          </h2>
        </div>
        <div className="ct">
          <div>
            <p className="body-txt">ケータリング、商品の開発、新しい事業の構想など。原則2営業日以内にご返信します。</p>
            <a className="ct-mail" href={`mailto:${site.company.email}`}>
              {site.company.email}
            </a>
          </div>
          <form onSubmit={submit}>
            <div className="fld">
              <label>ご相談種別 *</label>
              <div className="chips" role="radiogroup" aria-label="ご相談種別">
                {CATEGORIES.map((c) => (
                  <button type="button" key={c} role="radio" aria-checked={category === c} className={`chip${category === c ? " on" : ""}`} onClick={() => setCategory(c)}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div className="fld-row two">
              <div className="fld">
                <label htmlFor="c-company">貴社名・組織名</label>
                <input id="c-company" value={f.company} onChange={set("company")} placeholder="例）株式会社〇〇" autoComplete="organization" />
              </div>
              <div className="fld">
                <label htmlFor="c-name">お名前 *</label>
                <input id="c-name" value={f.name} onChange={set("name")} placeholder="例）山田 太郎" autoComplete="name" required />
              </div>
            </div>
            <div className="fld-row two">
              <div className="fld">
                <label htmlFor="c-email">メールアドレス *</label>
                <input id="c-email" type="email" value={f.email} onChange={set("email")} placeholder="example@company.co.jp" autoComplete="email" required />
              </div>
              <div className="fld">
                <label htmlFor="c-phone">お電話番号</label>
                <input id="c-phone" type="tel" value={f.phone} onChange={set("phone")} placeholder="03-0000-0000" autoComplete="tel" />
              </div>
            </div>
            <div className="fld">
              <label htmlFor="c-msg">ご相談内容 *</label>
              <textarea id="c-msg" value={f.message} onChange={set("message")} placeholder="ご希望の日程、人数、ご予算、企画内容など、お分かりの範囲でご記入ください。" required />
            </div>
            <div className="form-foot">
              <p>ご入力いただいた情報は、お問い合わせへの対応のみに使用します。</p>
              <button type="submit" className="btn">
                メールで送る <Arrow />
              </button>
            </div>
            {sent && (
              <p className="sent" role="status">
                メールアプリが開きます。内容をご確認のうえ、送信してください。開かない場合は、{site.company.email} まで直接お送りください。
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <div>
            <div className="foot-word">
              hitono<em>wa</em>
            </div>
            <p className="foot-tag">合同会社ひとのわ</p>
          </div>
          <nav className="foot-nav" aria-label="フッターメニュー">
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
            <a href="#contact">CONTACT</a>
          </nav>
        </div>
        <div className="foot-bot">
          <span>© 2026 合同会社ひとのわ（hitonowa LLC）</span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="ページ上部へ戻る">
            TOP ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

export default function PremiumHome() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Business />
        <Brand />
        <Company />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
