import React from 'react'
import {MainMenu} from './MainMenu'
export const Left = ({children})=><div className="page">
            <MainMenu/>
            {children}
        </div>
export const Right = ({children})=><div className="page">
            <MainMenu/>
            {children}
        </div>
export const Whoops404 = ()=><div className="page">
            <h5>Whoops....404 Page not found...</h5>
        </div>