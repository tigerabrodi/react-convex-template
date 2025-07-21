import { BrowserRouter, Route, Routes } from 'react-router'

import { Toaster } from './components/ui/sonner'
import { AuthenticatedLayout } from './layouts/authenticated'
import { ROUTES } from './lib/constants'
import { HomePage } from './pages/home'
import { LoginPage } from './pages/login'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.login} element={<LoginPage />} />
        <Route element={<AuthenticatedLayout />}>
          <Route path={ROUTES.home} element={<HomePage />} />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}
