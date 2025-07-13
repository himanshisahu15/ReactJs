
const Footer = () => {
  return (
    <footer
      id="pv-footer"
      className="pv-footer bg-black text-white text-sm px-6 py-8 flex flex-col items-center gap-4"
      data-testid="footer"
    >
  
      <div
        className="pv-brand-logo"
        data-testid="footer-pv-brand-logo"
      >
        <img
          src="https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/m-r/Prime/logos/channels-logo-white._CB554929912_SY30_FMpng_.png"
          alt="Prime Logo"
          className="h-6 w-auto"
        />
      </div>

      <ul className="flex flex-wrap justify-center items-center gap-6 text-gray-400 text-sm">

        <span className="text-helpblue underline cursor-pointer hover:text-blue-800">
          Terms and Privacy Notice
        </span>
        <span className="text-helpblue underline cursor-pointer hover:text-blue-800">
          Send us feedback
        </span>
        <span className="text-helpblue underline cursor-pointer hover:text-blue-800">
          Help
        </span>

        <li className="text-gray-500">
          © 1996–2025, Amazon.com, Inc. or its affiliates
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
