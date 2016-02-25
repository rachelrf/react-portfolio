const projectsData = {
  data: [
            {
                url: 'MatchMe',
                desktop_image: require('../assets/img/MatchMeDesktop.png'),
                mobile_image: 'http://images.rachelrosefigura.com/portfolio/MatchMeMobileCropped.jpg',
                title: 'MatchMe',
                date: '2016',
                github_url: 'https://github.com/rachelrf/matchme',
                project_url: 'matchme1.herokuapp.com',
                background: 'Tinder-style matchmaking and dating application. Matchmaking is crowdsourced, and users earn points for successful matches. Other features include a multiplayer version using websockets and match recommendations based on image analysis of previously liked matches.',
                role: 'Product Owner. I used React and Redux on the front end to modularize feature development and provide predictable data flow. I built out the feature-rich image handling in the app. Users can upload photos via a dropzone or take photos using the device camera and save pictures in an album. I also implemented a matching algorithm based on facial image analysis of the matches a user likes.',
                tech_stack: 'ES6, React, Redux, Socket.IO, PostgreSQL, Node, Express, Bootstrap'
            },
            {
                url: 'FriendDB',
                desktop_image: 'http://images.rachelrosefigura.com/portfolio/firendDBcollagebig.jpg',
                mobile_image: 'http://images.rachelrosefigura.com/portfolio/FriendDB3.jpg',
                title: 'FriendDB',
                date: '2016',
                github_url: 'https://github.com/rachelrf/friendDB',
                project_url: 'https://github.com/rachelrf/friendDB',
                background: 'A mobile-optimized platform for keeping up with friends. Users can input information about their friends, and access a wealth of individualized information including an aggregated social media feed, local weather and news, life events, and gift suggestions.',
                role: 'I built the social media aggregator, which combined the Twitter and Tumblr APIs plus a server-side web scraper for Instagram content. I also created a scheduled event reminder system with SMS notifications via Twilio. The user interface is clean, mobile-optimized, and interactive. Each individual social media post, news article, and gift recommendation is clickable, allowing in-app browsing.',
                tech_stack: 'Javascript, PostgreSQL, Ionic, Angular, Node, Express'
            },
            {
                url: 'Whereabouts',
                desktop_image: 'http://ochumanesociety.com/clients/3697/images/kittens.jpg',
                mobile_image: 'http://images.rachelrosefigura.com/portfolio/whereaboutsMobile.jpg',
                title: 'Whereabouts',
                date: '2016',
                github_url: 'https://github.com/rachelrf/whereabouts',
                project_url: 'https://github.com/rachelrf/whereabouts',
                background: 'Location-based social media app for posting events. Events can be posted either publically, or just to friends. Users can see a map of events close to them, and can filter events based on whether they were posted by friends or publicly.',
                role: 'Team Lead. I designed and implemented a data layer backed by MongoDB for efficient data storage and service. I also implemented TDD with Mocha/Chai for rapid and robust product iteration. In addition, I integrated Facebook OAuth and built internal functionality for adding, removing, and displaying friends.',
                tech_stack: 'Javascript, Angular, Node, Express, MongoDB, Bootstrap'
            },
            {
                url: 'CliqueBait',
                desktop_image: 'http://images.rachelrosefigura.com/portfolio/CliqueBaitDesktop.jpg',
                mobile_image: 'https://s3-us-west-2.amazonaws.com/images.rachelrosefigura.com/portfolio/CliqueBaitMobilePic.jpg',
                title: 'CliqueBait',
                date: '2015',
                github_url: 'https://github.com/rachelrf/cliquebait-news',
                project_url: 'http://cliquebait.rachelrosefigura.com/#/',
                background: 'News aggregation website which serves content based on user interests. Users can input different topics and see an aggregation of articles from different news sources. Users can also access recently searched (trending) and most popular topics.',
                role: 'Sole Developer. I used the Bing news API to serve up articles for one topic from a variety of sources. I also scraped images directly from the articles, and if the articles didn\'t have images used the Bing Image API to get a topic-appropriate image. In addition, I implemented data caching with MongoDB to reduce API calls for fast article and image serving.',
                tech_stack: 'Javascript, Node, Express, Angular, MongoDB'
            },
            {
                url: 'SlotMachine',
                desktop_image: 'http://images.rachelrosefigura.com/portfolio/SlotMachineDesktopPic.jpg',
                mobile_image: 'https://s3-us-west-2.amazonaws.com/images.rachelrosefigura.com/portfolio/SlotMachineMobilePic.jpg',
                title: 'Slot Machine',
                date: '2015',
                github_url: 'https://github.com/rachelrf/slotmachine',
                project_url: 'http://slotmachine.rachelrf.com/',
                background: 'Web application that displays user\'s chance of pregnancy based on birth control methods and other factors. Users get personalized information on the effectiveness of each form of birth control and how effective forms of birth control are when combined.',
                role: 'Sole Developer. I implemented an algorithm that calculated the chance of pregnancy for different forms of birth control based on published failure rate statistics. I then designed a dynamic visualization with Meteor that allows users to get clear information on the effectiveness of different birth control combinations.',
                tech_stack: 'Javascript, Meteor, HTML, CSS'
            }
        ]
};

export { projectsData };
