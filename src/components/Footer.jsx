import { FaFacebook } from "react-icons/fa"
import NAFDACLogo from "../assets/images/NAFDACLogo.jpg"
import SONLogo from "../assets/images/SONLogo.png"
import { motion } from "motion/react"
import useInView from "../hooks/useInView"
import { containerVariants, itemVariants } from "../utils/variants"

const Footer = () => {
  const footerIconStyles =
    "text-black size-5 hover:border-carrotOrange hover:text-carrotOrange hover:scale-125 ease-in-out duration-300 cursor-pointer"
  const [setRef1, inView1] = useInView({ threshold: 0.1 })

  return (
    <div className="pt-10 font-afacadFlux shadow-top">
      <motion.div
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={containerVariants}
        ref={setRef1}
        className="flex flex-col items-center gap-y-2"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center py-3"
        >
          <h1 className="text-xl font-bold">Certified by:</h1>
          <div className="flex items-center justify-center">
            <img src={NAFDACLogo} height={100} width={100} />
            <img src={SONLogo} height={100} width={100} />
          </div>
        </motion.div>
        <div className="flex flex-col items-center md:flex-row-reverse md:gap-3">
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-end space-x-1 md:absolute md:right-0 md:p-2"
          >
            <span className="text-lg font-semibold">Connect with us: </span>
            <a href="https://www.facebook.com/Camelaoil">
              <FaFacebook className={footerIconStyles} />
            </a>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-1"
          >
            <span className="font-crimsonText text-xl font-semibold">
              Camela Oil
            </span>
            <span className="">Copyright ©{new Date().getFullYear()}</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Footer
