import Star from '../../public/images/star.png'

export default function Card(props) {
  let badgeText
  if (props.card.openspots === 0) {
    badgeText = 'SOLD OUT'
  } else if (props.card.location === 'Online') {
    badgeText = 'ONLINE'
  }
  return (
    <div className="pt-10 text-lg flex-1 flex-col   ">
      <div className="bg-red-50">
        <div className="relative ">
          <img
            src={props.card.coverImg}
            alt="Kaitie zaferes swimming"
            loading="lazy"
            className="rounded-2xl w-full h-60 object-cover"
          />
          {badgeText && (
            <p
              className="  bg-white w-max pt-1 pb-1 pl-2 pr-2 rounded-md absolute top-2.5 left-4 text-base
        "
            >
              {badgeText}
            </p>
          )}
        </div>
        <div className="leading-10">
          <div className="flex items-center gap-2 pt-2 ">
            <img src={Star} alt="Star" />
            <p>{props.card.stats.rating}</p>
            <h4 className="font-thin text-gray-400 ">
              ({props.card.stats.reviewCount}) • {props.card.location}{' '}
            </h4>
          </div>
          <div>
            <h4>{props.card.title}</h4>
            <p>
              <span className="font-bold">From ${props.card.price}</span> /
              person
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
