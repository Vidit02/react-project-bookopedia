import React from 'react'
import Helmet from 'react-helmet'

export const AllCssDash = () => {
    return (
        <div>
            <Helmet>
                <link rel="apple-touch-icon" sizes="76x76" href="../assetdash/img/apple-icon.png" />
                <link rel="icon" type="image/png" href="../assetdash/img/favicon.png" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet" />
                <link href="../assetdash/css/bootstrap.min.css" rel="stylesheet" />
                <link href="../assetdash/css/paper-dashboard.css?v=2.0.1" rel="stylesheet" />
                <link href="../assetdash/demo/demo.css" rel="stylesheet" />
                <script src="../assetdash/js/core/jquery.min.js"></script>
                <script src="../assetdash/js/core/popper.min.js"></script>
                <script src="../assetdash/js/core/bootstrap.min.js"></script>
                <script src="../assetdash/js/plugins/perfect-scrollbar.jquery.min.js"></script>
                <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
                <script src="../assetdash/js/plugins/chartjs.min.js"></script>
                <script src="../assetdash/js/plugins/bootstrap-notify.js"></script>
                <script src="../assetdash/js/paper-dashboard.min.js?v=2.0.1" type="text/javascript"></script>
                <script src="../assetdash/demo/demo.js"></script>
            </Helmet>
        </div>
    )
}
