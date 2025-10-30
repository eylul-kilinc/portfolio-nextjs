import Link from "next/link";

function About() {
  return (
    <div>
      <div id="about" className={"w-full px-4 sm:px-8 md:px-12 lg:px-24 pt-8 font-poppins text-front"}>
        <h2 className="font-extrabold text-[3em] sm:text-[4em] md:text-[5em] lg:text-[6em] relative left-[-5px] sm:left-[-7px] md:left-[-10px] text-title pt-2.5">
          about.
        </h2>
        <p className="pb-4">
          I am a high school student at TEV İnanç High School, passionate about Computer Science 
          and Music. Throughout my academic journey, I have been actively involved 
          in various clubs, competitions, and community service activities.
        </p>
        
        {/* Test Scores Section */}
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-title mb-6">Test Scores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white rounded-lg p-6 shadow-soft">
              <h3 className="text-xl font-bold text-front mb-4">AP Exams</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-front font-medium">AP Calculus BC</span>
                  <span className="text-theme font-bold text-lg">5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-front font-medium">AP Computer Science A</span>
                  <span className="text-theme font-bold text-lg">5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-front font-medium">AP Microeconomics</span>
                  <span className="text-theme font-bold text-lg">4</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-soft">
              <h3 className="text-xl font-bold text-front mb-4">Standardized Tests</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-front font-medium">DET</span>
                  <span className="text-theme font-bold text-lg">135</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-front font-medium">Cumulative GPA</span>
                  <span className="text-theme font-bold text-lg">3.70/4.00</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-8">
          <h2 className="sr-only">Activities and Achievements by Umut Bideci</h2>
          <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-4 sm:ml-8 md:ml-16 lg:ml-72 mr-4 sm:mr-8 md:mr-12 lg:mr-36">
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-front">
              Co-founder & Chief Technology Officer, Cliniscope
            </h3>
            <p className="text-base font-normal text-front">
              Co-founded an AI-supported hair transplant clinic comparing app for clinics in Turkey, with a nearly $1M valuation by TUBITAK.
            </p>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-front">
              <Link
                href={"https://abyss.tevitol.org/"}
                target="_blank"
                className="flex items-center group hover:text-light_blue transition-all duration-150"
              >
                <p>Co-Founder, Abyss Games Studio</p>
                <svg
                  width={24}
                  height={24}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="scale-75"
                >
                  <g id="Interface / External_Link">
                    <path
                      id="Vector"
                      d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                      stroke="#000000"
                      className="group-hover:stroke-light_blue transition-all duration-150"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </Link>
            </h3>
            <p className="text-base font-normal text-front">
              Founded a student-led game studio; directed 7 releases; ranked Top 15/450+ in Turkey&apos;s largest game jam, Magara&apos;25 & NASA Space Apps.
            </p>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-front">
              Head Organizer / Performer, Lead School Band
            </h3>
            <p className="text-base font-normal text-front">
              Led school band; organized 4+ concerts, performed in 15+, played bass, guitar, piano, drums & vocals.
            </p>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-front">
              Head of Programming and Electronics, Inanc Mechatronics Club (IMC#4191)
            </h3>
            <p className="text-base font-normal text-front">
              Was the head of electronics & code at FRC and VEX; won engineering inspiration 2x in FRC. Won Inspire in VEX.
            </p>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-front">
              Captain of the School Team, Inanc TEAM+S Competition Team
            </h3>
            <p className="text-base font-normal text-front">
              Captain of school&apos;s The TEAM+S club; led 3 teams to 2 times Turkey champions & global finalists, guiding research, exams, and experimental design.
            </p>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-front">
              Co-founder / Chief Technology Officer, Electric Church
            </h3>
            <p className="text-base font-normal text-front">
              Founded Electric Church, a community for music-loving students; published 150+ reviews and connected peers through music.
            </p>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-front">
              Founder & Lead Developer, Hades Companionship App
            </h3>
            <p className="text-base font-normal text-front">
              Built &quot;Hades,&quot; a psych-based dating app; coded a 10-parameter nonlinear algorithm & website, matching 300+ students in my high school before Feb 14.
            </p>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-front">
              Student Researcher, Pioneer Academics GPSI Research Program
            </h3>
            <p className="text-base font-normal text-front">
              Conducted research on the topic Resource at Risk: Improving Access to Clean Water, exploring the engineering aspect of the global clean water problem.
            </p>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-front">
              Delegate & Club Member, Inanc Model United Nations
            </h3>
            <p className="text-base font-normal text-front">
              Participated in 5+ international MUNs and got 3 awards. Was in the organizing team of the school&apos;s conference, INANCMUN.
            </p>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-front">
              Tutor, Muallimkoy Education Program
            </h3>
            <p className="text-base font-normal text-front">
              Volunteered as a mentor in the Muallimköy Education Program, teaching English to elementary students from a rural, underprivileged community.
            </p>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-front">
              <Link
                href={"https://yusufemin46.itch.io/exosearch"}
                target="_blank"
                className="flex items-center group hover:text-light_blue transition-all duration-150"
              >
                <p>NASA Space Apps Challenge</p>
                <svg
                  width={24}
                  height={24}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="scale-75"
                >
                  <g id="Interface / External_Link">
                    <path
                      id="Vector"
                      d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                      stroke="#000000"
                      className="group-hover:stroke-light_blue transition-all duration-150"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </Link>
            </h3>
            <p className="text-base font-normal text-front">
              Main coder of the project &apos;Exosearch&apos; that won 2nd place in Çanakkale regional competition.
            </p>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-front">
              Social Studies Workshops SBÇ (Organizer)
            </h3>
            <p className="text-base font-normal text-front">
              Helped organize national academic workshops, invited experts, developed websites.
            </p>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-front">
              European Youth Parliament (Member)
            </h3>
            <p className="text-base font-normal text-front">
              Attended Tarsus 2023 NSC and subsequent conferences, debating global issues.
            </p>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-front">
              Programming Club (Founder)
            </h3>
            <p className="text-base font-normal text-front">
              Founded and led programming workshops and competitions.
            </p>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-front">
              Kadir Has University Engineering Summer Program
            </h3>
            <p className="text-base font-normal text-front">
              Completed intensive engineering coursework, awarded an &apos;Overachieving&apos; certificate.
            </p>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-front">
              Information Technologies Club (Member)
            </h3>
            <p className="text-base font-normal text-front">
              Provided tech support for school events and activities.
            </p>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-front">
              Philosophy Club (Member)
            </h3>
            <p className="text-base font-normal text-front">
              Engaged in weekly discussions on philosophy, sociology, psychology.
            </p>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-front">
              Drama Club (Actor)
            </h3>
            <p className="text-base font-normal text-front">
              Acted in school plays, including original work &apos;Decay&apos;. Performed in school and youth festivals.
            </p>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-front">
              Guitar Club (Founder)
            </h3>
            <p className="text-base font-normal text-front">
              Established a club to teach and encourage guitar playing.
            </p>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-front">
              Hexagon VEX Club (Member)
            </h3>
            <p className="text-base font-normal text-front">
              Worked as programmer and mechanic, earned awards such as Design Award and Energy Award.
            </p>
          </li>
          <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-front">
              Calculus & Statistics Teaching
            </h3>
            <p className="text-base font-normal text-front">
              Organized peer-led tutoring sessions for students needing support in AP Calculus and Statistics.
            </p>
          </li>
        </ol>
        </section>
      </div>
    </div>
  );
}

export default About;
