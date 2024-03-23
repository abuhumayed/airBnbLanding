import AirbnbLogo from '../images/airbnb-logo.png'

export default function Navbar() {
  return (
    <div>
      <div className="items-center pl-6 border shadow-black drop-shadow-sm ">
        <img
          src={AirbnbLogo}
          className="object-contain h-24 w-24"
          alt="air bnb logo"
        />
      </div>
    </div>
  )
}
