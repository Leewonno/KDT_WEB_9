import LanguageSelector from "./14Context/LanguageSelector";
import MyContext, { LanguageProvider } from "./14Context/store/lang-context";
import LanguagePractice1 from './14Context/LanguagePractice1';

import { useState } from "react";

import { StoreProvider } from "./14Context/store/lang2-context";
import ProductList from "./14Context/ProductList";
import Cart from "./14Context/Cart";
import CartItem from "./14Context/CartItem"

function App() {
    // const [language, setLanguage] = useState('ko')
    return <>
        {/* <LanguageProvider> */}
            {/* <LanguageSelector /> */}
        {/* </LanguageProvider> */}
        {/* <MyContext.Provider value={{language, setLanguage}}> */}
            
        {/* </MyContext.Provider> */}

        <StoreProvider>
            <ProductList />
            <Cart></Cart>
            <CartItem></CartItem>
        </StoreProvider>
    </>;
}

export default App;
