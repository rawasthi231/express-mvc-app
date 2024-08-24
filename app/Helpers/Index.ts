class Helpers {
  static getView(title: string, html: string): string {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title}</title>
        </head>
        <body>
          <div id="root">${html}</div>
          <script src="/js/bundle.js"></script>
        </body>
      </html>
    `;
  }
}

export default Helpers;
