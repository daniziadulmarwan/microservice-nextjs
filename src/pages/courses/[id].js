import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import courses from "src/constants/api/courses";
import YouTube from "react-youtube";
import Header from "src/parts/Header";
import Feature from "src/parts/Details/Feature";
import { CSSTransition } from "react-transition-group";
import formatThousand from "src/helpers/FormatThousand";
import Footer from "src/parts/Footer";
// icons
import Nametag from "src/icons/Nametag";
import PlayBack from "src/icons/PlayBack";
import Certificate from "src/icons/Certificate";

function DetailCourse({ data }) {
  const footer = useRef(null);

  const [isSticky, setisSticky] = useState(() => true);

  useEffect(() => {
    const stickyOffsetTop = footer.current.getBoundingClientRect().top;
    const stickyMetaToggler = () => {
      setisSticky(stickyMetaToggler >= window.pageYOffset + window.innerHeight);
    };
    window.addEventListener("scroll", stickyMetaToggler);
    return () => {
      window.removeEventListener("scroll", stickyMetaToggler);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Micro</title>
      </Head>

      <section
        className="pt-10 relative overflow-hidden"
        style={{ height: 660 }}
      >
        {data?.chapters?.[0]?.lessons?.[0]?.video && (
          <div className="video-wrapper">
            <YouTube
              videoId={data?.chapters?.[0]?.lessons?.[0]?.video}
              id={data?.chapters?.[0]?.lessons?.[0]?.video}
              opts={{
                playerVars: {
                  loop: 1,
                  mute: 1,
                  autoplay: 1,
                  controls: 0,
                  showinfo: 0,
                },
              }}
              onEnd={(event) => {
                event.target.playVideo();
              }}
            ></YouTube>
          </div>
        )}
        <div className="absolute inset-0 z-0 w-full h-full bg-black opacity-75"></div>
        <div className="meta-title absolute inset-0 object-fill z-0 w-full flex justify-center items-center">
          <div className="text-center">
            <h3 className="text-lg text-white">Kelas Online: </h3>
            <h4 className="text-6xl text-teal-500 text-semibold">
              {data?.name ?? "Nama Kelas"}
            </h4>
          </div>
        </div>
        <div className="container mx-auto z-10 relative">
          <Header></Header>
        </div>
      </section>

      <section className="container mx-auto pt-24 relative">
        <div className="absolute top-0 w-full transform -translate-y-1/2">
          <div className="w-3/4 mx-auto">
            <div className="flex justify-between">
              <Feature
                data={{
                  icon: <Nametag />,
                  meta: "Student",
                  value: data?.total_student ?? "",
                }}
              />
              <Feature
                data={{
                  icon: <PlayBack />,
                  meta: "Video",
                  value: data?.total_videos ?? "",
                }}
              />
              <Feature
                data={{
                  icon: <Certificate />,
                  meta: "Certificate",
                  value: data?.certificate === 1 ? "Tersedia" : "-",
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <CSSTransition
            in={isSticky}
            timeout={3000}
            classNames="meta-price"
            unmountOnExit
          >
            <div className="meta-price w-full bg-white z-50 left-0 py-3">
              <div className="w-3/4 mx-auto">
                <div className="flex items-center">
                  <div className="w-full">
                    <h2 className="text-gray-600">Nama Kelas</h2>
                    <h3 className="text-2xl text-gray-900">
                      {data?.name ?? "Nama Kelas"}
                    </h3>
                  </div>
                  <h5 className="text-2xl text-teal-500 whitespace-no-wrap mr-4">
                    {data?.type === "free" ? (
                      "Free"
                    ) : (
                      <span>Rp {formatThousand(data?.price ?? 0)} </span>
                    )}
                  </h5>
                  <a
                    href={`${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/joined/${data.id}`}
                    className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 whitespace-no-wrap"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data?.type === "free" ? "Enroll Now" : "Buy Now"}
                  </a>
                </div>
              </div>
            </div>
          </CSSTransition>
        </div>

        <div className="w-3/4 mx-auto mt-8">
          <div className="w-3/4">
            <section>
              <h6 className="font-medium text-gray-900 text-2xl mb-4">
                About <span className="text-teal-500">Course</span>
              </h6>
              <p className="text-gray-600 text-lg leading-relaxed mb-3">
                {data?.description ?? "No Description Found"}
              </p>
            </section>
          </div>
        </div>
      </section>

      <div style={{ height: 2000 }}></div>
      <section className="mt-24 bg-indigo-1000 py-12" ref={footer}>
        <Footer></Footer>
      </section>
    </>
  );
}

DetailCourse.getInitialProps = async (props) => {
  const { id } = props.query;
  try {
    const data = await courses.details(id);
    return { data };
  } catch (error) {
    console.log(error.message);
  }
};

export default DetailCourse;
