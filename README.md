Forder structure:
```
├──Asset
├           ├──Images
├──Components
├──     ├──Loading
├──     ├──HeaderBase
├──     ├── ...
├──Config
├──     ├──Color
├──     ├──Constant
├──     ├──Helper
├──     ├──ReacttoTron
├──     ├──Strings
├──     ├──Styles
├──Screen
├──     ├──HomeScreen
├──     ├──DetailScreen
├──     ├── ...
├──Service
├──     ├──UserService
├──Theme
├──     ├──NativeBaseTheme
```
Basic Rules
```
    - Only include one React component per file.
      + However, multiple Stateless, or Pure, Components are allowed per file. eslint:                        react/no-multi-comp.  
    - Always use JSX syntax.
    - Do not use React.createElement unless you’re initializing the app from a file that is not JSX.
```
Class vs React.createClass vs stateless
```
    -If you have internal state and/or refs, prefer class extends React.Component over React.createClass. eslint: react/prefer-es6-class react/prefer-stateless-function
    ```jsx
    // bad
    const Listing = React.createClass({
        // ...
        render() {
            return <div>{this.state.hello}</div>;
        }
    });

    // good
    class Listing extends React.Component {
        // ...
        render() {
            return <div>{this.state.hello}</div>;
        }
    }
    ```
    - And if you don’t have state or refs, prefer normal functions (not arrow functions) over classes:
    
    // bad
    class Listing extends React.Component {
        render() {
            return <div>{this.props.hello}</div>;
        }
    }
    
    // bad (relying on function name inference is discouraged)
    const Listing = ({ hello }) => (
        <div>{hello}</div>
    );
    
    // good
    function Listing({ hello }) {
        return <div>{hello}</div>;
    }
```
Naming
```
    - Reference Naming: Use PascalCase for React components and camelCase for their instances. eslint: react/jsx-pascal-case
        // bad
        import reservationCard from './ReservationCard';
        
        // good
        import ReservationCard from './ReservationCard';
        
        // bad
        const ReservationItem = <ReservationCard />;
        
        // good
        const reservationItem = <ReservationCard />;
    - Component Naming: Use the filename as the component name. For example, ReservationCard.jsx should have a reference name of ReservationCard. However, for root components of a directory, use index.jsx as the filename and use the directory name as the component name:
        // bad
        import Footer from './Footer/Footer';
        
        // bad
        import Footer from './Footer/index';
        
        // good
        import Footer from './Footer';
    - Higher-order Component Naming: Use a composite of the higher-order component’s name and the passed-in component’s name as the displayName on the generated component. For example, the higher-order component withFoo(), when passed a component Bar should produce a component with a displayName of withFoo(Bar)
        // bad
        export default function withFoo(WrappedComponent) {
            return function WithFoo(props) {
                return <WrappedComponent {...props} foo />;
            }
        }
        
        // good
        export default function withFoo(WrappedComponent) {
            function WithFoo(props) {
                return <WrappedComponent {...props} foo />;
        }
        
            const wrappedComponentName = WrappedComponent.displayName
            || WrappedComponent.name
            || 'Component';
        
            WithFoo.displayName = `withFoo(${wrappedComponentName})`;
            return WithFoo;
        }
        - Props Naming: Avoid using DOM component prop names for different purposes.
            // bad
            <MyComponent style="fancy" />
            
            // bad
            <MyComponent className="fancy" />
            
            // good
            <MyComponent variant="fancy" />
```
