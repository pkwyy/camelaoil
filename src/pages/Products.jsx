import banner2 from '../assets/images/banner2.jpg';
import { containerVariants, itemVariants } from '../utils/variants';
import { miniBanners, pastelCardHeadings } from './Home';
import { motion } from 'motion/react';
import palmOil from '../assets/images/palmOil.jpg';
import fattyAcid from '../assets/images/fattyAcid.jpeg';
import palmStearine from '../assets/images/palmStearine.webp';
import palmKernelOil from '../assets/images/palmKernelOil.jpg';
import palmKernelCake from '../assets/images/palmKernelCake.jpeg';
import twMerge from '../utils/twMerge';
import { useMediaQuery } from 'react-responsive';
import useInView from '../hooks/useInView';

const Products = () => {
  const [setRef1, inView1] = useInView({ threshold: 0.1 });
  const [setRef2, inView2] = useInView({ threshold: 0.1 });
  const [setRef3, inView3] = useInView({ threshold: 0.1 });

  const mobileScreens = useMediaQuery({
    maxWidth: 1023,
  });

  return (
    <div className="max-w-screen relative overflow-x-hidden">
      <div className="relative w-full">
        <img src={banner2} className={miniBanners} />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(54, 85, 55, 0.1), rgba(0, 0, 0, 1))',
          }}
        ></div>
      </div>
      <div className="my-10">
        <motion.div
          initial="hidden"
          animate={inView1 ? 'visible' : 'hidden'}
          variants={containerVariants}
          ref={setRef1}
        >
          <motion.div
            variants={itemVariants}
            className="px-4 py-10 sm:px-8 md:px-20 lg:px-80"
          >
            <h1 className="text-balance text-3xl">
              What we offer: At Camela, we do more than produce vegetable oil
            </h1>
            <br />
            <p>
              We offer{' '}
              <span className="font-semibold">100% Organic vegetable oil</span>{' '}
              and palm by-products crafted from 31 years of experience. In the
              production process, we endeavor to remember that{' '}
              <span className="font-semibold">
                satisfying the discerning nutritional needs
              </span>{' '}
              of our growing valued customers is of{' '}
              <span className="font-semibold">utmost importance.</span>
            </p>
          </motion.div>
        </motion.div>

        {mobileScreens ? (
          <motion.div
            id="palm-oil"
            initial="hidden"
            animate={inView2 ? 'visible' : 'hidden'}
            variants={containerVariants}
            ref={setRef2}
            className="flex flex-col gap-20 px-4 sm:px-8"
          >
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center justify-center gap-3 md:flex-row"
            >
              <div className="w-full border border-carrotOrange p-2">
                <img src={palmOil} className="w-full object-cover shadow-md" />
              </div>
              <div className="w-full md:text-right">
                <h1 className="text-xl font-semibold uppercase">Palm Olein</h1>
                <p className="text-balance">
                  Camela&apos;s Palm Olein is made from 100 % organic palm fruit
                  oil. It is trans-fat and gluten-free and suitable for vegans.
                  Our Palm Olein is vitamin A fortified and is ideal for
                  all-purpose cooking, heat sautéing, frying, and baking.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center justify-center gap-3 md:flex-row-reverse"
            >
              <div className="w-full border border-carrotOrange p-2">
                <img
                  src={fattyAcid}
                  className="w-full object-cover shadow-md"
                />
              </div>
              <div className="w-full">
                <h1 className="text-xl font-semibold uppercase">Fatty Acid</h1>
                <p className="text-balance">
                  At Camela, our fatty acid is of the highest grade and is
                  highly requested for producing soap and soap-based products,
                  personal care products, paints, and, more recently, biodiesel.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center justify-center gap-3 md:flex-row"
            >
              <div className="w-full border border-carrotOrange p-2">
                <img
                  src={palmStearine}
                  className="w-full object-cover shadow-md"
                />
              </div>
              <div className="w-full md:text-right">
                <h1 className="text-xl font-semibold uppercase">
                  Palm Stearine
                </h1>
                <p className="text-balance">
                  Our Palm Stearine is of excellent quality and can be used to
                  formulate trans-free fats such as margarine, shortening, and
                  vegetable ghee. It is solid at room temperature, white, and
                  neutral in flavor.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center justify-center gap-3 md:flex-row-reverse"
            >
              <div className="w-full border border-carrotOrange p-2">
                <img
                  src={palmKernelOil}
                  className="w-full object-cover shadow-md"
                />
              </div>
              <div className="w-full">
                <h1 className="text-xl font-semibold uppercase">
                  Palm kernel refined vegetable oil
                </h1>
                <p className="text-balance">
                  Our palm kernel refined vegetable oil is vitamin A fortified
                  and suitable for all-purpose cooking and frying. It is also an
                  appropriate substitute for trans fat used in commercial
                  baking. It has a neutral color and flavor, can be solid at
                  room temperature, and has a sharp melting curve.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center justify-center gap-3 md:flex-row"
            >
              <div className="w-full border border-carrotOrange p-2">
                <img
                  src={palmKernelCake}
                  className="w-full object-cover shadow-md"
                />
              </div>
              <div className="w-full md:text-right">
                <h1 className="text-xl font-semibold uppercase">
                  Palm kernel cake...
                </h1>
                <p className="text-balance">
                  ...Besides our Palm-based products, we also cater to the
                  market requirement for animal feed. Our PKC is very high
                  quality and contains 23% protein and 18% fiber, making it
                  suitable for feeding ruminants and a significant ingredient in
                  poultry, piggery, and dairy feed.
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <>
            <motion.div
              initial="hidden"
              animate={inView2 ? 'visible' : 'hidden'}
              variants={containerVariants}
              ref={setRef2}
              className="my-5 flex flex-row items-center justify-center gap-5"
            >
              <motion.div variants={itemVariants} className="relative">
                <div className="size-80 rounded border border-carrotOrange p-1">
                  <img
                    src={palmOil}
                    className="size-[310px] rounded object-cover shadow"
                  />
                </div>
                <div className="absolute inset-0 flex size-80 items-center justify-center bg-black/75 opacity-0 transition-opacity duration-300 ease-in-out hover:text-white hover:opacity-100">
                  <motion.div
                    variants={itemVariants}
                    className="text-desertStorm w-full text-balance p-4 text-center"
                  >
                    <h1 className={twMerge(pastelCardHeadings)}>Palm Olein</h1>
                    <p className="text-balance">
                      Camelas Palm Olein is made from 100 % organic palm fruit
                      oil. It is trans-fat and gluten-free and suitable for
                      vegans. Our Palm Olein is vitamin A fortified and is ideal
                      for all-purpose cooking, heat sautéing, frying, and
                      baking.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <div className="size-80 rounded border border-carrotOrange p-1">
                  <img
                    src={fattyAcid}
                    className="size-[310px] rounded object-cover shadow"
                  />
                </div>
                <div className="absolute inset-0 flex size-80 items-center justify-center bg-black/75 opacity-0 transition-opacity duration-300 ease-in-out hover:text-white hover:opacity-100">
                  <motion.div
                    variants={itemVariants}
                    className="text-desertStorm w-full text-balance p-4 text-center"
                  >
                    <h1 className={twMerge(pastelCardHeadings)}>Fatty Acid</h1>
                    <p className="text-balance">
                      Camelas Palm Olein is made from 100 % organic palm fruit
                      At Camela, our fatty acid is of the highest grade and is
                      highly requested for producing soap and soap-based
                      products, personal care products, paints, and, more
                      recently, biodiesel.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <div className="size-80 rounded border border-carrotOrange shadow">
                  <img
                    src={palmStearine}
                    className="size-[310px] rounded object-cover shadow"
                  />
                </div>
                <div className="absolute inset-0 flex size-80 items-center justify-center bg-black/75 opacity-0 transition-opacity duration-300 ease-in-out hover:text-white hover:opacity-100">
                  <motion.div
                    variants={itemVariants}
                    className="text-desertStorm w-full text-balance p-4 text-center"
                  >
                    <h1 className={twMerge(pastelCardHeadings)}>
                      Palm Stearine
                    </h1>
                    <p className="text-balance">
                      Our Palm Stearine is of excellent quality and can be used
                      to formulate trans-free fats such as margarine,
                      shortening, and vegetable ghee. It is solid at room
                      temperature, white, and neutral in flavor.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={inView3 ? 'visible' : 'hidden'}
              variants={containerVariants}
              ref={setRef3}
              className="flex-row items-center justify-center gap-5 lg:flex"
            >
              <motion.div variants={itemVariants} className="relative">
                <div className="size-80 rounded border border-carrotOrange p-1">
                  <img
                    src={palmKernelOil}
                    className="size-[310px] rounded object-cover shadow"
                  />
                </div>
                <div className="absolute inset-0 flex size-80 items-center justify-center bg-black/75 opacity-0 transition-opacity duration-300 ease-in-out hover:text-white hover:opacity-100">
                  <motion.div
                    variants={itemVariants}
                    className="text-desertStorm w-full text-balance p-4 text-center"
                  >
                    <h1 className={twMerge(pastelCardHeadings)}>
                      Palm kernel refined vegetable oil
                    </h1>
                    <p className="text-balance">
                      Our palm kernel refined vegetable oil is vitamin A
                      fortified and suitable for all-purpose cooking and frying.
                      It is also an appropriate substitute for trans fat used in
                      commercial baking. It has a neutral color and flavor, can
                      be solid at room temperature, and has a sharp melting
                      curve.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <div className="size-80 rounded border border-carrotOrange shadow">
                  <img
                    src={palmKernelCake}
                    className="size-[310px] rounded object-cover shadow"
                  />
                </div>
                <div className="absolute inset-0 flex size-80 items-center justify-center bg-black/75 opacity-0 transition-opacity duration-300 ease-in-out hover:text-white hover:opacity-100">
                  <motion.div
                    variants={itemVariants}
                    className="text-desertStorm w-full text-balance p-4 text-center"
                  >
                    <h1 className={twMerge(pastelCardHeadings)}>
                      Palm kernel cake
                    </h1>
                    <p className="text-balance">
                      Besides our Palm-based products, we also cater to the
                      market requirement for animal feed. Our PKC is very high
                      quality and contains 23% protein and 18% fiber, making it
                      suitable for feeding ruminants and a significant
                      ingredient in poultry, piggery, and dairy feed.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
