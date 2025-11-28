import svgPaths from "./svg-hl9hmmm0kp";
import imgNavItem from "figma:asset/16ea04cf7635cf8568a15abf32c149f41ad2afcb.png";
import imgNavItem1 from "figma:asset/61071de1ff7e1016fb34de249accc9aa62fdec08.png";
import imgNavItem2 from "figma:asset/5442b942da457deeb180237c6c3ce2cd8c7cb76a.png";
import imgLogo from "figma:asset/ac10c0d1bde583437f1e360fdfd8715b06bf6477.png";
import imgArticlesItem from "figma:asset/b49e3b214fd4defc11a623af10b336ba4c5e3910.png";
import imgArticlesItem1 from "figma:asset/508cce5b8ca923952642e9230c8a34bf056931af.png";
import imgArticlesItem2 from "figma:asset/83bc94e7880d759cc5a44eb2aa20e410862a0583.png";
import imgArticlesItem3 from "figma:asset/e42b0990278acbb590da999badfeefc90991ef44.png";
import imgButtonLarge from "figma:asset/f5defbf95e8cade70cb3b5c3b8f9798395aa3548.png";
import imgImage from "figma:asset/379cb7a36ea0a29c2f4b8af1bf39404f14c71ca3.png";
import imgFeaturedAlbumSection from "figma:asset/84605de7d005df13f35abed23177a6a5e6466d35.png";
import imgCinemaSelectsSection from "figma:asset/aca0cf5e16dde9722dea1a92e8c1a240b58f1e6a.png";
import imgButtonSmall from "figma:asset/ed5b3d31828c41c6b40cd0ce216d9cf6052ef2d8.png";
import imgSubscribeContainer from "figma:asset/243ad2cec4bbe48d8c5bc25518aea4722ff70dd5.png";
import imgSubscribeSection from "figma:asset/d0e3c8c699748935cb2f37b831027faffffbaab2.png";

function NavItem() {
  return (
    <button aria-label="Navigate to homepage" className="bg-gradient-to-r bg-repeat bg-size-[1280px_600px,auto] bg-top-left box-border content-stretch flex from-[#ff5700] items-center justify-center p-[12px] relative shrink-0 to-[#ff5700]" data-name="Nav item" style={{ backgroundImage: `url('${imgNavItem}')` }}>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#0f0e0e] text-[20px] text-nowrap tracking-[-0.4px] whitespace-pre">Home</p>
    </button>
  );
}

function NavItem1() {
  return (
    <button aria-label="Browse article archive" className="bg-gradient-to-r bg-repeat bg-size-[1280px_600px,auto] bg-top-left box-border content-stretch flex from-[#32ce57] items-center justify-center p-[12px] relative rounded-[999px] shrink-0 to-[#32ce57]" data-name="Nav item" style={{ backgroundImage: `url('${imgNavItem1}')` }}>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#0f0e0e] text-[20px] text-nowrap tracking-[-0.4px] whitespace-pre">Archive</p>
    </button>
  );
}

function NavItem2() {
  return (
    <button aria-label="Learn more about Grain Archive" className="bg-gradient-to-r bg-repeat bg-size-[1280px_600px,auto] bg-top-left box-border content-stretch flex from-[#a3caff] items-center justify-center p-[12px] relative rounded-[6px] shrink-0 to-[#a3caff]" data-name="Nav item" style={{ backgroundImage: `url('${imgNavItem2}')` }}>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#0f0e0e] text-[20px] text-nowrap tracking-[-0.4px] whitespace-pre">About</p>
    </button>
  );
}

function Links() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[8px] items-center relative shrink-0" data-name="Links">
      <NavItem />
      <NavItem1 />
      <NavItem2 />
    </div>
  );
}

function Spacer() {
  return <div className="shrink-0 size-[44px]" data-name="Spacer" />;
}

function Navigation() {
  return (
    <nav className="box-border content-stretch flex items-start justify-between pb-0 pointer-events-auto pt-[10px] px-0 sticky top-0 z-[5]" data-name="Navigation">
      <div className="relative shrink-0 size-[44px]" data-name="Logo">
        <img alt="Grain Archive logo" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
      <Links />
      <Spacer />
    </nav>
  );
}

function Marquee() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0 w-full z-[4]" data-name="Marquee">
      <div className="basis-0 font-['Geist:SemiBold',sans-serif] font-semibold grow leading-[0] min-h-px min-w-px shrink-0 text-[#8c8d92] text-[20px] text-center tracking-[-0.4px]" />
    </div>
  );
}

function LogoContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Logo container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[20px] pt-0 px-[20px] relative w-full">
          <div aria-hidden="true" className="aspect-[1218.57/172.131] relative shrink-0 w-full" data-name="Grain Archive Logo" role="presentation">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 740 105">
              <path d={svgPaths.p345a1bf0} fill="var(--fill-0, #F6F8FB)" id="Grain Archive Logo" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <header className="box-border content-stretch flex flex-col h-[800px] items-center justify-end p-0 relative rounded-[8px] shrink-0 w-full" data-name="Hero section">
      <video aria-label="Video reel of many film scenes cut together" autoPlay className="absolute max-w-none object-cover rounded-[8px] size-full" controlsList="nodownload" loop playsInline muted>
        <source src="https://test-stage-86101369.figma.site/_videos/v1/027c42043d74a9859913b7bda5625e98f4000c64" />
      </video>
      <h1 className="block font-['Geist:SemiBold',sans-serif] font-semibold h-0 leading-[1.4] relative shrink-0 text-[20px] text-[rgba(255,255,255,0)] text-center tracking-[-0.4px] w-[124px]">Grain Archive</h1>
      <LogoContainer />
    </header>
  );
}

function MetaData() {
  return (
    <div className="content-stretch flex font-['Geist:SemiBold',sans-serif] font-semibold gap-[4px] items-center leading-[1.4] relative shrink-0 text-[#f6f8fb] text-[20px] text-nowrap tracking-[-0.4px] whitespace-pre" data-name="Meta data">
      <p className="relative shrink-0">Film</p>
      <p className="relative shrink-0">·</p>
      <p className="relative shrink-0">Aug 12</p>
    </div>
  );
}

function Content() {
  return (
    <div className="backdrop-blur-[25px] backdrop-filter bg-[rgba(255,255,255,0.2)] relative rounded-[6px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-col justify-end size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-end p-[12px] relative w-full">
          <h2 className="block font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] min-w-full relative shrink-0 text-[#f6f8fb] text-[20px] tracking-[-0.4px] w-[min-content]">Listening to Films That Drift</h2>
          <MetaData />
        </div>
      </div>
    </div>
  );
}

function ArticlesItem() {
  return (
    <article className="basis-0 grow h-[500px] min-h-px min-w-[380px] relative rounded-[8px] shrink-0" data-name="Articles item">
      <div className="flex flex-col items-center justify-end min-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[500px] items-center justify-end min-w-inherit p-[10px] relative w-full">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgArticlesItem} />
          <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(0,0,0,0)] h-[120px] left-0 right-0 to-[rgba(0,0,0,0.5)]" data-name="Gradient" />
          <Content />
        </div>
      </div>
    </article>
  );
}

function MetaData1() {
  return (
    <div className="content-stretch flex font-['Geist:SemiBold',sans-serif] font-semibold gap-[4px] items-center leading-[1.4] relative shrink-0 text-[#f6f8fb] text-[20px] text-nowrap tracking-[-0.4px] whitespace-pre" data-name="Meta data">
      <p className="relative shrink-0">Film</p>
      <p className="relative shrink-0">·</p>
      <p className="relative shrink-0">Aug 12</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="backdrop-blur-[25px] backdrop-filter bg-[rgba(255,255,255,0.2)] relative rounded-[6px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-col justify-end size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-end p-[12px] relative w-full">
          <h2 className="block font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] min-w-full relative shrink-0 text-[#f6f8fb] text-[20px] tracking-[-0.4px] w-[min-content]">Listening to Films That Drift</h2>
          <MetaData1 />
        </div>
      </div>
    </div>
  );
}

function ArticlesItem1() {
  return (
    <article className="basis-0 grow h-[500px] min-h-px min-w-[380px] relative rounded-[8px] shrink-0" data-name="Articles item">
      <div className="flex flex-col items-center justify-end min-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[500px] items-center justify-end min-w-inherit p-[10px] relative w-full">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgArticlesItem1} />
          <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(0,0,0,0)] h-[120px] left-0 right-0 to-[rgba(0,0,0,0.5)]" data-name="Gradient" />
          <Content1 />
        </div>
      </div>
    </article>
  );
}

function MetaData2() {
  return (
    <div className="content-stretch flex font-['Geist:SemiBold',sans-serif] font-semibold gap-[4px] items-center leading-[1.4] relative shrink-0 text-[#f6f8fb] text-[20px] text-nowrap tracking-[-0.4px] whitespace-pre" data-name="Meta data">
      <p className="relative shrink-0">Film</p>
      <p className="relative shrink-0">·</p>
      <p className="relative shrink-0">Aug 12</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="backdrop-blur-[25px] backdrop-filter bg-[rgba(255,255,255,0.2)] relative rounded-[6px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-col justify-end size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-end p-[12px] relative w-full">
          <h2 className="block font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] min-w-full relative shrink-0 text-[#f6f8fb] text-[20px] tracking-[-0.4px] w-[min-content]">Listening to Films That Drift</h2>
          <MetaData2 />
        </div>
      </div>
    </div>
  );
}

function ArticlesItem2() {
  return (
    <article className="basis-0 grow h-[500px] min-h-px min-w-[380px] relative rounded-[8px] shrink-0" data-name="Articles item">
      <div className="flex flex-col items-center justify-end min-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[500px] items-center justify-end min-w-inherit p-[10px] relative w-full">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgArticlesItem2} />
          <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(0,0,0,0)] h-[120px] left-0 right-0 to-[rgba(0,0,0,0.5)]" data-name="Gradient" />
          <Content2 />
        </div>
      </div>
    </article>
  );
}

function MetaData3() {
  return (
    <div className="content-stretch flex font-['Geist:SemiBold',sans-serif] font-semibold gap-[4px] items-center leading-[1.4] relative shrink-0 text-[#f6f8fb] text-[20px] text-nowrap tracking-[-0.4px] whitespace-pre" data-name="Meta data">
      <p className="relative shrink-0">Film</p>
      <p className="relative shrink-0">·</p>
      <p className="relative shrink-0">Aug 12</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="backdrop-blur-[25px] backdrop-filter bg-[rgba(255,255,255,0.2)] relative rounded-[6px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-col justify-end size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-end p-[12px] relative w-full">
          <h2 className="block font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] min-w-full relative shrink-0 text-[#f6f8fb] text-[20px] tracking-[-0.4px] w-[min-content]">Listening to Films That Drift</h2>
          <MetaData3 />
        </div>
      </div>
    </div>
  );
}

function ArticlesItem3() {
  return (
    <article className="basis-0 grow h-[500px] min-h-px min-w-[380px] relative rounded-[8px] shrink-0" data-name="Articles item">
      <div className="flex flex-col items-center justify-end min-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[500px] items-center justify-end min-w-inherit p-[10px] relative w-full">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgArticlesItem3} />
          <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(0,0,0,0)] h-[120px] left-0 right-0 to-[rgba(0,0,0,0.5)]" data-name="Gradient" />
          <Content3 />
        </div>
      </div>
    </article>
  );
}

function ArticlesList() {
  return (
    <section className="box-border content-start flex flex-wrap gap-[10px] items-start justify-center p-0 relative shrink-0 w-full" data-name="Articles list">
      <ArticlesItem />
      <ArticlesItem1 />
      <ArticlesItem2 />
      <ArticlesItem3 />
    </section>
  );
}

function ButtonLarge() {
  return (
    <button aria-label="View all articles" className="bg-gradient-to-r bg-repeat bg-size-[1280px_600px,auto] bg-top-left cursor-pointer from-[#ffffff] min-w-[600px] relative rounded-[8px] shrink-0 to-[#ffffff] w-full" data-name="Button - large" style={{ backgroundImage: `url('${imgButtonLarge}')` }}>
      <div className="flex flex-row items-center justify-center min-w-inherit size-full">
        <div className="box-border content-stretch flex items-center justify-center min-w-inherit p-[24px] relative w-full">
          <p className="basis-0 font-['Instrument_Serif:Italic',sans-serif] grow italic leading-[0.9] min-h-px min-w-px relative shrink-0 text-[#0f0e0e] text-[80px] text-center tracking-[-1.6px]">View all</p>
        </div>
      </div>
    </button>
  );
}

function CallToAction() {
  return (
    <a className="box-border content-stretch cursor-pointer flex gap-[6px] items-center p-0 relative shrink-0" data-name="Call to action" href="https://www.figma.com/sites/">
      <div className="flex h-[14px] items-center justify-center relative shrink-0 w-[10px]" style={{ "--transform-inner-width": "14", "--transform-inner-height": "10" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-[10px] relative w-[14px]" data-name="Play icon">
            <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 8">
                <path d={svgPaths.p6ddeb00} fill="var(--fill-0, #F6F8FB)" id="Play icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#f6f8fb] text-[20px] text-center text-nowrap tracking-[-0.4px] whitespace-pre">Listen now</p>
    </a>
  );
}

function AlbumInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center max-w-[640px] relative shrink-0 w-full" data-name="Album info">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] min-w-full relative shrink-0 text-[#f6f8fb] text-[20px] text-center tracking-[-0.4px] w-[min-content]">False Memory by Artifact</p>
      <CallToAction />
    </div>
  );
}

function AlbumDisplay() {
  return (
    <div className="relative shrink-0 w-full" data-name="Album display">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-center px-[80px] py-0 relative w-full">
          <div className="aspect-[2000/2000] max-h-[800px] max-w-[800px] relative shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25),0px_4px_80px_0px_rgba(0,0,0,0.5)] shrink-0 w-full" data-name="Image">
            <img alt="Album cover for \'False Memory\' by Artifact — abstract blue and white geometric blur with gothic-style typography" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
          </div>
          <AlbumInfo />
        </div>
      </div>
    </div>
  );
}

function FeaturedAlbumSection() {
  return (
    <section className="relative rounded-[8px] shrink-0 w-full" data-name="Featured album section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-[#141414] inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none mix-blend-screen object-50%-50% object-cover opacity-60 rounded-[8px] size-full" src={imgFeaturedAlbumSection} />
      </div>
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center pb-[60px] pt-[264px] px-[10px] relative w-full">
          <h2 className="absolute block font-['Tilt_Warp:Regular',sans-serif] leading-[0.8] left-[10px] max-w-[760px] text-[#f6f8fb] text-[160px] top-[60px] tracking-[-8px] w-[760px]" style={{ fontVariationSettings: "'XROT' 0, 'YROT' 0" }}>
            Featured Album
          </h2>
          <AlbumDisplay />
        </div>
      </div>
    </section>
  );
}

function Labels() {
  return (
    <div className="content-stretch flex font-['Geist:SemiBold',sans-serif] font-semibold gap-[16px] items-center leading-[1.4] relative shrink-0 text-[#0f0e0e] text-[20px] tracking-[-0.4px] w-full" data-name="Labels">
      <p className="basis-0 grow min-h-px min-w-px opacity-60 relative shrink-0">Film</p>
      <p className="opacity-60 relative shrink-0 w-[160px]">Year</p>
      <p className="basis-0 grow min-h-px min-w-px opacity-60 relative shrink-0">Mood</p>
      <p className="basis-0 grow min-h-px min-w-px opacity-60 relative shrink-0 text-right">Why watch</p>
    </div>
  );
}

function CinemaSelectsItem() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-start px-0 py-[16px] relative shrink-0 w-full" data-name="Cinema selects item">
      <div aria-hidden="true" className="absolute border-[#555659] border-[1px_0px] border-dashed inset-0 pointer-events-none" />
      <p className="basis-0 font-['Geist:SemiBold',sans-serif] font-semibold grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[#0f0e0e] text-[20px] tracking-[-0.4px]">Static Bloom</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#0f0e0e] text-[20px] tracking-[-0.4px] w-[160px]">2023</p>
      <p className="basis-0 font-['Geist:SemiBold',sans-serif] font-semibold grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[#0f0e0e] text-[20px] tracking-[-0.4px]">Hazy, melancholic</p>
      <p className="basis-0 font-['Geist:SemiBold',sans-serif] font-semibold grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[#0f0e0e] text-[20px] text-right tracking-[-0.4px]">For the light leaks and long silences</p>
    </div>
  );
}

function CinemaSelectsItem1() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-start px-0 py-[16px] relative shrink-0 w-full" data-name="Cinema selects item">
      <div aria-hidden="true" className="absolute border-[#555659] border-[0px_0px_1px] border-dashed inset-0 pointer-events-none" />
      <p className="basis-0 font-['Geist:SemiBold',sans-serif] font-semibold grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[#0f0e0e] text-[20px] tracking-[-0.4px]">Static Bloom</p>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#0f0e0e] text-[20px] tracking-[-0.4px] w-[160px]">2023</p>
      <p className="basis-0 font-['Geist:SemiBold',sans-serif] font-semibold grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[#0f0e0e] text-[20px] tracking-[-0.4px]">Hazy, melancholic</p>
      <p className="basis-0 font-['Geist:SemiBold',sans-serif] font-semibold grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[#0f0e0e] text-[20px] text-right tracking-[-0.4px]">For the light leaks and long silences</p>
    </div>
  );
}

function CinemaSelectsList() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Cinema selects list">
      <CinemaSelectsItem />
      {[...Array(7).keys()].map((_, i) => (
        <CinemaSelectsItem1 key={i} />
      ))}
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <Labels />
      <CinemaSelectsList />
    </div>
  );
}

function CinemaSelectsSection() {
  return (
    <section className="bg-gradient-to-r bg-repeat bg-size-[1280px_600px,auto] bg-top-left from-[#f5f5f5] relative rounded-[8px] shrink-0 to-[#f5f5f5] w-full" data-name="Cinema selects section" style={{ backgroundImage: `url('${imgCinemaSelectsSection}')` }}>
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[80px] items-start px-[10px] py-[60px] relative w-full">
          <h2 className="block font-['Tilt_Warp:Regular',sans-serif] leading-[0.8] max-w-[760px] relative shrink-0 text-[#0f0e0e] text-[160px] tracking-[-8px] w-full" style={{ fontVariationSettings: "'XROT' 0, 'YROT' 0" }}>
            Cinema Selects
          </h2>
          <Content4 />
        </div>
      </div>
    </section>
  );
}

function BodyContentContainer() {
  return (
    <main className="max-w-[1800px] relative shrink-0 w-full z-[3]" data-name="Body content container" tabIndex="-1">
      <div className="flex flex-col items-center max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center max-w-inherit px-[10px] py-0 relative w-full">
          <HeroSection />
          <ArticlesList />
          <ButtonLarge />
          <FeaturedAlbumSection />
          <CinemaSelectsSection />
        </div>
      </div>
    </main>
  );
}

function Holes() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-start justify-between px-[20px] py-[50px] relative shrink-0" data-name="Holes">
      <div aria-hidden="true" className="relative shrink-0 size-[24px]" data-name="Ellipse" role="presentation">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #0F0E0E)" id="Ellipse" r="11.5" stroke="var(--stroke-0, #0F0E0E)" />
        </svg>
      </div>
      <div aria-hidden="true" className="relative shrink-0 size-[24px]" data-name="Ellipse" role="presentation">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #0F0E0E)" id="Ellipse" r="11.5" stroke="var(--stroke-0, #0F0E0E)" />
        </svg>
      </div>
      <div aria-hidden="true" className="relative shrink-0 size-[24px]" data-name="Ellipse" role="presentation">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #0F0E0E)" id="Ellipse" r="11.5" stroke="var(--stroke-0, #0F0E0E)" />
        </svg>
      </div>
    </div>
  );
}

function PaperGraphics() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0 w-[64px]" data-name="Paper graphics 1">
      <div aria-hidden="true" className="absolute border-[#0f0e0e] border-[0px_1.5px_0px_0px] border-dashed inset-0 pointer-events-none" />
      <Holes />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#0f0e0e] text-center w-full" data-name="Paragraph">
      <h2 className="block font-['Instrument_Serif:Italic',sans-serif] italic leading-[0.9] relative shrink-0 text-[80px] tracking-[-1.6px] w-full">Tune into the signal</h2>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[20px] tracking-[-0.4px] w-full">No noise—just deep cuts on music, film, and culture</p>
    </div>
  );
}

function ButtonSmall() {
  return (
    <a className="bg-gradient-to-r bg-repeat bg-size-[1280px_600px,auto] bg-top-left box-border content-stretch cursor-pointer flex from-[#0f0e0e] h-[68px] items-center justify-center px-[24px] py-0 relative shrink-0 to-[#0f0e0e]" data-name="Button - small" href="https://www.figma.com/sites/" style={{ backgroundImage: `url('${imgButtonSmall}')` }}>
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#f6f8fb] text-[20px] text-nowrap tracking-[-0.4px] whitespace-pre">Subscribe</p>
    </a>
  );
}

function Content5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Paragraph />
      <ButtonSmall />
    </div>
  );
}

function Holes1() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-start justify-between px-[20px] py-[50px] relative shrink-0" data-name="Holes">
      <div aria-hidden="true" className="relative shrink-0 size-[24px]" data-name="Ellipse" role="presentation">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #0F0E0E)" id="Ellipse" r="11.5" stroke="var(--stroke-0, #0F0E0E)" />
        </svg>
      </div>
      <div aria-hidden="true" className="relative shrink-0 size-[24px]" data-name="Ellipse" role="presentation">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #0F0E0E)" id="Ellipse" r="11.5" stroke="var(--stroke-0, #0F0E0E)" />
        </svg>
      </div>
      <div aria-hidden="true" className="relative shrink-0 size-[24px]" data-name="Ellipse" role="presentation">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #0F0E0E)" id="Ellipse" r="11.5" stroke="var(--stroke-0, #0F0E0E)" />
        </svg>
      </div>
    </div>
  );
}

function PaperGraphics1() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0 w-[64px]" data-name="Paper graphics 2">
      <div aria-hidden="true" className="absolute border-[#0f0e0e] border-[0px_0px_0px_1.5px] border-dashed inset-0 pointer-events-none" />
      <Holes1 />
    </div>
  );
}

function SubscribeContainer() {
  return (
    <div className="content-stretch flex gap-[40px] h-[360px] items-center max-w-[1400px] relative shrink-0 w-full" data-name="Subscribe container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSubscribeContainer} />
      <PaperGraphics />
      <Content5 />
      <PaperGraphics1 />
    </div>
  );
}

function SubscribeSection() {
  return (
    <aside className="relative shrink-0 w-full z-[2]" data-name="Subscribe section">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSubscribeSection} />
      <div className="flex flex-col items-center justify-end size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-end pb-[80px] pt-[180px] px-[40px] relative w-full">
          <SubscribeContainer />
        </div>
      </div>
    </aside>
  );
}

function LogoContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Logo container">
      <div className="aspect-[1218.57/172.131] relative shrink-0 w-full" data-name="Grain Archive Logo">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 760 108">
          <path d={svgPaths.p3ad1fc80} fill="var(--fill-0, #F6F8FB)" id="Grain Archive Logo" />
        </svg>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="box-border content-stretch flex items-center justify-end px-[5px] py-[2px] relative rounded-[999px] shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#d1d2d8] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <h2 className="block font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#d1d2d8] text-[10px] text-nowrap text-right tracking-[0.4px] uppercase whitespace-pre">Links</h2>
    </div>
  );
}

function LinkList() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:Regular',sans-serif] font-normal items-start leading-[1.4] relative shrink-0 text-[#d1d2d8] text-[20px] text-nowrap text-right tracking-[-0.4px] underline w-full whitespace-pre" data-name="Link list">
      <p className="[text-underline-position:from-font] decoration-solid relative shrink-0">Home</p>
      <p className="[text-underline-position:from-font] decoration-solid relative shrink-0">Archive</p>
      <p className="[text-underline-position:from-font] decoration-solid relative shrink-0">About</p>
    </div>
  );
}

function LinksColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[140px]" data-name="Links column">
      <Label />
      <LinkList />
    </div>
  );
}

function Label1() {
  return (
    <div className="box-border content-stretch flex items-center justify-end px-[5px] py-[2px] relative rounded-[999px] shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#d1d2d8] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <h2 className="block font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[#d1d2d8] text-[10px] text-nowrap text-right tracking-[0.4px] uppercase whitespace-pre">Connect</h2>
    </div>
  );
}

function LinkList1() {
  return (
    <div className="content-stretch cursor-pointer flex flex-col font-['Geist:Regular',sans-serif] font-normal items-start leading-[1.4] relative shrink-0 text-[#d1d2d8] text-[20px] text-nowrap text-right tracking-[-0.4px] underline w-full whitespace-pre" data-name="Link list">
      <a className="[text-underline-position:from-font] block decoration-solid relative shrink-0" href="https://www.instagram.com/figma">
        Instagram
      </a>
      <a className="[text-underline-position:from-font] block decoration-solid relative shrink-0" href="https://www.threads.com/@figma">
        Threads
      </a>
      <a className="[text-underline-position:from-font] block decoration-solid relative shrink-0" href="https://www.youtube.com/@Figma">
        YouTube
      </a>
      <a className="[text-underline-position:from-font] block decoration-solid relative shrink-0" href="mailto:mail@grainarchive.com">
        Email
      </a>
    </div>
  );
}

function ConnectColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[140px]" data-name="Connect column">
      <Label1 />
      <LinkList1 />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0" data-name="Footer links">
      <LinksColumn />
      <ConnectColumn />
    </div>
  );
}

function FooterContent() {
  return (
    <div className="content-stretch flex gap-[81px] items-start relative shrink-0 w-full" data-name="Footer content">
      <FooterLinks />
      <div className="basis-0 flex flex-col font-['Geist:Regular',sans-serif] font-normal grow justify-end leading-[1.4] min-h-px min-w-px relative shrink-0 text-[#d1d2d8] text-[16px] text-right tracking-[-0.32px]">
        <p className="mb-0">©2025 Grain Archive</p>
        <p>Words, images, and signals from the edge</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative shrink-0 w-full z-[1]" data-name="Footer">
      <div className="flex flex-col items-center justify-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[80px] items-center justify-end pb-[20px] pt-[40px] px-[20px] relative w-full">
          <LogoContainer1 />
          <FooterContent />
        </div>
      </div>
    </footer>
  );
}

export default function Tablet() {
  return (
    <div className="bg-gradient-to-r bg-repeat bg-size-[1280px_600px,auto] bg-top-left content-stretch flex flex-col from-[#0f0e0e] isolate items-center relative size-full to-[#0f0e0e]" data-name="Tablet" style={{ backgroundImage: `url('${imgButtonSmall}')` }}>
      <div className="absolute bottom-0 h-[calc(100%-60px)] left-[20px] pointer-events-none right-[20px] top-[60px]">
        <Navigation />
      </div>
      <Marquee />
      <BodyContentContainer />
      <SubscribeSection />
      <Footer />
    </div>
  );
}