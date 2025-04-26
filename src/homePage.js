// import { useState } from 'react';

// // Mock data for our food menu
// const menuItems = [
//   {
//     id: 1,
//     name: 'Truffle Risotto',
//     price: 24.99,
//     category: 'Signature Dishes',
//     description: 'Creamy arborio rice with black truffle, parmesan, and wild mushrooms',
//     image: '/api/placeholder/300/200'
//   },
//   {
//     id: 2,
//     name: 'Lobster Thermidor',
//     price: 36.99,
//     category: 'Signature Dishes',
//     description: 'Baked lobster with brandy cream sauce, gruyère cheese, and herbs',
//     image: '/api/placeholder/300/200'
//   },
//   {
//     id: 3,
//     name: 'Caprese Salad',
//     price: 14.99,
//     category: 'Starters',
//     description: 'Heirloom tomatoes, buffalo mozzarella, fresh basil, balsamic reduction',
//     image: '/api/placeholder/300/200'
//   },
//   {
//     id: 4,
//     name: 'Crispy Calamari',
//     price: 16.99,
//     category: 'Starters',
//     description: 'Lightly fried squid rings with lemon aioli and chili dip',
//     image: '/api/placeholder/300/200'
//   },
//   {
//     id: 5,
//     name: 'Wagyu Beef Steak',
//     price: 45.99,
//     category: 'Main Course',
//     description: 'Grade A5 Japanese Wagyu with truffle mash and red wine jus',
//     image: '/api/placeholder/300/200'
//   },
//   {
//     id: 6,
//     name: 'Pan-Seared Salmon',
//     price: 28.99,
//     category: 'Main Course',
//     description: 'Norwegian salmon with saffron risotto and herb butter sauce',
//     image: '/api/placeholder/300/200'
//   },
//   {
//     id: 7,
//     name: 'Chocolate Soufflé',
//     price: 12.99,
//     category: 'Desserts',
//     description: 'Warm chocolate soufflé with vanilla bean ice cream',
//     image: '/api/placeholder/300/200'
//   },
//   {
//     id: 8,
//     name: 'Crème Brûlée',
//     price: 10.99,
//     category: 'Desserts',
//     description: 'Classic French custard with caramelized sugar crust and fresh berries',
//     image: '/api/placeholder/300/200'
//   },
//   {
//     id: 9,
//     name: 'Signature Cocktail',
//     price: 14.99,
//     category: 'Beverages',
//     description: 'House special with premium spirits, fresh citrus, and aromatic bitters',
//     image: '/api/placeholder/300/200'
//   },
//   {
//     id: 10,
//     name: 'Vintage Red Wine',
//     price: 18.99,
//     category: 'Beverages',
//     description: 'Premium vineyard selection, served by the glass',
//     image: '/api/placeholder/300/200'
//   }
// ];

// // Group menu items by category
// const menuCategories = [...new Set(menuItems.map(item => item.category))];

// export default function RestaurantBillingSystem() {
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [tableNumber, setTableNumber] = useState('');
//   const [customerName, setCustomerName] = useState('');
//   const [showBill, setShowBill] = useState(false);
//   const [activeCategory, setActiveCategory] = useState(menuCategories[0]);

//   const addToOrder = (item) => {
//     const existingItem = selectedItems.find(i => i.id === item.id);
//     if (existingItem) {
//       setSelectedItems(selectedItems.map(i => 
//         i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//       ));
//     } else {
//       setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
//     }
//   };

//   const removeFromOrder = (itemId) => {
//     const existingItem = selectedItems.find(i => i.id === itemId);
//     if (existingItem.quantity > 1) {
//       setSelectedItems(selectedItems.map(i => 
//         i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
//       ));
//     } else {
//       setSelectedItems(selectedItems.filter(i => i.id !== itemId));
//     }
//   };

//   const calculateSubtotal = () => {
//     return selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
//   };

//   const calculateTax = () => {
//     return calculateSubtotal() * 0.08; // 8% tax
//   };

//   const calculateServiceCharge = () => {
//     return calculateSubtotal() * 0.15; // 15% service charge
//   };

//   const calculateTotal = () => {
//     return calculateSubtotal() + calculateTax() + calculateServiceCharge();
//   };

//   const handleGenerateBill = () => {
//     if (!tableNumber || !customerName || selectedItems.length === 0) {
//       alert('Please fill in all required fields and select at least one item.');
//       return;
//     }
//     setShowBill(true);
//   };

//   const handleNewOrder = () => {
//     setSelectedItems([]);
//     setTableNumber('');
//     setCustomerName('');
//     setShowBill(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
//       <header className="bg-gradient-to-r from-amber-600 to-red-700 text-white p-6 shadow-lg">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-3xl font-bold italic">La Gourmet Lounge</h1>
//           <p className="font-light">Fine Dining Experience</p>
//         </div>
//       </header>

//       {!showBill ? (
//         <div className="container mx-auto p-4">
//           {/* Customer Info Section */}
//           <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-xl mb-8 backdrop-blur-sm border border-amber-200">
//             <h2 className="text-2xl font-semibold mb-4 text-amber-800">Guest Details</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-amber-700 mb-2 font-medium">Table Number</label>
//                 <input 
//                   type="text" 
//                   value={tableNumber}
//                   onChange={(e) => setTableNumber(e.target.value)}
//                   className="w-full p-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
//                   placeholder="Enter table number"
//                 />
//               </div>
//               <div>
//                 <label className="block text-amber-700 mb-2 font-medium">Guest Name</label>
//                 <input 
//                   type="text" 
//                   value={customerName}
//                   onChange={(e) => setCustomerName(e.target.value)}
//                   className="w-full p-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
//                   placeholder="Enter guest name"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Menu Section */}
//           <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-xl mb-8 backdrop-blur-sm border border-amber-200">
//             <h2 className="text-2xl font-semibold mb-6 text-amber-800">Our Menu</h2>
            
//             {/* Category tabs */}
//             <div className="flex overflow-x-auto mb-8 pb-2 gap-2">
//               {menuCategories.map(category => (
//                 <button
//                   key={category}
//                   onClick={() => setActiveCategory(category)}
//                   className={`px-5 py-3 rounded-full font-medium whitespace-nowrap transition-all ${
//                     activeCategory === category
//                       ? 'bg-gradient-to-r from-amber-500 to-red-600 text-white shadow-md transform scale-105'
//                       : 'bg-amber-100 hover:bg-amber-200 text-amber-800'
//                   }`}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>

//             {/* Menu items */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {menuItems
//                 .filter(item => item.category === activeCategory)
//                 .map(item => (
//                   <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-amber-100 hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
//                     <div className="relative">
//                       <img src={item.image} alt={item.name} className="w-full h-56 object-cover" />
//                       <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 rounded-bl-lg font-medium">
//                         ${item.price.toFixed(2)}
//                       </div>
//                     </div>
//                     <div className="p-5">
//                       <h3 className="font-bold text-xl text-amber-900 mb-2">{item.name}</h3>
//                       <p className="text-amber-700 text-sm mb-4">{item.description}</p>
//                       <button
//                         onClick={() => addToOrder(item)}
//                         className="w-full bg-gradient-to-r from-amber-500 to-red-600 text-white py-2 rounded-lg hover:from-amber-600 hover:to-red-700 shadow-md transition transform active:scale-95"
//                       >
//                         Add to Order
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           </div>

//           {/* Order summary */}
//           <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-xl mb-8 backdrop-blur-sm border border-amber-200">
//             <h2 className="text-2xl font-semibold mb-4 text-amber-800">Your Order</h2>
            
//             {selectedItems.length === 0 ? (
//               <div className="text-center py-12">
//                 <p className="text-amber-700 text-lg">Your order is empty. Please select items from our menu.</p>
//               </div>
//             ) : (
//               <>
//                 <div className="overflow-x-auto rounded-lg border border-amber-200 mb-6">
//                   <table className="w-full table-auto">
//                     <thead>
//                       <tr className="bg-gradient-to-r from-amber-100 to-amber-200">
//                         <th className="text-left p-3 text-amber-800">Item</th>
//                         <th className="text-center p-3 text-amber-800">Price</th>
//                         <th className="text-center p-3 text-amber-800">Quantity</th>
//                         <th className="text-right p-3 text-amber-800">Subtotal</th>
//                         <th className="text-center p-3 text-amber-800">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {selectedItems.map(item => (
//                         <tr key={item.id} className="border-b border-amber-100 hover:bg-amber-50">
//                           <td className="p-3 font-medium text-amber-900">{item.name}</td>
//                           <td className="text-center p-3 text-amber-700">${item.price.toFixed(2)}</td>
//                           <td className="text-center p-3">
//                             <div className="flex items-center justify-center space-x-2">
//                               <button 
//                                 onClick={() => removeFromOrder(item.id)} 
//                                 className="bg-amber-100 text-amber-800 w-6 h-6 rounded-full hover:bg-amber-200"
//                               >
//                                 -
//                               </button>
//                               <span className="text-amber-800 font-medium w-8 text-center">{item.quantity}</span>
//                               <button 
//                                 onClick={() => addToOrder(item)} 
//                                 className="bg-amber-100 text-amber-800 w-6 h-6 rounded-full hover:bg-amber-200"
//                               >
//                                 +
//                               </button>
//                             </div>
//                           </td>
//                           <td className="text-right p-3 font-medium text-amber-900">${(item.price * item.quantity).toFixed(2)}</td>
//                           <td className="text-center p-3">
//                             <button
//                               onClick={() => setSelectedItems(selectedItems.filter(i => i.id !== item.id))}
//                               className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 text-sm transition"
//                             >
//                               Remove
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>

//                 <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <h3 className="font-medium text-amber-800 mb-2">Order Summary</h3>
//                       <p className="text-amber-700">Items: {selectedItems.reduce((sum, item) => sum + item.quantity, 0)}</p>
//                       <p className="text-amber-700">Unique Dishes: {selectedItems.length}</p>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-amber-700">Subtotal: <span className="font-medium">${calculateSubtotal().toFixed(2)}</span></p>
//                       <p className="text-amber-700">Tax (8%): <span className="font-medium">${calculateTax().toFixed(2)}</span></p>
//                       <p className="text-amber-700">Service Charge (15%): <span className="font-medium">${calculateServiceCharge().toFixed(2)}</span></p>
//                       <p className="text-xl font-bold text-amber-900 mt-2">Total: ${calculateTotal().toFixed(2)}</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-6 text-center">
//                   <button
//                     onClick={handleGenerateBill}
//                     className="bg-gradient-to-r from-amber-500 to-red-600 text-white px-8 py-3 rounded-lg hover:from-amber-600 hover:to-red-700 font-semibold shadow-lg transition transform hover:scale-105 active:scale-100"
//                   >
//                     Generate Bill
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       ) : (
//         <div className="container mx-auto p-4 py-8">
//           <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-2xl border border-amber-200">
//             <div className="border-b-2 border-amber-300 pb-6 mb-6">
//               <div className="text-center">
//                 <h2 className="text-3xl font-bold text-amber-800 italic">La Gourmet Lounge</h2>
//                 <p className="text-amber-700">Fine Dining Experience</p>
//                 <p className="text-amber-600 mt-2">123 Culinary Avenue | Tel: (123) 456-7890</p>
//               </div>
//             </div>

//             <div className="border-b border-amber-200 pb-4 mb-6">
//               <h3 className="text-xl font-semibold text-amber-800 mb-3">Bill Details</h3>
//               <div className="grid grid-cols-2 gap-y-2">
//                 <p className="text-amber-700"><span className="font-medium">Bill Number:</span> #{Math.floor(Math.random() * 10000)}</p>
//                 <p className="text-amber-700"><span className="font-medium">Date:</span> {new Date().toLocaleDateString()}</p>
//                 <p className="text-amber-700"><span className="font-medium">Table Number:</span> {tableNumber}</p>
//                 <p className="text-amber-700"><span className="font-medium">Guest Name:</span> {customerName}</p>
//               </div>
//             </div>

//             <div className="mb-6">
//               <h3 className="text-xl font-semibold text-amber-800 mb-3">Order Items</h3>
//               <table className="w-full">
//                 <thead>
//                   <tr className="border-b-2 border-amber-200">
//                     <th className="text-left py-2 text-amber-700">Item</th>
//                     <th className="text-center py-2 text-amber-700">Price</th>
//                     <th className="text-center py-2 text-amber-700">Qty</th>
//                     <th className="text-right py-2 text-amber-700">Amount</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {selectedItems.map(item => (
//                     <tr key={item.id} className="border-b border-amber-100">
//                       <td className="py-3 text-amber-800 font-medium">{item.name}</td>
//                       <td className="text-center py-3 text-amber-700">${item.price.toFixed(2)}</td>
//                       <td className="text-center py-3 text-amber-700">{item.quantity}</td>
//                       <td className="text-right py-3 text-amber-700">${(item.price * item.quantity).toFixed(2)}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <div className="border-t-2 border-amber-300 pt-4 mb-6">
//               <div className="flex justify-between py-1">
//                 <span className="text-amber-700">Subtotal:</span>
//                 <span className="text-amber-800 font-medium">${calculateSubtotal().toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between py-1">
//                 <span className="text-amber-700">Tax (8%):</span>
//                 <span className="text-amber-800 font-medium">${calculateTax().toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between py-1">
//                 <span className="text-amber-700">Service Charge (15%):</span>
//                 <span className="text-amber-800 font-medium">${calculateServiceCharge().toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between mt-3 pt-3 border-t border-amber-200">
//                 <span className="font-bold text-xl text-amber-900">Total:</span>
//                 <span className="font-bold text-xl text-amber-900">${calculateTotal().toFixed(2)}</span>
//               </div>
//             </div>

//             <div className="text-center mt-8">
//               <p className="mb-6 text-amber-600 italic">Thank you for dining with us!</p>
//               <p className="text-amber-500 mb-6">We hope to serve you again soon.</p>
//               <button
//                 onClick={handleNewOrder}
//                 className="bg-gradient-to-r from-amber-500 to-red-600 text-white px-6 py-3 rounded-lg hover:from-amber-600 hover:to-red-700 font-semibold shadow-md transition transform hover:scale-105 active:scale-100"
//               >
//                 New Order
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <footer className="bg-amber-900 text-amber-100 p-4 mt-12 text-center">
//         <p>© {new Date().getFullYear()} La Gourmet Lounge. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }
// import { useState } from 'react';

// // Mock data for our food menu
// const menuItems = [
//   {
//     id: 1,
//     name: 'Truffle Risotto',
//     price: 24.99,
//     category: 'Signature Dishes',
//     description: 'Creamy arborio rice with black truffle, parmesan, and wild mushrooms',
//     image: '/api/placeholder/300/200'
//   },
//   {
//     id: 2,
//     name: 'Lobster Thermidor',
//     price: 36.99,
//     category: 'Signature Dishes',
//     description: 'Baked lobster with brandy cream sauce, gruyère cheese, and herbs',
//     image: '/api/placeholder/300/200'
//   },
//   {
//     id: 3,
//     name: 'Caprese Salad',
//     price: 14.99,
//     category: 'Starters',
//     description: 'Heirloom tomatoes, buffalo mozzarella, fresh basil, balsamic reduction',
//     image: '/api/placeholder/300/200'
//   },
//   {
//     id: 4,
//     name: 'Crispy Calamari',
//     price: 16.99,
//     category: 'Starters',
//     description: 'Lightly fried squid rings with lemon aioli and chili dip',
//     image: '/api/placeholder/300/200'
//   },
//   {
//     id: 5,
//     name: 'Wagyu Beef Steak',
//     price: 45.99,
//     category: 'Main Course',
//     description: 'Grade A5 Japanese Wagyu with truffle mash and red wine jus',
//     image: '/api/placeholder/300/200'
//   },
//   {
//     id: 6,
//     name: 'Pan-Seared Salmon',
//     price: 28.99,
//     category: 'Main Course',
//     description: 'Norwegian salmon with saffron risotto and herb butter sauce',
//     image: '/api/placeholder/300/200'
//   },
//   {
//     id: 7,
//     name: 'Chocolate Soufflé',
//     price: 12.99,
//     category: 'Desserts',
//     description: 'Warm chocolate soufflé with vanilla bean ice cream',
//     image: '/api/placeholder/300/200'
//   },
//   {
//     id: 8,
//     name: 'Crème Brûlée',
//     price: 10.99,
//     category: 'Desserts',
//     description: 'Classic French custard with caramelized sugar crust and fresh berries',
//     image: '/api/placeholder/300/200'
//   },
//   {
//     id: 9,
//     name: 'Signature Cocktail',
//     price: 14.99,
//     category: 'Beverages',
//     description: 'House special with premium spirits, fresh citrus, and aromatic bitters',
//     image: '/api/placeholder/300/200'
//   },
//   {
//     id: 10,
//     name: 'Vintage Red Wine',
//     price: 18.99,
//     category: 'Beverages',
//     description: 'Premium vineyard selection, served by the glass',
//     image: '/api/placeholder/300/200'
//   }
// ];

// // Group menu items by category
// const menuCategories = [...new Set(menuItems.map(item => item.category))];

// export default function RestaurantBillingSystem() {
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [tableNumber, setTableNumber] = useState('');
//   const [customerName, setCustomerName] = useState('');
//   const [showBill, setShowBill] = useState(false);
//   const [activeCategory, setActiveCategory] = useState(menuCategories[0]);
//   const [itemsInCart, setItemsInCart] = useState({});

//   const addToOrder = (item) => {
//     // Update the items in cart state for button color change
//     setItemsInCart(prev => ({
//       ...prev,
//       [item.id]: true
//     }));
    
//     const existingItem = selectedItems.find(i => i.id === item.id);
//     if (existingItem) {
//       setSelectedItems(selectedItems.map(i => 
//         i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//       ));
//     } else {
//       setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
//     }
//   };

//   const updateQuantity = (itemId, newQuantity) => {
//     if (newQuantity <= 0) {
//       setSelectedItems(selectedItems.filter(i => i.id !== itemId));
//       // Update the items in cart state when item is removed
//       setItemsInCart(prev => ({
//         ...prev,
//         [itemId]: false
//       }));
//     } else {
//       setSelectedItems(selectedItems.map(i => 
//         i.id === itemId ? { ...i, quantity: newQuantity } : i
//       ));
//     }
//   };

//   const calculateSubtotal = () => {
//     return selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
//   };

//   const calculateTax = () => {
//     return calculateSubtotal() * 0.08; // 8% tax
//   };

//   const calculateServiceCharge = () => {
//     return calculateSubtotal() * 0.15; // 15% service charge
//   };

//   const calculateTotal = () => {
//     return calculateSubtotal() + calculateTax() + calculateServiceCharge();
//   };

//   const handleGenerateBill = () => {
//     if (selectedItems.length === 0) {
//       alert('Please select at least one item to generate a bill.');
//       return;
//     }
//     setShowBill(true);
//   };

//   const handleNewOrder = () => {
//     setSelectedItems([]);
//     setTableNumber('');
//     setCustomerName('');
//     setShowBill(false);
//     setItemsInCart({});
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
//       <header className="bg-gradient-to-r from-amber-600 to-red-700 text-white p-6 shadow-lg">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-3xl font-bold italic">La Gourmet Lounge</h1>
//           <p className="font-light">Fine Dining Experience</p>
//         </div>
//       </header>

//       {!showBill ? (
//         <div className="container mx-auto p-4">
//           {/* Optional Customer Info Section */}
//           <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-xl mb-8 backdrop-blur-sm border border-amber-200">
//             <h2 className="text-2xl font-semibold mb-4 text-amber-800">Guest Details <span className="text-sm font-normal text-amber-600">(Optional)</span></h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-amber-700 mb-2 font-medium">Table Number</label>
//                 <input 
//                   type="text" 
//                   value={tableNumber}
//                   onChange={(e) => setTableNumber(e.target.value)}
//                   className="w-full p-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
//                   placeholder="Enter table number (optional)"
//                 />
//               </div>
//               <div>
//                 <label className="block text-amber-700 mb-2 font-medium">Guest Name</label>
//                 <input 
//                   type="text" 
//                   value={customerName}
//                   onChange={(e) => setCustomerName(e.target.value)}
//                   className="w-full p-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
//                   placeholder="Enter guest name (optional)"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Menu Section */}
//           <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-xl mb-8 backdrop-blur-sm border border-amber-200">
//             <h2 className="text-2xl font-semibold mb-6 text-amber-800">Our Menu</h2>
            
//             {/* Category tabs */}
//             <div className="flex overflow-x-auto mb-8 pb-2 gap-2">
//               {menuCategories.map(category => (
//                 <button
//                   key={category}
//                   onClick={() => setActiveCategory(category)}
//                   className={`px-5 py-3 rounded-full font-medium whitespace-nowrap transition-all ${
//                     activeCategory === category
//                       ? 'bg-gradient-to-r from-amber-500 to-red-600 text-white shadow-md transform scale-105'
//                       : 'bg-amber-100 hover:bg-amber-200 text-amber-800'
//                   }`}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>

//             {/* Menu items */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {menuItems
//                 .filter(item => item.category === activeCategory)
//                 .map(item => (
//                   <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-amber-100 hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
//                     <div className="relative">
//                       <img src={item.image} alt={item.name} className="w-full h-56 object-cover" />
//                       <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 rounded-bl-lg font-medium">
//                         ${item.price.toFixed(2)}
//                       </div>
//                       {selectedItems.find(i => i.id === item.id) && (
//                         <div className="absolute bottom-0 left-0 right-0 bg-green-500 bg-opacity-90 text-white px-3 py-1 font-medium text-center">
//                           {selectedItems.find(i => i.id === item.id).quantity} in order
//                         </div>
//                       )}
//                     </div>
//                     <div className="p-5">
//                       <h3 className="font-bold text-xl text-amber-900 mb-2">{item.name}</h3>
//                       <p className="text-amber-700 text-sm mb-4">{item.description}</p>
//                       <button
//                         onClick={() => addToOrder(item)}
//                         className={`w-full py-2 rounded-lg shadow-md transition transform active:scale-95 ${
//                           itemsInCart[item.id] 
//                             ? 'bg-green-600 hover:bg-green-700 text-white' 
//                             : 'bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white'
//                         }`}
//                       >
//                         {itemsInCart[item.id] ? 'Add More' : 'Add to Order'}
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           </div>

//           {/* Order summary */}
//           <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-xl mb-8 backdrop-blur-sm border border-amber-200">
//             <h2 className="text-2xl font-semibold mb-4 text-amber-800">Your Order</h2>
            
//             {selectedItems.length === 0 ? (
//               <div className="text-center py-12">
//                 <p className="text-amber-700 text-lg">Your order is empty. Please select items from our menu.</p>
//               </div>
//             ) : (
//               <>
//                 <div className="overflow-x-auto rounded-lg border border-amber-200 mb-6">
//                   <table className="w-full table-auto">
//                     <thead>
//                       <tr className="bg-gradient-to-r from-amber-100 to-amber-200">
//                         <th className="text-left p-3 text-amber-800">Item</th>
//                         <th className="text-center p-3 text-amber-800">Price</th>
//                         <th className="text-center p-3 text-amber-800">Quantity</th>
//                         <th className="text-right p-3 text-amber-800">Subtotal</th>
//                         <th className="text-center p-3 text-amber-800">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {selectedItems.map(item => (
//                         <tr key={item.id} className="border-b border-amber-100 hover:bg-amber-50">
//                           <td className="p-3 font-medium text-amber-900">{item.name}</td>
//                           <td className="text-center p-3 text-amber-700">${item.price.toFixed(2)}</td>
//                           <td className="text-center p-3">
//                             <div className="flex items-center justify-center space-x-2">
//                               <button 
//                                 onClick={() => updateQuantity(item.id, item.quantity - 1)} 
//                                 className="bg-amber-100 text-amber-800 w-8 h-8 rounded-full hover:bg-amber-200 font-bold"
//                               >
//                                 -
//                               </button>
//                               <span className="text-amber-800 font-medium w-8 text-center">{item.quantity}</span>
//                               <button 
//                                 onClick={() => updateQuantity(item.id, item.quantity + 1)} 
//                                 className="bg-amber-100 text-amber-800 w-8 h-8 rounded-full hover:bg-amber-200 font-bold"
//                               >
//                                 +
//                               </button>
//                             </div>
//                           </td>
//                           <td className="text-right p-3 font-medium text-amber-900">${(item.price * item.quantity).toFixed(2)}</td>
//                           <td className="text-center p-3">
//                             <button
//                               onClick={() => {
//                                 updateQuantity(item.id, 0);
//                               }}
//                               className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 text-sm transition"
//                             >
//                               Remove
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>

//                 <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <h3 className="font-medium text-amber-800 mb-2">Order Summary</h3>
//                       <p className="text-amber-700">Items: {selectedItems.reduce((sum, item) => sum + item.quantity, 0)}</p>
//                       <p className="text-amber-700">Unique Dishes: {selectedItems.length}</p>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-amber-700">Subtotal: <span className="font-medium">${calculateSubtotal().toFixed(2)}</span></p>
//                       <p className="text-amber-700">Tax (8%): <span className="font-medium">${calculateTax().toFixed(2)}</span></p>
//                       <p className="text-amber-700">Service Charge (15%): <span className="font-medium">${calculateServiceCharge().toFixed(2)}</span></p>
//                       <p className="text-xl font-bold text-amber-900 mt-2">Total: ${calculateTotal().toFixed(2)}</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-6 text-center">
//                   <button
//                     onClick={handleGenerateBill}
//                     className="bg-gradient-to-r from-amber-500 to-red-600 text-white px-8 py-3 rounded-lg hover:from-amber-600 hover:to-red-700 font-semibold shadow-lg transition transform hover:scale-105 active:scale-100"
//                   >
//                     Generate Bill
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       ) : (
//         <div className="container mx-auto p-4 py-8">
//           <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-2xl border border-amber-200">
//             <div className="border-b-2 border-amber-300 pb-6 mb-6">
//               <div className="text-center">
//                 <h2 className="text-3xl font-bold text-amber-800 italic">La Gourmet Lounge</h2>
//                 <p className="text-amber-700">Fine Dining Experience</p>
//                 <p className="text-amber-600 mt-2">123 Culinary Avenue | Tel: (123) 456-7890</p>
//               </div>
//             </div>

//             <div className="border-b border-amber-200 pb-4 mb-6">
//               <h3 className="text-xl font-semibold text-amber-800 mb-3">Bill Details</h3>
//               <div className="grid grid-cols-2 gap-y-2">
//                 <p className="text-amber-700"><span className="font-medium">Bill Number:</span> #{Math.floor(Math.random() * 10000)}</p>
//                 <p className="text-amber-700"><span className="font-medium">Date:</span> {new Date().toLocaleDateString()}</p>
//                 {tableNumber && <p className="text-amber-700"><span className="font-medium">Table Number:</span> {tableNumber}</p>}
//                 {customerName && <p className="text-amber-700"><span className="font-medium">Guest Name:</span> {customerName}</p>}
//               </div>
//             </div>

//             <div className="mb-6">
//               <h3 className="text-xl font-semibold text-amber-800 mb-3">Order Items</h3>
//               <table className="w-full">
//                 <thead>
//                   <tr className="border-b-2 border-amber-200">
//                     <th className="text-left py-2 text-amber-700">Item</th>
//                     <th className="text-center py-2 text-amber-700">Price</th>
//                     <th className="text-center py-2 text-amber-700">Qty</th>
//                     <th className="text-right py-2 text-amber-700">Amount</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {selectedItems.map(item => (
//                     <tr key={item.id} className="border-b border-amber-100">
//                       <td className="py-3 text-amber-800 font-medium">{item.name}</td>
//                       <td className="text-center py-3 text-amber-700">${item.price.toFixed(2)}</td>
//                       <td className="text-center py-3 text-amber-700">{item.quantity}</td>
//                       <td className="text-right py-3 text-amber-700">${(item.price * item.quantity).toFixed(2)}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <div className="border-t-2 border-amber-300 pt-4 mb-6">
//               <div className="flex justify-between py-1">
//                 <span className="text-amber-700">Subtotal:</span>
//                 <span className="text-amber-800 font-medium">${calculateSubtotal().toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between py-1">
//                 <span className="text-amber-700">Tax (8%):</span>
//                 <span className="text-amber-800 font-medium">${calculateTax().toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between py-1">
//                 <span className="text-amber-700">Service Charge (15%):</span>
//                 <span className="text-amber-800 font-medium">${calculateServiceCharge().toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between mt-3 pt-3 border-t border-amber-200">
//                 <span className="font-bold text-xl text-amber-900">Total:</span>
//                 <span className="font-bold text-xl text-amber-900">${calculateTotal().toFixed(2)}</span>
//               </div>
//             </div>

//             <div className="text-center mt-8">
//               <p className="mb-6 text-amber-600 italic">Thank you for dining with us!</p>
//               <p className="text-amber-500 mb-6">We hope to serve you again soon.</p>
//               <div className="flex justify-center gap-4">
//                 <button
//                   onClick={() => setShowBill(false)}
//                   className="bg-amber-100 text-amber-800 px-6 py-3 rounded-lg hover:bg-amber-200 font-semibold shadow-md transition"
//                 >
//                   Back to Order
//                 </button>
//                 <button
//                   onClick={handleNewOrder}
//                   className="bg-gradient-to-r from-amber-500 to-red-600 text-white px-6 py-3 rounded-lg hover:from-amber-600 hover:to-red-700 font-semibold shadow-md transition"
//                 >
//                   New Order
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <footer className="bg-amber-900 text-amber-100 p-4 mt-12 text-center">
//         <p>© {new Date().getFullYear()} La Gourmet Lounge. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// import { useState } from 'react';

// // Mock data for our food menu with translations in Telugu
// const menuItemsData = {
//   english: [
//     {
//       id: 1,
//       name: 'Truffle Risotto',
//       price: 24.99,
//       category: 'Signature Dishes',
//       description: 'Creamy arborio rice with black truffle, parmesan, and wild mushrooms',
//       image: '/api/placeholder/300/200'
//     },
//     {
//       id: 2,
//       name: 'Lobster Thermidor',
//       price: 36.99,
//       category: 'Signature Dishes',
//       description: 'Baked lobster with brandy cream sauce, gruyère cheese, and herbs',
//       image: '/api/placeholder/300/200'
//     },
//     {
//       id: 3,
//       name: 'Caprese Salad',
//       price: 14.99,
//       category: 'Starters',
//       description: 'Heirloom tomatoes, buffalo mozzarella, fresh basil, balsamic reduction',
//       image: '/api/placeholder/300/200'
//     },
//     {
//       id: 4,
//       name: 'Crispy Calamari',
//       price: 16.99,
//       category: 'Starters',
//       description: 'Lightly fried squid rings with lemon aioli and chili dip',
//       image: '/api/placeholder/300/200'
//     },
//     {
//       id: 5,
//       name: 'Wagyu Beef Steak',
//       price: 45.99,
//       category: 'Main Course',
//       description: 'Grade A5 Japanese Wagyu with truffle mash and red wine jus',
//       image: '/api/placeholder/300/200'
//     },
//     {
//       id: 6,
//       name: 'Pan-Seared Salmon',
//       price: 28.99,
//       category: 'Main Course',
//       description: 'Norwegian salmon with saffron risotto and herb butter sauce',
//       image: '/api/placeholder/300/200'
//     },
//     {
//       id: 7,
//       name: 'Chocolate Soufflé',
//       price: 12.99,
//       category: 'Desserts',
//       description: 'Warm chocolate soufflé with vanilla bean ice cream',
//       image: '/api/placeholder/300/200'
//     },
//     {
//       id: 8,
//       name: 'Crème Brûlée',
//       price: 10.99,
//       category: 'Desserts',
//       description: 'Classic French custard with caramelized sugar crust and fresh berries',
//       image: '/api/placeholder/300/200'
//     },
//     {
//       id: 9,
//       name: 'Signature Cocktail',
//       price: 14.99,
//       category: 'Beverages',
//       description: 'House special with premium spirits, fresh citrus, and aromatic bitters',
//       image: '/api/placeholder/300/200'
//     },
//     {
//       id: 10,
//       name: 'Vintage Red Wine',
//       price: 18.99,
//       category: 'Beverages',
//       description: 'Premium vineyard selection, served by the glass',
//       image: '/api/placeholder/300/200'
//     }
//   ],
//   telugu: [
//     {
//       id: 1,
//       name: 'ట్రఫుల్ రిసోటో',
//       price: 24.99,
//       category: 'ప్రత్యేక వంటకాలు',
//       description: 'నల్ల ట్రఫుల్, పార్మెసాన్, మరియు అడవి పుట్టగొడుగులతో క్రీమీ అర్బోరియో రైస్',
//       image: '/api/placeholder/300/200'
//     },
//     {
//       id: 2,
//       name: 'లాబ్స్టర్ థెర్మిడోర్',
//       price: 36.99,
//       category: 'ప్రత్యేక వంటకాలు',
//       description: 'బ్రాండీ క్రీమ్ సాస్, గ్రుయేర్ చీజ్, మరియు మూలికలతో బేక్ చేసిన లాబ్స్టర్',
//       image: '/api/placeholder/300/200'
//     },
//     {
//       id: 3,
//       name: 'కాప్రీస్ సలాడ్',
//       price: 14.99,
//       category: 'స్టార్టర్స్',
//       description: 'హెయిర్‌లూమ్ టొమాటోలు, బఫెలో మొజారెల్లా, తాజా తులసి, బాల్సామిక్ రిడక్షన్',
//       image: '/api/placeholder/300/200'
//     },
//     {
//       id: 4,
//       name: 'క్రిస్పీ కాలమారి',
//       price: 16.99,
//       category: 'స్టార్టర్స్',
//       description: 'లేతగా వేయించిన స్క్విడ్ రింగ్స్ నిమ్మ ఐయోలి మరియు మిరపకాయ డిప్‌తో',
//       image: '/api/placeholder/300/200'
//     },
//     {
//       id: 5,
//       name: 'వాగ్యు బీఫ్ స్టేక్',
//       price: 45.99,
//       category: 'ప్రధాన వంటకం',
//       description: 'ట్రఫుల్ మాష్ మరియు రెడ్ వైన్ జస్‌తో గ్రేడ్ A5 జపనీస్ వాగ్యు',
//       image: '/api/placeholder/300/200'
//     },
//     {
//       id: 6,
//       name: 'ప్యాన్-సియర్డ్ సాల్మన్',
//       price: 28.99,
//       category: 'ప్రధాన వంటకం',
//       description: 'కేసరి రిసోట్టో మరియు మూలికల వెన్న సాస్‌తో నార్వేజియన్ సాల్మన్',
//       image: '/api/placeholder/300/200'
//     },
//     {
//       id: 7,
//       name: 'చాక్లెట్ సఫుల్',
//       price: 12.99,
//       category: 'డెజర్ట్స్',
//       description: 'వేడి చాక్లెట్ సఫుల్ వెనిల్లా బీన్ ఐస్ క్రీమ్‌తో',
//       image: '/api/placeholder/300/200'
//     },
//     {
//       id: 8,
//       name: 'క్రేమ్ బ్రూలీ',
//       price: 10.99,
//       category: 'డెజర్ట్స్',
//       description: 'కారమైన చక్కెర ఉపరితలం మరియు తాజా బెర్రీలతో క్లాసిక్ ఫ్రెంచ్ కస్టర్డ్',
//       image: '/api/placeholder/300/200'
//     },
//     {
//       id: 9,
//       name: 'సిగ్నేచర్ కాక్‌టెయిల్',
//       price: 14.99,
//       category: 'పానీయాలు',
//       description: 'ప్రీమియం స్పిరిట్స్, తాజా సిట్రస్, మరియు సువాసన బిట్టర్స్‌తో హౌస్ స్పెషల్',
//       image: '/api/placeholder/300/200'
//     },
//     {
//       id: 10,
//       name: 'వింటేజ్ రెడ్ వైన్',
//       price: 18.99,
//       category: 'పానీయాలు',
//       description: 'ప్రీమియం ద్రాక్షతోటల ఎంపిక, గ్లాసు ద్వారా సర్వ్ చేయబడింది',
//       image: '/api/placeholder/300/200'
//     }
//   ]
// };

// // Translations for UI elements
// const translations = {
//   english: {
//     restaurantName: 'La Gourmet Lounge',
//     tagline: 'Fine Dining Experience',
//     guestDetails: 'Guest Details',
//     optional: '(Optional)',
//     tableNumber: 'Table Number',
//     tableNumberPlaceholder: 'Enter table number (optional)',
//     guestName: 'Guest Name',
//     guestNamePlaceholder: 'Enter guest name (optional)',
//     ourMenu: 'Our Menu',
//     addToOrder: 'Add to Order',
//     addMore: 'Add More',
//     remove: 'Remove',
//     yourOrder: 'Your Order',
//     emptyOrderMessage: 'Your order is empty. Please select items from our menu.',
//     item: 'Item',
//     price: 'Price',
//     quantity: 'Quantity',
//     subtotal: 'Subtotal',
//     actions: 'Actions',
//     orderSummary: 'Order Summary',
//     items: 'Items',
//     uniqueDishes: 'Unique Dishes',
//     tax: 'Tax (8%)',
//     serviceCharge: 'Service Charge (15%)',
//     total: 'Total',
//     generateBill: 'Generate Bill',
//     billDetails: 'Bill Details',
//     billNumber: 'Bill Number',
//     date: 'Date',
//     orderItems: 'Order Items',
//     amount: 'Amount',
//     thankYouMessage: 'Thank you for dining with us!',
//     hopeToServeAgain: 'We hope to serve you again soon.',
//     backToOrder: 'Back to Order',
//     newOrder: 'New Order',
//     allRightsReserved: 'All rights reserved.'
//   },
//   telugu: {
//     restaurantName: 'లా గౌర్మెట్ లౌంజ్',
//     tagline: 'ఫైన్ డైనింగ్ అనుభవం',
//     guestDetails: 'అతిథి వివరాలు',
//     optional: '(ఐచ్ఛికం)',
//     tableNumber: 'టేబుల్ నంబర్',
//     tableNumberPlaceholder: 'టేబుల్ నంబర్‌ను నమోదు చేయండి (ఐచ్ఛికం)',
//     guestName: 'అతిథి పేరు',
//     guestNamePlaceholder: 'అతిథి పేరును నమోదు చేయండి (ఐచ్ఛికం)',
//     ourMenu: 'మా మెను',
//     addToOrder: 'ఆర్డర్‌కి జోడించండి',
//     addMore: 'మరిన్ని జోడించండి',
//     remove: 'తొలగించండి',
//     yourOrder: 'మీ ఆర్డర్',
//     emptyOrderMessage: 'మీ ఆర్డర్ ఖాళీగా ఉంది. దయచేసి మా మెను నుండి అంశాలను ఎంచుకోండి.',
//     item: 'అంశం',
//     price: 'ధర',
//     quantity: 'పరిమాణం',
//     subtotal: 'సబ్‌టోటల్',
//     actions: 'చర్యలు',
//     orderSummary: 'ఆర్డర్ సారాంశం',
//     items: 'అంశాలు',
//     uniqueDishes: 'ప్రత్యేక వంటకాలు',
//     tax: 'పన్ను (8%)',
//     serviceCharge: 'సర్వీస్ ఛార్జీ (15%)',
//     total: 'మొత్తం',
//     generateBill: 'బిల్లును సృష్టించండి',
//     billDetails: 'బిల్లు వివరాలు',
//     billNumber: 'బిల్లు నంబర్',
//     date: 'తేదీ',
//     orderItems: 'ఆర్డర్ అంశాలు',
//     amount: 'మొత్తం',
//     thankYouMessage: 'మాతో భోజనం చేసినందుకు ధన్యవాదాలు!',
//     hopeToServeAgain: 'త్వరలో మళ్ళీ మిమ్మల్ని సేవించాలని ఆశిస్తున్నాము.',
//     backToOrder: 'ఆర్డర్‌కి తిరిగి వెళ్ళండి',
//     newOrder: 'కొత్త ఆర్డర్',
//     allRightsReserved: 'అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.'
//   }
// };

// export default function RestaurantBillingSystem() {
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [tableNumber, setTableNumber] = useState('');
//   const [customerName, setCustomerName] = useState('');
//   const [showBill, setShowBill] = useState(false);
//   const [itemsInCart, setItemsInCart] = useState({});
//   const [language, setLanguage] = useState('english');
  
//   // Get the current menu items and translations based on selected language
//   const menuItems = menuItemsData[language];
//   const text = translations[language];
  
//   // Group menu items by category
//   const menuCategories = [...new Set(menuItems.map(item => item.category))];
//   const [activeCategory, setActiveCategory] = useState(menuCategories[0]);

//   const addToOrder = (item) => {
//     // Update the items in cart state for button color change
//     setItemsInCart(prev => ({
//       ...prev,
//       [item.id]: true
//     }));
    
//     const existingItem = selectedItems.find(i => i.id === item.id);
//     if (existingItem) {
//       setSelectedItems(selectedItems.map(i => 
//         i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//       ));
//     } else {
//       setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
//     }
//   };

//   const removeFromOrder = (itemId) => {
//     setSelectedItems(selectedItems.filter(i => i.id !== itemId));
//     setItemsInCart(prev => ({
//       ...prev,
//       [itemId]: false
//     }));
//   };

//   const updateQuantity = (itemId, newQuantity) => {
//     if (newQuantity <= 0) {
//       setSelectedItems(selectedItems.filter(i => i.id !== itemId));
//       // Update the items in cart state when item is removed
//       setItemsInCart(prev => ({
//         ...prev,
//         [itemId]: false
//       }));
//     } else {
//       setSelectedItems(selectedItems.map(i => 
//         i.id === itemId ? { ...i, quantity: newQuantity } : i
//       ));
//     }
//   };

//   const calculateSubtotal = () => {
//     return selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
//   };

//   const calculateTax = () => {
//     return calculateSubtotal() * 0.08; // 8% tax
//   };

//   const calculateServiceCharge = () => {
//     return calculateSubtotal() * 0.15; // 15% service charge
//   };

//   const calculateTotal = () => {
//     return calculateSubtotal() + calculateTax() + calculateServiceCharge();
//   };

//   const handleGenerateBill = () => {
//     if (selectedItems.length === 0) {
//       alert('Please select at least one item to generate a bill.');
//       return;
//     }
//     setShowBill(true);
//   };

//   const handleNewOrder = () => {
//     setSelectedItems([]);
//     setTableNumber('');
//     setCustomerName('');
//     setShowBill(false);
//     setItemsInCart({});
//   };

//   const toggleLanguage = () => {
//     const newLanguage = language === 'english' ? 'telugu' : 'english';
//     setLanguage(newLanguage);
    
//     // Reset active category to first category in new language
//     const newCategories = [...new Set(menuItemsData[newLanguage].map(item => item.category))];
//     setActiveCategory(newCategories[0]);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
//       <header className="bg-gradient-to-r from-amber-600 to-red-700 text-white p-6 shadow-lg">
//         <div className="container mx-auto flex justify-between items-center">
//           <div>
//             <h1 className="text-3xl font-bold italic">{text.restaurantName}</h1>
//             <p className="font-light">{text.tagline}</p>
//           </div>
//           <div>
//             <button 
//               onClick={toggleLanguage}
//               className="bg-white text-amber-800 px-4 py-2 rounded-lg hover:bg-amber-100 transition shadow-md"
//             >
//               {language === 'english' ? 'తెలుగు' : 'English'}
//             </button>
//           </div>
//         </div>
//       </header>

//       {!showBill ? (
//         <div className="container mx-auto p-4">
//           {/* Optional Customer Info Section */}
//           <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-xl mb-8 backdrop-blur-sm border border-amber-200">
//             <h2 className="text-2xl font-semibold mb-4 text-amber-800">{text.guestDetails} <span className="text-sm font-normal text-amber-600">{text.optional}</span></h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-amber-700 mb-2 font-medium">{text.tableNumber}</label>
//                 <input 
//                   type="text" 
//                   value={tableNumber}
//                   onChange={(e) => setTableNumber(e.target.value)}
//                   className="w-full p-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
//                   placeholder={text.tableNumberPlaceholder}
//                 />
//               </div>
//               <div>
//                 <label className="block text-amber-700 mb-2 font-medium">{text.guestName}</label>
//                 <input 
//                   type="text" 
//                   value={customerName}
//                   onChange={(e) => setCustomerName(e.target.value)}
//                   className="w-full p-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
//                   placeholder={text.guestNamePlaceholder}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Menu Section */}
//           <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-xl mb-8 backdrop-blur-sm border border-amber-200">
//             <h2 className="text-2xl font-semibold mb-6 text-amber-800">{text.ourMenu}</h2>
            
//             {/* Category tabs */}
//             <div className="flex overflow-x-auto mb-8 pb-2 gap-2">
//               {menuCategories.map(category => (
//                 <button
//                   key={category}
//                   onClick={() => setActiveCategory(category)}
//                   className={`px-5 py-3 rounded-full font-medium whitespace-nowrap transition-all ${
//                     activeCategory === category
//                       ? 'bg-gradient-to-r from-amber-500 to-red-600 text-white shadow-md transform scale-105'
//                       : 'bg-amber-100 hover:bg-amber-200 text-amber-800'
//                   }`}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>

//             {/* Menu items */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {menuItems
//                 .filter(item => item.category === activeCategory)
//                 .map(item => (
//                   <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-amber-100 hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
//                     <div className="relative">
//                       <img src={item.image} alt={item.name} className="w-full h-56 object-cover" />
//                       <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 rounded-bl-lg font-medium">
//                         ${item.price.toFixed(2)}
//                       </div>
//                       {selectedItems.find(i => i.id === item.id) && (
//                         <div className="absolute bottom-0 left-0 right-0 bg-green-500 bg-opacity-90 text-white px-3 py-1 font-medium text-center">
//                           {selectedItems.find(i => i.id === item.id).quantity} in order
//                         </div>
//                       )}
//                     </div>
//                     <div className="p-5">
//                       <h3 className="font-bold text-xl text-amber-900 mb-2">{item.name}</h3>
//                       <p className="text-amber-700 text-sm mb-4">{item.description}</p>
                      
//                       <div className="flex gap-2">
//                         <button
//                           onClick={() => addToOrder(item)}
//                           className={`flex-1 py-2 rounded-lg shadow-md transition transform active:scale-95 ${
//                             itemsInCart[item.id] 
//                               ? 'bg-green-600 hover:bg-green-700 text-white' 
//                               : 'bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white'
//                           }`}
//                         >
//                           {itemsInCart[item.id] ? text.addMore : text.addToOrder}
//                         </button>
                        
//                         {itemsInCart[item.id] && (
//                           <button
//                             onClick={() => removeFromOrder(item.id)}
//                             className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition transform active:scale-95"
//                           >
//                             {text.remove}
//                           </button>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           </div>

//           {/* Order summary */}
//           <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-xl mb-8 backdrop-blur-sm border border-amber-200">
//             <h2 className="text-2xl font-semibold mb-4 text-amber-800">{text.yourOrder}</h2>
            
//             {selectedItems.length === 0 ? (
//               <div className="text-center py-12">
//                 <p className="text-amber-700 text-lg">{text.emptyOrderMessage}</p>
//               </div>
//             ) : (
//               <>
//                 <div className="overflow-x-auto rounded-lg border border-amber-200 mb-6">
//                   <table className="w-full table-auto">
//                     <thead>
//                       <tr className="bg-gradient-to-r from-amber-100 to-amber-200">
//                         <th className="text-left p-3 text-amber-800">{text.item}</th>
//                         <th className="text-center p-3 text-amber-800">{text.price}</th>
//                         <th className="text-center p-3 text-amber-800">{text.quantity}</th>
//                         <th className="text-right p-3 text-amber-800">{text.subtotal}</th>
//                         <th className="text-center p-3 text-amber-800">{text.actions}</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {selectedItems.map(item => (
//                         <tr key={item.id} className="border-b border-amber-100 hover:bg-amber-50">
//                           <td className="p-3 font-medium text-amber-900">{item.name}</td>
//                           <td className="text-center p-3 text-amber-700">${item.price.toFixed(2)}</td>
//                           <td className="text-center p-3">
//                             <div className="flex items-center justify-center space-x-2">
//                               <button 
//                                 onClick={() => updateQuantity(item.id, item.quantity - 1)} 
//                                 className="bg-amber-100 text-amber-800 w-8 h-8 rounded-full hover:bg-amber-200 font-bold"
//                               >
//                                 -
//                               </button>
//                               <span className="text-amber-800 font-medium w-8 text-center">{item.quantity}</span>
//                               <button 
//                                 onClick={() => updateQuantity(item.id, item.quantity + 1)} 
//                                 className="bg-amber-100 text-amber-800 w-8 h-8 rounded-full hover:bg-amber-200 font-bold"
//                               >
//                                 +
//                               </button>
//                             </div>
//                           </td>
//                           <td className="text-right p-3 font-medium text-amber-900">${(item.price * item.quantity).toFixed(2)}</td>
//                           <td className="text-center p-3">
//                             <button
//                               onClick={() => removeFromOrder(item.id)}
//                               className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 text-sm transition"
//                             >
//                               {text.remove}
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>

//                 <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <h3 className="font-medium text-amber-800 mb-2">{text.orderSummary}</h3>
//                       <p className="text-amber-700">{text.items}: {selectedItems.reduce((sum, item) => sum + item.quantity, 0)}</p>
//                       <p className="text-amber-700">{text.uniqueDishes}: {selectedItems.length}</p>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-amber-700">{text.subtotal}: <span className="font-medium">${calculateSubtotal().toFixed(2)}</span></p>
//                       <p className="text-amber-700">{text.tax}: <span className="font-medium">${calculateTax().toFixed(2)}</span></p>
//                       <p className="text-amber-700">{text.serviceCharge}: <span className="font-medium">${calculateServiceCharge().toFixed(2)}</span></p>
//                       <p className="text-xl font-bold text-amber-900 mt-2">{text.total}: ${calculateTotal().toFixed(2)}</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-6 text-center">
//                   <button
//                     onClick={handleGenerateBill}
//                     className="bg-gradient-to-r from-amber-500 to-red-600 text-white px-8 py-3 rounded-lg hover:from-amber-600 hover:to-red-700 font-semibold shadow-lg transition transform hover:scale-105 active:scale-100"
//                   >
//                     {text.generateBill}
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       ) : (
//         <div className="container mx-auto p-4 py-8">
//           <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-2xl border border-amber-200">
//             <div className="border-b-2 border-amber-300 pb-6 mb-6">
//               <div className="text-center">
//                 <h2 className="text-3xl font-bold text-amber-800 italic">{text.restaurantName}</h2>
//                 <p className="text-amber-700">{text.tagline}</p>
//                 <p className="text-amber-600 mt-2">123 Culinary Avenue | Tel: (123) 456-7890</p>
//               </div>
//             </div>

//             <div className="border-b border-amber-200 pb-4 mb-6">
//               <h3 className="text-xl font-semibold text-amber-800 mb-3">{text.billDetails}</h3>
//               <div className="grid grid-cols-2 gap-y-2">
//                 <p className="text-amber-700"><span className="font-medium">{text.billNumber}:</span> #{Math.floor(Math.random() * 10000)}</p>
//                 <p className="text-amber-700"><span className="font-medium">{text.date}:</span> {new Date().toLocaleDateString()}</p>
//                 {tableNumber && <p className="text-amber-700"><span className="font-medium">{text.tableNumber}:</span> {tableNumber}</p>}
//                 {customerName && <p className="text-amber-700"><span className="font-medium">{text.guestName}:</span> {customerName}</p>}
//               </div>
//             </div>
          

//              <div className="mb-6">
//               <h3 className="text-xl font-semibold text-amber-800 mb-3">Order Items</h3>
//               <table className="w-full">
//                 <thead>
//                    <tr className="border-b-2 border-amber-200">
//                      <th className="text-left py-2 text-amber-700">Item</th>
//                      <th className="text-center py-2 text-amber-700">Price</th>
//                      <th className="text-center py-2 text-amber-700">Qty</th>
//                      <th className="text-right py-2 text-amber-700">Amount</th>
//                    </tr>
//                  </thead>
//                 <tbody>
//                    {selectedItems.map(item => (

//                     <tr key={item.id} className="border-b border-amber-100">
//                       <td className="py-3 text-amber-800 font-medium">{item.name}</td>
//                       <td className="text-center py-3 text-amber-700">${item.price.toFixed(2)}</td>
//                       <td className="text-center py-3 text-amber-700">{item.quantity}</td>
//                       <td className="text-right py-3 text-amber-700">${(item.price * item.quantity).toFixed(2)}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <div className="border-t-2 border-amber-300 pt-4 mb-6">
//               <div className="flex justify-between py-1">
//                 <span className="text-amber-700">Subtotal:</span>
//                 <span className="text-amber-800 font-medium">${calculateSubtotal().toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between py-1">
//                 <span className="text-amber-700">Tax (8%):</span>
//                 <span className="text-amber-800 font-medium">${calculateTax().toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between py-1">
//                 <span className="text-amber-700">Service Charge (15%):</span>
//                 <span className="text-amber-800 font-medium">${calculateServiceCharge().toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between mt-3 pt-3 border-t border-amber-200">
//                 <span className="font-bold text-xl text-amber-900">Total:</span>
//                 <span className="font-bold text-xl text-amber-900">${calculateTotal().toFixed(2)}</span>
//               </div>
//             </div>

//             <div className="text-center mt-8">
//               <p className="mb-6 text-amber-600 italic">Thank you for dining with us!</p>
//               <p className="text-amber-500 mb-6">We hope to serve you again soon.</p>
//               <div className="flex justify-center gap-4">
//                 <button
//                   onClick={() => setShowBill(false)}
//                   className="bg-amber-100 text-amber-800 px-6 py-3 rounded-lg hover:bg-amber-200 font-semibold shadow-md transition"
//                 >
//                   Back to Order
//                 </button>
//                 <button
//                   onClick={handleNewOrder}
//                   className="bg-gradient-to-r from-amber-500 to-red-600 text-white px-6 py-3 rounded-lg hover:from-amber-600 hover:to-red-700 font-semibold shadow-md transition"
//                 >
//                   New Order
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <footer className="bg-amber-900 text-amber-100 p-4 mt-12 text-center">
//         <p>© {new Date().getFullYear()} La Gourmet Lounge. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }




import { useState } from 'react';


const menuItemsData = {
  english: [
    {
      id: 1,
      name: 'chicken roti',
      price: 90,
      category: 'Main Dishes with roti',
      description: 'Creamy arborio rice with black truffle, parmesan, and wild mushrooms',
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      name: 'Natukodi roti',
      price: 140,
      category: 'Main Dishes with roti',
      description: 'Baked lobster with brandy cream sauce, gruyère cheese, and herbs',
      image: '/api/placeholder/300/200'
    },
    {
        id: 3,
        name: 'Mutton roti',
        price: 160,
        category: 'Main Dishes with roti',
        description: 'Baked lobster with brandy cream sauce, gruyère cheese, and herbs',
        image: '/api/placeholder/300/200'
      },

      {
        id: 4,
        name: 'talakaya roti',
        price: 160,
        category: 'Main Dishes with roti',
        description: 'Baked lobster with brandy cream sauce, gruyère cheese, and herbs',
        image: '/api/placeholder/300/200'
      }, 
      {
        id: 5,
        name: 'boti roti',
        price: 90,
        category: 'Main Dishes with roti',
        description: 'Baked lobster with brandy cream sauce, gruyère cheese, and herbs',
        image: '/api/placeholder/300/200'
      }, 
    

    {
      id: 6,
      name: 'chicken khuska',
      price: 120,
      category: 'Khuska',
      description: 'Heirloom tomatoes, buffalo mozzarella, fresh basil, balsamic reduction',
      image: '/api/placeholder/300/200'
    },
    {
      id: 7,
      name: 'Natukodi khuska',
      price: 160,
      category: 'Khuska',
      description: 'Lightly fried squid rings with lemon aioli and chili dip',
      image: '/api/placeholder/300/200'
    },
    {
        id: 8,
        name: 'boti khuska',
        price: 120,
        category: 'Khuska',
        description: 'Lightly fried squid rings with lemon aioli and chili dip',
        image: '/api/placeholder/300/200'
      },
      {
        id: 9,
        name: 'mutton khuska',
        price: 190,
        category: 'Khuska',
        description: 'Lightly fried squid rings with lemon aioli and chili dip',
        image: '/api/placeholder/300/200'
      },
      {
        id: 10,
        name: 'talakaya khuska',
        price: 190,
        category: 'Khuska',
        description: 'Lightly fried squid rings with lemon aioli and chili dip',
        image: '/api/placeholder/300/200'
      },

    {
      id: 11,
      name: 'chicken chapathi',
      price: 120,
      category: 'chapathi',
      description: 'Grade A5 Japanese Wagyu with truffle mash and red wine jus',
      image: '/api/placeholder/300/200'
    },
    {
      id: 12,
      name: 'natukodi chapathi',
      price: 170,
      category: 'chapathi',
      description: 'Norwegian salmon with saffron risotto and herb butter sauce',
      image: '/api/placeholder/300/200'
    },
     {
        id: 13,
        name: 'boti chapathi',
        price: 120,
        category: 'chapathi',
        description: 'Norwegian salmon with saffron risotto and herb butter sauce',
        image: '/api/placeholder/300/200'
      },
      {
        id: 14,
        name: 'mutton chapathi',
        price: 190,
        category: 'chapathi',
        description: 'Norwegian salmon with saffron risotto and herb butter sauce',
        image: '/api/placeholder/300/200'
      },
      {
        id: 15,
        name: 'talakaya chapathi',
        price: 190,
        category: 'chapathi',
        description: 'Norwegian salmon with saffron risotto and herb butter sauce',
        image: '/api/placeholder/300/200'
      },
    //   {
    //     id: 16,
    //     name: 'natukodi chapathi',
    //     price: 170,
    //     category: 'chapathi',
    //     description: 'Norwegian salmon with saffron risotto and herb butter sauce',
    //     image: '/api/placeholder/300/200'
    //   },

      
    {
      id: 17,
      name: 'Roti',
      price: 10,
      category: 'additional items',
      description: 'Warm chocolate soufflé with vanilla bean ice cream',
      image: '/api/placeholder/300/200'
    },
    {
      id: 18,
      name: 'Chapathi',
      price: 20,
      category: 'additional items',
      description: 'Classic French custard with caramelized sugar crust and fresh berries',
      image: '/api/placeholder/300/200'
    },
    {
        id: 19,
        name: 'khuska s',
        price: 40,
        category: 'additional items',
        description: 'Classic French custard with caramelized sugar crust and fresh berries',
        image: '/api/placeholder/300/200'
      },
      {
        id: 20,
        name: 'sangati',
        price: 10,
        category: 'additional items',
        description: 'Classic French custard with caramelized sugar crust and fresh berries',
        image: '/api/placeholder/300/200'
      },
      {
        id: 21,
        name: 'egg',
        price: 10,
        category: 'additional items',
        description: 'Classic French custard with caramelized sugar crust and fresh berries',
        image: '/api/placeholder/300/200'
      },
      {
        id: 22,
        name: 'pappu',
        price: 10,
        category: 'additional items',
        description: 'Classic French custard with caramelized sugar crust and fresh berries',
        image: '/api/placeholder/300/200'
      },
      {
        id: 23,
        name: 'sherwa',
        price: 10,
        category: 'additional items',
        description: 'Classic French custard with caramelized sugar crust and fresh berries',
        image: '/api/placeholder/300/200'
      },
    {
      id: 20,
      name: 'chicken',
      price: 80,
      category: 'Curries',
      description: 'House special with premium spirits, fresh citrus, and aromatic bitters',
      image: '/api/placeholder/300/200'
    },
    {
      id: 21,
      name: 'Natukodi',
      price: 130,
      category: 'Curries',
      description: 'Premium vineyard selection, served by the glass',
      image: '/api/placeholder/300/200'
    },
    {
        id: 22,
        name: 'Mutton',
        price: 150,
        category: 'Curries',
        description: 'Premium vineyard selection, served by the glass',
        image: '/api/placeholder/300/200'
      },
      {
        id: 23,
        name: 'talakaya',
        price: 150,
        category: 'Curries',
        description: 'Premium vineyard selection, served by the glass',
        image: '/api/placeholder/300/200'
      },
      {
        id: 24,
        name: 'boti',
        price: 80,
        category: 'Curries',
        description: 'Premium vineyard selection, served by the glass',
        image: '/api/placeholder/300/200'
      }
  ],
  telugu: [
    {
      id: 1,
      name: 'ట్రఫుల్ రిసోటో',
      price: 24.99,
      category: 'ప్రత్యేక వంటకాలు',
      description: 'నల్ల ట్రఫుల్, పార్మెసాన్, మరియు అడవి పుట్టగొడుగులతో క్రీమీ అర్బోరియో రైస్',
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      name: 'లాబ్స్టర్ థెర్మిడోర్',
      price: 36.99,
      category: 'ప్రత్యేక వంటకాలు',
      description: 'బ్రాండీ క్రీమ్ సాస్, గ్రుయేర్ చీజ్, మరియు మూలికలతో బేక్ చేసిన లాబ్స్టర్',
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      name: 'కాప్రీస్ సలాడ్',
      price: 14.99,
      category: 'స్టార్టర్స్',
      description: 'హెయిర్‌లూమ్ టొమాటోలు, బఫెలో మొజారెల్లా, తాజా తులసి, బాల్సామిక్ రిడక్షన్',
      image: '/api/placeholder/300/200'
    },
    {
      id: 4,
      name: 'క్రిస్పీ కాలమారి',
      price: 16.99,
      category: 'స్టార్టర్స్',
      description: 'లేతగా వేయించిన స్క్విడ్ రింగ్స్ నిమ్మ ఐయోలి మరియు మిరపకాయ డిప్‌తో',
      image: '/api/placeholder/300/200'
    },
    {
      id: 5,
      name: 'వాగ్యు బీఫ్ స్టేక్',
      price: 45.99,
      category: 'ప్రధాన వంటకం',
      description: 'ట్రఫుల్ మాష్ మరియు రెడ్ వైన్ జస్‌తో గ్రేడ్ A5 జపనీస్ వాగ్యు',
      image: '/api/placeholder/300/200'
    },
    {
      id: 6,
      name: 'ప్యాన్-సియర్డ్ సాల్మన్',
      price: 28.99,
      category: 'ప్రధాన వంటకం',
      description: 'కేసరి రిసోట్టో మరియు మూలికల వెన్న సాస్‌తో నార్వేజియన్ సాల్మన్',
      image: '/api/placeholder/300/200'
    },
    {
      id: 7,
      name: 'చాక్లెట్ సఫుల్',
      price: 12.99,
      category: 'డెజర్ట్స్',
      description: 'వేడి చాక్లెట్ సఫుల్ వెనిల్లా బీన్ ఐస్ క్రీమ్‌తో',
      image: '/api/placeholder/300/200'
    },
    {
      id: 8,
      name: 'క్రేమ్ బ్రూలీ',
      price: 10.99,
      category: 'డెజర్ట్స్',
      description: 'కారమైన చక్కెర ఉపరితలం మరియు తాజా బెర్రీలతో క్లాసిక్ ఫ్రెంచ్ కస్టర్డ్',
      image: '/api/placeholder/300/200'
    },
    {
      id: 9,
      name: 'సిగ్నేచర్ కాక్‌టెయిల్',
      price: 14.99,
      category: 'పానీయాలు',
      description: 'ప్రీమియం స్పిరిట్స్, తాజా సిట్రస్, మరియు సువాసన బిట్టర్స్‌తో హౌస్ స్పెషల్',
      image: '/api/placeholder/300/200'
    },
    {
      id: 10,
      name: 'వింటేజ్ రెడ్ వైన్',
      price: 18.99,
      category: 'పానీయాలు',
      description: 'ప్రీమియం ద్రాక్షతోటల ఎంపిక, గ్లాసు ద్వారా సర్వ్ చేయబడింది',
      image: '/api/placeholder/300/200'
    }
  ]
};

// Translations for UI elements
const translations = {
  english: {
    restaurantName: 'Subba Reddy Hotel',
    tagline: 'Fine Dining Experience',
    address: '123 Culinary Avenue ',
    guestDetails: 'Guest Details',
    optional: '(Optional)',
    tableNumber: 'Table Number',
    tableNumberPlaceholder: 'Enter table number (optional)',
    guestName: 'Guest Name',
    guestNamePlaceholder: 'Enter guest name (optional)',
    ourMenu: 'Our Menu',
    addToOrder: 'Add to Order',
    addMore: 'Add More',
    remove: 'Remove',
    yourOrder: 'Your Order',
    emptyOrderMessage: 'Your order is empty. Please select items from our menu.',
    item: 'Item',
    price: 'Price',
    quantity: 'Quantity',
    subtotal: 'Subtotal',
    actions: 'Actions',
    orderSummary: 'Order Summary',
    items: 'Items',
    uniqueDishes: 'Unique Dishes',
    tax: 'Tax (8%)',
    serviceCharge: 'Service Charge (15%)',
    total: 'Total',
    generateBill: 'Generate Bill',
    billDetails: 'Bill Details',
    billNumber: 'Bill Number',
    date: 'Date',
    orderItems: 'Order Items',
    amount: 'Amount',
    qty: 'Qty',
    thankYouMessage: 'Thank you for dining with us!',
    hopeToServeAgain: 'We hope to serve you again soon.',
    backToOrder: 'Back to Order',
    newOrder: 'New Order',
    allRightsReserved: 'All rights reserved.',
    inOrder: 'in order',
    selectItemsAlert: 'Please select at least one item to generate a bill.'
  },
  telugu: {
    restaurantName: 'subba reddy hotel',
    tagline: 'ఫైన్ డైనింగ్ అనుభవం',
    address: '123 కల్చరీ అవెన్యూ | టెల్: (123) 456-7890',
    guestDetails: 'అతిథి వివరాలు',
    optional: '(ఐచ్ఛికం)',
    tableNumber: 'టేబుల్ నంబర్',
    tableNumberPlaceholder: 'టేబుల్ నంబర్‌ను నమోదు చేయండి (ఐచ్ఛికం)',
    guestName: 'అతిథి పేరు',
    guestNamePlaceholder: 'అతిథి పేరును నమోదు చేయండి (ఐచ్ఛికం)',
    ourMenu: 'మా మెను',
    addToOrder: 'ఆర్డర్‌కి జోడించండి',
    addMore: 'మరిన్ని జోడించండి',
    remove: 'తొలగించండి',
    yourOrder: 'మీ ఆర్డర్',
    emptyOrderMessage: 'మీ ఆర్డర్ ఖాళీగా ఉంది. దయచేసి మా మెను నుండి అంశాలను ఎంచుకోండి.',
    item: 'అంశం',
    price: 'ధర',
    quantity: 'పరిమాణం',
    subtotal: 'సబ్‌టోటల్',
    actions: 'చర్యలు',
    orderSummary: 'ఆర్డర్ సారాంశం',
    items: 'అంశాలు',
    uniqueDishes: 'ప్రత్యేక వంటకాలు',
    tax: 'పన్ను (8%)',
    serviceCharge: 'సర్వీస్ ఛార్జీ (15%)',
    total: 'మొత్తం',
    generateBill: 'బిల్లును సృష్టించండి',
    billDetails: 'బిల్లు వివరాలు',
    billNumber: 'బిల్లు నంబర్',
    date: 'తేదీ',
    orderItems: 'ఆర్డర్ అంశాలు',
    amount: 'మొత్తం',
    qty: 'సంఖ్య',
    thankYouMessage: 'మాతో భోజనం చేసినందుకు ధన్యవాదాలు!',
    hopeToServeAgain: 'త్వరలో మళ్ళీ మిమ్మల్ని సేవించాలని ఆశిస్తున్నాము.',
    backToOrder: 'ఆర్డర్‌కి తిరిగి వెళ్ళండి',
    newOrder: 'కొత్త ఆర్డర్',
    allRightsReserved: 'అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.',
    inOrder: 'ఆర్డర్‌లో',
    selectItemsAlert: 'దయచేసి బిల్లును సృష్టించడానికి కనీసం ఒక అంశాన్ని ఎంచుకోండి.'
  }
};

export default function RestaurantBillingSystem() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [tableNumber, setTableNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [showBill, setShowBill] = useState(false);
  const [itemsInCart, setItemsInCart] = useState({});
  const [language, setLanguage] = useState('english');
  
  // Get the current menu items and translations based on selected language
  const menuItems = menuItemsData[language];
  const text = translations[language];
  
  // Group menu items by category
  const menuCategories = [...new Set(menuItems.map(item => item.category))];
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);

  const addToOrder = (item) => {
    // Update the items in cart state for button color change
    setItemsInCart(prev => ({
      ...prev,
      [item.id]: true
    }));
    
    const existingItem = selectedItems.find(i => i.id === item.id);
    if (existingItem) {
      setSelectedItems(selectedItems.map(i => 
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      ));
    } else {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromOrder = (itemId) => {
    setSelectedItems(selectedItems.filter(i => i.id !== itemId));
    setItemsInCart(prev => ({
      ...prev,
      [itemId]: false
    }));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      setSelectedItems(selectedItems.filter(i => i.id !== itemId));
      // Update the items in cart state when item is removed
      setItemsInCart(prev => ({
        ...prev,
        [itemId]: false
      }));
    } else {
      setSelectedItems(selectedItems.map(i => 
        i.id === itemId ? { ...i, quantity: newQuantity } : i
      ));
    }
  };

  const calculateSubtotal = () => {
    return selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.08; // 8% tax
  };

  const calculateServiceCharge = () => {
    return calculateSubtotal() * 0.15; // 15% service charge
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax() + calculateServiceCharge();
  };

  const handleGenerateBill = () => {
    if (selectedItems.length === 0) {
      alert(text.selectItemsAlert);
      return;
    }
    setShowBill(true);
  };

  const handleNewOrder = () => {
    setSelectedItems([]);
    setTableNumber('');
    setCustomerName('');
    setShowBill(false);
    setItemsInCart({});
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'english' ? 'telugu' : 'english';
    setLanguage(newLanguage);
    
    // Reset active category to first category in new language
    const newCategories = [...new Set(menuItemsData[newLanguage].map(item => item.category))];
    setActiveCategory(newCategories[0]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <header className="bg-gradient-to-r from-amber-600 to-red-700 text-white p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold italic">{text.restaurantName}</h1>
            <p className="font-light">{text.tagline}</p>
          </div>
          <div>
            <button 
              onClick={toggleLanguage}
              className="bg-white text-amber-800 px-4 py-2 rounded-lg hover:bg-amber-100 transition shadow-md"
            >
              {language === 'english' ? 'తెలుగు' : 'English'}
            </button>
          </div>
        </div>
      </header>

      {!showBill ? (
        <div className="container mx-auto p-4">
          {/* Optional Customer Info Section */}
          <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-xl mb-8 backdrop-blur-sm border border-amber-200">
            <h2 className="text-2xl font-semibold mb-4 text-amber-800">{text.guestDetails} <span className="text-sm font-normal text-amber-600">{text.optional}</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-amber-700 mb-2 font-medium">{text.tableNumber}</label>
                <input 
                  type="text" 
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  className="w-full p-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                  placeholder={text.tableNumberPlaceholder}
                />
              </div>
              <div>
                <label className="block text-amber-700 mb-2 font-medium">{text.guestName}</label>
                <input 
                  type="text" 
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full p-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                  placeholder={text.guestNamePlaceholder}
                />
              </div>
            </div>
          </div>

          {/* Menu Section */}
          <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-xl mb-8 backdrop-blur-sm border border-amber-200">
            <h2 className="text-2xl font-semibold mb-6 text-amber-800">{text.ourMenu}</h2>
            
            {/* Category tabs */}
            <div className="flex overflow-x-auto mb-8 pb-2 gap-2">
              {menuCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-3 rounded-full font-medium whitespace-nowrap transition-all ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-amber-500 to-red-600 text-white shadow-md transform scale-105'
                      : 'bg-amber-100 hover:bg-amber-200 text-amber-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Menu items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems
                .filter(item => item.category === activeCategory)
                .map(item => (
                  <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-amber-100 hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
                    <div className="relative">
                      <img src={item.image} alt={item.name} className="w-full h-56 object-cover" />
                      <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 rounded-bl-lg font-medium">
                        RS {item.price.toFixed(2)}
                      </div>
                      {selectedItems.find(i => i.id === item.id) && (
                        <div className="absolute bottom-0 left-0 right-0 bg-green-500 bg-opacity-90 text-white px-3 py-1 font-medium text-center">
                          {selectedItems.find(i => i.id === item.id).quantity} {text.inOrder}
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-xl text-amber-900 mb-2">{item.name}</h3>
                      {/* <p className="text-amber-700 text-sm mb-4">{item.description}</p> */}
                      
                      <div className="flex gap-2">
                        <button
                          onClick={() => addToOrder(item)}
                          className={`flex-1 py-2 rounded-lg shadow-md transition transform active:scale-95 ${
                            itemsInCart[item.id] 
                              ? 'bg-green-600 hover:bg-green-700 text-white' 
                              : 'bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white'
                          }`}
                        >
                          {itemsInCart[item.id] ? text.addMore : text.addToOrder}
                        </button>
                        
                        {itemsInCart[item.id] && (
                          <button
                            onClick={() => removeFromOrder(item.id)}
                            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition transform active:scale-95"
                          >
                            {text.remove}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Order summary */}
          <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-xl mb-8 backdrop-blur-sm border border-amber-200">
            <h2 className="text-2xl font-semibold mb-4 text-amber-800">{text.yourOrder}</h2>
            
            {selectedItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-amber-700 text-lg">{text.emptyOrderMessage}</p>
              </div>
            ) : (
              <>
                <div className="overflow-x-auto rounded-lg border border-amber-200 mb-6">
                  <table className="w-full table-auto">
                    <thead>
                      <tr className="bg-gradient-to-r from-amber-100 to-amber-200">
                        <th className="text-left p-3 text-amber-800">{text.item}</th>
                        <th className="text-center p-3 text-amber-800">{text.price}</th>
                        <th className="text-center p-3 text-amber-800">{text.quantity}</th>
                        <th className="text-right p-3 text-amber-800">{text.subtotal}</th>
                        <th className="text-center p-3 text-amber-800">{text.actions}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedItems.map(item => (
                        <tr key={item.id} className="border-b border-amber-100 hover:bg-amber-50">
                          <td className="p-3 font-medium text-amber-900">{item.name}</td>
                          <td className="text-center p-3 text-amber-700">RS {item.price.toFixed(2)}</td>
                          <td className="text-center p-3">
                            <div className="flex items-center justify-center space-x-2">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                                className="bg-amber-100 text-amber-800 w-8 h-8 rounded-full hover:bg-amber-200 font-bold"
                              >
                                -
                              </button>
                              <span className="text-amber-800 font-medium w-8 text-center">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                                className="bg-amber-100 text-amber-800 w-8 h-8 rounded-full hover:bg-amber-200 font-bold"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="text-right p-3 font-medium text-amber-900">RS {(item.price * item.quantity).toFixed(2)}</td>
                          <td className="text-center p-3">
                            <button
                              onClick={() => removeFromOrder(item.id)}
                              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 text-sm transition"
                            >
                              {text.remove}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium text-amber-800 mb-2">{text.orderSummary}</h3>
                      <p className="text-amber-700">{text.items}: {selectedItems.reduce((sum, item) => sum + item.quantity, 0)}</p>
                      {/* <p className="text-amber-700">{text.uniqueDishes}: {selectedItems.length}</p> */}
                    </div>
                    <div className="text-right">
                      {/* <p className="text-amber-700">{text.subtotal}: <span className="font-medium">RS {calculateSubtotal().toFixed(2)}</span></p> */}
                      {/* <p className="text-amber-700">{text.tax}: <span className="font-medium">RS {calculateTax().toFixed(2)}</span></p>
                      <p className="text-amber-700">{text.serviceCharge}: <span className="font-medium">RS {calculateServiceCharge().toFixed(2)}</span></p> */}
                      <p className="text-xl font-bold text-amber-900 mt-2">{text.total}: RS {calculateSubtotal().toFixed(2)}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <button
                    onClick={handleGenerateBill}
                    className="bg-gradient-to-r from-amber-500 to-red-600 text-white px-8 py-3 rounded-lg hover:from-amber-600 hover:to-red-700 font-semibold shadow-lg transition transform hover:scale-105 active:scale-100"
                  >
                    {text.generateBill}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="container mx-auto p-4 py-8">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-2xl border border-amber-200">
            <div className="border-b-2 border-amber-300 pb-6 mb-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-amber-800 italic">{text.restaurantName}</h2>
                <p className="text-amber-700">{text.tagline}</p>
                <p className="text-amber-600 mt-2">{text.address}</p>
              </div>
            </div>

            <div className="border-b border-amber-200 pb-4 mb-6">
              <h3 className="text-xl font-semibold text-amber-800 mb-3">{text.billDetails}</h3>
               <div className="grid grid-cols-2 gap-y-2">
                 <p className="text-amber-700"><span className="font-medium">{text.billNumber}:</span> #{Math.floor(Math.random() * 10000)}</p>
                 <p className="text-amber-700"><span className="font-medium">{text.date}:</span> {new Date().toLocaleDateString()}</p>
                 {tableNumber && <p className="text-amber-700"><span className="font-medium">{text.tableNumber}:</span> {tableNumber}</p>}
                 {customerName && <p className="text-amber-700"><span className="font-medium">{text.guestName}:</span> {customerName}</p>}
               </div>
             </div>
          

              <div className="mb-6">
               <h3 className="text-xl font-semibold text-amber-800 mb-3">Order Items</h3>
               <table className="w-full">
                 <thead>
                    <tr className="border-b-2 border-amber-200">
                      <th className="text-left py-2 text-amber-700">Item</th>
                      <th className="text-center py-2 text-amber-700">Price</th>
                      <th className="text-center py-2 text-amber-700">Qty</th>
                     <th className="text-right py-2 text-amber-700">Amount</th>
                    </tr>
                 </thead>
                 <tbody>
                    {selectedItems.map(item => (

                    <tr key={item.id} className="border-b border-amber-100">
                      <td className="py-3 text-amber-800 font-medium">{item.name}</td>
                      <td className="text-center py-3 text-amber-700">RS {item.price.toFixed(2)}</td>
                      <td className="text-center py-3 text-amber-700">{item.quantity}</td>
                      <td className="text-right py-3 text-amber-700">RS {(item.price * item.quantity).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-t-2 border-amber-300 pt-4 mb-6">
              <div className="flex justify-between py-1">
                <span className="text-amber-700">Subtotal:</span>
                {/* <span className="text-amber-800 font-medium">RS {calculateSubtotal().toFixed(2)}</span> */}
              </div>
              {/* <div className="flex justify-between py-1">
                <span className="text-amber-700">Tax (8%):</span>
                <span className="text-amber-800 font-medium">${calculateTax().toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-amber-700">Service Charge (15%):</span>
                <span className="text-amber-800 font-medium">${calculateServiceCharge().toFixed(2)}</span>
              </div> */}
              <div className="flex justify-between mt-3 pt-3 border-t border-amber-200">
                <span className="font-bold text-xl text-amber-900">Total:</span>
                <span className="font-bold text-xl text-amber-900">RS {calculateSubtotal().toFixed(2)}</span>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="mb-6 text-amber-600 italic">Thank you for dining with us!</p>
              <p className="text-amber-500 mb-6">We hope to serve you again soon.</p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setShowBill(false)}
                  className="bg-amber-100 text-amber-800 px-6 py-3 rounded-lg hover:bg-amber-200 font-semibold shadow-md transition"
                >
                  Back to Order
                </button>
                <button
                  onClick={handleNewOrder}
                  className="bg-gradient-to-r from-amber-500 to-red-600 text-white px-6 py-3 rounded-lg hover:from-amber-600 hover:to-red-700 font-semibold shadow-md transition"
                >
                  New Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-amber-900 text-amber-100 p-4 mt-12 text-center">
        <p>© {new Date().getFullYear()} subba reddy hotel. All rights reserved.</p>
      </footer>
    </div>
  );
}

