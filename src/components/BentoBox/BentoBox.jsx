import {useState} from 'react';
import React from 'react';
import "./styles.css"
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';

// import profileImage from '../assets/pexels-drew-williams-1285451-3568520.jpg';
// import bg2 from '../assets/bg2.jpg'
// import bg3 from '../assets/bg3.png'
import { Button } from '@mui/material';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import Image from '../image.jsx';

// import Modal from '../Modal.jsx';
const BentoBox =()=>{
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="bento-container">

      
      
      {/* <div className="bento-grid">
      <div className='carousel-container'><Image/></div>
        <div className="bento-item graph-section">
            <TimelineRoundedIcon/>
            <h3>Insider stories and latest updates.</h3>
          Recent News.
        </div>
    <div className='blog_faq'>
        <div className="bento-item text-section1">
            <div className='blog-upper'>
                <h3>World of Technology</h3>
                <div className='arrow' onClick={toggleModal}>
                <NorthEastRoundedIcon style={{color:"black",cursor:"pointer", fontSize:"3rem"}}/>
                </div>
            </div>
            <p>400+</p>

          <h1>View our Blog.</h1>
        </div>

        <div className="bento-item text-section2">
        <Button 
                className='btn'
                 variant="contained" style={{color:"white",
                     backgroundColor:"black",
                     width:"10rem",
                     height:"4rem",
                     borderRadius:"2rem",
                     marginTop:"-0.6rem",
                     fontSize:"1.8rem",
                     '&:hover': {
                            backgroundColor: "gray",
                            color:"var(--main-color)",
                            borderColor:"pink",
                            transform: "scale(2)", 
                            transition: "transform 0.3s ease-in-out", 
                }
                     }}>Ask<span><HelpOutlineRoundedIcon/></span></Button>
                     <div className='arrow' onClick={toggleModal}>
                     <NorthEastRoundedIcon style={{color:"black" ,cursor:"pointer",fontSize:"3rem",position:"absolute",top:"2rem",left:"31.5rem"}}/>
                     </div>
                     
          <h2 className='faq-heading1'>Frequently Asked Questions.</h2>
          <h1 className='faq-heading2'>Answers.</h1>
        </div>
        </div>
      </div>
      <Modal show={showModal} onClose={toggleModal} /> */}
      <div className='carousel-container'>
        <Image/>

      </div>
      <div className='container2'>
        <div className='news'> 
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <TimelineRoundedIcon/>
        <NorthEastRoundedIcon style={{color:"white" ,cursor:"pointer",fontSize:"3rem"}}/>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:"0px"}}>
            <h1 style={{
              fontSize:"5.5rem",
            }}>Insider stories and latest updates.</h1>
          <h2>Recent News.</h2>
          <a href="/newssection">
          <Button 
                className='btn'
                  style={{color:"white",
                     backgroundColor:"black",
                     width:"15rem",
                     height:"5rem",
                     borderRadius:"2rem",
                     border:"1.5px solid cyan",
                     marginTop:"10px",
                     

                   
                     fontSize:"15px",
                     '&:hover': {
                            backgroundColor: "gray",
                            color:"var(--main-color)",
                            borderColor:"pink",
                            transform: "scale(2)", 
                            transition: "transform 0.3s ease-in-out", 
                }
                     }}>Read Now</Button>
                     </a>
          </div>
        </div>
        <div className='container3'>
          <div className='blogs'>
          {/* <h3>World of Technology</h3> */}
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"}}>
                <NorthEastRoundedIcon style={{color:"white",cursor:"pointer", fontSize:"3rem",marginTop:"20px",marginLeft:"287px"}}/>
              
           
            {/* <p>400+</p> */}
            <a href="/blog">

            <Button 
                className='btn'
                  style={{color:"white",
                     backgroundColor:"black",
                     width:"18rem",
                     height:"5rem",
                     borderRadius:"2rem",
                     border:"1.5px solid cyan",
                   
                    marginTop:"75%",
                    alignSelf:"center",
                     fontSize:"15px",
                     '&:hover': {
                            backgroundColor: "gray",
                            color:"var(--main-color)",
                            borderColor:"pink",
                            transform: "scale(2)", 
                            transition: "transform 0.3s ease-in-out", 
                }
                     }}>View Our Blog</Button>
                     </a></div>
          </div>
          <div className='faq'>
            <div style={{display:'flex',justifyContent:"space-between", paddingLeft:"10px",paddingRight:"15px", paddingTop:"10px",}}>
            <p style={{
              fontSize:"30px"
            }}>Frequently Asked Questions.</p>
          <NorthEastRoundedIcon style={{color:"white" ,cursor:"pointer",fontSize:"3rem",marginTop:"10px" }}/>
           
             </div>
             <div style={{display:'flex',flexDirection:"column",gap:"55px"}}>
                    
          <Button 
                className='btn'
                  style={{color:"white",
                     backgroundColor:"black",
                     width:"10rem",
                     height:"5rem",
                     borderRadius:"2rem",
                     border:"1.5px solid cyan",
                    marginLeft:"20px",
                    marginTop:"14%",
                    transform:"translateY(40px)",
                     fontSize:"1.8rem",
                     '&:hover': {
                            backgroundColor: "gray",
                            color:"var(--main-color)",
                            borderColor:"pink",
                            transform: "scale(2)", 
                            transition: "transform 0.3s ease-in-out", 
                }
                     }}>Ask<span><HelpOutlineRoundedIcon/></span></Button>
                     <div className='arrow' onClick={toggleModal}>
                     </div>
                     </div>
                    
          </div>
        </div>
       
      </div>
    </div>
  )
};

export default BentoBox;
