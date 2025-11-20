import { JSX } from "react"
import "./App.css"
import { ProductsList } from "./features/products/ProductsList"


export const App = (): JSX.Element=> (
  <div className="p-4"> 
    
    <div className="flex justify-center">
      <a
        className="
          inline-block 
          py-2 px-4            
          text-white           
          bg-gray-800          
          border-2 border-gray-800 
          rounded-lg           
          font-bold            
          text-base            
          cursor-pointer       
          mt-4                 
          transition duration-300 
          hover:bg-gray-700    
          hover:border-gray-700
        "
        target="_blank"
        href="https://github.com/dmitrined/reactAit/tree/main/my-redux-app/src/components/HW/HW10"
      >
        Посмотреть код этой страницы на GitHub
      </a>
    </div>

    <div className="App">
       {/* <Counter />
        <UsersList />*/}
        <ProductsList/>

    </div>
      
  </div>
);