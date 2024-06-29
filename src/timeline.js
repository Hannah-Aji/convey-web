

import React, { useEffect } from 'react';

const timelineData = [
    {
        date: "13 Dec 2002",
        title: "Travel",
        subtitle: "The unsung island that’s the perfect alternative to Mykonos",
        link: "#"
    },
    {
        date: "25 Jun 2018",
        title: "Politics",
        subtitle: "Toyota Customer Gives Us An Update On The Dealership Tracking Device",
        link: "#"
    },
    {
        date: "05 Jun 2018",
        title: "Economics",
        subtitle: "Princeton SPIA Extends International Focus with New Program on Current Affairs in Europe",
        link: "#"
    }
];

const Timeline = () => {
    useEffect(() => {
        const timeline = document.getElementById('timeline');

        timelineData.forEach(item => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';

            const dateParts = item.date.split(' ');
            const timelineDate = `
                <div class="timeline-date">
                    <div>${dateParts[0]}</div>
                    <div>${dateParts[1]}</div>
                    <div>${dateParts[2]}</div>
                </div>
            `;

            const timelineContent = `
                <div class="timeline-content">
                    <div class="timeline-title">${item.title}</div>
                    <div class="timeline-subtitle">${item.subtitle}</div>
                    <div class="timeline-link"><a href="${item.link}">Read more</a></div>
                </div>
            `;

            timelineItem.innerHTML = timelineDate + timelineContent;
            timeline.appendChild(timelineItem);
        });
    }, []);

    return (
        <div id="timeline" className="timeline"></div>
    );
};

export default Timeline;
