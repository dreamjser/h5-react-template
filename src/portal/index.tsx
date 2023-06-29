import '@/common/styles/app.less'
import React from 'react'
import { createRoot } from 'react-dom/client'
import Entry from './app'
import '@/common/app'

const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(<Entry />)
