import Button from "@/components/Button";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-herbg ">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen ">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-600 via-blue-800 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            All your Digital products
          </h1>

          <p className="text-sm mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            start Exploreing state of Art Assets Now !
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button intent={"primary"}>Get Started</Button>

            <Button intent={"outline"}>Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
