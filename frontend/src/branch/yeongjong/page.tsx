import { useEffect } from "react";
import Layout from "../../components/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import { Play } from "lucide-react";

const YeongjongIntro = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const brandGreen = "#2d6a4f";

  return (
    <Layout
      branchName="Yeongjong"
      brandColor={brandGreen}
      logoUrl="/logo-yeongjong.png"
    >
      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col justify-center items-center text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-[-1]">
          <img
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600"
            className="w-full h-full object-cover brightness-50"
            alt="Hero"
          />
        </div>
        <div className="px-4" data-aos="fade-up">
          <span className="bg-[#52b788] px-4 py-1 rounded-full text-[10px] font-black mb-4 inline-block">
            YEONGJONG BRANCH
          </span>
          <h1 className="text-6xl lg:text-8xl font-black leading-none mb-4">
            GREEN
            <br />
            GROUND
          </h1>
          <p className="text-lg opacity-80">영종의 에너지가 시작되는 곳</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-[5%] max-w-[1200px] mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-[#52b788] font-black tracking-widest text-sm">
            GALLERY
          </span>
          <h2 className="text-4xl font-black mt-2 text-[#1b4332]">
            성장의 순간들
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <GalleryItem
            src="https://images.unsplash.com/photo-1551958219-acbc608c6377"
            isLarge
            dataAos="zoom-in"
          />
          <GalleryItem
            src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a"
            dataAos="fade-up"
          />
          <GalleryItem
            src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c"
            dataAos="fade-up"
            delay={100}
          />
          <GalleryItem
            src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68"
            isLarge
            dataAos="fade-up"
          />
        </div>

        {/* Video Area */}
        <div
          className="relative rounded-[30px] overflow-hidden group cursor-pointer"
          data-aos="fade-up"
        >
          <img
            src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1200"
            className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
            alt="Poster"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="w-20 h-20 bg-[#52b788] rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
              <Play fill="white" color="white" size={30} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const GalleryItem = ({ src, isLarge, dataAos, delay }: any) => (
  <div
    className={`rounded-3xl overflow-hidden aspect-square ${isLarge ? "col-span-2 row-span-2" : ""}`}
    data-aos={dataAos}
    data-aos-delay={delay}
  >
    <img
      src={src}
      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
      alt="Gallery"
    />
  </div>
);

export default YeongjongIntro;
