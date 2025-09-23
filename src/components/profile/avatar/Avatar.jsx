import AvatarPhoto from "../../../assets/profile-assets/avatar-photo.jpg";

export default function Avatar({ alt, caption }) {
  return (
    <div className="wrapper-for-me">
      <figure className="photo-wrapper">
        <img src={AvatarPhoto} alt={alt} className="photo" />
      </figure>
      <div className="figurecaption-wrapper">
        <figcaption className="photo-caption">{caption}</figcaption>
        <p>19 лет</p>
      </div>
      <p>FullStack developer</p>
    </div>
  );
}
