import React from 'react'
import './rightbar.scss'

function Rightbar() {
    return (
        <div className='rightBar'>
            <div className="container">
                <div className="item">
                    <span>Suggestions For You</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <span>Jane Doe</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <span>Jane Doe</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>Latest Activities</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <p>
                                <span>Jane Doe </span>
                                changed their cover picture
                            </p>
                        </div>
                        <span> 1min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <p>
                                <span>Jane Doe </span>
                                changed their cover picture
                            </p>
                        </div>
                        <span> 1min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <p>
                                <span>Jane Doe </span>
                                changed their cover picture
                            </p>
                        </div>
                        <span>1min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <p>
                                <span>Jane Doe </span>
                                changed their cover picture
                            </p>
                        </div>
                        <span> 1min ago</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rightbar
