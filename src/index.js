import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

// Your top level component
import App from './App'

// Export your top level component as JSX (for static rendering)
export default <App />

// This will make sure WebFont.load is only used in the browser.
if (typeof window !== 'undefined') {
    var WebFont = require('webfontloader')

    WebFont.load({
        google: {
            families: ['Open Sans', 'Ovo']
        }
    })
}

// Render your app
if (typeof document !== 'undefined') {
    const render = Comp => {
        ReactDOM.hydrate(
            <AppContainer>
                <Comp />
            </AppContainer>,
            document.getElementById('root'),
        )
    }

    // Render!
    render(App)

    // Hot Module Replacement
    if (module.hot) {
        module.hot.accept('./App', () => {
            render(require('./App').default)
        })
    }
}
