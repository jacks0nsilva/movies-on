import React from 'react'

const InfiteScroll = ({callback}) => {
    const myref = React.useRef()
    React.useEffect(()=>{
        const Observer = new IntersectionObserver(([entry])=>{
          const ratio = entry.intersectionRatio;
          if (ratio > 0){
              callback()
          }
        });
        if(myref.current){
          Observer.observe(myref.current);
        }
        return ()=>{
          Observer.disconnect();
        }
      },[myref])
  return (
    <div ref={myref}></div>
  )
}

export default InfiteScroll