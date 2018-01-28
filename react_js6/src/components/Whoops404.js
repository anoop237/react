import React from 'react'
import MainMenu from './MainMenu'
export const Left = ({children})=><div>
            <MainMenu/>
            {children}
        </div>
export const Right = ({children})=><div>
            <MainMenu/>
            {children}
        </div>
export const Whoops404 = ()=><div>
            <h5>Whoops....404 Page not found...</h5>
        </div>