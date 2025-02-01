import factory3 from '../assets/images/factory3.jpeg';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '../utils/variants';
import useInView from '../hooks/useInView';

const Timeline = () => {
  const [setRef, inView] = useInView({ threshold: 0.1 });
  return (
    <motion.div
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      ref={setRef}
      className="relative px-5 py-1 text-white sm:px-10 md:px-28 lg:px-60 xl:px-96"
      style={{ backgroundImage: `url(${factory3})` }}
    >
      <div className="absolute inset-0 bg-black/85" />
      <ol className="relative mt-10 border-s border-carrotOrange">
        <motion.li variants={itemVariants} className="mb-10 ms-4">
          <div className="absolute -start-1.5 size-3 rounded-full border border-carrotOrange bg-carrotOrange" />
          <h3 className="text-lg font-semibold text-carrotOrange">1960</h3>
          <p className="text-desertStorm mb-4 text-base font-light">
            We were established
          </p>
        </motion.li>
        <motion.li variants={itemVariants} className="mb-10 ms-4">
          <div className="absolute -start-1.5 mt-1.5 size-3 rounded-full border border-carrotOrange bg-carrotOrange" />
          <h3 className="text-lg font-semibold text-carrotOrange">1985</h3>
          <p className="text-desertStorm mb-4 text-base font-light">
            We went into Palm Kernel Nut Crushing to extract palm kernel oil
            (PKO) and palm kernel cake (PKC)
          </p>
        </motion.li>
        <motion.li variants={itemVariants} className="mb-10 ms-4">
          <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-carrotOrange bg-carrotOrange" />
          <h3 className="text-lg font-semibold text-carrotOrange">1990</h3>
          <p className="text-desertStorm mb-4 text-base font-light">
            Expanding into refining palm kernel oil into edible vegetable oil
          </p>
        </motion.li>
        <motion.li variants={itemVariants} className="mb-10 ms-4">
          <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-carrotOrange bg-carrotOrange" />
          <h3 className="text-lg font-semibold text-carrotOrange">1998</h3>
          <p className="text-desertStorm mb-4 text-base font-light">
            The next major expansion; the installation of the vegetable oil
            refining for the processing of palm kernel oil (PKO) into vegetable
            oil and fatty acid. The vegetable oil was branded Camela Vegetable
            Oil and hence the new name of the company in August 2000 to Camela
            Vegetable Oil Co. Ltd. The company having met all requirements of
            National Agency for Food, Drug and Alcohol Contorl (NAFDAC) and the
            Standard Organization of Nigeria (SON) have since been issued a
            NAFDAC number 01-2016L and Mandatory Conformity Assessment
            Certificate Programme (MANCAP) Number: FT-697
          </p>
        </motion.li>
        <motion.li variants={itemVariants} className="mb-10 ms-4">
          <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-carrotOrange bg-carrotOrange" />
          <h3 className="text-lg font-semibold text-carrotOrange">2007</h3>
          <p className="text-desertStorm mb-4 text-base font-light">
            Camela Vegetable Oil co. Ltd expanded into fish farming and fish
            feed production.
          </p>
        </motion.li>
        <motion.li variants={itemVariants} className="mb-10 ms-4">
          <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-carrotOrange bg-carrotOrange" />
          <h3 className="text-lg font-semibold text-carrotOrange">2013</h3>
          <p className="text-desertStorm mb-4 text-base font-light">
            2013 and beyond saw us install and recently commission a 100MT/day
            palm oil refining and fractionation plant to produce palm olein,
            palm stearin, and palm fatty acid.
          </p>
        </motion.li>
        <motion.li variants={itemVariants} className="mb-10 ms-4">
          <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-carrotOrange bg-carrotOrange" />
          <h3 className="text-lg font-semibold text-carrotOrange">Present</h3>
          <p className="text-desertStorm mb-4 text-base font-light">
            2013 and beyond saw us install and recently commission a 100MT/day
            palm oil refining and fractionation plant to produce palm olein,
            palm stearin, and palm fatty acid.
          </p>
        </motion.li>
      </ol>
    </motion.div>
  );
};

export default Timeline;
