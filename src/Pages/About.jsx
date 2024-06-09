import React, { useEffect } from "react";
import about from "../assets/about.jpg";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div
        data-aos="fade-in"
        className="bg-[#e1e1e1] sm:flex h-[90vh] xl:flex xl:justify-around"
      >
        <div className="sm:w-[90%] sm:ml-[4%] sm:mt-[20%] sm:leading-1 sm:text-left md:leading-8 md:mt-[12%] xl:leading-7 xl:mt-[7%] xl:w-[40%] 2xl:mt-[5%] 2xl:w-[30%] 2xl:ml-[1%] 2xl:leading-8">
          <p>
            Hey there, I'm ,{" "}
            <span className="font-semibold">Abhishek Pawar</span> a 29-year-old
            with an insatiable passion for building frontend websites.
            Originally from <span className="font-semibold">India.</span>
            <br />
            <br />
            I've been happily embracing the vibrant culture and breathtaking
            landscapes of <span className="font-semibold">
              New Zealand
            </span>{" "}
            since 2019. With a perpetual smile and a "happy-go-lucky" attitude,
            I bring enthusiasm and positivity to everything I do. When I'm not
            immersed in the world of web development, you can find me cheering
            on my favorite cricket teams, kicking around a football on the
            field, or losing myself in the magic of cinema.
            <br />
            <br />
            My journey into web development began as a hobby, fueled by my love
            for creating visually stunning websites. What started as a pastime
            has evolved into a full-fledged pursuit, where I constantly strive
            to blend creativity with functionality to deliver exceptional user
            experiences. Whether it's crafting elegant designs, diving into
            code, or collaborating with fellow enthusiasts, My goal is simple:
            to channel my passion and skills into building websites that not
            only look beautiful but also leave a lasting impression on users.
            So, let's connect and embark on this exciting journey together.
          </p>
        </div>
        <div className="sm:hidden xl:block xl:w-[30%] xl:h-[50%] xl:mt-[15%] 2xl:w-[30%] 2xl:h-[75%] 2xl:mt-[5%] shadow-lg">
          <img
            src={about}
            alt="about"
            className="rounded-[50px] w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default About;
