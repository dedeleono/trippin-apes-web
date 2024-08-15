import React, { useCallback, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
 
const Journal = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const book = useRef();
  const onNext = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    book.current.pageFlip().flipNext();
    setCurrentPage(currentPage + 1);
  };
  const onPrev = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    book.current.pageFlip().flipPrev();
    setCurrentPage(currentPage - 1);
  };

  const onFlip = useCallback((e) => {
    setCurrentPage(e.data);
  }, []);

  const pageCount = () => {
    if (currentPage === 0 || currentPage === 1) {
        return ('Pages 1 - 2')
    }
    else if(currentPage === 2 || currentPage === 3){
        return('Pages 3 - 4')
    }
    else if(currentPage === 4 || currentPage === 5){
        return('Pages 5 - 6')
    }
    else if(currentPage === 6|| currentPage === 7){
        return('Pages 7 - 8')
    }
    else if(currentPage === 8 || currentPage === 9){
        return('Pages 9 - 10')
    }
    else if(currentPage === 10 || currentPage === 11){
        return('Pages 11 - 12')
    }
    else if(currentPage === 12 || currentPage === 13){
      return('Pages 13 - 14')
  }
  else if(currentPage === 14 || currentPage === 15){
    return('Pages 15 - 16')
}
else if(currentPage === 16 || currentPage === 17){
  return('Pages 17 - 18')
}
else if(currentPage === 18 || currentPage === 19){
  return('Pages 19 - 20')
}
else if(currentPage === 20 || currentPage === 21){
  return('Pages 21 - 22')
}
    
  }

  return (
    <div
      className="bg-no-repeat bg-center bg-cover bg w-full text-center relative pb-40"
      id="journal"
    >
      <div className="absolute inset-0 -top-44 mask1 z-0">
        <div
          className="absolute inset-0 mask-1"
          style={{
            backgroundImage: 'url("/imgs/bg-doodle.png")',
          }}
        />
      </div>
      <div className="md:py-20 relative">
        <div className="mx-auto">
          <div className="mb-4">
            <span className="text-white bg-transparent font-[Chillow] 2xl:text-8xl text-5xl md:text-7xl">
              CHORLES’S JOURNAL
              <span className="block bg-transparent md:text-xl 2xl:text-4xl text-sm">
                THERE ARE NO ROADMAPS WHERE WE’RE GOING
              </span>
            </span>
          </div>
          <div className=" mb-4">
            <a
              className="cursor-pointer text-[#F4F1B9] font-[WorkSans]"
              href="/trippin-ape-tribe-journal.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
              <MdDownload className="inline ml-1" />
            </a>
          </div>

          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/*
                   // @ts-ignore */}
          <HTMLFlipBook
            flippingTime={500}
            size="stretch"
            ref={book}
            width={400}
            height={518}
            className="mx-auto md:shadow-2xl !max-w-5xl"
            mobileScrollSupport
            showPageCorners
            onFlip={onFlip}
          >
            
            
            <div>
              <img src="/imgs/Journal-Low-2.jpg" />
            </div>
            <div>
              <img src="/imgs/Journal-Low-3.jpg" />
            </div>
            <div>
              <img src="/imgs/Journal-Low-4.jpg" />
            </div>
            <div>
              <img src="/imgs/Journal-Low-5.jpg" />
            </div>
            <div>
              <img src="/imgs/Journal-Low-6.png" />
            </div>
            <div>
              <img src="/imgs/Journal-Low-7.png" />
            </div>
            <div>
              <img src="/imgs/Journal-Low-8.png" />
            </div>
            <div>
              <img src="/imgs/Journal-Low-9.png" />
            </div>
            <div>
              <img src="/imgs/Journal-Low-10.png" />
            </div>
            <div>
              <img src="/imgs/Journal-Low-11.png" />
            </div>
            <div>
              <img src="/imgs/Journal-Low-12.png" />
            </div>
            <div>
              <img src="/imgs/Journal-Low-13.png" />
            </div>
            <div>
              <img src="/imgs/Journal-Low-14.png" />
            </div>
            <div>
              <img src="/imgs/Journal-Low-15.png" />
            </div>
            <div>
              <img src="/imgs/Journal-Low-16.png" />
            </div>
            <div>
              <img src="/imgs/Journal-Low-17.png" />
            </div>
            <div>
              <img src="/imgs/Journal-Low-18.png" />
            </div>
            <div>
              <img src="/imgs/Journal-19-Low.png" />
            </div>
            <div>
              <img src="/imgs/Journal-Low-19.png" />
            </div>
            <div>
              <img src="/imgs/Journal-Low-20.png" />
            </div>
            <div>
              <img src="/imgs/Journal-Low-22.png" />
            </div>
            <div>
              <img src="/imgs/Journal-Low-23.png" />
            </div>
            
          </HTMLFlipBook>
          <div className="flex flex-col w-full justify-center items-center">
            <div className="flex flex-row">
                   <span className="py-0 mt-6 uppercase font-[Chillow] text-2xl">{pageCount()}</span>
            </div>
            <div className="flex flex-row-reverse w-full justify-center items-center">
            <div
              className="text-[#F4F1B9] cursor-pointer mt-3 font-[WorkSans] mx-3"
              onClick={onNext}
            >
              Next page
              <BsChevronDoubleRight
                className="shadow-2xl bg-transparent cursor-pointer mx-auto text-5xl text-[#F4F1B9] inline-block"
                style={{ textShadow: "0 0 4px #000" }}
              />
            </div>
            <div
              className="text-[#F4F1B9] cursor-pointer mt-3 font-[WorkSans] mx-3"
              onClick={onPrev}
            >
              <BsChevronDoubleLeft
                className="shadow-2xl bg-transparent cursor-pointer mx-auto text-5xl text-[#F4F1B9] inline-block"
                style={{ textShadow: "0 0 4px #000" }}
              />
              Previous page
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;
