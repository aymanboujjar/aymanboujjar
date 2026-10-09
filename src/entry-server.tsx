import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { AppProvider } from './contexts/AppContext'
import AppRoutes from './AppRoutes'

/** The same components and content are delivered to people and crawlers. */
export function renderPage(url: string) {
  return renderToString(<StaticRouter location={url}><AppProvider><AppRoutes /></AppProvider></StaticRouter>)
}
