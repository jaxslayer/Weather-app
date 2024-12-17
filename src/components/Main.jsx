import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import { WiHumidity, WiBarometer, WiStrongWind } from "react-icons/wi";
const Main = (props) => {
  const Key = import.meta.env.VITE_KEY;
  const uri = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${Key}&units=metric`;

  const { data, isLoading, error, isError } = useFetch(uri);

  const D = () => {
    if (isError) {
      return (
        <div>
          <p>Error occured</p>
        </div>
      );
    } else {
      if (isLoading) {
        return <div>Loading...</div>;
      } else {
        let dateTime = new Date(
          data.dt * 1000 - data.timezone * 1000
        ).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
        return (
          <main className="w-full flex justify-center">
            <article className="w-full flex justify-center items-center flex-col">
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="Image"
                className="object-cover bg-skyblue h-100px w-100px"
              />
              <h2>
                {data.name},<span>{data.sys.country}</span>
              </h2>
              <h2>Date:{dateTime}</h2>
              <h2>{Math.round(data.main.temp)}°C</h2>
              <div className="flex flex-row justify-between items-center w-full">
                <section className="flex flex-col justify-center items-center">
                  <p>
                    {data.main.humidity}
                    <span>%</span>
                  </p>
                  <WiHumidity className="h-50px w-50px" />
                </section>
                <section className="flex flex-col justify-center items-center">
                  <p>
                    {data.main.pressure}
                    <span>PA</span>
                  </p>
                  <WiBarometer className="h-50px w-50px" />
                </section>
                <section className="flex flex-col justify-center items-center">
                  <p>
                    {data.wind.speed}
                    <span>Km/h</span>
                  </p>
                  <WiStrongWind className="h-50px w-50px" />
                </section>
              </div>
            </article>
          </main>
        );
      }
    }
  };
  return <D />;
};

export default Main;
