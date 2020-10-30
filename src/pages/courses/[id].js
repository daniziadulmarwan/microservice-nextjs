import Head from "next/head";
import Link from "next/link";
import courses from "src/constants/api/courses";
import YouTube from "react-youtube";
import axios from "src/configs/axios";

function DetailCourse({ data }) {
  console.log(data);
  return (
    <div>
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
      </section>
    </div>
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
