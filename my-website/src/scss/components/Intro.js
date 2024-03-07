import "./_Intro.scss";

function Intro(props) {
  return (
    <div className="intro">
      <h2 className="title">{props.title}</h2>
      <p className="subtitle">{props.subtitle}</p>
    </div>
  );
}

export default Intro;
