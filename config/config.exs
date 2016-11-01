# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :webpack_phoenix,
  ecto_repos: [WebpackPhoenix.Repo]

# Configures the endpoint
config :webpack_phoenix, WebpackPhoenix.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "C516zykAABrjStXfRW2TjZyeZ15dSLh0A0WPV2qYT2j+AzrAwHrhnXo5oE/TZkMC",
  render_errors: [view: WebpackPhoenix.ErrorView, accepts: ~w(html json)],
  pubsub: [name: WebpackPhoenix.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
