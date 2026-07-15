import profileImage from "../../assets/images/profile.PNG";

function Intro({ fadeOut }) {
  return (
    <section className={`intro ${fadeOut ? "fade-out" : ""}`}>
      <img
        src={profileImage}
        alt="Profile"
        className="profile-image"
      />

      <h1 className="title">Vajeefullah</h1>

      <p className="subtitle">
        Full Stack Developer | Graphic Designer
      </p>
    </section>
  );
}

export default Intro;