import { useEffect, useState } from 'react';
import logo from '../../logo.png';
import { AnimatePresence, motion } from 'motion/react';
import { useMediaQuery } from 'react-responsive';
import { FiMenu } from 'react-icons/fi';
import { Link, useLocation } from 'react-router';

const menu = [
  { title: 'Home', path: '/' },
  { title: 'Products', path: '/products' },
  { title: 'About Us', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('/');
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const mobileScreens = useMediaQuery({
    maxWidth: 1023,
  });

  useEffect(() => {
    if (pathname === '/' || pathname === '/*') {
      setActive('/');
    } else {
      setActive(pathname);
    }
  }, [pathname]);

  const onLinkClick = (link) => {
    setActive(link);
  };

  return (
    <nav
      className={`fixed z-50 w-full bg-black/90 px-5 py-3 text-white shadow transition-all duration-500 ease-in-out lg:px-10 xl:px-40`}
    >
      <div className="flex flex-col items-center justify-between">
        <div className="flex w-full items-center justify-between">
          {mobileScreens ? (
            <>
              <Link to="/">
                <img src={logo} className="h-5 w-10" />
              </Link>
              <FiMenu
                className="size-5 cursor-pointer text-carrotOrange transition-transform duration-300 ease-in-out hover:scale-125"
                onClick={() => setIsOpen(!isOpen)}
              />
            </>
          ) : (
            <>
              <Link to="/">
                <img src={logo} className="h-12 w-24" />
              </Link>
              <div className="flex items-center gap-6">
                {menu.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => onLinkClick(item.path)}
                    className={`my-2 cursor-pointer font-crimsonText text-sm uppercase hover:text-carrotOrange ${
                      active === item.path
                        ? 'w-fit font-semibold text-carrotOrange'
                        : 'transform text-white transition-transform duration-300 ease-in-out hover:scale-125'
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={`${isOpen ? 'shadow' : 'hidden'} w-full lg:hidden`}
              onClick={() => setIsOpen(false)}
            >
              <div className="flex flex-col items-center py-2">
                {menu.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => onLinkClick(item.path)}
                    className={`my-2 cursor-pointer text-center font-crimsonText text-sm uppercase hover:text-carrotOrange ${
                      active === item.path
                        ? 'w-fit text-carrotOrange'
                        : 'text-sisal hover:text-sisal transform transition-transform duration-300 ease-in-out hover:scale-125'
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
