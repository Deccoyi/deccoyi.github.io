import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../pages/Contact'
import Github from '../pages/Github'
import { Home } from '../pages/Home'
import Instagram from '../pages/Instagram'
import Youtube from '../pages/Youtube'

export default function PageContent() {
    return (
        <>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/Instagram' element={<Instagram />} />
                    <Route path='/Youtube' element={<Youtube />} />
                    <Route path='/Github' element={<Github />} />
                </Routes>
        <div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />PageContent</div>
        </>
    )
}

