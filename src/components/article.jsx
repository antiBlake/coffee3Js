import { useEffect, useRef } from 'react'; // Import your CSS file for styling

const Article = () => {
  const leftParagraphRef1 = useRef(null);
  const rightParagraphRef1 = useRef(null);
  const leftParagraphRef2 = useRef(null);
  const rightParagraphRef2 = useRef(null);
  const leftParagraphRef3 = useRef(null);
  const rightParagraphRef3 = useRef(null);

  useEffect(() => {
    let lastScrollTop = window.scrollY;

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      const scrollDirection = currentScrollTop > lastScrollTop ? 'down' : 'up';

      checkAndAnimate(leftParagraphRef1, scrollDirection);
      checkAndAnimate(rightParagraphRef1, scrollDirection);
      checkAndAnimate(leftParagraphRef2, scrollDirection);
      checkAndAnimate(rightParagraphRef2, scrollDirection);
      checkAndAnimate(leftParagraphRef3, scrollDirection);
      checkAndAnimate(rightParagraphRef3, scrollDirection);

      lastScrollTop = currentScrollTop;
    };

    const checkAndAnimate = (ref, scrollDirection) => {
      if (ref.current) {
        const paragraphRect = ref.current.getBoundingClientRect();
        const isInViewport = paragraphRect.top < window.innerHeight && paragraphRect.bottom >= 0;

        if (isInViewport) {
          if (scrollDirection === 'down') {
            ref.current.classList.add('animate');
          } else {
            ref.current.classList.remove('animate');
          }
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check when the component mounts
    handleScroll();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-container">
      <div ref={leftParagraphRef1} className='awareness left-paragraph'>
        <p>Enhanced Mood:</p>
      </div>
      <div ref={rightParagraphRef1} className='awareness right-paragraph'>
        <p>Caffeine can stimulate the release</p>
      </div>
      <div ref={leftParagraphRef2} className='awareness left-paragraph'>
        <p>of neurotransmitters like dopamine</p>
      </div>
      <div ref={rightParagraphRef2} className='awareness right-paragraph'>
        <p>and norepinephrine, which can improve</p>
      </div>
      <div ref={leftParagraphRef3} className='awareness left-paragraph'>
        <p>mood and reduce feelings of tiredness</p>
      </div>
    </div>
  );
};

export default Article;
