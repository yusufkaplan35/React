import { createContext } from "react";


// Bos bir merkezi state yapisini olusturur.
const StoreContext = createContext();

// Baska componentlerden erisilebilmesi icin export edilmelidir.
export default StoreContext;