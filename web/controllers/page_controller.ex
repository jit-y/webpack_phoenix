defmodule WebpackPhoenix.PageController do
  use WebpackPhoenix.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
