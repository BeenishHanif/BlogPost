import React from "react";
import iconone from "./assets/iconone.png";
import icontwo from "./assets/icontwo.png";
import iconthree from "./assets/iconthree.png";
import iconfour from "./assets/iconfour.png";
import p1 from "./assets/p1.avif";
import p2 from "./assets/p2.jpg";

const About = () => {
  return (
    <div>
      <div className="about-heading">
        <h2> Our Journey</h2>
        <p style={{ color: "black" }}>
          Come join us in our journey to growth and betterment.
        </p>
      </div>
      <div className="journey-container">
        <div className="journey-about">
          <div className="founder">
            <h1>INCEPTION</h1>
            <p>
              Founded in 2016 by Mr. Alex Turner and Mrs. Sophia Turner,
              BlogPulse emerged with a vision to redefine digital expression.
              The early days were marked by passionate groundwork, laying the
              foundation for what would soon become a prominent name in the
              digital content landscape.
            </p>
          </div>
          <div className="year">
            <div className="circle">
              <h1>2019</h1>
            </div>
          </div>
        </div>
        <div className="journey-about">
          <div className="year">
            <div className="circle">
              <h1>2020</h1>
            </div>
          </div>

          <div className="founder">
            <h1>EVOLUTION</h1>
            <p>
              Swiftly gaining traction, BlogPulse's user-friendly interface and
              innovative features set it apart. The platform became a preferred
              space for bloggers and writers across diverse niches, fostering a
              community driven by a shared enthusiasm for impactful storytelling
              and a commitment to raising the bar of online expression.
            </p>
          </div>
        </div>
        <div className="journey-about">
          <div className="founder">
            <h1>PROMINANCE</h1>
            <p>
              As the years unfolded, BlogPulse solidified its position as a
              national blogging powerhouse. Dynamic leadership and team
              dedication propelled the platform to international recognition.
              BlogPulse not only became a platform but a movement within the
              digital content sphere, committed to innovation and staying ahead
              of industry trends.
            </p>
          </div>
          <div className="year">
            <div className="circle">
              <h1>2022</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container-person">
        <div className="person-box">
          <div className="person-img">
            <img alt="profile" src={p1} />
          </div>
          <div className="person-txt">
            <h2>John A. Smith</h2>
            <p>
              John's passion for fostering a collaborative and dynamic work
              environment is contagious. His management style is characterized
              by a perfect blend of mentorship, strategic thinking, and a deep
              understanding of industry trends. Under his guidance, our team has
              not only met but exceeded expectations, delivering outstanding
              results and driving continuous improvement.
            </p>
          </div>
        </div>
      </div>

      <div className="container-person">
        <div className="person-box">
          <div className="person-img">
            <img src={p2} alt="profile" />
          </div>
          <div className="person-txt">
            <h2>Emily R.Jhonson</h2>
            <p>
              Emily is known for her approachability and commitment to fostering
              talent within our organization. She firmly believes in the
              strength of a collaborative team and encourages open communication
              at all levels. Whether you're a seasoned professional or a new
              member of the team, Emily's door is always open for ideas,
              feedback, and meaningful discussions.
            </p>
          </div>
        </div>
      </div>
      <div className="success-container">
        <div className="success-box">
          <img src={iconone} alt="icon" />
          <div className="success-txtbox">
            <p>
              Our commitment to excellence and innovation is not only evident in
              our achievements but also in the broad horizons we've explored and
              conquered.
            </p>
          </div>
        </div>
        <div className="success-box">
          <img src={icontwo} alt="icon" />
          <div className="success-txtbox">
            <p>
              These visual aids offer a glimpse into the strategic decisions and
              market influence ,pushing the boundaries of what's possible in our
              industry.
            </p>
          </div>
        </div>
        <div className="success-box">
          <img src={iconthree} alt="icon" />
          <div className="success-txtbox">
            <p>
              Delve into the strategic growth that defines our path forward. The
              carefully crafted bar chart below illustrates the progressive
              steps.
            </p>
          </div>
        </div>
        <div className="success-box">
          <img src={iconfour} alt="icon" />
          <div className="success-txtbox">
            <p>
              Explore the market penetration achieved by BlogPulse representing
              our expanding presence in various markets, solidifying our
              position.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
