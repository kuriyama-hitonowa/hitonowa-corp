"use client";

/* --------------------------------------------------------------------------
   ひとのわ コーポレートサイト 高級版（2026-11-16）。
   ページ全体の見た目と本文はここが「正」。会社概要・展開ブランドは site.ts を描画する。
   スタイルは src/app/globals.css。AI Studio 同期は、この構成では使わない。
   -------------------------------------------------------------------------- */

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { site } from "@/config/site";
import heroArt from "@/assets/hero-illustration.jpg";
import anelloLogo from "@/assets/brands/anello-logo.png";

const NAV = [
  { label: "ABOUT", href: "#about", sub: "ひとのわについて" },
  { label: "BUSINESS", href: "#business", sub: "3つの事業" },
  { label: "BRANDS", href: "#brands", sub: "展開ブランド" },
  { label: "CATERING", href: "#catering", sub: "ケータリング" },
  { label: "PRODUCT", href: "#product", sub: "商品開発・製造" },
  { label: "BUSINESS DEV", href: "#business-dev", sub: "事業開発・支援" },
  { label: "PHILOSOPHY", href: "#philosophy", sub: "想い" },
  { label: "COMPANY", href: "#company", sub: "会社概要" },
];
const NAV_TOP = ["ABOUT", "BUSINESS", "BRANDS", "CATERING", "PRODUCT", "COMPANY"];

const PILLARS = [
  { t: "場をつくる", d: "食卓を囲むひとときが、堅苦しい垣根を取り払い、自然な対話と信頼を生み出します。" },
  { t: "商品を生み出す", d: "企画から調理・冷凍技術まで、確かな味と持続可能な品質で新しい食の価値を具現化します。" },
  { t: "人をつなぐ", d: "食べる人、つくる人、事業を育てる人が有機的につながる循環の輪を広げます。" },
  { t: "事業を支援する", d: "食の現場感と仕組み化の知見を掛け合わせ、実効性のある新しい食ビジネスを伴走します。" },
];

const TRI = [
  {
    en: "Catering", ja: "ケータリング", href: "#catering",
    tag: "法人向けオードブル・各種ケータリング",
    pts: ["社内レセプション・懇親会", "役員会・重要ゲスト向け特別席", "空間演出と出来立ての温もり"],
  },
  {
    en: "Product", ja: "商品開発・製造", href: "#product",
    tag: "オリジナル商品の企画・製造・冷凍食品開発",
    pts: ["独自レシピの設計と試作検証", "急速冷凍技術を活用した品質保持", "PB／OEM製品の受託製造"],
  },
  {
    en: "Business", ja: "事業開発・支援", href: "#business-dev",
    tag: "新規事業の企画・仕組みづくり・支援",
    pts: ["食ビジネスのコンセプト設計", "厨房・調理オペレーション構築", "食を通じたコミュニティ支援"],
  },
];

const SCENES = [
  {
    t: "社内懇親会・レセプション",
    d: "会話を邪魔せず片手でつまめるフィンガーフードから、彩り豊かな大皿料理まで。オフィスのカフェスペースや会議室が一瞬で上質な交流の場へと変わります。",
    g: "50〜200名規模の社内イベント・交流会",
    m: ["季節のフィンガーオードブル 6種", "国産鶏と香草のローストピンチョス", "特製ミニキッシュとパテ・ド・カンパーニュ", "旬の温菜ビュッフェ"],
  },
  {
    t: "役員会・重要ゲストのおもてなし",
    d: "厳選された旬の食材と、細部にまで配慮の行き届いた器のしつらえ。落ち着いた空間にふさわしい、特別感のあるプライベートケータリングをお届けします。",
    g: "10〜30名規模の役員懇談会・重要商談席",
    m: ["厳選和牛の低温ロースト", "旬魚のポワレと季節野菜のエチュベ", "無農薬野菜のテリーヌ", "季節の自家製デザート"],
  },
  {
    t: "周年記念・キックオフパーティー",
    d: "会社の節目や門出を祝う華やかなテーブルコーディネート。企業のアイデンティティやコンセプトに合わせたテーマカラーや特別メニューをご提案します。",
    g: "30〜300名規模の記念行事・発表会",
    m: ["オリジナルロゴ入りスイーツ", "祝祭のローストポークカービング", "彩りタパスのロングテーブル", "乾杯用スパークリング手配"],
  },
];

const CAT_FEATS = [
  { t: "会話が生まれる仕掛け", d: "取り分けやすさ、口当たりの良さ、視覚的な楽しさを計算したメニュー設計で、自然な歓談を促します。" },
  { t: "場の空気を創る設え", d: "ただ並べるのではなく、クロスや木製ボード、草花を活かした空間演出で温かみのある食卓を構築します。" },
  { t: "柔軟なオーダーメイド", d: "ご予算、参加者の年齢層、アレルギー対応、ベジタリアン/ハラール配慮など、一社ごとのご要望に寄り添います。" },
];

const STEPS = [
  { t: "企画・コンセプト設計", d: "市場ニーズやターゲットの食シーンを分析し、ブランドの核となるストーリーと味の方向性を決定します。" },
  { t: "レシピ開発・試作検証", d: "素材の選定から加熱・調味の微調整まで、何度も試作を重ねて理想の食感と風味を追求します。" },
  { t: "製造・品質設計", d: "小ロットから対応可能な製造体制と、急速冷凍などの先進技術を組み合わせ、出来立ての品質を封じ込めます。" },
  { t: "商品化・パッケージング", d: "賞味期限検査、表示規格の策定、パッケージ意匠まで、流通と顧客体験を見据えた形に仕上げます。" },
];

const PROD_FEATS = [
  { t: "冷凍食品開発・保存技術", d: "ドリップを抑え、解凍後もレストランの味を再現する急速冷凍プロセスの知見を活かします。" },
  { t: "小ロットからの柔軟な受託開発", d: "大手工場では難しい繊細な手仕事や小回り、限定ロットのOEM/PB商品開発にも対応します。" },
  { t: "一貫したブランド品質管理", d: "単にレシピを作るだけでなく、コスト構造・継続的な供給安定性まで伴走して設計します。" },
];

const BD = [
  { t: "飲食・食品ブランドの企画・立ち上げ", d: "ターゲット選定、メニューコンセプト、世界観の設計から初期テストマーケティングまでを統合的にプロデュースします。" },
  { t: "厨房・調理オペレーションと製造ライン設計", d: "机上の空論ではなく、実際の現場で無理なく回る調理手順、仕込み効率、衛生管理と動線の仕組み化を構築します。" },
  { t: "パートナーシップ・流通ネットワーク開拓", d: "生産者、製造協力工場、販売チャネルなど、事業の拡大に必要なステークホルダーとの持続的な連携を支援します。" },
  { t: "食を起点としたコミュニティ・場づくり支援", d: "社内コミュニケーションの活性化や、商業施設・オフィスの共有スペースにおける食を通じた体験価値を創出します。" },
];

const CATEGORIES = ["ケータリングのご相談", "商品開発・製造のご依頼", "事業開発・支援のご相談", "取材・協業・その他"];

const pad = (n: number) => String(n + 1).padStart(2, "0");

function Arrow() {
  return <span className="arr" aria-hidden="true" />;
}

function Opening() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    try {
      // 同じタブで2回目以降は、オープニングを出さない
      if (sessionStorage.getItem("hw-open")) ref.current?.classList.add("skip");
      else sessionStorage.setItem("hw-open", "1");
    } catch {
      /* 保存できない環境では毎回表示するだけ */
    }
  }, []);
  return (
    <div ref={ref} className="open" aria-hidden="true">
      <svg width="148" height="148" viewBox="0 0 148 148">
        <circle cx="74" cy="74" r="60" fill="none" stroke="#8a6410" strokeWidth="1.2" strokeLinecap="round" transform="rotate(-90 74 74)" />
      </svg>
      <span className="ow">
        hitono<b>wa</b>
      </span>
    </div>
  );
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
            {NAV.filter((n) => NAV_TOP.includes(n.label)).map((n) => (
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
      <Image src={heroArt} alt="" className="hero-art" priority sizes="140vw" />
      <p className="hero-v" aria-label="食を通じて、人と人をつなぐ。">
        <span>食</span>を通じて、
        <br />
        人と人を<span>つなぐ</span>。
      </p>
      <div className="hero-in">
        <div className="wrap">
          <div className="hero-kicker">Tokyo · Catering / Product / Business</div>
          <h1 className="hero-word">
            <span>hitono</span>
            <em className="foil-lo">wa</em>
          </h1>
          <div className="hero-corp">合同会社ひとのわ</div>
          <p className="hero-sub">
            ひとのわは、食を起点に人と人がつながる場をつくり、
            <br />
            新しい価値と未来を生み出す会社です。
          </p>
          <div className="hero-actions">
            <a className="btn-gold" href="#contact">
              お問い合わせ <Arrow />
            </a>
            <a className="btn-line" href="#business">
              事業を見る
            </a>
          </div>
        </div>
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
          <span className="label">About</span>
          <h2 className="en">
            About <i>us</i>
          </h2>
          <p className="ja">ひとのわについて</p>
        </div>
        <p className="lead-min rv">
          ひとのわは、食を起点に
          <br />
          人と人がつながる場をつくり、
          <br />
          新しい価値と未来を生み出す会社です。
        </p>
        <p className="body-txt rv" style={{ marginTop: "clamp(36px,5vw,64px)", maxWidth: "46em" }}>
          私たちは、単なる食品の調理・配送にとどまる会社ではありません。食をひとつの豊かな「メディア（媒介）」と捉え、企業内のコミュニケーション創出、独自の冷凍・加工技術を活かしたオリジナル商品開発、そして食領域の新規事業支援まで、人・企業・社会を温かく結びつけていきます。
        </p>
        <div className="pillars">
          {PILLARS.map((p, i) => (
            <div className="pillar rv" key={p.t}>
              <div className="no foil-lo">{pad(i)}</div>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </div>
          ))}
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
          <span className="label">Business</span>
          <h2 className="en">
            Three <i>Pillars</i>
          </h2>
          <p className="ja">3つの事業</p>
          <p className="body-txt" style={{ maxWidth: "34em" }}>
            食の提供から、プロダクトの創出、ビジネスモデルの構築まで
          </p>
        </div>
        <div className="tri">
          {TRI.map((t, i) => (
            <a className="tri-item rv" href={t.href} key={t.en}>
              <span className="tri-no">{pad(i)}</span>
              <span className="tri-en foil">{t.en}</span>
              <span className="tri-ja">{t.ja}</span>
              <span className="tri-tag">{t.tag}</span>
              <ul>
                {t.pts.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <span className="tri-more">
                MORE <Arrow />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Brands() {
  const b = site.brands[0];
  return (
    <section className="sec sec-light" id="brands">
      <div className="wrap">
        <div className="sh">
          <span className="label">Brands</span>
          <h2 className="en">
            Our <i>Brand</i>
          </h2>
          <p className="ja">展開ブランド</p>
          <p className="body-txt">ひとのわが手がける、食のブランド</p>
        </div>
        <div className="brand-grid rv">
          <div className="brand-logo">
            <Image src={anelloLogo} alt={`${b.nameJa} ${b.nameLatin} のロゴ`} sizes="(min-width: 960px) 340px, 70vw" />
          </div>
          <div>
            <p className="brand-cat">{b.category}</p>
            <p className="brand-name">{b.nameJa}</p>
            <h3 className="brand-latin foil-lo">{b.nameLatin}</h3>
            <p className="brand-desc">{b.description}</p>
            <div style={{ marginTop: 34 }}>
              {b.url ? (
                <a className="btn-line" href={b.url} target="_blank" rel="noopener noreferrer">
                  公式サイトを見る <Arrow />
                </a>
              ) : (
                <p style={{ fontSize: 12, letterSpacing: "0.2em", color: "var(--gold-lo)" }}>ブランドサイトは準備中です</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Catering() {
  return (
    <section className="sec sec-paper" id="catering">
      <div className="wrap">
        <div className="sh">
          <span className="label">Catering</span>
          <h2 className="en">
            <i>Catering</i>
          </h2>
          <p className="ja">法人向けケータリング・オードブル</p>
        </div>
        <p className="lead-min rv">
          「料理を届ける」だけではなく、
          <br />
          人が集まり、会話が生まれ、場ができる体験をお届けします。
        </p>
        <div className="bd" style={{ marginTop: "clamp(48px,6vw,88px)" }}>
          <p className="f-min" style={{ fontSize: "clamp(20px,2.3vw,30px)", lineHeight: 1.8, letterSpacing: "0.08em", fontWeight: 600 }}>
            料理は人と人をつなぐ、
            <br />
            もっともあたたかいインターフェース。
          </p>
          <p className="body-txt">
            ビジネスの現場において、食事は単なる飲食の時間を超え、チームの結束を高めたり、取引先との信頼関係を深めたりする力を持っています。ひとのわは、開催目的や参加者の空気感に合わせ、一皿ごとにストーリーを込めたケータリングを提供します。
          </p>
        </div>
        <div className="scenes">
          {SCENES.map((s, i) => (
            <article className="scene rv" key={s.t}>
              <span className="no foil-lo">Scene {pad(i)}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <span className="tg">想定規模｜{s.g}</span>
              <ul>
                {s.m.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="feats">
          {CAT_FEATS.map((f) => (
            <div className="feat" key={f.t}>
              <h4>{f.t}</h4>
              <p>{f.d}</p>
            </div>
          ))}
        </div>
        <div className="cta-band">
          <div>
            <h4>ケータリングのご相談・お見積り</h4>
            <p>日時・ご予算・人数・会場の設備に合わせて最適なプランをご提案いたします。</p>
          </div>
          <a className="btn-gold" href="#contact">
            ケータリングを相談する <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

function Product() {
  return (
    <section className="sec sec-light" id="product">
      <div className="wrap">
        <div className="sh">
          <span className="label">Product Development</span>
          <h2 className="en">
            <i>Product</i>
          </h2>
          <p className="ja">商品開発・製造</p>
        </div>
        <p className="lead-min rv">
          オリジナル商品の企画から試作、
          <br />
          冷凍技術を活かした製造まで、食を生み出すクラフトマンシップ。
        </p>
        <p className="label" style={{ marginTop: "clamp(48px,6vw,88px)" }}>
          Development Flow
        </p>
        <p className="body-txt" style={{ marginTop: 14 }}>
          企画から商品化へのプロセス
        </p>
        <div className="flow">
          {STEPS.map((s, i) => (
            <div className="step rv" key={s.t}>
              <span className="no">Step {pad(i)}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
        <div className="feats">
          {PROD_FEATS.map((f) => (
            <div className="feat" key={f.t}>
              <h4>{f.t}</h4>
              <p>{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BusinessDev() {
  return (
    <section className="sec sec-light" id="business-dev">
      <div className="wrap">
        <div className="sh">
          <span className="label">Business Development</span>
          <h2 className="en">
            <i>Business</i>
          </h2>
          <p className="ja">事業開発・支援</p>
        </div>
        <p className="lead-min rv">
          現場の知見があるからこそ描ける、
          <br />
          机上の空論ではない実行力ある食の仕組みづくり。
        </p>
        <div className="bd" style={{ marginTop: "clamp(48px,6vw,88px)" }}>
          <div>
            <p className="f-min" style={{ fontSize: "clamp(19px,2vw,26px)", lineHeight: 1.9, letterSpacing: "0.08em", fontWeight: 600 }}>
              私たちは単なる「アドバイザー」ではありません。
              <br />
              自ら食の現場を動かす「実践者」として事業を共創します。
            </p>
            <p className="body-txt" style={{ marginTop: 28 }}>
              食のビジネスには、味の再現性、衛生管理、原価率、オペレーション負荷、そして顧客の感情体験といった無数の要素が絡み合います。ひとのわは、ケータリングや製造開発の最前線で培った実地ノウハウを武器に、持続可能で愛される食事業の立ち上げ・改善を現場目線で伴走します。
            </p>
          </div>
          <div className="bd-list">
            {BD.map((b, i) => (
              <div className="bd-item rv" key={b.t}>
                <span className="no foil-lo">{pad(i)}</span>
                <h4>{b.t}</h4>
                <p>{b.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="cta-band">
          <div>
            <h4>新規食ビジネス・商品立ち上げのご相談</h4>
            <p>構想段階のアイデアから、既存事業のオペレーション改善までお気軽にお聞かせください。</p>
          </div>
          <a className="btn-gold" href="#contact">
            事業相談をする <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="sec sec-ink-2 phil" id="philosophy">
      <svg className="phil-ring" viewBox="0 0 400 400" aria-hidden="true">
        <circle cx="200" cy="200" r="196" fill="none" stroke="#c9a45c" strokeWidth="0.5" strokeDasharray="2 6" />
        <circle cx="200" cy="200" r="168" fill="none" stroke="#c9a45c" strokeWidth="0.8" />
        <circle cx="200" cy="200" r="140" fill="none" stroke="#c9a45c" strokeWidth="0.4" />
        <circle cx="200" cy="32" r="3.4" fill="#ecd49a" />
      </svg>
      <div className="wrap">
        <span className="label">Philosophy</span>
        <h2 className="phil-q foil">
          「食を通じて、
          <br />
          人と人をつなぐ。」
        </h2>
        <p className="phil-p">
          人は太古から、火を囲み、同じ食卓で料理を分かち合うことで、心を通わせ、信頼を育み、共同体を築いてきました。
          <br />
          どんなに社会やテクノロジーが進化しても、美味しい料理を前にしたときに生まれる笑顔や、偶発的に交わされる温かな対話の価値は変わりません。
          <br />
          ひとのわは、食を単なる消費物としてではなく、人と人、企業と人、現在と未来を結ぶかけがえのない起点として大切にし続けます。
        </p>
      </div>
    </section>
  );
}

function Company() {
  const c = site.company;
  return (
    <section className="sec sec-paper" id="company">
      <div className="wrap">
        <div className="sh">
          <span className="label">Company</span>
          <h2 className="en">
            <i>Company</i>
          </h2>
          <p className="ja">会社概要</p>
        </div>
        <dl className="co">
          <div className="co-row">
            <dt>会社名</dt>
            <dd>{c.legalLine}</dd>
          </div>
          <div className="co-row">
            <dt>事業内容</dt>
            <dd>
              <ul>
                {c.businessLines.map((l, i) => (
                  <li key={l}>
                    {i + 1}. {l}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          <div className="co-row">
            <dt>{c.locationLabel}</dt>
            <dd>{c.location}</dd>
          </div>
          <div className="co-row">
            <dt>お問い合わせ</dt>
            <dd>{c.email}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Contact() {
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [f, setF] = useState({ company: "", name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });

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
        <div className="ct">
          <div>
            <span className="label">Contact</span>
            <h2 className="phil-q foil-lo" style={{ fontSize: "clamp(34px,3.9vw,56px)", marginTop: 26 }}>
              「一緒に
              <br />
              つくる。」
            </h2>
            <p className="body-txt" style={{ marginTop: 30, maxWidth: "26em" }}>
              食を通じた場づくり、商品の開発、新しい事業の構想など、どんなことでもお気軽にご相談ください。
            </p>
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
                <label htmlFor="c-company">貴社名・組織名（法人の場合）</label>
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
            <div className="fld-row">
              <div className="fld">
                <label htmlFor="c-msg">ご相談・お問い合わせ内容 *</label>
                <textarea id="c-msg" value={f.message} onChange={set("message")} placeholder="ご希望の日程、人数、ご予算、商品の企画内容など、お分かりの範囲でご自由にご記入ください。" required />
              </div>
            </div>
            <div style={{ marginTop: 34, display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "space-between" }}>
              <p style={{ fontSize: 12, letterSpacing: "0.06em", color: "var(--t-light-2)" }}>ご入力いただいた情報は、お問い合わせ対応のみに使用いたします。</p>
              <button type="submit" className="btn-gold">
                メールで送る <Arrow />
              </button>
            </div>
            {sent && (
              <p className="sent" role="status">
                メールアプリが開きます。内容をご確認のうえ、送信してください。開かない場合は、{site.company.email} まで直接お送りください。原則2営業日以内にご連絡いたします。
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
            <div className="foot-word foil">hitonowa</div>
            <p className="foot-tag">合同会社ひとのわ　｜　食を通じて、人と人をつなぐ。</p>
          </div>
          <nav className="foot-nav" aria-label="フッターメニュー">
            {NAV.filter((n) => NAV_TOP.includes(n.label)).map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
            <a href="#contact">CONTACT</a>
          </nav>
        </div>
        <div className="foot-bot">
          <span>© 2026 合同会社ひとのわ（hitonowa LLC）　東京都 / ケータリング・商品開発・事業支援</span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="ページ上部へ戻る">
            PAGE TOP ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

export default function PremiumHome() {
  return (
    <>
      <Opening />
      <Nav />
      <main>
        <Hero />
        <About />
        <Business />
        <Brands />
        <Catering />
        <Product />
        <BusinessDev />
        <Philosophy />
        <Company />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
