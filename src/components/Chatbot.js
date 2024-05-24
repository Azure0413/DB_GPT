import React, { useState,useEffect } from 'react';
import Navbar from './Navbar.js';
import Sidebars from './Sidebars.js';
import '../style/chatbot.css';
import logo from '../imgs/logo.png';
import arrow from '../imgs/arrow.png';


const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [showGenerating, setShowGenerating] = useState(true);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      if (chatHistory.length === 0) {
        // 第一條訊息
        setChatHistory([
          { user: 'You', text: message },
          { user: 'Bot', text: "Here are the explanations you asked for: \n\n**Customer Data**\n\n* Customer ID: Unique identifier assigned to each customer.\n* Name: Full name of the customer.\n* Contact Phone: Phone number used by the customer for communication.\n* Email: Email address used by the customer.\n\n**Product Data**\n\n* Product ID: Unique identifier assigned to each product.\n* Product Name: Description or title of the product.\n* Price: Current price of the product.\n* Stock Quantity: Number of products in stock.\n\n**Order Data**\n\n* Order ID: Unique identifier assigned to each order.\n* Customer ID: Reference to the customer who made the order.\n* Order Date: Date when the order was placed.\n* Total Amount: Total cost of all items ordered.\n\n**Employee Data**\n\n* Employee ID: Unique identifier assigned to each employee.\n* Name: Full name of the employee.\n* Position: Job title or role held by the employee.\n* Department: Team or division that the employee belongs to.\n\n**Supplier Data**\n\n* Supplier ID: Unique identifier assigned to each supplier.\n* Supplier Name: Company name or individual who supplies goods/services.\n* Contact Phone: Phone number used by the supplier for communication.\n* Email: Email address used by the supplier.\n\n**Financial Data**\n\n* Transaction ID: Unique identifier assigned to each financial transaction.\n* Transaction Date: Date when the financial transaction took place.\n* Transaction Amount: Dollar value of the financial transaction.\n* Transaction Type: Category or type of financial transaction (e.g. sale, payment, refund).\n\nPlease check if there's any misunderstanding." }
        ]);
      } else if (chatHistory.length === 1) {
        // 第二條訊息
        setChatHistory([
          ...chatHistory,
          { user: 'You', text: message },
          { user: 'Bot', text: "To insert data into your database, you can use the `INSERT INTO` statement followed by the name of the table and the values to be inserted.\n\nHere's an example for the given data:\n\n```sql\n\nINSERT INTO Customers (Name, ContactPhone, Email)\n\nVALUES ('Company A', '09 12345678', '12345678@gmail.com');\n\n\nINSERT INTO Transactions (TransactionDate, TransactionAmount, TransactionType)\n\nVALUES ('2020-05-20', 50000.00, 'sale');\n\n```\n\nHowever, since the order information is also related to the customer and the transaction, you would need to insert that data as well:\n\n```sql\n\nINSERT INTO Orders (CustomerID, OrderDate, TotalAmount)\n\nVALUES ((SELECT CustomerID FROM Customers WHERE Email = '12345678@gmail.com'), '2020-05-20', 50000.00);\n\n\nINSERT INTO Transactions (TransactionDate, TransactionAmount, TransactionType)\n\nVALUES ('2020-05-20', 50000.00, 'sale');\n\n```\n\nNote that I'm assuming you have a way to uniquely identify the customer and the order in your database, which is why I used `(SELECT CustomerID FROM Customers WHERE Email = '12345678@gmail.com')` for the `CustomerID` value in the `Orders` table.\n\nAlso, make sure to adjust the date format according to your specific database setup. In this example, I'm assuming a standard ISO 8601 date format of 'YYYY-MM-DD'." }
        ]);
      } else {
        // 其他訊息
        setChatHistory([...chatHistory, { user: 'You', text: message }, { user: 'Bot', text: "To insert data into your database, you can use the `INSERT INTO` statement followed by the name of the table and the values to be inserted.\n\nHere's an example for the given data:\n\n```sql\n\nINSERT INTO Customers (Name, ContactPhone, Email)\n\nVALUES ('Company A', '09 12345678', '12345678@gmail.com');\n\n\nINSERT INTO Transactions (TransactionDate, TransactionAmount, TransactionType)\n\nVALUES ('2020-05-20', 50000.00, 'sale');\n\n```\n\nHowever, since the order information is also related to the customer and the transaction, you would need to insert that data as well:\n\n```sql\n\nINSERT INTO Orders (CustomerID, OrderDate, TotalAmount)\n\nVALUES ((SELECT CustomerID FROM Customers WHERE Email = '12345678@gmail.com'), '2020-05-20', 50000.00);\n\n\nINSERT INTO Transactions (TransactionDate, TransactionAmount, TransactionType)\n\nVALUES ('2020-05-20', 50000.00, 'sale');\n\n```\n\nNote that I'm assuming you have a way to uniquely identify the customer and the order in your database, which is why I used `(SELECT CustomerID FROM Customers WHERE Email = '12345678@gmail.com')` for the `CustomerID` value in the `Orders` table.\n\nAlso, make sure to adjust the date format according to your specific database setup. In this example, I'm assuming a standard ISO 8601 date format of 'YYYY-MM-DD'." }]);
      }
      setMessage('');
      // 在這裡你可以添加處理 chatbot 回應的邏輯
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (chatHistory.length > 0 && chatHistory[chatHistory.length - 1].user === 'Bot') {
        setShowGenerating(true);
        setTimeout(() => {
            setShowGenerating(false);
        }, 1000); // 控制生成文字前 "generating..." 的显示时间，单位为毫秒
    }
}, [chatHistory]);

  return (
    <div className="d-flex">
      <Sidebars />
      <div className="flex-grow-1 d-flex flex-column">
        <div className="d-flex justify-content-end">
          <Navbar />
        </div>
        <div className="d-flex flex-column justify-content-center" style={{ position: "fixed", left: "450px", top: "50px", width: '100%' }}>
          <h3 style={{ paddingBottom: "20px", fontWeight: "bold", paddingLeft: "60px" }}>GenDB- AI Database Chatbot</h3>
          
          <div className="chat-window" style={{ width: "60%", height: "400px", overflowY: "auto", border: "1px solid #ccc", position:"absolute", left:"-30px", top:"70px" ,padding: "10px", border: "none", marginBottom: "20px" }}>
          <div className="chatbot-logo-text d-flex align-items-center w" style={{ marginBottom: "20px", paddingLeft: "60px", textAlign: "left" }}>
            <img src={logo} alt="GenDB Logo" style={{ width: "50px" }} className="chatbot-logo" />
            <span style={{ marginLeft: "10px", fontWeight: "bold" }}>How may I help you?</span>
            </div>
            {chatHistory.map((msg, index) => (
                <div key={index} className={`message ${msg.user === 'You' ? 'user-message dynamic-background' : 'bot-message'}`} style={{ textAlign: msg.user === 'Bot' ? 'left' : 'right' }}>
                {msg.user === 'Bot' && (
                    <div style={{ display: "flex", alignItems: "flex-start"}}>
                        <img src={logo} alt="Bot Logo" style={{ width: "50px", marginRight: "10px" }} />
                        <span>
                            {showGenerating && 'generating...'}
                            {!showGenerating && msg.text}
                        </span>
                    </div>
                )}
                {msg.user !== 'Bot' && (
                    <div>{msg.text}</div>
                )}
                </div>
            ))}
            </div>
          <div className="input-group" style={{ borderRadius: "20px", position: "fixed", bottom: "40px", left: "500px", width: "55%" }}>
            <input
              type="text"
              className="form-control"
              value={message}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown} // 在這裡添加 onKeyDown 事件處理函數
              placeholder="Your message..."
              style={{ backgroundColor: "#F0F4F6", border: "none" }}
            />
            <button className="btn btn-primary" onClick={handleSendMessage} style={{ backgroundColor: "#F0F4F6", border: "none" }}>
                <img src={arrow} alt="arrow" style={{width:"50%"}} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
