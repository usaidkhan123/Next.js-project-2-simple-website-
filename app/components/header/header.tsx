const Header = () => {
    return (
      <div className="mt-0 h-16 flex justify-between items-center px-4 sm:px-8 bg-gradient-to-r from-purple-400 via-purple-700 to-orange-300">
        
        <span className="text-orange-400 font-serif font-semibold text-lg sm:text-2xl py-4">
          LandingPage.X
        </span>
  
    
        <ul className="list-none flex flex-wrap justify-center sm:justify-start items-center space-x-6 sm:space-x-12 py-2 sm:py-4 text-white text-sm sm:text-base">
          <li><a href="">Home</a></li>
          <li><a href="">Aboutus</a></li>
          <li><a href="">Contacts</a></li>
          <li><a href="">Services</a></li>
        </ul>
  
        <button className="bg-orange-500 rounded w-24 h-8 sm:w-28 sm:h-10 mt-2">
          Login
        </button>
      </div>
    );
  };
  
  export default Header;
  
