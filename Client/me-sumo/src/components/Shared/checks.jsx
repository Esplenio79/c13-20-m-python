// eslint-disable-next-line
import check_circle from "../../assets/icons/check_circle.svg"

export default function Checks() {
  return (
      <div>
      <div className="flex justify-center items-center flex-row p-4">
            <div className="">
              <img
                src={check_circle}
                className="h-auto m-1"
              />
              <p className="text-left">Informacion <br/> Basica</p>
            </div>
            <div className="">. . . . . . .</div>
            <div className="">
              <img
                src={check_circle}
                className="h-auto m-1"
              />
              <p className="text-left">Entradas <br /> </p>
            </div >
            <div className=""><p>. . . . . . .</p></div>
            <div className="">
              <img
                src={check_circle}
                className="h-auto  m-1"
              />
              <p className="text-left">Publicar <br /></p>
            </div>
          </div>
      </div>
  );
}
