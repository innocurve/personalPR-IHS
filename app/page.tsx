'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import LanguageToggle from './components/LanguageToggle'
import { useLanguage } from './hooks/useLanguage'
import { translate } from './utils/translations'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import MyValues from './components/MyValues'
import FadeInSection from './components/FadeInSection'
import { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone } from 'lucide-react'
import ContactOptions from './components/ContactOptions'
import type { PostData } from './types/post'

export default function Home() {
const [isMenuOpen, setIsMenuOpen] = useState(false)
const { language } = useLanguage();
const [posts] = useState<PostData[]>([
  { 
    id: 1, 
    title: {
      ko: '클린에어 에어컨 세척 작업',
      en: 'Cleaning work of air conditioner',
      ja: '空調清掃作業',
      zh: '空调清洗作业',
    },
    image: '/postimage/id1image.png',
    images: [
      '/postimage/id1image2.png',
      '/postimage/id1image3.png',
      '/postimage/id1image4.png',
      '/postimage/id1image5.png',
      '/postimage/id1image6.png'
    ],
    description: {
      ko: '각종 에어컨 제품의 세척 일부 사진입니다. 오염된 에어컨을 세척하면 호흡기 질환을 예방하고, 냉난방비를 절약하며, 에어컨의 냉난방 효율을 높일 수 있습니다.',
      en: 'These are some photos of cleaning various air conditioner products. Cleaning contaminated air conditioners can prevent respiratory diseases, save heating and cooling costs, and improve air conditioning efficiency.',
      ja: 'さまざまなエアコン製品の清掃写真の一部です。汚れたエアコンを清掃することで、呼吸器疾患を予防し、冷暖房費を節約し、エアコンの冷暖房効率を向上させることができます。',
      zh: '这些是各种空调产品清洗的部分照片。清洗受污染的空调可以预防呼吸系统疾病，节省冷暖气费用，并提高空调的制冷制热效率。',
    },
    tags: {
      ko: ['#에어컨세척', '#실내공기질', '#에너지절약', '#냉난방효율'],
      en: ['#ACCleaning', '#IndoorAirQuality', '#EnergySaving', '#ACEfficiency'],
      ja: ['#エアコン洗浄', '#室内空気質', '#省エネ', '#冷暖房効率'],
      zh: ['#空调清洗', '#室内空气质量', '#节能', '#冷暖气效率']
    }
  },
  { 
    id: 2, 
    title: {
      ko: '새마을 대덕구청년미래연대',
      en: 'Daedeok-gu Youth Future Alliance',
      ja: '大徳区青年未来連帯会',
      zh: '大德区青年未来联盟',
    },
    image: '/postimage/id2image.png',
    description: {
      ko: '새마을 대덕구청년미래연대는 청년들의 성장과 지역 사회 발전을 위해 활동하는 단체입니다. 다양한 봉사와 네트워킹을 통해 공동체 의식을 함양하고, 청년들의 역량 강화를 지원하며, 지속 가능한 지역 발전을 위한 다양한 프로젝트를 진행하고 있습니다.',
      en: 'Daedeok-gu Youth Future Alliance is an organization that works for the growth of young people and the development of the local community. Through various volunteer activities and networking, we foster community awareness, support youth capacity building, and conduct various projects for sustainable local development.',
      ja: '大徳区青年未来連帯会は、若者の成長と地域社会の発展のために活動する団体です。様々なボランティア活動とネットワーキングを通じて、コミュニティ意識を育み、若者の能力向上を支援し、持続可能な地域発展のための様々なプロジェクトを推進しています。',
      zh: '大德区青年未来联盟是一个致力于青年成长和地区社会发展的组织。通过各种志愿服务和社交活动，培养社区意识，支持青年能力建设，并开展各种可持续地区发展项目。',
    },
    tags: {
      ko: ['#청년성장', '#지역발전', '#봉사활동', '#네트워킹'],
      en: ['#YouthGrowth', '#LocalDevelopment', '#Volunteering', '#Networking'],
      ja: ['#青年成長', '#地域発展', '#ボランティア', '#ネットワーキング'],
      zh: ['#青年成长', '#地区发展', '#志愿服务', '#社交网络']
    }
  },
  { 
    id: 3, 
    title: {
      ko: '(사)대한청년을세계로 미래전략포럼 개최',
      en: 'Future Strategy Forum held by Korean Youth to the World Association',
      ja: '(社)大韓青年を世界へ 未来戦略フォーラム開催',
      zh: '(社)韩国青年走向世界协会举办未来战略论坛',
    },
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EB%AF%B8%EB%9E%98%EC%A0%84%EB%9E%B5%ED%8F%AC%EB%9F%BC.jpg-lobjD33dLn9HHvFaqwYC57KhFIHDJb.jpeg',
    description: {
      ko: '기술혁신의 시대속에서 청년들의 미래를 위한 전략을 논의하는 포럼을 개최합니다.',
      en: 'Hosting a forum to discuss strategies for the future of youth in the era of technological innovation.',
      ja: '技術革新の時代における若者の未来のための戦略を議論するフォーラムを開催します。',
      zh: '举办论坛，讨论技术创新时代青年未来的战略。',
    },
    tags: {
      ko: ['#청년미래', '#기술혁신', '#전략포럼', '#글로벌비전'],
      en: ['#YouthFuture', '#TechInnovation', '#StrategyForum', '#GlobalVision'],
      ja: ['#青年未来', '#技術革新', '#戦略フォーラム', '#グローバルビジョン'],
      zh: ['#青年未来', '#技术创新', '#战略论坛', '#全球视野']
    }
  }
]);

useEffect(() => {
  localStorage.setItem('posts', JSON.stringify(posts));
}, [posts]);

const router = useRouter();

const handlePostClick = (postId: number) => {
  router.push(`/post/${postId}`);
};

const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 100; // 네비게이션 바 높이 + 여유 공간
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

return (
  <div className="font-sans min-h-screen flex flex-col">
    <style jsx global>{`
      html {
        scroll-behavior: smooth;
      }
      .swiper-container {
        width: 100%;
        height: 100%;
        padding: 20px 0;
      }
      .swiper-slide {
        height: auto;
        padding: 1px;
      }
      @media (max-width: 640px) {
        .swiper-button-next,
        .swiper-button-prev {
          display: none;
        }
      }
    `}</style>
     <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="이노커브 로고" 
                width={160} 
                height={64} 
                priority
                className="object-contain cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-6">
              <Link href="#profile" onClick={(e) => handleScrollTo(e, 'profile')} className="font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition duration-300">{translate('profile', language)}</Link>
              <Link href="#smart-options" onClick={(e) => handleScrollTo(e, 'smart-options')} className="font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition duration-300">{translate('smartOptions', language)}</Link>
              <Link href="#values" onClick={(e) => handleScrollTo(e, 'values')} className="font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition duration-300">{translate('values', language)}</Link>
              <Link href="#community" onClick={(e) => handleScrollTo(e, 'community')} className="font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition duration-300">{translate('activities', language)}</Link>
            </nav>
            <LanguageToggle />
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
            </button>
          </div>
        </div>
      </div>
    </header>
    <AnimatePresence>
      {isMenuOpen && (
        <motion.nav
          className="md:hidden bg-white fixed top-[72px] left-0 right-0 z-40 shadow-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col">
            <Link href="#profile" onClick={(e) => { setIsMenuOpen(false); handleScrollTo(e, 'profile'); }} className="block p-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition duration-300 font-mono tracking-tight">{translate('profile', language)}</Link>
            <Link href="#smart-options" onClick={(e) => { setIsMenuOpen(false); handleScrollTo(e, 'smart-options'); }} className="block p-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition duration-300 font-mono tracking-tight">{translate('smartOptions', language)}</Link>
            <Link href="#values" onClick={(e) => { setIsMenuOpen(false); handleScrollTo(e, 'values'); }} className="block p-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition duration-300 font-mono tracking-tight">{translate('values', language)}</Link>
            <Link href="#community" onClick={(e) => { setIsMenuOpen(false); handleScrollTo(e, 'community'); }} className="block p-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition duration-300 font-mono tracking-tight">{translate('activities', language)}</Link>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
    <main className="w-full max-w-4xl mx-auto p-5 pt-24 flex-grow overflow-x-hidden">
      <div className="w-full overflow-x-hidden">
        <FadeInSection>
          <section id="profile" className="mb-8 bg-white rounded-xl p-6 sm:p-10 shadow-lg overflow-hidden relative">
            <div className="flex flex-col items-center space-y-6">
              <div className="w-40 h-40 sm:w-56 sm:h-56 relative">
                <Image 
                  src="/profile.png"
                  alt={translate('name', language)} 
                  fill
                  sizes="(max-width: 640px) 160px, 224px"
                  priority
                  className="rounded-full object-cover w-auto h-auto" 
                />
              </div>
              <div className="text-center">
                <h2 className="text-4xl sm:text-5xl font-bold mb-3">{translate('name', language)}</h2>
                <p className="text-2xl sm:text-3xl text-gray-600 mb-6">
                  {translate('title', language)}
                </p>
              </div>
              <div className="w-full max-w-2xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <ProfileItem label={translate('birth', language)} value={[translate('birthDate', language)]} className="text-center" />
                  <ProfileItem label={translate('mbti', language)} value={[translate('mbtiType', language)]} className="text-center" />
                  <ProfileItem 
                    label={translate('affiliation', language)} 
                    value={translate('affiliationDescription', language).split('\n')} 
                    className="text-center"
                  />
                  <ProfileItem label={translate('field', language)} value={[translate('fieldDescription', language)]} className="text-center" />
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      </div>

      <div className="w-full overflow-x-hidden">
        <FadeInSection>
          <section id="smart-options" className="mb-8">
            <ContactOptions language={language} />
          </section>
        </FadeInSection>
      </div>

      <div className="w-full overflow-x-hidden">
        <FadeInSection>
          <section id="values" className="mb-8 pt-8">
            <MyValues language={language} />
          </section>
        </FadeInSection>
      </div>

      <div className="w-full overflow-x-hidden">
        <FadeInSection>
          <section id="community" className="py-16">
            <div className="container mx-auto px-4">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={posts.length > 1}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                  stopOnLastSlide: false
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: Math.min(2, posts.length),
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: Math.min(3, posts.length),
                    spaceBetween: 20,
                  }
                }}
                className="swiper-container !pb-12"
              >
                {posts.map((post) => (
                  <SwiperSlide 
                    key={post.id}
                    className="h-[340px]"
                  >
                    <div
                      onClick={() => handlePostClick(post.id)}
                      className="bg-white rounded-lg shadow-md cursor-pointer transform transition-all duration-300 hover:scale-105 h-[340px] flex flex-col"
                    >
                      <div className="relative h-36 rounded-t-lg overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title[language]}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="p-4 flex flex-col flex-1">
                        <h3 className="text-lg font-semibold mb-2 overflow-hidden"
                            style={{
                              display: '-webkit-box',
                              WebkitBoxOrient: 'vertical',
                              WebkitLineClamp: '2',
                              minHeight: '3.5rem',
                              lineHeight: '1.5rem'
                            }}
                        >{post.title[language]}</h3>
                        <p className="text-gray-600 text-sm mb-3 overflow-hidden"
                           style={{
                             display: '-webkit-box',
                             WebkitBoxOrient: 'vertical',
                             WebkitLineClamp: '3',
                             minHeight: '3rem',
                             lineHeight: '1.25rem'
                           }}
                        >{post.description[language]}</p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {post.tags[language].map((tag, index) => (
                            <span key={index} className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        </FadeInSection>
      </div>
    </main>

    <footer className="bg-gray-800 text-white py-12 mt-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">{translate('contact', language)}</h3>
            <div className="flex items-center space-x-2 mb-2">
              <Mail className="w-5 h-5" />
              <p>hkyu1127@naver.com</p>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <p>010-9057-2180</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">{translate('affiliation', language)}</h3>
            <div className="space-y-2">
              <p>클린에어</p>
              <p>(사)대전청년을세계로</p>
              <p>새마을 대덕구청년미래연대</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">{translate('socialMedia', language)}</h3>
            <div className="space-y-2">
              <Link href="https://www.instagram.com/hkyu___/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-blue-400 transition duration-300">
                <span>Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
)
}

function ProfileItem({ label, value, className = '' }: { label: string, value: string[], className?: string }) {
  return (
    <div className={`mb-2 ${className}`}>
      {label && <span className="font-bold text-blue-600 block mb-1 text-xl">{label}</span>}
      {(value ?? []).map((item, index) => (
        <p key={index} className="text-lg text-black">{item}</p>
      ))}
    </div>
  )
}