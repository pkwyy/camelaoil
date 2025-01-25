import { CiBeaker1, CiDroplet, CiForkAndKnife } from 'react-icons/ci';
import useInView from '../hooks/useInView';
import Header from '../components/Header';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '../utils/variants';
import banner from '../assets/images/banner.jpg';
import ImageSlider from '../components/ImageSlider';

const iconsTexts = [
  {
    icon: <CiBeaker1 className="size-12 md:size-14" />,
    paragraph: '100% organic, neutral-tasting',
  },
  {
    icon: <CiDroplet className="size-12 md:size-14" />,
    paragraph: 'Excellent substitute for transfat',
  },
  {
    icon: <CiForkAndKnife className="size-12 md:size-14" />,
    paragraph: 'Perfect for all-purpose cooking',
  },
];

export const miniBanners = 'h-80 md:h-[500px] w-full object-cover shadow-md';

export const headingStyles =
  'text-2xl text-center uppercase font-semibold font-crimsonText py-5';

export const opaqueOverlay =
  'flex absolute inset-0 bg-black/60 shadow rounded-sm items-center justify-center w-11/12 h-5/6 m-auto px-2 md:px-40 lg:px-60 xl:px-80';

export const opaqueOverlayText =
  'text-white text-2xl md:text-4xl font-crimsonText text-center font-semibold';

export const pastelCardHeadings =
  'font-crimsonText uppercase text-xl font-semibold';

const Home = () => {
  const [setRef1, inView1] = useInView({ threshold: 0.1 });
  const [setRef2, inView2] = useInView({ threshold: 0.1 });

  return (
    <div className="max-w-screen relative overflow-x-hidden">
      <div className="bg-white shadow-top">
        <Header />
        <motion.div
          initial="hidden"
          animate={inView1 ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="bg-white px-4 py-10 sm:mx-8 lg:mx-40 xl:mx-60"
          ref={setRef1}
        >
          <h1 className={headingStyles}>Why choose Camela&apos;s product?</h1>
          <motion.div
            variants={containerVariants}
            className="grid divide-y divide-carrotOrange/50 md:grid-cols-3 md:divide-x md:divide-y-0"
          >
            {iconsTexts.map((iconText, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center justify-center py-5"
              >
                <div className="text-tomThumb relative font-light">
                  {iconText.icon}
                  <div className="absolute left-6 top-6 size-7 rounded-full bg-carrotOrange/50 md:left-7 md:top-8" />
                </div>
                <p className="p-2 text-center font-crimsonText">
                  {iconText.paragraph}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={inView2 ? 'visible' : 'hidden'}
          variants={itemVariants}
          className="flex flex-col gap-10 py-10 md:text-lg"
          ref={setRef2}
        >
          <div className="relative">
            <img src={banner} className={miniBanners} />
            <div className={opaqueOverlay}>
              <p className={opaqueOverlayText}>
                Not all vegetable oils are created equal in performance and
                flavor...
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <ImageSlider />
    </div>
  );
};

export default Home;
