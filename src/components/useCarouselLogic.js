import { useEffect, useState } from "react";

export const useCarouselLogic = () => {
  const people = [
    {
      name: "Ali Abrar",
      role: "Dentist",
      education: "University of Oxford",
      description:
        "Lorem ipsum dolor sit amet, elit adipiscing consectetur elit",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    },
    {
      name: "Tabish Ahmed",
      role: "Dentist",
      education: "University of Sheffield",
      description:
        "Lorem ipsum dolor sit amet, elit adipiscing consectetur elit",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    },
    {
      name: "Hamza Bin-Majid",
      role: "Dentist",
      education: "University of Manchester",
      description:
        "Lorem ipsum dolor sit amet, elit adipiscing consectetur elit",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    },
    {
      name: "Anant Dandotiya",
      role: "Dentist",
      education: "University of Bristol",
      description:
        "Lorem ipsum dolor sit amet, elit adipiscing consectetur elit",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    },
    {
      name: "Kirat Dhillon",
      role: "Dentist",
      education: "University of Bristol",
      description:
        "Lorem ipsum dolor sit amet, elit adipiscing consectetur elit",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    },
    // More people...
  ];
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 760);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const carouselProps = isMobile
    ? {}
    : {
        centerMode: true,
        centerSlidePercentage: 22,
      };
  return { carouselProps, people };
};
