
import { MenuContext } from "@/context/MenuProvider"
import classNames from 'classnames';
import { useContext } from "react";

const OverlayMenu = () => {

  let menuVisibilty = useContext(MenuContext)

  const OverlayClasses = classNames('w-full h-56 px-4 transition-all relative top-0 z-10',{
    'left-0': menuVisibilty.menu,
    '-left-96': !menuVisibilty.menu,

})
  return (
    <section className={OverlayClasses}>
      <div className="w-full h-full bg-white rounded-xl">
          
      </div>
    </section>
  )
}

export default OverlayMenu