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
            <h1>Whoops....404 Page not found...</h1>
        </div>