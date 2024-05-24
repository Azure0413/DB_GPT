import React, { useState } from 'react';
import Navbar from './Navbar.js';
import Sidebars from './Sidebar.js';
import ermImage from '../imgs/erm.png'; // 导入 erm 图片
import '../style/chatbot.css';
import logo from '../imgs/logo.png';
import arrow from '../imgs/arrow.png';

const Erm = () => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [showGenerating, setShowGenerating] = useState(false); // 修改初始值为 false
    const [fileUploaded, setFileUploaded] = useState(false);
    const fileInputRef = React.createRef();

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (message.trim()) {
            // 在此处理发送消息的逻辑...
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        
        if (file && file.type === 'image/png') {
            setFileUploaded(true);
            setShowGenerating(true); // 上传文件后显示 "generating..."
            setTimeout(() => {
                setShowGenerating(false); // 三秒后隐藏 "generating..."
            }, 3000);
        }
    };

    return (
        <div className="d-flex">
            <Sidebars />
            <div className="flex-grow-1 d-flex flex-column">
                <div className="d-flex justify-content-end">
                    <Navbar />
                </div>
                <div className="d-flex flex-column justify-content-center" style={{ position: "fixed", left: "450px", top: "50px", width: '100%' }}>
                    <h3 style={{ paddingBottom: "20px", fontWeight: "bold", paddingLeft: "60px" }}>GenDB- AI Database Chatbot</h3>
                    {!showGenerating &&<div className="chatbot-logo-text d-flex align-items-center w" style={{ marginBottom: "20px", paddingLeft: "60px",position:"absolute",left:"0",top:"80px"}}>
                        <img src={logo} alt="GenDB Logo" style={{ width: "50px" }} className="chatbot-logo" />
                        <span style={{ marginLeft: "10px", fontWeight: "bold" }}>How may I help you?</span>
                        </div>}
                    {showGenerating &&<div className="chatbot-logo-text d-flex align-items-center w" style={{ marginBottom: "20px", paddingLeft: "60px",position:"absolute",left:"0",top:"80px"}}>
                        <img src={logo} alt="GenDB Logo" style={{ width: "50px" }} className="chatbot-logo" />
                        <span style={{ marginLeft: "10px", fontWeight: "bold" }}>This is your ER Diagram！</span>
                        </div>}
                    <div className="chat-windows" style={{ width: "65%", height: "500px", overflowY: "hidden", border: "1px solid #ccc", position: "absolute", left: "-30px", top: "60px", padding: "10px", border: "none", marginBottom: "20px" }}>
                    
                        <div className="chatbot-logo-text d-flex align-items-center w" style={{ marginBottom: "20px", paddingLeft: "60px", textAlign: "left" }}>
                        {showGenerating &&<img src={logo} alt="GenDB Logo" style={{ width: "50px",position:"absolute",left:"900px",top:"200px"}} className="chatbot-logo" />}
                            {showGenerating && <span style={{ marginLeft: "10px", fontWeight: "bold",position:"absolute",left:"950px",top:"207px" }}>generating...</span>}
                        </div>
                        {fileUploaded && !showGenerating && (
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <img src={ermImage} alt="Erm" style={{ width: "600px", position:"absolute",left:"250px"}} />
                            </div>
                        )}
                    </div>
                    <div className="input-group" style={{ borderRadius: "20px", position: "fixed", bottom: "40px", left: "500px", width: "55%" }}>
                        <input
                            type="file"
                            accept="image/png"
                            onChange={handleFileUpload}
                            style={{ backgroundColor:"#F0F4F6" }}
                            ref={fileInputRef}
                        />
                        <button className="btn btn-primary" onClick={() => fileInputRef.current.click()} style={{ backgroundColor: "#F0F4F6", border: "none" }}>
                            Upload File
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Erm;
