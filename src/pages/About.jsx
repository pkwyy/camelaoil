import banner from "../assets/images/banner.jpg"
import Timeline from "../components/Timeline"
import useInView from "../hooks/useInView"
import { containerVariants, itemVariants } from "../utils/variants"
import { miniBanners } from "./Home"
import { motion } from "motion/react"

const About = () => {
  const [setRef1, inView1] = useInView({ threshold: 0.1 })

  return (
    <div className="max-w-screen relative overflow-x-hidden">
      <div className="relative w-full">
        <img src={banner} className={miniBanners} />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(54, 85, 55, 0.1), rgba(0, 0, 0, 1))",
          }}
        ></div>
      </div>

      <div className="flex flex-col">
        <motion.div
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={containerVariants}
          ref={setRef1}
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:text-lg"
          >
            <motion.div className="px-4 py-24 sm:px-8 md:px-20 lg:px-80">
              <p className="text-balance text-3xl">
                Camela Vegetable Oil Company Ltd,{" "}
              </p>
              <p>
                formerly known as R. O. Ikoro and Sons Ltd. was incorporated in
                June 1960 as a Limited Liability Company dealing in
                <span className="font-semibold">
                  {" "}
                  Agricultural Produce and Palm Oil Milling.
                </span>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
        <Timeline />
      </div>
    </div>
  )
}

export default About
