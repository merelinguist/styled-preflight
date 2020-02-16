![](/docs/banner.png)

A CSS-normalizing library for styled-components, with a kick.

The original `normalize.css` is pulled from necolas/normalize.css, and parsed into a styled ready format. Some small additions are added, based on Tailwind’s preflight, to make the normalizing more useful for building apps.

## Usage

```sh
npm i styled-preflight
```

```sh
yarn add styled-preflight
```

### styled-components v4 / v5

Use as component:

```jsx
// index.js
import React from 'react'
import { Preflight } from 'styled-preflight'

import { App } from './app'

const Root = () => (
  <React.Fragment>
    <Preflight />
    <App />
  </React.Fragment>
)
```

Alternatively, you can use the [`createGlobalStyle`](https://styled-components.com/docs/api#createglobalstyle) API:

```jsx
// styles/index.js
import { createGlobalStyle } from 'styled-components'
import { preflight } from 'styled-preflight'

export const GlobalStyle = createGlobalStyle`
  ${preflight}

  // You can continue writing global styles here
  body {
    background-color: black;
  }
`

// index.js
import React from 'react'
import ReactDOM from 'react-dom'

import { GlobalStyle } from './styles'
import { App } from './app'

const Root = () => (
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>
)

ReactDOM.render(<Root />, document.querySelector('#root'))
```

You can also use named imports:

```jsx
// ES Modules
import { preflight, Preflight } from 'styled-preflight'

// CommonJS
const { preflight, Preflight } = require('styled-preflight')
````

## Prior art

- https://github.com/sergeysova/styled-normalize
- https://github.com/tailwindcss/tailwindcss
