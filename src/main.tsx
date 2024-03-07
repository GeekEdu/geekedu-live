import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { SWRConfig } from 'swr'

import { router } from '@/routes'
import { ChakraProvider } from '@chakra-ui/react'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SWRConfig value={{ revalidateOnFocus: false }}>
      <Suspense fallback={<></>}>
        <ChakraProvider>
          <RouterProvider router={router} />
        </ChakraProvider>
      </Suspense>
    </SWRConfig>
  </React.StrictMode>
)
