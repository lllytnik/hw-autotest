import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function Pages() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to={PATH.PRE_JUNIOR} />} />

                {/* Route for /pre-junior */}
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior />} />

                {/* Route for /junior */}
                <Route path={PATH.JUNIOR} element={<Junior />} />

                {/* Route for /junior-plus */}
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus />} />

                {/* Catch-all route for non-existent pages */}
                <Route path="*" element={<Error404 />} />
            </Routes>
        </div>
    )
}

export default Pages
