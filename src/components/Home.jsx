import React from 'react';
import Play1 from "../assets/play.png";
import bodylogo1 from "../assets/bodylogo1.jpg";
import bodylogo2 from "../assets/bodylogo2.jpg";
import Fire from "../assets/Fire.png";


const Home = () => {
  return (
    <div className="title ">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2 md:pl-4  text-content">
          <h1 className="mb-2 text-4xl font-bold">Find Movies</h1>
          <h2 className="mb-2 text-4xl font-bold">Tv Shows <span className="more">and more</span></h2>
          <p className="mb-2 text-xl">
            Lorem ipsum, has been the industry's standard dummy text ever since the 1500s,{" "}
            <span className="block space1">when an unknown printer took a gallery of type and </span>{" "}
            scrambled it to make a type specimen book
          </p>
          <div className="rectangle mt-4 flex items-center">
            <img src={Play1} alt="Play Logo" className="play-logo mr-2" />
            <p className="play-text">Watch Tutorial</p>
          </div>
        </div>
        <div className="flex items-center w-1/2 relative h-80 rounded-lg sm:h-80 lg:order-last lg:h-full pt-46">
          <img
            src={bodylogo2}
            alt="image1"
            className="absolute ml-80 top-0 w-1/2" // Adjust left margin and width
          />
          <img
            src={bodylogo1}
            alt="image2"
            className="cursor-pointer relative mt-24 ml-40 w-1/2 hover:shadow-outline" // Adjust margin-left and width
          />
        </div>
      </div>
      <div className="container mr-14 ml-5 px-2 lg:px-4">
      <div className="w-full mt-[2rem]">
        <div className="flex justify-between mb-[3rem]">
          <div className="flex gap-1">
            <img src={Fire} alt="fire" className="" />
            <span className="text-2xl font-bold uppercase">Trending</span>
          </div>
          <hr />
          <span className="text-xl mr-14">See More</span>
        </div>
        <div className="flex gap-4">
          <div>
            <img src="./img/image 21.png" alt="image21" />
            <span>Medellin</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/image 22.png" alt="image21" />
            <span>Dungeons&Drag..</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/image 27.png" alt="image21" />
            <span>Shazam</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/image 26.png" alt="image21" />
            <span>Guardians of the...</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/image 29.png" alt="image21" />
            <span>Rich In Love2</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/image 30.png" alt="image21" />
            <span>Tyler Perry's Sist..</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-[2rem]">
          <div>
            <img src="./img/image 31.png" alt="image21" />
            <span>The Cube</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/image 32.png" alt="image21" />
            <span>Nancy Drew</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/image 33.png" alt="image21" />
            <span>The Crossfire</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/image 34.png" alt="image21" />
            <span>The Prank Panel</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/image 35.png" alt="image21" />
            <span>The Hypnotic</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/image 36.png" alt="image21" />
            <span>The Days</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
        </div>
        <div className="flex gap-4"> </div>
        <div className="mb-[3rem]"></div>
    <div className="flex gap-2"></div>
        <div className="flex justify-between mt-[2rem]">
          <span className="text-2xl font-bold uppercase">You May Like This</span>
          <hr />
          <span className="text-xl mr-14">See More</span>
        </div>

        <div className="flex gap-4 mt-[2rem]">
          <div className="text-xl">
            <img src="./img/image 40.png" alt="image21" />
            <span>The Days</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div className="text-xl">
            <img src="./img/image 39.png" alt="image21" />
            <span>The Days</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div className="text-xl">
            <img src="./img/image 38.png" alt="image21" />
            <span>The Days</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div className="text-xl">
            <img src="./img/image 37.png" alt="image21" />
            <span>The Days</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div className="text-xl">
            <img src="./img/Rectangle 10.png" alt="image21" />
            <span>The Days</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div  className="text-xl">
            <img src="./img/Rectangle 11.png" alt="image21" />
            <span>The Days</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-[2rem]">
          <div>
            <img src="./img/Rectangle 12.png" alt="image21" />
            <span>The Days</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/image 27.png" alt="image21" />
            <span>The Days</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/image 21.png" alt="image21" />
            <span>The Days</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/Rectangle 13.png" alt="image21" />
            <span>The Days</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/Rectangle 14.png" alt="image21" />
            <span>The Days</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
          <div>
            <img src="./img/Rectangle 15.png" alt="image21" />
            <span>The Days</span>
            <div className="flex">
              2023<span className="ml-3 text-[#e50914]">.</span>104m
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    

  );
};

export default Home;
