import React from 'react'
import Helmet from 'react-helmet'

export const AllCss = () => {
    return (
        <div>
            <Helmet>
                <link rel="apple-touch-icon" sizes="180x180" href="./assets/images/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="./assets/images/favicon/favicon-16x16.png" />
                <link rel="mask-icon" href="./assets/images/favicon/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff"></meta>
                <link rel="stylesheet" href="./assets/css/libs.bundle.css" />
                <link rel="stylesheet" href="./assets/css/theme.bundle.css" />
                <script src="./assets/js/vendor.bundle.js"></script>
                <script src="./assets/js/theme.bundle.js"></script>
                
            </Helmet>
        </div>
    )
}
