![](/docs/banner.png)

A CSS-normalizing library for styled-components, with a kick.

The original `normalize.css` is pulled from necolas/normalize.css, and parsed into a styled ready format. Some small additions are added, based on Tailwind’s preflight, to make the normalizing more useful for building apps.

## Usage

```sh
yarn add styled-preflight
```

### styled-components v4

```jsx
// index.js
import React from 'react'
import { Normalize } from 'styled-normalize'

import { App } from './app'

const Root = () => (
  <React.Fragment>
    <Normalize />
    <App />
  </React.Fragment>
)
```

Alternatively, you can use the `createGlobalStyle` API:

```jsx
// styles/index.js
import { normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  // Continue writing global styles
  body {
    background-color: black;
  }
`

<GlobalStyle />
```
