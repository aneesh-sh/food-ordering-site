# Food Ordering App
 
 /**
- //Header
- // logocontainer
- //   logo  
- //   links
- // body
- //   search
- //   restarantcontainer
- //   restarant card
- //    img
- // menu name star-rating
- // footer
- //   links
*/

# Export /Import
Two types of Export/Import

- Default Export/Import
export default Component; import Component from "path";

- Named Export/Import
export const Component; import {Component} from "path";

# React Hooks 
Normal JS utility functions

- useState() - Superpowerful State Variables in react 
             - whenever sate variables change react trigers a reconciliation cycle(rerenders the components) 
- useEffect()
            - if no dependency array => useEffect is called on every render
            - if there is empty dependency array = [] => useEffect is called on initial render(just once)
            - if dependency array is [btnNameReact] => useEffect is called when btnNameReact is updated

- <Link> - wwe used link in react as it is faster than <a> anchor tag and Link is nore prefered

# Routing
- Client Side Routing 
- Server Side Routing  
