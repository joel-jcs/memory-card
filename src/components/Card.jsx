/* eslint-disable react/prop-types */
export default function Card({ id, image, name }) {
  return (
    <div className="card" id={id} onClick={() => console.log(id)}>
      <img src={image} alt="card image" />
      <span>{name}</span>
    </div>
  );
}
