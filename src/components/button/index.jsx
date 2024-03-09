import "./index.scss";
const Button = ({ title, color, bg, border, w, h, className }) => {
  return (
    <>
      <button
        className={className}
        style={{
          color: color ? "white" : "rgba(112, 112, 112, 1)",
          backgroundColor: bg ? "rgb(47, 110, 247)" : "rgb(0, 0, 0)",
          border: border ? "1px" : "0",
          width: w,
          height: h,
        }}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
