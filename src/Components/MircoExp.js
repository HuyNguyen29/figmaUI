import IconMicro from "../asset/IconMirco";
import img from "../asset/img.jpeg";

export default function MicroExp() {
  return (
    <div className="item-micro">
      <img src={img} width="100%" height="130" alt="img" />
      <div className="item-txt-title">Security compliance</div>
      <div className="item-tag">OJT Training</div>
      <div className="item-date">
        <IconMicro
          style={{ marginRight: 5 }}
          width={15}
          height={15}
          color={"#00be6e"}
        />
        Date on Aug 2nd, 2021
      </div>
    </div>
  );
}
