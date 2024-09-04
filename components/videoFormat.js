const videoFormat = ({ title, link, description }) => {
  return (
    <div className="form_base">
      <div className="video_group">
        <div className="video_box">
          <video className="video" src={link} controls />
        </div>
        <div>
          <div className="video_title">{title}</div>
          <div className="video_description">{description}</div>
        </div>
      </div>
    </div>
  );
};
export default videoFormat;
