exports.dashboard = (html, state) => {
  return `
  <!DOCTYPE html />
  <html>
  <head>
      <title> Dashboard </title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
      <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
  </head>
  <body>
  <div id="app">${html}</div>
  </body>
  <script>window.INITIAL_STATE = ${JSON.stringify(state)}</script>
  <script src="/static/client.js"></script>
  <script src="/static/vendors~client.js"></script>
  </html>`;
};
