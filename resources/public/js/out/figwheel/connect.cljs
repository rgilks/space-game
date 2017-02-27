(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [space-game.core]))
(figwheel.client/start {:build-id "space-game", :websocket-url "ws://localhost:3449/figwheel-ws"})

