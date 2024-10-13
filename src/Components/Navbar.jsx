import { useEffect, useRef } from "react";
import PropTypes from "prop-types";


const Navbar = ({navOpen}) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();

    useEffect(() => {
        // Make sure the element exists before accessing its properties
        if (lastActiveLink.current) {
          console.log('OffsetTop:', lastActiveLink.current.offsetTop + 'px');
        }
      }, []);  

    

    const initActiveBox =()=>{
        activeBox.current.style.top = lastActiveLink.current.offsetTop +'px'
        activeBox.current.style.left = lastActiveLink.current.offsetLeft +'px'
        activeBox.current.style.width = lastActiveLink.current.offsetWidth +'px'
        activeBox.current.style.height = lastActiveLink.current.offsetHeight +'px'
        console.log(lastActiveLink.current);
        console.log(activeBox.current);
    }

    useEffect(initActiveBox,[]);
    window.addEventListener('resize', initActiveBox)

    const activeCurrentLink = (event) => {
        // Remove 'active' class from the previous active link
        lastActiveLink.current?.classList.remove('active');
    
        // Add 'active' class to the clicked link
        event.target.classList.add('active');
        lastActiveLink.current = event.target;
    
        // Update the position and dimensions of activeBox based on the clicked link's properties
        activeBox.current.style.top = event.target.offsetTop + 'px';
        activeBox.current.style.left = event.target.offsetLeft + 'px';
        activeBox.current.style.width = event.target.offsetWidth + 'px';
        activeBox.current.style.height = event.target.offsetHeight + 'px';
    
        // Debugging output to check event.target
        console.log(event.target);
    };
    


    const navItems = [
        {
          label: 'Home',
          link: '#home',
          className: 'nav-link active',
          ref: lastActiveLink
        },
        {
          label: 'About',
          link: '#about',
          className: 'nav-link'
        },
        {
          label: 'Work',
          link: '#work',
          className: 'nav-link'
        },
        {
          label: 'Reviews',
          link: '#reviews',
          className: 'nav-link'
        },
        {
          label: 'Contact',
          link: '#contact',
          className: 'nav-link md:hidden'
        }
      ];

  return (
    <nav className={'navbar ' + (navOpen ? 'active' : '')}>
    {
        navItems.map(({label,link,className,ref},key)=>(
            <a href={link}
            key={key}
            ref={ref}
            className={className}
            onClick={activeCurrentLink}
            >
                {label}
            </a>
        ))
    }

    <div className="active-box" ref={activeBox}>
        
    </div>

    </nav>
  )
}

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired
}

export default Navbar
