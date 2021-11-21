import React, { useEffect, useState } from "react";

import rsstojson from "../apis/rsstojson";

const List = ({ selected }) => {
    const [error, setError] = useState(false);
    const [feed, setFeed] = useState(null);
    const [items, setItems] = useState(null);

    const showError = () => {
        return (
            <div
                className="ui error message"
                style={{ maxWidth: "75%", marginTop: "10px" }}
            >
                <i className="close icon"></i>
                <div className="header">
                    There were some errors with your Search
                </div>
                <ul className="list">
                    <li>Please check your internet connection</li>
                </ul>
            </div>
        );
    };

    const getFeed = async () => {
        try {
            const { data } = await rsstojson(selected.link);
            return data;
        } catch (e) {
            setError(true);
            return { status: "error", feed: [], items: [] };
        }
    };

    // const renderHeader = (feed) => {
    //     if (feed) {
    //         return (
    //             <div
    //                 style={{
    //                     border: "1px dotted black",
    //                     margin: "10px 10px 15px 0px",
    //                     padding: "10px",
    //                     boxShadow: "0px 0px 8px 5px #ececec",
    //                     maxWidth: "75%",
    //                 }}
    //             >
    //                 <img
    //                     src={feed?.image}
    //                     alt="Feed Image"
    //                     style={{
    //                         height: "100px",
    //                         width: "100px",
    //                     }}
    //                 />
    //                 <h1 dangerouslySetInnerHTML={{ __html: feed?.title }}></h1>
    //                 <a href={feed?.link} target="_blank" rel="noreferrer">
    //                     [visit link]
    //                 </a>
    //                 <p style={{ fontSize: "1.3em", marginBottom: "5px" }}>
    //                     Author: {feed?.author}
    //                 </p>
    //                 <p
    //                     style={{
    //                         fontFamily: "Lato, serif, sans-serif",
    //                         fontSize: "14px",
    //                     }}
    //                 >
    //                     {feed?.description}
    //                 </p>
    //             </div>
    //         );
    //     }
    // };

    const renderHeader = (feed) => {
        const rssIcon =
            "https://cdn.pixabay.com/photo/2017/06/25/14/38/rss-2440955_960_720.png";

        return (
            <div className="ui items">
                <div
                    className="item"
                    style={{
                        margin: "10px 10px 15px 0px",
                        maxWidth: "75%",
                    }}
                >
                    <div className="image">
                        <img src={feed.image || rssIcon} alt="Feed" />
                    </div>
                    <div className="content">
                        <h1
                            dangerouslySetInnerHTML={{
                                __html: feed?.title,
                            }}
                        ></h1>
                        <a href={feed.link} target="_blank" rel="noreferrer">
                            [visit Link]
                        </a>
                        <div className="meta">
                            <span>Description</span>
                        </div>
                        <div className="description">
                            <p>{feed.description}</p>
                        </div>
                        <div className="extra">Author: {feed.author}</div>
                    </div>
                </div>
            </div>
        );
    };

    const renderContent = (items) => {
        const renderList = items.map((item, index) => {
            return (
                <div className="ui segment" key={index}>
                    <h3 className="ui header">{item.title}</h3>
                    <div
                        style={{
                            marginBottom: "8px",
                            borderTop: "1px dotted grey",
                            borderBottom: "1px dotted gray",
                            padding: "4px 0px",
                        }}
                    >
                        <span className="ui price">
                            published date: {item.pubDate}
                        </span>
                        <a href={item.link} style={{ float: "right" }}>
                            [visit link]
                        </a>
                    </div>
                    <div className="description">
                        <p
                            dangerouslySetInnerHTML={{
                                __html: item.description,
                            }}
                        ></p>
                    </div>
                </div>
            );
        });

        return (
            <div className="ui raised segments" style={{ maxWidth: "75%" }}>
                {renderList}
            </div>
        );
    };

    const renderFeed = () => {
        getFeed().then((allFeed) => {
            const { status, feed, items } = allFeed;

            if (status === "ok") {
                setFeed(feed);
                setItems(items);
            }
        });
    };

    const displayMessage = () => {
        return (
            <div
                className="ui info message"
                style={{ marginTop: "10px", maxWidth: "75%" }}
            >
                <div className="header">Please select a RSS feed to view.</div>
                <ul className="list">
                    <li>You can Add a new feed through the form</li>
                    <li>You can delete the feed from the list</li>
                    <li>The Feed for a site will be updated every hour</li>
                </ul>
            </div>
        );
    };

    useEffect(() => {
        let interval;

        if (selected) {
            renderFeed();

            interval = setInterval(() => {
                renderFeed();
            }, 60 * 60 * 1000);
        }

        return () => {
            setError(false);
            setFeed(null);
            setItems(null);
            clearInterval(interval);
        };
    }, [selected]);

    return (
        <div>
            {feed ? renderHeader(feed) : ""}
            {items ? renderContent(items) : ""}

            {error === true ? showError() : ""}
            {!selected ? displayMessage() : ""}
        </div>
    );
};

export default List;
