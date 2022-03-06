# React Native Project InApp

This App (InApp) has been designed and developed based on the [Figma link](https://www.figma.com/file/GNUmBwk2x8Eq28KyvA4Y0v/Mobile-Dev-Test?node-id=3665%3A11).

## Base dependencies

- [axios](https://github.com/axios/axios) for networking.
- [@react-navigation/native](https://github.com/react-navigation/react-navigation) navigation library.
- [@react-navigation/stack](https://github.com/react-navigation/react-navigation) navigation library.
- [moment](https://github.com/moment/moment) date library for parsing, validating, manipulating, and formatting dates.
- [react-native-snap-carousel](https://github.com/meliorence/react-native-snap-carousel) implements an Image Slider UI.
- [@react-navigation/bottom-tabs](https://www.npmjs.com/package/@react-navigation/bottom-tabs) for bottom tab view.
- [react-native-svg](https://github.com/react-native-svg/react-native-svg) vector-based format that can scale infinitely without compromising quality.
- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context) to render content within the safe area boundaries of a device like notches and iOS devices.

## Usage

### Folder structure

Follows a very simple project structure:

  - `src`: This folder is the main container of all the code inside the application.
  - `assets`: Asset folder to store custom fonts, SVGs and images, etc.
  - `component`: Folder to store any common component that is used throughout the app.
  - `constants`: Folder to store any kind of constant texts or values.
  - `containers`: Folder to store all the screens/features.
  - `services`: Folder to store all the network logic.
  - `theme`: Folder to store all the styling concerns related to the application theme.
  - `App.js`: The main component that starts the whole app.
  - `index.js`: Entry point of the application as per React-Native standards.

### Splash screen customization

To customize the splash screen (logo, background colour and text) use a timer to set the visibility.

### Styleguide

For coding styling, use StyleSheet of React-native.

### Components

Components are the basic blocks of a react native application, but since we aim to minimize development complexity, all the components are at the same nesting level.

### Static resources:

To keep an application scalable and organized, the global static resources that are used in the application have to be created in a specific file.

### Services folder and API connection handler

To keep the networking layer simple, Axios is used.

While communicating with a network, just create a function to manage the operation and group according to the kind of transaction inside a service file.
While the data transfer between the API and the app is working, we have used try and catch for the result of the operation.

## Containers

In this folder, applied the main objects for the composition architecture. Create the view of each screen by using constants, theme and hooks.

## Caveats
There is no option available for calling checkout API in the Figma link. For demonstration, I have called it on the Purchase screen, on click of the close button.
Ideally, there should be a screen/design to set the response of the checkout API.


