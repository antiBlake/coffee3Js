

const Hero = () => {
    const headerText ="Drinking a good cup of coffee in the morning can offer various benefits";
  return (
    <div className='hero'>
    <div className='hero-image'>
     <img src='/images/1892-min.png' alt='hero-section' />
    </div>
    <h1 className='hero-text'>
    {headerText}

    </h1>
    <div className='human'>
    <img src='/images/Subject 2.png' alt='human-section' />
    <div className="vapour">
               <span></span>
               <span></span>
               <span></span>
               <span></span>
           </div>
    </div>
   
   </div>
  )
}

export default Hero