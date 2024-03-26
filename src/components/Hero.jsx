import GridImg from '../../public/images/photo-grid.png'
export default function Hero() {
  return (
    <div>
      <div className="p-20">
        <div>
          <img src={GridImg} alt="grid image" />
        </div>
        <div className="pt-10">
          <h1 className="pb-10 font-semibold text-5xl ">Online Experiences</h1>
          <p className="">
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
        </div>
      </div>
    </div>
  )
}
