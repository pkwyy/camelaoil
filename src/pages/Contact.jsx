import banner1 from '../assets/images/banner1.jpg';
import { miniBanners } from './Home';
import { motion } from 'motion/react';
import useInView from '../hooks/useInView';
import { containerVariants, itemVariants } from '../utils/variants';
import { ImEnvelop, ImMobile } from 'react-icons/im';

const Contact = () => {
  const [setRef, inView] = useInView({ threshold: 0.1 });
  const [setRef1, inView1] = useInView({ threshold: 0.1 });
  const [setRef2, inView2] = useInView({ threshold: 0.1 });

  return (
    <div className="max-w-screen relative overflow-x-hidden">
      <div className="relative w-full">
        <img src={banner1} className={miniBanners} />
      </div>

      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        ref={setRef}
      >
        <motion.div
          variants={itemVariants}
          className="px-4 py-10 sm:px-8 md:px-20 lg:px-80"
        >
          <p>
            <span className="text-3xl">At Camela, we do not work alone; </span>
            <span className="text-base">
              every point of contact between us and our customers is essential.
              Contact us to make an inquiry, order our products or tells us how
              we are doing, we can&apos;t wait to hear from you.
            </span>
          </p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex flex-col gap-10 text-center md:px-10 lg:px-56 xl:px-96">
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-10 md:gap-40"
            >
              <div className="flex items-center gap-1">
                <ImMobile className="size-10 md:size-14" />
                <div>
                  <a href="tel:+2349034048342">09034048342</a>
                </div>
              </div>
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-1"
              >
                <ImEnvelop className="size-10 md:size-14" />
                <a href="mailto:contact@camelaoil.ng:">contact@camelaoil.ng</a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={inView1 ? 'visible' : 'hidden'}
        variants={containerVariants}
        ref={setRef1}
        className="my-10"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col justify-center gap-6 px-5 sm:px-8 lg:px-60 xl:px-96"
        >
          <h1 className="text-center font-crimsonText text-2xl uppercase">
            Enquiries
          </h1>
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
            <input
              placeholder="Your name"
              className="w-full rounded-sm border border-black p-4"
            />
            <input
              placeholder="Your email"
              className="w-full rounded-sm border border-black p-4"
            />
            <input
              placeholder="Subject"
              className="w-full rounded-sm border border-black p-4"
            />
          </div>
          <textarea
            placeholder="Message"
            className="w-full rounded-sm border border-black p-4"
          />
          <button className="text-desertStorm w-full bg-black p-4 text-white">
            Send Message
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={inView2 ? 'visible' : 'hidden'}
        variants={containerVariants}
        ref={setRef2}
        className="w-full"
      >
        <motion.iframe
          variants={itemVariants}
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3971.487015777089!2d7.0156988!3d5.4944494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPlot%20C1%2F24%20Onitsha%20road%20industrial%20layout%20Owerri%2C%20Imo%20State!5e0!3m2!1sen!2sng!4v1732380887387!5m2!1sen!2sng"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></motion.iframe>
      </motion.div>
    </div>
  );
};

export default Contact;
