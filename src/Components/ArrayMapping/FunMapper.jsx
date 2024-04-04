import React from 'react'
import { ArrayMap } from './ArrayMap'
import { ObjectMap } from './ObjectMap'

export const FunMapper = () => {
  return (
    <div>
      <div>
         <h2><u>ArrayMapData</u></h2>
         <div>
            <ArrayMap
            arrayMapProp={"This is a Table of Vargas Top Model Cars"}
            />
         </div>
      </div>
      <div>
         <h2>OBjectMapData</h2>
         <div>
            <ObjectMap
            objectMapProp={"This is data of employee staff Information"}
            />
         </div>
      </div>
    </div>
  )
}
