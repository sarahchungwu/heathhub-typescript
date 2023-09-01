# heathub

## Overview
HealHub is a front-end web application designed to showcase gym details and class offerings. Built with React Vite and Typescript, this single-page app aims to attract new members by giving them all the information they need to join the gym.

## Technologies Used
- React
- Typescript
- Tailwind CSS
- Heroicons
- react-anchor-link-smooth-scroll
- framer-motion


## Learning

### 1. Implementing React Anchor Link Smooth Scroll

This project was an opportunity to further my understanding of React and TypeScript, and one of the key features I implemented was React Anchor Link Smooth Scroll in the navigation bar.

- **Navigation Enhancement**: Achieved smooth scrolling in the navigation through React Anchor Link Smooth Scroll package.
- **Dynamic Class Assignment**: Utilized React's state management to dynamically assign CSS classes for active and hover states in the navigation bar.
- **Package Integration**: Learned to seamlessly integrate third-party packages into my React app.

### 2. Mastery of Link Hook in Navigation Bar

- **Code Organization**: Developed a modular `Link` component to manage individual navigation links.
- **State Management**: Leveraged React's `useState` for menu toggling and `SelectedPage` state to indicate the currently selected navigation item.
- **Responsive Design**: Employed media queries with custom hooks (`useMediaQuery`) to toggle between desktop and mobile navigation layouts.

Here's a snapshot of how I used the Link hook in my `Navbar` component to manage the `SelectedPage` state and to apply dynamic styling:

```jsx
const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage;
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? 'text-primary-500' : ''
      } transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
}
```

### 3. Utilizing TypeScript Enums for State Management

- **Type Safety**: Introduced TypeScript enums to create a set of named constants for page names, enhancing type safety in the application.
- **Code Clarity**: Enums provide a clear, readable way to manage state, making the codebase more maintainable.

Here's a sample of how I used enums in TypeScript:

```typescript
enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = 'ourclasses',
  ContactUs = 'contactus',
}   
```



### 4. Customizing Tailwind CSS

- **Design Flexibility**: Learned to extend Tailwind's default configurations to create custom styles and colors.
- **Background Images**: Used Tailwind to set custom background gradients and images, thereby enhancing UI elements.
- **Reusable Components**: Developed a reusable `ActionButton` component for common design patterns.

### 5. Advanced Type Declarations in TypeScript

- **JSX Elements**: Leveraged the `JSX.Element` type to precisely define props for components that accept icons or other JSX elements.

#### Sample Code Snippets
```typescript
export interface BenefitType {
  icon: JSX.Element
  title: string
  description: string
}
}   
```

```jsx

const HText = ({ children }: Props) => {
  return (
    <h1 className="basis-3/5 font-montserrat text-3xl font-bold">{children}</h1>
  )
}
```


##### Custom Tailwind Configuration
```
 theme: {
    extend: {
      colors: {
        'gray-20': '#F8F4EB',
        'gray-50': '#EFE6E6',
        'gray-100': '#DFCCCC',
        'gray-500': '#5E0000',
        'primary-100': '#FFE1E0',
        'primary-300': '#FFA6A3',
        'primary-500': '#FF6B66',
        'secondary-400': '#FFCD5B',
        'secondary-500': '#FFC132',
      },
      backgroundImage: {
        'gradient-yellowred':
          'linear-gradient(90deg, #FF616A 0%, #FFC837 100%)',
        'mobile-home': "url('./assets/HomePageGraphic.png')",
      },

      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
```
