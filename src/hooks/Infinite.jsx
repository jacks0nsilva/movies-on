import React from 'react'

const InfiteScroll = ({callback, page}) => {
    const myref = React.useRef()
    React.useEffect(()=>{
        const Observer = new IntersectionObserver(([entry])=>{
          const ratio = entry.intersectionRatio;
          if (ratio > 0 && page < 4){
              callback()
          }
        });
        if(myref.current){
          Observer.observe(myref.current);
        }
        return ()=>{
          Observer.disconnect();
        }
      },[myref, page])
  return (
    <div ref={myref}>
    </div>
  )
}

export default InfiteScroll