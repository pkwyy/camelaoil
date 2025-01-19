import { useMediaQuery } from "react-responsive"
import { CiBeaker1, CiDroplet, CiForkAndKnife } from "react-icons/ci"
import useInView from "../hooks/useInView"
import Header from "../components/Header"
import { motion } from "motion/react"
import { containerVariants, itemVariants } from "../utils/variants"
import banner from "../assets/images/banner.jpg"
import palmOil from "../assets/images/palmOil.jpg"
import fattyAcid from "../assets/images/fattyAcid.jpeg"
import palmStearine from "../assets/images/palmStearine.webp"
import palmKernelOil from "../assets/images/palmKernelOil.jpg"
import palmKernelCake from "../assets/images/palmKernelCake.jpeg"
// import { Link } from "react-router"

const iconsTexts = [
  {
    icon: <CiBeaker1 className="size-12 md:size-14" />,
    paragraph: "100% organic, neutral-tasting",
  },
  {
    icon: <CiDroplet className="size-12 md:size-14" />,
    paragraph: "Excellent substitute for transfat",
  },
  {
    icon: <CiForkAndKnife className="size-12 md:size-14" />,
    paragraph: "Perfect for all-purpose cooking",
  },
]

export const miniBanners = "h-80 md:h-[500px] w-full object-cover shadow-md"

export const headingStyles =
  "text-2xl text-center uppercase font-semibold font-crimsonText py-5"

export const opaqueOverlay =
  "flex absolute inset-0 bg-black/60 shadow rounded-sm items-center justify-center w-11/12 h-5/6 m-auto px-2 md:px-40 lg:px-60 xl:px-80"

export const opaqueOverlayText =
  "text-white text-2xl md:text-4xl font-crimsonText text-center font-semibold"

export const pastelCardHeadings =
  "font-crimsonText uppercase text-xl font-semibold"

const Home = () => {
  const [setRef1, inView1] = useInView({ threshold: 0.1 })
  const [setRef2, inView2] = useInView({ threshold: 0.1 })
  const [setRef3, inView3] = useInView({ threshold: 0.1 })
  const [setRef4, inView4] = useInView({ threshold: 0.1 })

  const tabsAndDesktops = useMediaQuery({
    minWidth: 719,
  })
  return (
    <div className="max-w-screen relative overflow-x-hidden">
      <div className="bg-white shadow-top">
        <Header />
        <motion.div
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
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
                <div className="relative font-light text-tomThumb">
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
          animate={inView2 ? "visible" : "hidden"}
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
        <motion.div
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={containerVariants}
          ref={setRef3}
          className="relative mt-20 flex h-72 sm:h-80 md:h-96 text-white"
        >
          <div className="relative w-1/3 bg-black shadow">
            {/* <div className="absolute -right-8 -top-4 flex w-fit space-x-2 bg-carrotOrange p-2 text-white">
              <Link to="/products">See All</Link>
            </div> */}
          </div>
          <motion.div className="sm:ml-22 absolute bottom-0 left-0 right-0 top-0 ml-10 mt-12 flex h-52 flex-col space-y-10 py-5 sm:h-60 md:my-8 md:ml-32 md:h-80 lg:ml-52 xl:ml-60">
            <motion.div
              initial="hidden"
              animate={inView4 ? "visible" : "hidden"}
              variants={containerVariants}
              ref={setRef4}
              className="no-scrollbar flex snap-x snap-mandatory space-x-2 overflow-x-auto md:space-x-5"
            >
              <motion.div
                variants={itemVariants}
                className="relative w-60 flex-shrink-0 snap-center rounded-md shadow-xl sm:w-96 md:w-[500px]"
              >
                <img
                  className="h-full w-full rounded-t object-cover sm:w-96 md:w-full"
                  src={palmOil}
                />
                <div className="overlay absolute bottom-0 flex h-2/5 w-full flex-col justify-center rounded-t-md bg-black/75 px-4 text-desertStorm md:hidden">
                  <h1 className="text-lg">Palm Olein</h1>
                  <p className="text-sm font-light">
                    Camela&apos;s Palm Olein is...{" "}
                    <span className="cursor-pointer border-b border-carrotOrange text-carrotOrange">
                      <a>See more</a>
                    </span>
                  </p>
                </div>
                {tabsAndDesktops && (
                  <div className="px-5 text-desertStorm md:absolute md:inset-0 md:flex md:h-full md:w-full md:flex-col md:items-center md:justify-center md:rounded-t md:bg-black/70 md:opacity-0 md:transition-opacity md:duration-300 md:ease-in-out md:hover:opacity-100">
                    <h1 className="py-5 text-2xl font-bold">Palm Olein</h1>
                    <p className="text-center text-lg font-light">
                      Camela&apos;s Palm Olein is made from 100% organic palm
                      fruit oil. It is trans-fat and gluten-free and suitable
                      for vegans. Our Palm Olein is vitamin A fortified and is
                      ideal for all-purpose cooking, heat sautéing, frying, and
                      baking.
                    </p>
                  </div>
                )}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="relative w-60 flex-shrink-0 snap-center rounded-md shadow-xl sm:w-96 md:w-[500px]"
              >
                <img
                  className="h-full w-full rounded-t object-cover sm:w-96 md:w-full"
                  src={fattyAcid}
                />
                <div className="overlay absolute bottom-0 flex h-2/5 w-full flex-col justify-center rounded-t-md bg-black/75 px-4 text-desertStorm md:hidden">
                  <h1 className="text-lg">Fatty Acid</h1>
                  <p className="text-sm font-light">
                    At Camela, our fatty acid...{" "}
                    <span className="cursor-pointer border-b border-carrotOrange text-carrotOrange">
                      <a>See more</a>
                    </span>
                  </p>
                </div>
                {tabsAndDesktops && (
                  <div className="px-5 text-desertStorm md:absolute md:inset-0 md:flex md:h-full md:w-full md:flex-col md:items-center md:justify-center md:rounded-t md:bg-black/70 md:opacity-0 md:transition-opacity md:duration-300 md:ease-in-out md:hover:opacity-100">
                    <h1 className="py-5 text-2xl font-bold">Fatty Acid</h1>
                    <p className="text-center text-lg font-light">
                      At Camela, our fatty acid is of the highest grade and is
                      highly requested for producing soap and soap-based
                      products, personal care products, paints, and, more
                      recently, biodiesel.
                    </p>
                  </div>
                )}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="relative w-60 flex-shrink-0 snap-center rounded-md shadow-xl sm:w-96 md:w-[500px]"
              >
                <img
                  className="h-full w-full rounded-t object-cover sm:w-96 md:w-full"
                  src={palmStearine}
                />
                <div className="overlay absolute bottom-0 flex h-2/5 w-full flex-col justify-center rounded-t-md bg-black/75 px-4 text-desertStorm md:hidden">
                  <h1 className="text-lg">Palm Stearine</h1>
                  <p className="text-sm font-light">
                    Our Palm Stearine is...{" "}
                    <span className="cursor-pointer border-b border-carrotOrange text-carrotOrange">
                      <a>See more</a>
                    </span>
                  </p>
                </div>
                {tabsAndDesktops && (
                  <div className="px-5 text-desertStorm md:absolute md:inset-0 md:flex md:h-full md:w-full md:flex-col md:items-center md:justify-center md:rounded-t md:bg-black/70 md:opacity-0 md:transition-opacity md:duration-300 md:ease-in-out md:hover:opacity-100">
                    <h1 className="py-5 text-2xl font-bold">Palm Stearine</h1>
                    <p className="text-center text-lg font-light">
                      Our Palm Stearine is of excellent quality and can be used
                      to formulate trans-free fats such as margarine,
                      shortening, and vegetable ghee. It is solid at room
                      temperature, white, and neutral in flavor.
                    </p>
                  </div>
                )}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="relative w-60 flex-shrink-0 snap-center rounded-md shadow-xl sm:w-96 md:w-[500px]"
              >
                <img
                  className="h-full w-full rounded-t object-cover sm:w-96 md:w-full"
                  src={palmKernelOil}
                />
                <div className="overlay absolute bottom-0 flex h-2/5 w-full flex-col justify-center rounded-t-md bg-black/75 px-4 text-desertStorm md:hidden">
                  <h1 className="text-lg">Palm Kernel Vegetable Oil</h1>
                  <p className="text-sm font-light">
                    Our palm kernel refined...{" "}
                    <span className="cursor-pointer border-b border-carrotOrange text-carrotOrange">
                      <a>See more</a>
                    </span>
                  </p>
                </div>
                {tabsAndDesktops && (
                  <div className="px-5 text-desertStorm md:absolute md:inset-0 md:flex md:h-full md:w-full md:flex-col md:items-center md:justify-center md:rounded-t md:bg-black/70 md:opacity-0 md:transition-opacity md:duration-300 md:ease-in-out md:hover:opacity-100">
                    <h1 className="py-5 text-2xl font-bold">
                      Palm Kernel Refined Vegetable Oil
                    </h1>
                    <p className="text-center text-lg font-light">
                      Our palm kernel refined vegetable oil is vitamin A
                      fortified and suitable for all-purpose cooking and frying.
                      It is also an appropriate substitute for trans fat used in
                      commercial baking. It has a neutral color and flavor, can
                      be solid at room temperature, and has a sharp melting
                      curve.
                    </p>
                  </div>
                )}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="relative w-60 flex-shrink-0 snap-center rounded-md shadow-xl sm:w-96 md:w-[500px]"
              >
                <img
                  className="h-full w-full rounded-t object-cover sm:w-96 md:w-full"
                  src={palmKernelCake}
                />
                <div className="overlay absolute bottom-0 flex h-2/5 w-full flex-col justify-center rounded-t-md bg-black/75 px-4 text-desertStorm md:hidden">
                  <h1 className="text-lg">Palm Kernel Cake</h1>
                  <p className="text-sm font-light">
                    Besides our palm-based...{" "}
                    <span className="cursor-pointer border-b border-carrotOrange text-carrotOrange">
                      <a>See more</a>
                    </span>
                  </p>
                </div>
                {tabsAndDesktops && (
                  <div className="px-5 text-desertStorm md:absolute md:inset-0 md:flex md:h-full md:w-full md:flex-col md:items-center md:justify-center md:rounded-t md:bg-black/70 md:opacity-0 md:transition-opacity md:duration-300 md:ease-in-out md:hover:opacity-100">
                    <h1 className="py-5 text-2xl font-bold">
                      Palm Kernel Cake
                    </h1>
                    <p className="text-center text-lg font-light">
                      Besides our Palm-based products, we also cater to the
                      market requirement for animal feed. Our PKC is very high
                      quality and contains 23% protein and 18% fiber, making it
                      suitable for feeding ruminants and a significant
                      ingredient in poultry, piggery, and dairy feed.
                    </p>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
          <h1 className="font-crimsonText text-3xl p-5 md:p-2 text-black">
            Our Products
          </h1>
        </motion.div>
      </div>
    </div>
  )
}

export default Home
