module App {
  var loadingGifs = [
    "/assets/images/projects/loading/loading-downloading.gif",
    "/assets/images/projects/loading/loading-page.gif"
  ];

  class _AjaxLoad {
    $loading: JQuery;
    currentUrl: string;
    constructor() {
      if (!window.history || !window.history.pushState) {
        return;
      }
      this.$loading = $("#loading-indicator");
      this.currentUrl = this._normalizeUrl(window.location.pathname);
      this._bindEvents();
      this._loadLoading();
    }
    private _bindEvents() {
      $(document).on("click", "a", (event) => {
         var url = $(event.currentTarget).attr("href");
         if (url.indexOf("http") < 0) {
            this.getContent(url);
            event.preventDefault();
         }
      });
      $(window).on("popstate", (event) => {
         var url = window.location.pathname;
         var state = (<PopStateEvent>event.originalEvent).state;
         if (state && state.url) {
            url = state.url;
         }
         this.getContent(url);
      });
    }
    private _loadLoading() {
      _.each(loadingGifs, (gif) => {
        $("<img />").attr("src", gif).addClass("inactive").appendTo(this.$loading);
      });
      this.$loading.children().first().removeClass("inactive");
    }
    private _normalizeUrl(url: string): string {
      if (url === "" || url === "/") {
         return "/index.html";
      }
      return url;
    }
    public getContent(url: string) {
      url = this._normalizeUrl(url);
      if (this.currentUrl === url) {
         return;
      }
      $("body").addClass("loading");
      this.currentUrl = url;
      $.ajax({ url: url.replace("html", "json.js"), dataType: "json" })
        .done(function (data) {
          if (!data || !data.content) { window.location.href = url; }
          $("main").html(data.content);
          window.history.pushState({ url: url }, data.title, url);
          document.title = data.title;
        }).fail(function () {
          window.location.href = url;
        }).always(() => {
          $("body").removeClass("loading");
          console.log(Math.floor(Math.random() * loadingGifs.length);
          $("img", this.$loading).eq(Math.floor(Math.random() * loadingGifs.length))
            .removeClass("inactive").siblings().addClass("inactive");
        });
     }
  }

  export var AjaxLoad = new _AjaxLoad();
}
