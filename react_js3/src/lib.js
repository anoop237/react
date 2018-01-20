import React from 'react'
import ReactDOM from 'react-dom'
import text from './titles.json'
import './stylesheet/name.css'
import './stylesheet/qual.scss'

export const name = (
                    <h2 id="name" className="name-info">
                        Name: {text.name}
                    </h2>
                    );
export const qual = (
                    <h2 id="qual" className="qual-info">
                        Qualification: {text.qualification}
                    </h2>
                    );