"use client";

import Link from "next/link";
import { useState } from "react";

type tag =
  | "appdev"
  | "gamedev"
  | "music"
  | "csharp"
  | "programming"
  | "regie"
  | "lighting"
  | "audio";

interface Project {
  name: string;
  description: string;
  tags: Array<tag>;
  external?: string;
  image: string;
}

const projects: Project[] = [
  // App Development Projects
  {
    name: "Cliniscope",
    description:
      "Developed and managed a hair transplant clinic comparison app in Turkey (paid work position). Built with modern web technologies to help users find and compare medical services.",
    tags: ["appdev", "programming"],
    external: "https://cliniscope.app",
    image: "/cliniscope.jpeg",
  },
  {
    name: "Electric Church",
    description:
      "Founded a music community platform for music-loving students. Published 150+ reviews and connected peers through writing, discovery, and collective listening. Built on the vision of music as communion—where electricity meets spirituality, and art has the power to speak when everything else falls silent.",
    tags: ["appdev", "programming"],
    external: "https://electrichurch.com",
    image: "/image.png",
  },
  {
    name: "Schools Website (tevitol.k12.tr)",
    description:
      "Official school website for TEV İnanç High School. Under development. Created by school officials and assigned to me for development.",
    tags: ["appdev", "programming"],
    external: "https://tevitol.k12.tr",
    image: "/tevitol.png",
  },
  {
    name: "College Admissions Database (CAD)",
    description:
      "Created a Next.js, TypeScript, and Supabase-based platform where students share admissions profiles for applicants to filter and analyze college admission data.",
    tags: ["appdev", "programming"],
    external: "#",
    image: "/admitpath.png",
  },
  {
    name: "Hades Companionship App",
    description:
      "Built a matchmaking web app for high school students using a 300-question form and custom 12 leveled matching algorithm for compatibility assessment. Implemented thresholded maximum-cardinality matching using Blossom on an unweighted compatibility graph.",
    tags: ["appdev", "programming"],
    external: "#",
    image: "",
  },
  {
    name: "Hades Companionship App v2",
    description:
      "Enhanced version of the matchmaking web app with improved algorithms and user interface. Features advanced compatibility matching and better user experience.",
    tags: ["appdev", "programming"],
    external: "#",
    image: "",
  },
  {
    name: "Legacy Class App",
    description:
      "Developed a music archive website to preserve and share the musical legacy of the class of 2026. Features music streaming, archive management, and social sharing. (In development)",
    tags: ["appdev", "programming"],
    external: "#",
    image: "",
  },
  {
    name: "Prom Invitation",
    description:
      "Created a digital invitation platform for school prom events. Features RSVP management, event details, photo galleries, and interactive elements for attendees.",
    tags: ["appdev", "programming"],
    external: "#",
    image: "",
  }, 
  
  // Game Development Projects
  {
    name: "Midnight Entangled",
    description:
      "A narrative-driven experience where players complete characters' daily tasks through mini-games. Features four interconnected stories of a hitman, businessman, sex worker, and white-collar worker, exploring themes of fate and human connection.",
    tags: ["gamedev", "csharp", "programming"],
    external: "https://umutbideci.itch.io/midnight-entangled",
    image: "https://img.itch.zone/aW1nLzIzMjg5NzcyLnBuZw==/315x250%23c/tu2%2FH6.png",
  },
  {
    name: "ExoSearch: A Journey Across Exoplanets",
    description:
      "Educative space simulation made for NASA Challenge. An educational game that takes players on a journey across exoplanets, teaching about space exploration and astronomy.",
    tags: ["gamedev", "programming"],
    external: "https://yusufemin46.itch.io/exosearch",
    image: "https://img.itch.zone/aW1nLzE4MDYzNzAxLnBuZw==/315x250%23c/mxMOuA.png",
  },
  {
    name: "WHERE IS MY BRIEFCASE",
    description:
      "A racing game where players must find their briefcase. An engaging racing experience with puzzle elements and fast-paced gameplay.",
    tags: ["gamedev", "programming"],
    external: "https://umutbideci.itch.io/where-is-my-briefcase",
    image: "https://img.itch.zone/aW1nLzE3NTA0NDc3LnBuZw==/315x250%23c/hL4P6S.png",
  },
  {
    name: "Seçim Oyunu",
    description:
      "A simulation game focused on political elections. Players experience the complexities of electoral processes and political decision-making.",
    tags: ["gamedev", "programming"],
    external: "https://umutbideci.itch.io/secimoyunu",
    image: "https://img.itch.zone/aW1nLzE3NTA2Mzc4LnBuZw==/315x250%23c/cl%2BDCA.png",
  },
  {
    name: "The Darkest Crash",
    description:
      "A role-playing game with dark themes and intense storytelling. Players navigate through challenging scenarios and make critical decisions that shape the narrative.",
    tags: ["gamedev", "csharp", "programming"],
    external: "https://umutbideci.itch.io/the-darkest-crash",
    image: "https://img.itch.zone/aW1nLzE3NTA0NjAzLnBuZw==/315x250%23c/R9UXq6.png",
  },
  {
    name: "2H",
    description:
      "A game that you must be patient to play.",
    tags: ["gamedev", "csharp", "programming"],
    external: "https://umutbideci.itch.io/2h",
    image: "https://img.itch.zone/aW1nLzIzMjg5NjgzLnBuZw==/347x500/RW0FD3.png",
  },
  {
    name: "Adrian's Tale",
    description:
      "An action game developed with TEVITÖL Studio. Features engaging action sequences and compelling character development in an immersive storyline.",
    tags: ["gamedev", "csharp", "programming"],
    external: "https://studiotevitol.itch.io/adrians-tale",
    image: "https://img.itch.zone/aW1nLzE3NTA2NDA4LnBuZw==/315x250%23c/4BY6OI.png",
  },
  
  // Music Projects
  {
    name: "Tribute Night '22",
    description: "Mor ve Ötesi",
    tags: ["music"],
    external: "#",
    image: "",
  },
  {
    name: "English Night '23",
    description: "Nirvana, Muse",
    tags: ["music"],
    external: "#",
    image: "",
  },
  {
    name: "German Night '23",
    description: "Rammstein",
    tags: ["music"],
    external: "#",
    image: "",
  },
  {
    name: "Poetry Night '23",
    description: "Anathema",
    tags: ["music"],
    external: "#",
    image: "",
  },
  {
    name: "Inanc Music Fest",
    description: "Metallica, Pixies",
    tags: ["music"],
    external: "#",
    image: "",
  },
  {
    name: "Tribute Night '23",
    description: "Anadolu Rock; Erkin Koray, Barış Manço, MFO, a tribute to anatolian rock legends",
    tags: ["music"],
    external: "#",
    image: "",
  },
  {
    name: "German Night '24",
    description: "Rammstein",
    tags: ["music"],
    external: "#",
    image: "",
  },
  {
    name: "Tribute Night '24",
    description: "ABBA, The Cranberries, The Smiths",
    tags: ["music"],
    external: "#",
    image: "",
  },
  {
    name: "Acoustic Night #1",
    description: "Founded Acoustic Night event. Set up a stage in the dining hall and performed acoustic covers. Pearl Jam, Nirvana, Eagles",
    tags: ["music"],
    external: "#",
    image: "",
  },
  {
    name: "Acoustic Night #2",
    description: "Continued Acoustic Night event. Set up a stage in the dining hall and performed acoustic covers. Pearl Jam, Nirvana, Eagles, Jeff Buckley",
    tags: ["music"],
    external: "#",
    image: "",
  },
  {
    name: "Social Studies Workshop",
    description: "Scene",
    tags: ["music"],
    external: "#",
    image: "",
  },
  {
    name: "TedXYouth@tevitol",
    description: "Scene",
    tags: ["music"],
    external: "#",
    image: "",
  },
  {
    name: "Tribute Night '25",
    description: "",
    tags: ["music"],
    external: "#",
    image: "",
  },
  {
    name: "and more...",
    description: "",
    tags: ["music"],
    external: "#",
    image: "",
  },
];

function Work() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div>
      <div id="work" className={"w-full px-4 sm:px-8 md:px-12 lg:px-24 font-poppins text-front"}>
        <h2 className="font-extrabold text-[3em] sm:text-[4em] md:text-[5em] lg:text-[6em] relative left-[-5px] sm:left-[-7px] md:left-[-10px] text-title pt-2.5">
          work.
        </h2>
        <p className="pb-8">
          I  worked on diverse projects throughout my student career at
          İnanç High School, mainly in app development, game development, and music.
        </p>
        
        {/* App Development Section */}
        <section id="app-development" className="mb-12 scroll-mt-36">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-title mb-6">App Development by Umut Bideci</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects
              .filter(project => project.tags.includes("appdev"))
              .map((project) => {
                if (project.external && project.external !== "#") {
                  return (
                    <div
                      key={project.name}
                      className="transition-transform duration-500 w-full flex flex-col bg-white rounded-lg overflow-hidden shadow-soft"
                    >
                      {project.image && (
                        <div
                          style={{ 
                            backgroundImage: `url(${project.image})`,
                            backgroundPosition: project.name === "Electric Church" ? "center top" : "center center"
                          }}
                          className="h-48 w-full bg-cover bg-no-repeat"
                        />
                      )}
                      <div className="p-4">
                        <div className="inline-flex gap-4">
                          {project.tags.map((tag, i) => {
                            switch (i % 3) {
                              case 0:
                                return (
                                  <span
                                    key={i}
                                    className="py-1 px-2 rounded-lg bg-[#333446] text-white"
                                  >
                                    {tag}
                                  </span>
                                );
                            case 1:
                              return (
                                <span
                                  key={i}
                                  className="py-1 px-2 rounded-lg bg-theme text-front"
                                >
                                  {tag}
                                </span>
                              );
                            default:
                              return (
                                <span
                                  key={i}
                                  className="py-1 px-2 rounded-lg bg-[#B8CFCE] text-front"
                                >
                                  {tag}
                                </span>
                              );
                          }
                        })}
                        </div>
                        <Link
                          href={project.external!}
                          target="_blank"
                          className="group/e"
                        >
                          <p className="text-lg sm:text-xl md:text-2xl font-extrabold pt-3 group-hover/e:text-light_blue transition-all duration-300">
                            {project.name}
                          </p>
                          <p className="line-clamp-6 text-ellipsis pt-2 text-front">
                            {project.description}
                          </p>
                          <div className="mt-4 flex items-center justify-between">
                            <span className="text-sm text-theme font-medium">
                              {project.external?.includes('itch.io') ? '🎮 Play on Itch.io' : '🔗 View Project'}
                            </span>
                            <svg
                              width="16"
                              height="16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="group-hover/e:translate-x-1 transition-transform duration-200"
                            >
                              <path
                                d="M7.0002 3H5.2002C4.08009 3 3.51962 3 3.0918 3.21799C2.71547 3.40973 2.40973 3.71547 2.21799 4.0918C2 4.51962 2 5.08009 2 6.2002V13.8002C2 14.9203 2 15.4801 2.21799 15.9079C2.40973 16.2842 2.71547 16.5905 3.0918 16.7822C3.5192 17 4.07899 17 5.19691 17H12.8031C13.921 17 14.48 17 14.9074 16.7822C15.2837 16.5905 15.5905 16.2839 15.7822 15.9076C16 15.4802 16 14.921 16 13.8031V12M17 7V2M17 2H12M17 2L10 9"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </Link>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={project.name}
                      className="transition-transform duration-500 w-full flex flex-col bg-white rounded-lg overflow-hidden shadow-soft"
                    >
                      {project.image && (
                        <div
                          style={{ 
                            backgroundImage: `url(${project.image})`,
                            backgroundPosition: project.name === "Electric Church" ? "center top" : "center center"
                          }}
                          className="h-48 w-full bg-cover bg-no-repeat"
                        />
                      )}
                      <div className="p-4">
                        <div className="inline-flex gap-4">
                          {project.tags.map((tag, i) => {
                            switch (i % 3) {
                              case 0:
                                return (
                                  <span
                                    key={i}
                                    className="py-1 px-2 rounded-lg bg-[#333446] text-white"
                                  >
                                    {tag}
                                  </span>
                                );
                            case 1:
                              return (
                                <span
                                  key={i}
                                  className="py-1 px-2 rounded-lg bg-theme text-front"
                                >
                                  {tag}
                                </span>
                              );
                            default:
                              return (
                                <span
                                  key={i}
                                  className="py-1 px-2 rounded-lg bg-[#B8CFCE] text-front"
                                >
                                  {tag}
                                </span>
                              );
                          }
                        })}
                        </div>
                        <div className="pt-4">
                          <p className="text-lg sm:text-xl md:text-2xl font-extrabold">
                            {project.name}
                          </p>
                          <p className="line-clamp-6 text-ellipsis pt-2 text-front">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </section>

        {/* Game Development Section */}
        <section id="game-development" className="mb-12 scroll-mt-36">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-title mb-6">Game Development by Umut Bideci</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects
              .filter(project => project.tags.includes("gamedev"))
              .map((project) => {
                if (project.external && project.external !== "#") {
                  return (
                    <div
                      key={project.name}
                      className="transition-transform duration-500 h-[28em] sm:h-[32em] lg:h-[36em] w-full flex flex-col"
                    >
                      <div
                        style={{ backgroundImage: `url(${project.image})` }}
                        className="rounded-t-lg bg-center bg-cover bg-no-repeat h-[28em] sm:h-[32em] lg:h-[36em] w-full"
                      />
                      <div className="p-4 bg-white rounded-b-lg h-full">
                        <div className="inline-flex gap-4">
                          {project.tags.map((tag, i) => {
                            switch (i % 3) {
                              case 0:
                                return (
                                  <span
                                    key={i}
                                    className="py-1 px-2 rounded-lg bg-[#333446] text-white"
                                  >
                                    {tag}
                                  </span>
                                );
                              case 1:
                                return (
                                  <span
                                    key={i}
                                    className="py-1 px-2 rounded-lg bg-theme text-front"
                                  >
                                    {tag}
                                  </span>
                                );
                              default:
                                return (
                                  <span
                                    key={i}
                                    className="py-1 px-2 rounded-lg bg-[#B8CFCE] text-front"
                                  >
                                    {tag}
                                  </span>
                                );
                            }
                          })}
                        </div>
                        <Link
                          href={project.external!}
                          target="_blank"
                          className="group/e"
                        >
                          <p className="text-lg sm:text-xl md:text-2xl font-extrabold pt-3 group-hover/e:text-light_blue transition-all duration-300">
                            {project.name}
                          </p>
                          <p className="line-clamp-6 text-ellipsis pt-2 text-transparent bg-gradient-to-t from-gray-500 to-front bg-clip-text">
                            {project.description}
                          </p>
                          <div className="mt-4 flex items-center justify-between">
                            <span className="text-sm text-theme font-medium">
                              {project.external?.includes('itch.io') ? '🎮 Play on Itch.io' : '🔗 View Project'}
                            </span>
                            <svg
                              width="16"
                              height="16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="group-hover/e:translate-x-1 transition-transform duration-200"
                            >
                              <path
                                d="M7.0002 3H5.2002C4.08009 3 3.51962 3 3.0918 3.21799C2.71547 3.40973 2.40973 3.71547 2.21799 4.0918C2 4.51962 2 5.08009 2 6.2002V13.8002C2 14.9203 2 15.4801 2.21799 15.9079C2.40973 16.2842 2.71547 16.5905 3.0918 16.7822C3.5192 17 4.07899 17 5.19691 17H12.8031C13.921 17 14.48 17 14.9074 16.7822C15.2837 16.5905 15.5905 16.2839 15.7822 15.9076C16 15.4802 16 14.921 16 13.8031V12M17 7V2M17 2H12M17 2L10 9"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </Link>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={project.name}
                      className="transition-transform duration-500 h-[28em] sm:h-[32em] lg:h-[36em] w-full flex flex-col"
                    >
                      <div
                        style={{ backgroundImage: `url(${project.image})` }}
                        className="rounded-t-lg bg-center bg-cover bg-no-repeat h-[28em] sm:h-[32em] lg:h-[36em] w-full"
                      />
                      <div className="p-4 bg-white rounded-b-lg h-full">
                        <div className="inline-flex gap-4">
                          {project.tags.map((tag, i) => {
                            switch (i % 3) {
                              case 0:
                                return (
                                  <span
                                    key={i}
                                    className="py-1 px-2 rounded-lg bg-[#333446] text-white"
                                  >
                                    {tag}
                                  </span>
                                );
                              case 1:
                                return (
                                  <span
                                    key={i}
                                    className="py-1 px-2 rounded-lg bg-theme text-front"
                                  >
                                    {tag}
                                  </span>
                                );
                              default:
                                return (
                                  <span
                                    key={i}
                                    className="py-1 px-2 rounded-lg bg-[#B8CFCE] text-front"
                                  >
                                    {tag}
                                  </span>
                                );
                            }
                          })}
                        </div>
                        <div className="pt-4">
                          <p className="text-lg sm:text-xl md:text-2xl font-extrabold">
                            {project.name}
                          </p>
                          <p className="line-clamp-6 text-ellipsis pt-2 text-transparent bg-gradient-to-t from-gray-500/5 to-front bg-clip-text">
                            {project.description}
                          </p>
                          <div className="mt-4 flex items-center justify-between">
                            <span className="text-sm text-theme font-medium">
                              {project.external?.includes('itch.io') ? '🎮 Play on Itch.io' : '🔗 View Project'}
                            </span>
                            <svg
                              width="16"
                              height="16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="group-hover/e:translate-x-1 transition-transform duration-200"
                            >
                              <path
                                d="M7.0002 3H5.2002C4.08009 3 3.51962 3 3.0918 3.21799C2.71547 3.40973 2.40973 3.71547 2.21799 4.0918C2 4.51962 2 5.08009 2 6.2002V13.8002C2 14.9203 2 15.4801 2.21799 15.9079C2.40973 16.2842 2.71547 16.5905 3.0918 16.7822C3.5192 17 4.07899 17 5.19691 17H12.8031C13.921 17 14.48 17 14.9074 16.7822C15.2837 16.5905 15.5905 16.2839 15.7822 15.9076C16 15.4802 16 14.921 16 13.8031V12M17 7V2M17 2H12M17 2L10 9"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </section>

        {/* Music Section */}
        <section id="music" className="mb-12 scroll-mt-36">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-title mb-6">Music by Umut Bideci</h2>
          <p className="pb-8 mb-6">
            I'm a School Band Performer & Head, I also lead the school band; organized 4+ concerts, performed in 15+, 
            played bass, guitar, piano, drums & vocals, mentored peers, and now I'm recording an original album.
          </p>
          <div className="bg-white rounded-lg p-6 shadow-soft">
            <ul className="space-y-3">
              {projects
                .filter(project => project.tags.includes("music"))
                .map((project) => (
                  <li key={project.name} className="border-b border-gray-200 pb-3 last:border-b-0">
                    <div className="flex flex-col">
                      <span className="text-xl font-bold text-front">{project.name}</span>
                      <span className="text-front text-base mt-1">{project.description}</span>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          
          {/* Photo Gallery Section */}
          <div className="mt-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-title mb-6">Gallery</h3>
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-soft">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4" id="music-gallery">
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-200">
                  <iframe
                    src="https://www.youtube.com/embed/XS6TR2-Q2aA"
                    title="Umut Bideci - Music performance video"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div 
                  className="aspect-square overflow-hidden rounded-lg bg-gray-200 cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImage("/gallery /image copy 2.png")}
                >
                  <img 
                    src="/gallery /image copy 2.png" 
                    alt="Umut Bideci - Music performance" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div 
                  className="aspect-square overflow-hidden rounded-lg bg-gray-200 cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImage("/gallery /image copy 3.png")}
                >
                  <img 
                    src="/gallery /image copy 3.png" 
                    alt="Umut Bideci - Music performance" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div 
                  className="aspect-square overflow-hidden rounded-lg bg-gray-200 cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImage("/gallery /image copy 4.png")}
                >
                  <img 
                    src="/gallery /image copy 4.png" 
                    alt="Umut Bideci - Music performance" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div 
                  className="aspect-square overflow-hidden rounded-lg bg-gray-200 cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImage("/gallery /image copy.png")}
                >
                  <img 
                    src="/gallery /image copy.png" 
                    alt="Umut Bideci - Music performance" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div 
                  className="aspect-square overflow-hidden rounded-lg bg-gray-200 cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImage("/gallery /image.png")}
                >
                  <img 
                    src="/gallery /image.png" 
                    alt="Umut Bideci - Music performance" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt="Full size" 
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-3 transition-all duration-200"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Work;
