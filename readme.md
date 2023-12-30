# react-utility-hooks

A collection of utility hooks for React, providing easy-to-use solutions for common tasks

## 🫶 Support

Liked it? You can show your support with a STAR(⭐).


## How to use it?

You can use the project in this way:

### Install

```bash
# with npm
npm install react-utility-hooks

# with yarn
yarn add react-utility-hooks
```

### Usage

## 1. useScrollDirection()

Use the `useScrollDirection` hook to determine the scroll direction on your webpage. `(up or down)`

```jsx
import { useScrollDirection } from 'react-utility-hooks'

const YourComponent = () => {
  const scrollDirection = useScrollDirection()

  // Your component logic based on scrollDirection

  return (
    <div className={`${scrollDirection === 'down' ? 'hide' : ''}`}>
      {/* Your component UI */}
    </div>
  )
}

export default YourComponent
```

## 2. useScrollToHideSection()

Use the `useScrollToHideSection` to hide the fixed section when reached the certain section.

```jsx
import { useScrollToHideSection } from 'react-utility-hooks'

const YourComponent = () => {
  const { hideFixedSection } = useScrollToHideSection('footer', 'fixedSection')

  // Your component logic based on scrollDirection

  return (
    <div
      id='fixedSection'
      style={{
        opacity: hideFixedSection ? 0 : 1,
        transition: 'opacity 0.3s ease-in-out',
      }}
    >
      {/* Your component UI */}
    </div>
  )
}

export default YourComponent
```

```jsx
const YourFooterComponent = () => {
  return <footer id='footer'>{/* Your component UI */}</footer>
}

export default YourFooterComponent
```
