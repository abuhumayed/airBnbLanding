import Star from '../images/star.png'

export default function Card(props) {
  return (
    <div className="pl-12 pt-10 text-lg">
      <div className="relative">
        <img
          src={props.pic}
          alt="Kaitie zaferes swimming"
          className="rounded-2xl"
        />
        <p
          className="bg-white w-max pt-1 pb-1 pl-2 pr-2 rounded-md absolute top-2.5 left-4 text-base
        "
        >
          SOLD OUT
        </p>
      </div>
      <div className="leading-10">
        <div className="flex items-center gap-2 pt-2 ">
          <img src={Star} alt="Star" />
          <p>{props.rating}</p>
          <h4 className="font-thin text-gray-400 ">
            ({props.review}) • {props.country}{' '}
          </h4>
        </div>
        <div>
          <h4>{props.description}</h4>
          <p>
            <span className="font-bold">From ${props.price}</span> / person
          </p>
        </div>
      </div>
    </div>
  )
}
