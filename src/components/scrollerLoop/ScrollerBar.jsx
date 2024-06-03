import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAllData } from "../../redux/slice/startUpDataSlice";
import "../scrollerLoop/ScrollerBar.css";

import React from 'react'

function ScrollerBar() {
  
  const data = useSelector(selectAllData);
    console.log('the value of data',data);
  
    useEffect(() => {
      
      const scrollers = document.querySelectorAll(".scroller-div");
  
      // If a user hasn't opted in for reduced motion, then we add the animation
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation(scrollers);
      }
    }, []);
  
    function addAnimation(scrollers) {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);
  
        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
  
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  
    return (
      <div>
        <div className="child-div-scroller">
  
          <p style={{textAlign:'center'}}>Top! Invested Companies, Highly Funded by Top Investors.</p>
          <div className="scroller-div" data-speed="fast">
            <ul className="tag-list  scroller__inner">
                {
                    data.map((data)=>{
                        return(
                            <li>{`${data.companyName}`}</li>
                        );
                    })
                    // data.slice(0, 3).map((item, index) => {
                    //   return (
                    //     <li key={index}>{`${item.companyName}`}</li>
                    //   );
                    // })
                }
            </ul>
          </div>
  
          <div className="scroller-div" data-direction="right" data-speed="slow">
            <div className="scroller__inner img-div" >
              {
                data.map((data)=>{
                    return(
                        // eslint-disable-next-line jsx-a11y/img-redundant-alt
                        <img src={`data:image/jpeg;base64,${data.companyImage}`} alt="image" />
                    )
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
}

export default ScrollerBar
